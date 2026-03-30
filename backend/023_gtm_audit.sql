-- GTM Audit leads table
-- Migration 023: Influr Agency — GTM Audit product

CREATE TABLE IF NOT EXISTS gtm_leads (
    id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email                   TEXT NOT NULL,
    score                   INTEGER,
    findings                JSONB DEFAULT '{}',
    status                  TEXT NOT NULL DEFAULT 'lead',
    -- status values: 'lead' | 'paid' | 'workspace_created'
    payment_provider_id     TEXT,
    notion_workspace_url    TEXT,
    created_at              TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at              TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT gtm_leads_email_unique UNIQUE (email),
    CONSTRAINT gtm_leads_status_check CHECK (status IN ('lead', 'paid', 'workspace_created'))
);

CREATE INDEX IF NOT EXISTS idx_gtm_leads_email   ON gtm_leads (email);
CREATE INDEX IF NOT EXISTS idx_gtm_leads_status  ON gtm_leads (status);
CREATE INDEX IF NOT EXISTS idx_gtm_leads_created ON gtm_leads (created_at DESC);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_gtm_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_gtm_leads_updated_at ON gtm_leads;
CREATE TRIGGER trg_gtm_leads_updated_at
    BEFORE UPDATE ON gtm_leads
    FOR EACH ROW EXECUTE FUNCTION update_gtm_leads_updated_at();
