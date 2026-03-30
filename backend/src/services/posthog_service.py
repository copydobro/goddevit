from posthog import Posthog
from src.config import settings
from src.utils.logger import logger

class PostHogService:
    def __init__(self):
        self.enabled = bool(settings.posthog_api_key and "PLACEHOLDER" not in settings.posthog_api_key)
        if self.enabled:
            self.ph = Posthog(
                project_api_key=settings.posthog_api_key,
                host=settings.posthog_host
            )
            logger.info("PostHog initialized")
        else:
            self.ph = None
            logger.warning("PostHog disabled (API key missing or placeholder)")

    def capture(self, distinct_id: str, event: str, properties: dict = None):
        if not self.enabled:
            return
        try:
            self.ph.capture(distinct_id, event, properties or {})
        except Exception as e:
            logger.error(f"PostHog capture error: {e}")

    def identify(self, distinct_id: str, properties: dict = None):
        if not self.enabled:
            return
        try:
            self.ph.identify(distinct_id, properties or {})
        except Exception as e:
            logger.error(f"PostHog identify error: {e}")

posthog_service = PostHogService()
