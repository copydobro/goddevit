"""GTM Audit API endpoints."""
from fastapi import APIRouter, Request, Depends
from fastapi.responses import JSONResponse
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
    score: int = 0
    findings: dict = {}


@router.post("/capture-lead")
async def capture_lead(body: CaptureLeadRequest, db: Session = Depends(get_db)):
    """Called by the scorecard when a user submits their email."""
    try:
        service = LeadService(db)
        result = await service.capture(
            email=str(body.email),
            score=body.score,
            findings=body.findings,
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
        order_service = OrderService(db)
        await order_service.handle_payment_confirmed(
            client_email=client.extract_order_id(payload),
            payment_id=client.extract_payment_id(payload),
        )

    return JSONResponse({"status": "ok"})


@router.get("/health")
async def health():
    return {"module": "gtm-audit", "status": "ok"}
