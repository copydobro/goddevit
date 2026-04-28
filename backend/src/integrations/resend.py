"""Resend email API integration."""
import httpx
from typing import Optional
from src.config import settings
from src.utils.logger import logger


class ResendClient:
    """Client for Resend transactional email API."""

    BASE_URL = "https://api.resend.com"

    def __init__(self):
        self.api_key = settings.resend_api_key
        self.from_email = settings.resend_from_email or "God Dev it <hello@goddevit.tech>"

    async def send_email(
        self,
        to: str,
        subject: str,
        html: str,
        from_email: Optional[str] = None,
    ) -> dict:
        """Send a transactional email via Resend."""
        if not self.api_key:
            logger.warning("RESEND_API_KEY not set — skipping email send")
            return {"status": "skipped", "reason": "no_api_key"}

        # Inject tracking pixel
        pixel_url = f"{settings.api_base_url}/track/email-open?email_id=audit_notification&user_id={to}"
        tracking_pixel = f'<img src="{pixel_url}" width="1" height="1" style="display:none !important;" />'
        
        payload = {
            "from": from_email or self.from_email,
            "to": [to],
            "subject": subject,
            "html": html + tracking_pixel,
        }

        from src.services.posthog_service import posthog_service
        posthog_service.capture(to, "email_sent", {"subject": subject})

        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    f"{self.BASE_URL}/emails",
                    json=payload,
                    headers={"Authorization": f"Bearer {self.api_key}"},
                    timeout=15.0,
                )
                response.raise_for_status()
                result = response.json()
                logger.info(f"Email sent to {to} | id={result.get('id')}")
                return result

        except httpx.HTTPStatusError as e:
            logger.error(f"Resend HTTP error sending to {to}: {e.response.text}")
            raise
        except httpx.HTTPError as e:
            logger.error(f"Resend connection error: {e}")
            raise
