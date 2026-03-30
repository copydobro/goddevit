"""GTM Audit — post-payment order service.

Flow triggered by confirmed NOWPayments IPN:
  1. Notify founder by email
  2. Create Notion workspace for client
  3. Send onboarding email to client with workspace link
  4. Update lead status → 'workspace_created'
"""
from sqlalchemy.orm import Session
from src.config import settings
from src.integrations.resend import ResendClient
from src.integrations.notion_client import NotionClient
from src.repositories.gtm_lead_repository import GtmLeadRepository
from src.utils.logger import logger


# ---------------------------------------------------------------------------
# Email templates
# ---------------------------------------------------------------------------

def _founder_email(client_email: str, payment_id: str) -> str:
    return f"""
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>New GTM Audit order</title>
<style>
  body {{ font-family: -apple-system, sans-serif; background:#f5f5f5;
         padding:32px 16px; color:#1a1a1a; }}
  .card {{ max-width:480px; margin:0 auto; background:#fff;
           border-radius:8px; padding:32px; border:1px solid #e5e5e5; }}
  h1 {{ font-size:20px; margin:0 0 16px; }}
  p  {{ font-size:14px; line-height:1.6; color:#444; margin:8px 0; }}
  .tag {{ display:inline-block; background:#111; color:#fff;
          padding:4px 10px; border-radius:4px; font-size:12px; }}
</style></head><body>
<div class="card">
  <span class="tag">NEW ORDER</span>
  <h1 style="margin-top:12px;">GTM Audit — $500 paid</h1>
  <p><strong>Client:</strong> {client_email}</p>
  <p><strong>Payment ID:</strong> {payment_id}</p>
  <p><strong>Next step:</strong> Notion workspace created and sent to client.</p>
  <p>They're filling the brief now. Audit clock starts when brief is complete.</p>
</div>
</body></html>
"""


def _client_onboarding_email(client_email: str, workspace_url: str) -> str:
    return f"""
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<title>Your GTM Audit workspace is ready</title>
<style>
  body {{ font-family: -apple-system, sans-serif; background:#f5f5f5;
         padding:32px 16px; color:#1a1a1a; }}
  .card {{ max-width:560px; margin:0 auto; background:#fff;
           border-radius:8px; padding:40px; border:1px solid #e5e5e5; }}
  h1 {{ font-size:22px; margin:0 0 8px; }}
  p  {{ font-size:15px; line-height:1.6; color:#444; margin:12px 0; }}
  .step {{ background:#f9f9f9; border-left:3px solid #111;
           padding:12px 16px; margin:12px 0; font-size:14px; }}
  .cta {{ display:inline-block; margin-top:24px; background:#111; color:#fff;
          text-decoration:none; padding:14px 28px; border-radius:6px;
          font-size:15px; font-weight:600; }}
  .footer {{ margin-top:32px; font-size:12px; color:#999; }}
</style></head><body>
<div class="card">
  <h1>Your GTM Audit workspace is ready.</h1>
  <p>Payment confirmed. Here's your private Notion workspace where the audit will be delivered.</p>

  <div class="step">
    <strong>Step 1</strong> — Open your workspace and fill in the Brief section (6 questions, ~10 min).
  </div>
  <div class="step">
    <strong>Step 2</strong> — The 7-day audit clock starts when your brief is complete.
  </div>
  <div class="step">
    <strong>Step 3</strong> — Documents appear in your workspace as they're completed.
    You can read and act on early deliverables before the full audit is done.
  </div>

  <a class="cta" href="{workspace_url}">Open your workspace →</a>

  <p style="margin-top:24px; font-size:13px; color:#888;">
    Questions? Reply to this email or reach out at influrfounder@gmail.com.<br>
    No calls needed. Everything is async.
  </p>

  <div class="footer">
    Influr Agency · GTM audits for dev/OSS founders<br>
    This email was sent to {client_email}
  </div>
</div>
</body></html>
"""


# ---------------------------------------------------------------------------
# Service
# ---------------------------------------------------------------------------

class OrderService:
    def __init__(self, db: Session):
        self.repo   = GtmLeadRepository(db)
        self.resend = ResendClient()
        self.notion = NotionClient()

    async def handle_payment_confirmed(
        self,
        client_email: str,
        payment_id: str,
    ) -> bool:
        """
        Orchestrate post-payment actions.
        Idempotent: skips if workspace already created.
        """
        if not client_email:
            logger.error("OrderService: empty client_email — cannot process order")
            return False

        lead = self.repo.get_by_email(client_email)
        if not lead:
            # Lead may not exist if payment came without prior email capture
            # Create a minimal lead record
            lead = self.repo.create(email=client_email.lower().strip(), status="paid")
            logger.info(f"Created lead on payment (no prior capture): {client_email}")
        elif lead.status == "workspace_created":
            logger.info(f"Duplicate IPN for {client_email} — workspace already exists, skipping")
            return True

        # Mark as paid immediately (idempotency guard)
        self.repo.update(lead.id, status="paid", payment_provider_id=payment_id)

        founder_email = settings.influr_founder_email

        # Action 1 — Notify founder
        try:
            if founder_email:
                await self.resend.send_email(
                    to=founder_email,
                    subject=f"🔔 New GTM Audit order: {client_email}",
                    html=_founder_email(client_email, payment_id),
                )
        except Exception as e:
            logger.error(f"Failed to send founder notification: {e}")

        # Action 2 — Create Notion workspace
        workspace_url = ""
        try:
            workspace_url = await self.notion.create_client_workspace(
                client_email=client_email,
                score=lead.score,
            )
        except Exception as e:
            logger.error(f"Failed to create Notion workspace for {client_email}: {e}")

        # Action 3 — Email client with workspace link
        try:
            await self.resend.send_email(
                to=client_email,
                subject="Your GTM Audit workspace is ready — fill the brief to start",
                html=_client_onboarding_email(client_email, workspace_url or settings.influr_sales_page_url or ""),
            )
        except Exception as e:
            logger.error(f"Failed to send onboarding email to {client_email}: {e}")

        # Update lead status
        self.repo.update(lead.id, status="workspace_created", notion_workspace_url=workspace_url)
        logger.info(f"Order completed for {client_email} | workspace={workspace_url}")
        return True
