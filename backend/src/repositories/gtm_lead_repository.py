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

    def upsert(self, email: str, score: Optional[int], findings: dict) -> GtmLead:
        """Create lead if not exists, otherwise update score/findings."""
        lead = self.get_by_email(email)
        if lead:
            lead.score = score
            lead.findings = findings
            self.db.commit()
            self.db.refresh(lead)
            return lead
        return self.create(
            email=email.lower().strip(),
            score=score,
            findings=findings,
            status="lead",
        )
