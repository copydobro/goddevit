"""Influr Agency — GTM Audit backend."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.api.gtm_audit import router as gtm_router
from src.api.tracking import router as tracking_router
from src.database import create_tables

app = FastAPI(title="Influr Agency API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Tighten to your domain in production
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

app.include_router(gtm_router)
app.include_router(tracking_router)


@app.on_event("startup")
async def startup():
    try:
        create_tables()
    except Exception as exc:
        print(f"DB startup warning (tables not created): {exc}")


@app.get("/health")
async def health():
    return {"status": "ok"}
