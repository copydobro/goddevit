"""GTM Audit API endpoints."""
import base64
import hmac
from datetime import datetime, timezone
from fastapi import APIRouter, Request, Depends, Query
from fastapi.responses import JSONResponse, HTMLResponse
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from src.database import get_db
from src.integrations.nowpayments import NOWPaymentsClient
from src.services.gtm_audit.lead_service import LeadService
from src.services.gtm_audit.order_service import OrderService
from src.utils.logger import logger

router = APIRouter(prefix="/api/gtm", tags=["gtm-audit"])


class CaptureLeadRequest(BaseModel):
    email: EmailStr
    name: str = ""
    archetype: str = ""
    answers: dict = {}


@router.post("/capture-lead")
async def capture_lead(body: CaptureLeadRequest, db: Session = Depends(get_db)):
    """Called by GTM Channel Compass after email gate."""
    try:
        service = LeadService(db)
        result = await service.capture_compass(
            email=str(body.email),
            name=body.name,
            archetype=body.archetype,
            answers=body.answers,
        )
        return JSONResponse(result)
    except Exception as e:
        logger.error(f"capture_lead error: {e}")
        return JSONResponse({"status": "error", "message": str(e)}, status_code=500)


@router.post("/webhooks/nowpayments")
async def nowpayments_webhook(request: Request, db: Session = Depends(get_db)):
    """NOWPayments IPN — set this URL in NOWPayments dashboard."""
    body_bytes = await request.body()
    signature  = request.headers.get("x-nowpayments-sig", "")

    client = NOWPaymentsClient()
    if not client.verify_webhook_signature(body_bytes, signature):
        return JSONResponse({"status": "invalid_signature"}, status_code=400)

    try:
        payload = await request.json()
    except Exception:
        return JSONResponse({"status": "bad_payload"}, status_code=400)

    logger.info(f"IPN: status={payload.get('payment_status')} order={payload.get('order_id')}")

    if client.is_payment_confirmed(payload):
        try:
            order_service = OrderService(db)
            await order_service.handle_payment_confirmed(
                client_email=client.extract_order_id(payload),
                payment_id=client.extract_payment_id(payload),
            )
        except Exception as e:
            logger.error(f"Order processing failed: {e}", exc_info=True)
            # Return 200 anyway — NOWPayments retries on non-200

    return JSONResponse({"status": "ok"})


@router.get("/unsubscribe", response_class=HTMLResponse)
async def unsubscribe(e: str = Query(...), t: str = Query(...), db: Session = Depends(get_db)):
    """One-click unsubscribe. e = base64(email), t = HMAC token."""
    from src.services.gtm_audit.lead_service import _make_unsubscribe_token
    from src.repositories.gtm_lead_repository import GtmLeadRepository

    try:
        email = base64.urlsafe_b64decode(e + "==").decode()
    except Exception:
        return HTMLResponse(_unsub_page("Неверная ссылка."), status_code=400)

    expected = _make_unsubscribe_token(email)
    if not hmac.compare_digest(expected, t):
        return HTMLResponse(_unsub_page("Неверная или устаревшая ссылка."), status_code=400)

    repo = GtmLeadRepository(db)
    lead = repo.get_by_email(email)
    if lead and not lead.unsubscribed_at:
        repo.update(lead.id, unsubscribed_at=datetime.now(timezone.utc))
        logger.info(f"Unsubscribed: {email}")

    return HTMLResponse(_unsub_page(f"Вы отписались от рассылки.<br>{email} больше не будет получать наши письма."))


def _unsub_page(message: str) -> str:
    return f"""<!DOCTYPE html><html lang="ru"><head><meta charset="UTF-8">
<title>Отписка — God Dev it</title>
<style>body{{font-family:'Courier New',monospace;background:#0d0c0b;color:#e0e0e0;
display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0}}
.box{{border:1px solid #2a2a2a;padding:32px;max-width:480px;text-align:center}}
.ok{{color:#55ff55;font-size:12px;margin-bottom:16px}}</style></head>
<body><div class="box">
<div class="ok">[ OK ] unsubscribe --confirmed</div>
<p style="color:#aaa;font-size:14px;line-height:1.6;">{message}</p>
<p style="color:#555;font-size:12px;margin-top:24px;">
  Передумали? Просто ответьте на любое предыдущее письмо, и мы вернем вас в список.
</p>
</div></body></html>"""


@router.get("/health")
async def health():
    return {"module": "gtm-audit", "status": "ok"}


