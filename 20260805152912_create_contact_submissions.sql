/*
# Create contact submissions table

1. New Tables
- `contact_submissions`
- `id` (uuid, primary key)
- `name` (text, visitor's name)
- `email` (text, visitor's email)
- `subject` (text, message subject)
- `message` (text, visitor's message)
- `created_at` (timestamptz, submission time)

2. Security
- Row level security is enabled.
- Anonymous and authenticated visitors may submit contact messages.
- Submitted messages cannot be read, changed, or deleted through the public website.

3. Important Notes
- This is a single-organization contact inbox with no sign-in flow.
- The public form only needs insert access; the remaining policies explicitly deny public access.
*/

CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 254),
  subject text NOT NULL CHECK (char_length(subject) BETWEEN 2 AND 160),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit contact messages" ON public.contact_submissions;
CREATE POLICY "Public can submit contact messages"
  ON public.contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public cannot read contact messages" ON public.contact_submissions;
CREATE POLICY "Public cannot read contact messages"
  ON public.contact_submissions FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Public cannot update contact messages" ON public.contact_submissions;
CREATE POLICY "Public cannot update contact messages"
  ON public.contact_submissions FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Public cannot delete contact messages" ON public.contact_submissions;
CREATE POLICY "Public cannot delete contact messages"
  ON public.contact_submissions FOR DELETE
  TO anon, authenticated
  USING (false);
