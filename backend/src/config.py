"""Agency backend config."""
from typing import Optional
from pydantic_settings import BaseSettings
from pydantic import Field


class Settings(BaseSettings):
    database_url: str = Field(env="DATABASE_URL", default="sqlite:///./agency.db")

    # Email
    resend_api_key: Optional[str] = Field(default=None, env="RESEND_API_KEY")
    resend_from_email: str = Field(default="Influr <hello@influr.io>", env="RESEND_FROM_EMAIL")

    # Payments
    nowpayments_ipn_secret_key: Optional[str] = Field(default=None, env="NOWPAYMENTS_IPN_SECRET_KEY")
    nowpayments_payment_page_url: str = Field(
        default="https://nowpayments.io/payment/?iid=4397280030",
        env="NOWPAYMENTS_PAYMENT_PAGE_URL",
    )

    # Notion
    notion_api_key: Optional[str] = Field(default=None, env="NOTION_API_KEY")
    notion_client_portals_db_id: str = Field(
        default="1ddf225f613d80b0afd9c156831ca9f3",
        env="NOTION_CLIENT_PORTALS_DB_ID",
    )

    # Influr
    influr_sales_page_url: str = Field(
        default="https://subdued-basket-c56.notion.site/The-Cold-Start-Audit-See-a-real-one-before-you-buy-32ff225f613d8120a597f1ea921feff8",
        env="INFLUR_SALES_PAGE_URL",
    )
    influr_founder_email: Optional[str] = Field(default=None, env="INFLUR_FOUNDER_EMAIL")

    # PostHog
    posthog_api_key: Optional[str] = Field(default=None, env="POSTHOG_API_KEY")
    posthog_host: str = Field(default="https://eu.i.posthog.com", env="POSTHOG_HOST")

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
