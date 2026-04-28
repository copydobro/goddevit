"""Repository for GTM Audit leads."""
from typing import Optional
from sqlalchemy.orm import Session
from src.models.gtm_lead import GtmLead


class GtmLeadRepository:
    def __init__(self, db: Session):
        self.db = db

    def get(self, id) -> Optional[GtmLead]:
        return self.db.query(GtmLead).filter(GtmLead.id == id).first()

    def create(self, **kwargs) -> GtmLead:
        if "email" in kwargs:
            kwargs["email"] = kwargs["email"].lower().strip()
        lead = GtmLead(**kwargs)
        self.db.add(lead)
        self.db.commit()
        self.db.refresh(lead)
        return lead

    def update(self, id, **kwargs) -> Optional[GtmLead]:
        lead = self.get(id)
        if lead:
            for k, v in kwargs.items():
                setattr(lead, k, v)
            self.db.commit()
            self.db.refresh(lead)
        return lead

    def get_by_email(self, email: str) -> Optional[GtmLead]:
        """Lookup a lead by email address (case-insensitive)."""
        return (
            self.db.query(GtmLead)
            .filter(GtmLead.email == email.lower().strip())
            .first()
        )

    def upsert(self, email: str, name: Optional[str] = None, archetype: Optional[str] = None, compass_answers: Optional[dict] = None, source_product: Optional[str] = None, score: Optional[int] = None, findings: Optional[dict] = None) -> GtmLead:
        """Create or update a lead record."""
        lead = self.get_by_email(email)
        if lead:
            if name: lead.name = name
            if archetype: lead.archetype = archetype
            if compass_answers: lead.compass_answers = compass_answers
            if source_product: lead.source_product = source_product
            self.db.commit()
            self.db.refresh(lead)
            return lead
        return self.create(
            email=email.lower().strip(),
            name=name,
            archetype=archetype,
            compass_answers=compass_answers,
            source_product=source_product or "channel-compass",
            status="lead",
        )
