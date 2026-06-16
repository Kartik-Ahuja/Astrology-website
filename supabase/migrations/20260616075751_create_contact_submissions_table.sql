-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'cancelled'))
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies - allow public insert, only authenticated can read
CREATE POLICY "Public can insert contact submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated can read contact submissions"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Only authenticated can update contact submissions"
ON contact_submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);