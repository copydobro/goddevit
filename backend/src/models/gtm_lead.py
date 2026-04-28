"""GTM Audit lead model."""
import uuid
from sqlalchemy import Column, String, Integer, Text, DateTime, JSON, func
from sqlalchemy.types import TypeDecorator, String as SAString
from src.database import Base


class GUID(TypeDecorator):
    """UUID that works with both PostgreSQL (native UUID) and SQLite (string)."""
    impl = SAString(36)
    cache_ok = True

    def process_bind_param(self, value, dialect):
        if value is None:
            return None
        return str(value)

    def process_result_value(self, value, dialect):
        if value is None:
            return None
        return uuid.UUID(value)


class GtmLead(Base):
    """Stores every lead who submitted their email in the scorecard."""
    __tablename__ = "gtm_leads"

    id                   = Column(GUID(), primary_key=True, default=uuid.uuid4)
    email                = Column(Text, nullable=False, unique=True, index=True)
    name                 = Column(Text, nullable=True)
    project_url          = Column(Text, nullable=True)
    readme_snippet       = Column(Text, nullable=True)
    score                = Column(Integer, nullable=True)
    findings             = Column(JSON, default=dict)
    status               = Column(String(32), nullable=False, default="lead")
    # status: 'lead' | 'paid' | 'workspace_created'
    source_product       = Column(String(64), default="readme_scorecard")
    archetype            = Column(String(64), nullable=True)   # channel-compass archetype id
    compass_answers      = Column(JSON, nullable=True)          # channel-compass Q1-Q8 answers
    unsubscribed_at      = Column(DateTime(timezone=True), nullable=True)
    payment_provider_id  = Column(Text, nullable=True)
    notion_workspace_url = Column(Text, nullable=True)
    created_at           = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at           = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
