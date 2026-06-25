-- Run this in the Supabase SQL Editor

-- Categories (product collections)
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  label TEXT,
  image TEXT NOT NULL,
  headline TEXT NOT NULL,
  description TEXT NOT NULL,
  filters JSONB NOT NULL DEFAULT '[]'::jsonb,
  show_on_homepage BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  price TEXT NOT NULL DEFAULT '$0',
  price_value NUMERIC NOT NULL DEFAULT 0,
  filter_tag TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Career job posts
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  requirements JSONB NOT NULL DEFAULT '[]'::jsonb,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Job applications (submitted from careers page)
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES jobs(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  message TEXT NOT NULL,
  resume_url TEXT,
  resume_link TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Admin users (link Supabase Auth users to admin access)
CREATE TABLE IF NOT EXISTS admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Helper: check if current user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM admin_users WHERE user_id = auth.uid()
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Categories policies
CREATE POLICY "Public can read categories"
  ON categories FOR SELECT USING (true);

CREATE POLICY "Admins can insert categories"
  ON categories FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "Admins can update categories"
  ON categories FOR UPDATE USING (is_admin());

CREATE POLICY "Admins can delete categories"
  ON categories FOR DELETE USING (is_admin());

-- Products policies
CREATE POLICY "Public can read products"
  ON products FOR SELECT USING (true);

CREATE POLICY "Admins can insert products"
  ON products FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "Admins can update products"
  ON products FOR UPDATE USING (is_admin());

CREATE POLICY "Admins can delete products"
  ON products FOR DELETE USING (is_admin());

-- Jobs policies
CREATE POLICY "Public can read active jobs"
  ON jobs FOR SELECT USING (is_active = true OR is_admin());

CREATE POLICY "Admins can insert jobs"
  ON jobs FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "Admins can update jobs"
  ON jobs FOR UPDATE USING (is_admin());

CREATE POLICY "Admins can delete jobs"
  ON jobs FOR DELETE USING (is_admin());

-- Job applications policies
CREATE POLICY "Anyone can submit applications"
  ON job_applications FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can read applications"
  ON job_applications FOR SELECT USING (is_admin());

CREATE POLICY "Admins can delete applications"
  ON job_applications FOR DELETE USING (is_admin());

-- Admin users policies
CREATE POLICY "Admins can read admin_users"
  ON admin_users FOR SELECT USING (is_admin() OR user_id = auth.uid());

-- Storage bucket for resumes
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can upload resumes"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Public can read resumes"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'resumes');

CREATE POLICY "Admins can delete resumes"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'resumes' AND is_admin());

-- Indexes
CREATE INDEX IF NOT EXISTS products_category_id_idx ON products(category_id);
CREATE INDEX IF NOT EXISTS products_featured_idx ON products(featured);
CREATE INDEX IF NOT EXISTS jobs_is_active_idx ON jobs(is_active);
CREATE INDEX IF NOT EXISTS categories_show_on_homepage_idx ON categories(show_on_homepage);
