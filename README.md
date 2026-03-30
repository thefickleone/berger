# Firdous Gallery Website

Premium modern lead-generation website for an authorized Berger Paints dealer in Jatra, Birbhum, West Bengal.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first tokens)
- Framer Motion
- Supabase

## Local Development

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Build and lint:

```bash
npm run lint
npm run build
```

## Environment Variables

Create `.env.local` from `.env.example` and set values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Supabase Table

The `/api/leads` route inserts records into a `leads` table. Suggested schema:

```sql
create table if not exists public.leads (
  id bigint generated always as identity primary key,
  full_name text not null,
  phone text not null,
  inquiry_type text not null,
  message text not null,
  source text default 'website',
  created_at timestamptz default now()
);
```

## Current Pages

- `/` Home
- `/about`
- `/products`
- `/contact`
- `/location`
- `/quote`

## Notes

- Replace placeholder business phone and WhatsApp number in `src/lib/constants.ts`.
- Replace placeholder SVG assets in `public/` with real project photography when available.
- Update `NEXT_PUBLIC_SITE_URL` before production deploy so canonical, Open Graph, `sitemap.xml`, and `robots.txt` point to your live domain.
- Route-specific social preview images are stored in `public/og/`.
- LocalBusiness JSON-LD is injected from `src/app/layout.tsx` via helpers in `src/lib/seo.ts`.
