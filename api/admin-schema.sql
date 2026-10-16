-- Run once in the connected PostgreSQL database before enabling the admin console.
CREATE TABLE IF NOT EXISTS support_conversations (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','resolved','pending')),
  page TEXT NOT NULL DEFAULT '/',
  last_message TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS support_messages (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES support_conversations(session_id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('visitor','admin','bot')),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS support_messages_session_created_idx ON support_messages(session_id, created_at);
CREATE TABLE IF NOT EXISTS cruise_destinations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE cruise_enquiries ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'new';
INSERT INTO site_settings(key,value) VALUES ('business_name','Royal Cruise Travel Guide') ON CONFLICT (key) DO NOTHING;
