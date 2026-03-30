"""GTM Audit — lead capture service.

Flow:
  1. Scorecard submits email + score + findings
  2. Upsert GtmLead record
  3. Send email with personalised payment link + case study via Resend
"""
import urllib.parse
from sqlalchemy.orm import Session
from src.config import settings
from src.integrations.resend import ResendClient
from src.repositories.gtm_lead_repository import GtmLeadRepository
from src.utils.logger import logger


# ---------------------------------------------------------------------------
# Email template
# ---------------------------------------------------------------------------

def _build_case_study_email(payment_url: str) -> str:
    """HTML email sent after email capture in the scorecard."""
    return f"""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your GTM Audit case study</title>
<style>
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
         background:#f5f5f5; margin:0; padding:32px 16px; color:#1a1a1a; }}
  .card {{ max-width:560px; margin:0 auto; background:#fff;
           border-radius:8px; padding:40px; border:1px solid #e5e5e5; }}
  h1 {{ font-size:22px; margin:0 0 8px; }}
  p  {{ font-size:15px; line-height:1.6; color:#444; margin:12px 0; }}
  .metric {{ background:#f9f9f9; border-left:3px solid #111;
             padding:12px 16px; margin:16px 0; font-size:14px; }}
  .cta {{ display:inline-block; margin-top:24px; background:#111; color:#fff;
          text-decoration:none; padding:14px 28px; border-radius:6px;
          font-size:15px; font-weight:600; letter-spacing:.3px; }}
  .cta:hover {{ background:#333; }}
  .footer {{ margin-top:32px; font-size:12px; color:#999; }}
</style>
</head>
<body>
<div class="card">
  <h1>Here's the real audit — before you buy.</h1>
  <p>
    You just ran your README through the scorecard.
    Here's a real GTM Audit from start to finish — every document,
    every finding, exactly as the client received it.
  </p>

  <p><strong>FnKey case study — 43 stars, 0 predictable channels. We found 13 gaps.</strong></p>

  <div class="metric">
    📉 Show HN unposted → <strong>289 stars/week sitting idle</strong> (20 months of organic growth)
  </div>
  <div class="metric">
    📉 README missing problem statement → <strong>56 stars/month lost in conversion</strong>
  </div>
  <div class="metric">
    📉 No owned channel → <strong>25× cold start penalty</strong> on every next launch
  </div>

  <p>
    The audit found the gaps FnKey's founder didn't know existed.
    The top 3 take under 3 hours to fix.
  </p>

  <p>
    <a href="{settings.influr_sales_page_url}" style="color:#111;">
      → Open the full case study (all 7 documents, free to read)
    </a>
  </p>

  <p style="margin-top:24px;">
    <strong>Ready to see what's blocking your product?</strong><br>
    $500 · 7 documents · 7-day delivery · 5-gap guarantee or full refund.
  </p>

  <a class="cta" href="{payment_url}">Start your audit — $500 →</a>

  <div class="footer">
    Influr Agency · GTM audits for dev/OSS founders<br>
    influrfounder@gmail.com · No calls, fully async.
  </div>
</div>
</body>
</html>
"""


# ---------------------------------------------------------------------------
# Service
# ---------------------------------------------------------------------------

class LeadService:
    def __init__(self, db: Session):
        self.repo   = GtmLeadRepository(db)
        self.resend = ResendClient()

    def _build_payment_url(self, email: str) -> str:
        """Personalised NOWPayments link with order_id = email."""
        base = settings.nowpayments_payment_page_url or "https://nowpayments.io/payment/?iid=4397280030"
        encoded = urllib.parse.quote(email, safe="")
        return f"{base}&order_id={encoded}"

    async def capture(self, email: str, score: int, findings: dict) -> dict:
        """Upsert lead and send case study email."""
        lead = self.repo.upsert(email=email, score=score, findings=findings)
        logger.info(f"Lead captured: {email} | score={score} | status={lead.status}")

        payment_url = self._build_payment_url(email)
        from src.services.posthog_service import posthog_service
        posthog_service.capture(email, "payment_link_generated", {"payment_url": payment_url})

        try:
            await self.resend.send_email(
                to=email,
                subject="FnKey case study — see a real GTM Audit before you buy",
                html=_build_case_study_email(payment_url),
            )
        except Exception as e:
            # Don't fail the request if email send fails — lead is already saved
            logger.error(f"Email send failed for {email}: {e}")

        return {"status": "ok", "lead_id": str(lead.id)}
