"""Database session setup."""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from sqlalchemy.pool import NullPool
from src.config import settings

# NullPool: no connection reuse across requests — required for serverless + Neon PgBouncer
engine = create_engine(settings.database_url, poolclass=NullPool)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    pass


def get_db():
    db = SessionLocal()
    try:
        yield db
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()


def create_tables():
    """Create all tables (dev only — use Alembic in prod)."""
    Base.metadata.create_all(bind=engine)


def run_column_migrations():
    """
    Idempotent ALTER TABLE migrations for columns added after initial deploy.
    Uses IF NOT EXISTS so it's safe to run on every startup.
    Only runs for PostgreSQL (Neon); SQLite is skipped.
    """
    from sqlalchemy import text
    dialect = engine.dialect.name
    if dialect != "postgresql":
        return
    migrations = [
        "ALTER TABLE gtm_leads ADD COLUMN IF NOT EXISTS name TEXT",
        "ALTER TABLE gtm_leads ADD COLUMN IF NOT EXISTS project_url TEXT",
        "ALTER TABLE gtm_leads ADD COLUMN IF NOT EXISTS readme_snippet TEXT",
        "ALTER TABLE gtm_leads ADD COLUMN IF NOT EXISTS source_product VARCHAR(64) DEFAULT 'readme_scorecard'",
    ]
    with engine.connect() as conn:
        for sql in migrations:
            conn.execute(text(sql))
        conn.commit()
