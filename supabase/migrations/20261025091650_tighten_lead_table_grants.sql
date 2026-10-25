/*
# Tighten grants on contact_messages and inquiry_requests

The earlier migration created the public lead-capture tables. The posture
report showed the anon/authenticated roles held UPDATE and DELETE privileges
in addition to the intended INSERT (+ SELECT, required for INSERT ... returning).

RLS already blocks UPDATE/DELETE because there are no matching policies, so
this is a hardening cleanup, not a fix for a live vulnerability.

1. Security changes
- Revoke UPDATE, DELETE from anon + authenticated on both tables.
- Re-grant only SELECT, INSERT to anon + authenticated.
- No policy changes. RLS stays enabled. INSERT-only remains the only public
  write path; no SELECT policy exists, so submitted rows are not readable via
  the anon key.
*/

REVOKE UPDATE, DELETE ON contact_messages FROM anon, authenticated;
REVOKE UPDATE, DELETE ON inquiry_requests FROM anon, authenticated;

GRANT SELECT, INSERT ON contact_messages TO anon, authenticated;
GRANT SELECT, INSERT ON inquiry_requests TO anon, authenticated;
