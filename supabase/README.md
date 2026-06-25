# Supabase Setup

## 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a new project.

## 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your credentials from **Project Settings → API**:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 3. Run database schema

In the Supabase **SQL Editor**, run the contents of:

1. `supabase/schema.sql` — creates tables, RLS policies, and storage bucket
2. `supabase/seed.sql` — (optional) adds sample categories, products, and jobs

## 4. Create an admin user

1. Go to **Authentication → Users** in Supabase
2. Click **Add user** and create an admin account with email + password
3. Copy the user's UUID
4. Run in SQL Editor:

```sql
INSERT INTO admin_users (user_id) VALUES ('paste-user-uuid-here');
```

## 5. Access the admin panel

Start the dev server and go to:

```
http://localhost:8080/admin/login
```

## Admin panel features

| Section | What you can manage |
|---------|---------------------|
| **Collections** | Product categories, homepage visibility, sub-filters, collection page content |
| **Products** | Full product catalog (name, price, image, collection, filter tag) |
| **Career Posts** | Job listings on the careers page |
| **Applications** | View submitted career applications and resumes |

## Public pages powered by Supabase

- `/products` — product catalog with search, filter, sort
- `/products/:productId` — product details
- `/collections/:slug` — category collection pages with sub-filters
- `/careers` — job listings and application form
- Homepage categories — collections marked "Show on homepage"
