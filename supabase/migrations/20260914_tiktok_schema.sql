-- Migration: TikTok Accounts & Desktop Sessions Schema
-- Enables secure server-side storage of encrypted TikTok OAuth tokens and desktop session hashes.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS tiktok_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    open_id TEXT UNIQUE NOT NULL,
    display_name TEXT,
    avatar_url TEXT,
    access_token_encrypted TEXT NOT NULL,
    refresh_token_encrypted TEXT NOT NULL,
    access_token_expires_at TIMESTAMPTZ NOT NULL,
    refresh_token_expires_at TIMESTAMPTZ NOT NULL,
    scope TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_tiktok_accounts_open_id ON tiktok_accounts(open_id);

CREATE TABLE IF NOT EXISTS desktop_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_hash TEXT UNIQUE NOT NULL,
    tiktok_account_id UUID NOT NULL REFERENCES tiktok_accounts(id) ON DELETE CASCADE,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_desktop_sessions_hash ON desktop_sessions(session_hash);
CREATE INDEX IF NOT EXISTS idx_desktop_sessions_account ON desktop_sessions(tiktok_account_id);

-- Trigger to auto-update updated_at on tiktok_accounts
CREATE OR REPLACE FUNCTION update_tiktok_accounts_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_tiktok_accounts_updated ON tiktok_accounts;
CREATE TRIGGER trg_tiktok_accounts_updated
    BEFORE UPDATE ON tiktok_accounts
    FOR EACH ROW
    EXECUTE FUNCTION update_tiktok_accounts_timestamp();
