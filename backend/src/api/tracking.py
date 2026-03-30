from fastapi import APIRouter, Response
from src.services.posthog_service import posthog_service
import base64

router = APIRouter(prefix="/track", tags=["Tracking"])

# 1x1 transparent PNG
PIXEL_BIN = base64.b64decode("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==")

@router.get("/email-open")
async def track_email_open(email_id: str, user_id: str):
    posthog_service.capture(
        user_id, 
        "email_opened", 
        {"email_id": email_id}
    )
    return Response(content=PIXEL_BIN, media_type="image/png")

@router.get("/notion-read")
async def track_notion_read(page_id: str, user_id: str):
    posthog_service.capture(
        user_id, 
        "notion_page_viewed", 
        {"page_id": page_id}
    )
    return Response(content=PIXEL_BIN, media_type="image/png")
