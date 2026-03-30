"""NOWPayments IPN webhook verification."""
import hmac
import hashlib
import json
from typing import Dict, Any
from src.config import settings
from src.utils.logger import logger


class NOWPaymentsClient:
    """
    Handles NOWPayments Instant Payment Notifications (IPN).
    Payment links are created in the NOWPayments dashboard — no server-side
    payment creation needed for the simple redirect flow.
    """

    # Payment statuses that mean money was received
    CONFIRMED_STATUSES = {"finished", "partially_paid", "confirmed"}

    def verify_webhook_signature(
        self,
        payload_bytes: bytes,
        received_signature: str,
    ) -> bool:
        """
        Verify the x-nowpayments-sig header.
        NOWPayments signs the alphabetically sorted JSON payload
        with HMAC-SHA512 using NOWPAYMENTS_IPN_SECRET_KEY.
        """
        secret = settings.nowpayments_ipn_secret_key
        if not secret:
            logger.warning("NOWPAYMENTS_IPN_SECRET_KEY not set — skipping signature check")
            return True  # allow in dev without key

        if not received_signature:
            logger.warning("NOWPayments webhook received without signature")
            return False

        try:
            # Sort payload keys alphabetically (NOWPayments requirement)
            payload_dict = json.loads(payload_bytes)
            sorted_payload = json.dumps(payload_dict, sort_keys=True, separators=(",", ":"))

            expected = hmac.new(
                secret.encode("utf-8"),
                sorted_payload.encode("utf-8"),
                hashlib.sha512,
            ).hexdigest()

            is_valid = hmac.compare_digest(expected, received_signature.lower())
            if not is_valid:
                logger.warning(
                    f"NOWPayments signature mismatch. "
                    f"Expected: {expected[:16]}... Got: {received_signature[:16]}..."
                )
            return is_valid

        except (json.JSONDecodeError, ValueError) as e:
            logger.error(f"NOWPayments webhook payload parse error: {e}")
            return False

    def is_payment_confirmed(self, payload: Dict[str, Any]) -> bool:
        """Return True if the payment is in a confirmed/finished state."""
        status = payload.get("payment_status", "")
        is_confirmed = status in self.CONFIRMED_STATUSES
        
        if is_confirmed:
            order_id = self.extract_order_id(payload)
            from src.services.posthog_service import posthog_service
            posthog_service.capture(order_id, "payment_succeeded", {
                "payment_id": payload.get("payment_id"),
                "amount": payload.get("pay_amount"),
                "currency": payload.get("pay_currency")
            })
            
        return is_confirmed

    def extract_order_id(self, payload: Dict[str, Any]) -> str:
        """
        Extract the order_id from the IPN payload.
        We pass the lead's email as order_id in the payment link URL.
        """
        return payload.get("order_id", "") or payload.get("order_description", "")

    def extract_payment_id(self, payload: Dict[str, Any]) -> str:
        return str(payload.get("payment_id", ""))
