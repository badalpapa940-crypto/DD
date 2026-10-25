/*
# Create contact_messages and inquiry_requests tables

1. New Tables
- `contact_messages` — short "Contact us" / "Discuss Your Business" messages submitted from the site header/home.
  - id (uuid PK)
  - name (text, not null)
  - email (text, not null)
  - phone (text, nullable)
  - company (text, nullable)
  - message (text, nullable)
  - source (text, nullable) — which button/page the message came from (e.g. "header", "home_contact").
  - created_at (timestamptz, default now())

- `inquiry_requests` — detailed advisory inquiry leads submitted from the dedicated Inquiry page.
  - id (uuid PK)
  - full_name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - company (text, not null)
  - designation (text, nullable) — role/title of the person.
  - industry (text, nullable) — selected industry.
  - revenue_band (text, nullable) — selected revenue band (e.g. "₹25–100 Cr").
  - services (text, nullable) — comma-separated list of services of interest.
  - challenge (text, nullable) — free-text description of the business challenge.
  - timeline (text, nullable) — desired engagement timeline.
  - referred_by (text, nullable) — how they heard about QAP.
  - consent (boolean, not null default false) — consent to be contacted.
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- This is a no-auth public marketing site; the frontend uses the anon key.
- Grant INSERT + SELECT to `anon` and `authenticated`. The public only inserts; SELECT is granted so the submission does not fail permission checks on returning rows. (No read UI is exposed; leads are managed from the Supabase dashboard with the service role.)
- Allow anon + authenticated INSERT (public submissions) with a simple WITH CHECK (true) since the data is intentionally public-facing form input.
- SELECT policy is intentionally false for anon/authenticated so submitted records are NOT readable via the anon key (only the service_role in the dashboard can read them). The INSERT still works because INSERT policies use WITH CHECK, not USING.
- Note: We grant SELECT privilege on the table (required for INSERT ... returning) but the SELECT *policy* denies rows, so no submitted data is exposed to the public client.

3. Important notes
- Email validation is left to the frontend; the database stores text as submitted.
- `consent` must be true for an inquiry to be considered valid (enforced in the UI).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No SELECT policy: submitted messages are not readable via anon/authenticated.
-- (Table-level SELECT grant is required so INSERT ... returning succeeds, but the
-- missing SELECT policy means anon/authenticated see zero rows.)


CREATE TABLE IF NOT EXISTS inquiry_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text NOT NULL,
  designation text,
  industry text,
  revenue_band text,
  services text,
  challenge text,
  timeline text,
  referred_by text,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiry_requests ENABLE ROW LEVEL SECURITY;

GRANT SELECT, INSERT ON inquiry_requests TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiry_requests" ON inquiry_requests;
CREATE POLICY "anon_insert_inquiry_requests"
  ON inquiry_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No SELECT policy: inquiry records are not readable via anon/authenticated.