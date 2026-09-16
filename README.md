# Therapy Station

Production website for **Therapy Station** — a specialist physiotherapy, rehabilitation, chiropractic & speech therapy clinic in Banani, Dhaka, Bangladesh.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Forms & Data Flow](#forms--data-flow)
- [SEO & Metadata](#seo--metadata)
- [Design System](#design-system)
- [Key Components](#key-components)
- [Deployment](#deployment)
- [Developer Notes](#developer-notes)
- [Outstanding Before Launch](#outstanding-before-launch)

---

## Overview

A fully static-first marketing site for Therapy Station: clinic services, specialist consultants, and an appointment request form. All pages pre-render at build time — there is no server-side API route anymore (the old `/api/contact` stub was removed; forms submit client-side to Formspree).

**Live domain (placeholder — confirm before launch):** `https://therapystation.com.bd`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + CSS custom properties |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion |
| Icons | lucide-react |
| Forms | react-hook-form + zod → Formspree |
| Carousel | Embla Carousel |
| Fonts | Plus Jakarta Sans (display) · Inter (body) via `next/font` |
| Deployment | Netlify (`@netlify/plugin-nextjs`) |

Supabase (`lib/supabase.ts`, `@supabase/supabase-js`) is still installed and configured (`.env` has real project credentials), but nothing currently writes to it — see [Forms & Data Flow](#forms--data-flow).

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, JSON-LD, Navbar, Footer, FloatingButtons
│   ├── globals.css             # Design system CSS variables, base styles, marquee keyframes
│   ├── page.tsx                # Home page
│   ├── loading.tsx             # App-level loading screen (real logo)
│   ├── manifest.ts             # PWA web manifest
│   ├── icon.png                # Auto-detected favicon source (512×512)
│   ├── apple-icon.png          # Auto-detected Apple touch icon (180×180)
│   ├── favicon.ico             # Multi-res favicon (16/32/48)
│   ├── robots.ts               # /robots.txt
│   ├── sitemap.ts              # /sitemap.xml
│   ├── about/
│   │   ├── layout.tsx          # Page metadata
│   │   └── page.tsx            # Story, specialists teaser, core values
│   ├── services/
│   │   ├── layout.tsx
│   │   └── page.tsx            # Featured service, modality groups, conditions accordion, FAQ
│   ├── specialists/
│   │   ├── layout.tsx
│   │   └── page.tsx            # Senior consultants + physiotherapy team
│   ├── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx            # Quick actions, address, hours, Google Maps embed — no form
│   └── book/
│       ├── layout.tsx
│       └── page.tsx            # The only form on the site → Formspree
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar, real logo, mobile drawer
│   │   └── Footer.tsx          # Dark 4-column footer, logo on white chip
│   ├── sections/
│   │   ├── Hero.tsx            # Home hero — real AI-generated illustration, magnetic CTA
│   │   ├── PageHero.tsx        # Reusable inner-page hero
│   │   ├── TrustBar.tsx        # Stat row + CSS marquee ticker
│   │   ├── ServicesOverview.tsx# 6-card services grid with TiltCard
│   │   ├── WhyUs.tsx           # Alternating feature rows (ImagePlaceholder)
│   │   ├── Stats.tsx           # Spring count-up numbers on green bg
│   │   ├── Testimonials.tsx    # Embla carousel of 6 testimonials
│   │   └── CTABanner.tsx       # Green CTA section (used on every page)
│   ├── shared/
│   │   ├── FloatingButtons.tsx # WhatsApp + scroll-to-top buttons
│   │   ├── TiltCard.tsx        # Pointer-tilt hover wrapper (prefers-reduced-motion aware)
│   │   ├── MagneticButton.tsx  # Magnetic-follow button wrapper
│   │   └── ImagePlaceholder.tsx# Branded placeholder for missing photos
│   └── ui/                     # shadcn/ui primitives (do not edit)
│
├── lib/
│   ├── animations.ts           # Framer Motion variant definitions
│   ├── supabase.ts             # Supabase singleton client (currently unused by any page)
│   └── utils.ts                # cn() helper
│
├── types/
│   └── index.ts                # Shared TypeScript interfaces
│
├── public/
│   ├── logo.svg                 # Real brand logo (source of all generated icons)
│   ├── hero-stretch.png         # Real AI-generated hero illustration
│   ├── og-image.png             # Generated Open Graph share image (1200×630)
│   ├── icons/                   # PWA manifest icons (192 / 512 / maskable)
│   └── specialists/             # Specialist headshots — see its own README.md
│
├── DESIGN_CONTEXT.md            # Full design system reference for Claude
├── tailwind.config.ts
├── next.config.js
├── netlify.toml
└── tsconfig.json
```

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — Hero, TrustBar, Services, WhyUs, Stats, Testimonials, CTA |
| `/services` | `app/services/page.tsx` | Featured service, full modality/condition taxonomy, How It Works, FAQ |
| `/specialists` | `app/specialists/page.tsx` | Senior consultants (with bios/credentials) + physiotherapy team |
| `/about` | `app/about/page.tsx` | Clinic story, specialists teaser card, core values |
| `/contact` | `app/contact/page.tsx` | Quick-action links (Book/Call/WhatsApp/Email), address, hours, live Google Maps embed |
| `/book` | `app/book/page.tsx` | The single appointment form on the site → Formspree |
| `/robots.txt` | `app/robots.ts` | Generated via Next.js Metadata API |
| `/sitemap.xml` | `app/sitemap.ts` | Generated via Next.js Metadata API |
| `/manifest.webmanifest` | `app/manifest.ts` | PWA manifest, generated via Next.js Metadata API |

Note: `/contact` no longer has a form. It used to; the form was consolidated into `/book` so there's a single appointment-request flow instead of two.

---

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Type check

```bash
npx tsc --noEmit
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

`.env` at the project root currently holds real Supabase credentials (kept for a future admin/booking rebuild — see [Forms & Data Flow](#forms--data-flow)):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

These are not required for the site to function today — no page currently calls Supabase. They're only needed again once the booking form is reconnected to a database.

---

## Forms & Data Flow

There is exactly **one** form on the site: `/book`. `/contact` is informational only (it links to `/book` and offers direct call/WhatsApp/email links).

### `/book` fields

Full Name, Age, Gender, Phone, WhatsApp (optional), Email, Preferred Date. (Service and free-text message/notes fields were deliberately removed to keep the form short.)

### Submission target: Formspree

The form submits client-side via `fetch` to a Formspree endpoint defined at the top of `app/book/page.tsx`:

```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

**This is a placeholder and must be replaced** with a real endpoint from [formspree.io](https://formspree.io) before the form will actually deliver anything. Until then, submissions fail gracefully (the form shows its error state, not a false success).

### Supabase — currently disconnected

A `bookings` table and RLS policy exist in the connected Supabase project from an earlier iteration, and `lib/supabase.ts` still exports a working client, but `/book` does not call it anymore. This was a deliberate simplification (Formspree only, for now) — the plan is to reconnect a proper booking/database system later. If you revive it, the previous booking schema was:

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | `gen_random_uuid()` |
| `name` | text | required |
| `phone` | text | required |
| `email` | text | required |
| `service` | text | required (no longer collected by the form — would need re-adding) |
| `preferred_date` | date | required |
| `preferred_time` | text | required (no longer collected — would need re-adding) |
| `heard_from` | text | nullable |
| `notes` | text | nullable |
| `status` | text | default `'pending'` |
| `created_at` | timestamptz | auto |

The current form's field set (age, gender, WhatsApp) doesn't match this old schema — a new migration would be needed if/when Supabase is reconnected.

---

## SEO & Metadata

- **Root metadata** (`app/layout.tsx`) sets `metadataBase`, a full keyword list researched against real Banani/Dhaka physiotherapy competitors, per-page-overridable OpenGraph/Twitter cards, and a `MedicalBusiness`/`PhysicalTherapy` JSON-LD block with real NAP (name/address/phone) data, hours, and a link to the clinic's Google Maps listing.
- **Per-page metadata**: every route has its own `layout.tsx` exporting `title`, `description`, `keywords`, and `alternates.canonical`.
- **Icons**: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` are all cropped from the actual logo glyph (not the full text lockup) and auto-detected by Next.js — no manual `<link>` tags needed.
- **OG image**: `public/og-image.png` is a real generated 1200×630 share image built from the brand gradient + logo, not a placeholder.
- **Manifest**: `app/manifest.ts` references `public/icons/*` for PWA installability.
- **Sitemap**: `app/sitemap.ts` lists all 6 public routes.

Still needed from the client: Google Search Console verification (once added, wire the verification meta tag into `app/layout.tsx`), and confirmation that `therapystation.com.bd` is the real production domain — it's currently hardcoded as a placeholder in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and the JSON-LD block.

---

## Design System

The full design system is documented in [`DESIGN_CONTEXT.md`](./DESIGN_CONTEXT.md). A brief summary:

### Colours

All colours are CSS custom properties in `app/globals.css`. Never use hardcoded hex in components (except white text/`#0F1C14` footer bg, which are the documented exceptions).

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#1A7A4A` | Brand green — buttons, icons, accents |
| `--color-primary-dark` | `#145C38` | Button hover |
| `--color-primary-light` | `#E8F5EE` | Icon badge backgrounds, tinted fills |
| `--color-bg` | `#FFFFFF` | Default page background |
| `--color-bg-secondary` | `#F4F9F6` | Alternating section background |
| `--color-text-primary` | `#0F1C14` | Headings and body copy |
| `--color-text-secondary` | `#3D5247` | Subtitles and descriptions |
| `--color-border` | `#D1E8DB` | Card and input borders |

### Typography

- **Display:** Plus Jakarta Sans — used for all headings (`var(--font-display)`)
- **Body:** Inter — used for all body text, buttons, labels (`var(--font-body)`)

Always set `fontFamily` explicitly via inline style. Do not rely on CSS inheritance alone.

### Animations

All Framer Motion variants are defined in `lib/animations.ts`:

```ts
import { fadeUp, fadeIn, stagger, slideLeft, slideRight, scaleIn } from '@/lib/animations';
```

Use `whileInView` with `viewport={{ once: true, margin: '-60px' }}` for scroll-triggered sections. Use `animate="visible"` (without `whileInView`) for above-the-fold content. All new decorative motion (tilt, magnetic, marquee, count-up) must respect `prefers-reduced-motion`.

### Mobile spacing

Section vertical padding follows a `py-14 lg:py-24` pattern (not a flat `py-24`) so mobile doesn't inherit desktop-scale whitespace. Apply the same pattern to any new section.

---

## Key Components

### `<PageHero>`

Reusable hero for all inner pages. Takes `badge`, `title`, `subtitle` props. Light green gradient background, white wave SVG divider at the bottom.

```tsx
<PageHero
  badge="OUR SPECIALISTS"
  title="Meet Our Clinical Team"
  subtitle="Certified physiotherapists, consultants, and rehabilitation specialists under one roof"
/>
```

### `<CTABanner>`

Dark green CTA section used as the last section on most pages (not on `/book`, which is itself the terminal conversion page).

```tsx
<CTABanner />
```

Contains "Book Appointment Now" (→ `/book`, wrapped in `<MagneticButton>`) and "Call Us Today" (`tel:` link).

### `<TiltCard>` / `<MagneticButton>`

Lightweight decorative wrappers (no external libraries) — pointer-tilt and magnetic-follow effects respectively. Both check `prefers-reduced-motion` before animating. Used sparingly (home services grid, primary CTAs only) to avoid feeling gimmicky.

### `<ImagePlaceholder>`

Branded stand-in for missing photography (dot-grid texture, icon badge, "Photo coming soon" tag) — used on the About clinic image and all three WhyUs images until real/AI-generated photos are supplied.

### `<FloatingButtons>`

Fixed overlay rendered in the root layout:

- **WhatsApp button** (bottom-left): `https://wa.me/8801348134933`
- **Scroll-to-top button** (bottom-right): appears after 400px of scroll

---

## Deployment

The site is configured for **Netlify** via `netlify.toml`:

```toml
[build]
command = "npx next build"
publish = ".next"

[[plugins]]
package = "@netlify/plugin-nextjs"
```

### Steps

1. Push to your Git repository
2. Connect the repo to Netlify
3. Deploy — Netlify detects the Next.js plugin automatically. No environment variables are required for the site to function (Supabase is currently disconnected — see [Forms & Data Flow](#forms--data-flow))
4. Before or shortly after deploy: set the real `FORMSPREE_ENDPOINT` in `app/book/page.tsx` (see below) and redeploy

---

## Developer Notes

### Adding a new page

1. Create `app/<route>/page.tsx` with `'use client'` if it uses hooks
2. Create `app/<route>/layout.tsx` exporting `metadata` with `title`, `description`, `keywords`, and `alternates.canonical`
3. End the page with `<CTABanner />` (unless it's a terminal conversion page like `/book`)
4. Add the route to `app/sitemap.ts`
5. Run `npx tsc --noEmit` and `npm run build` to verify

### Adding a new section

1. Create `components/sections/MySection.tsx`
2. Add `'use client'` if it uses Framer Motion or hooks
3. Import animations from `lib/animations.ts` — never define variants inline
4. Use `var(--color-*)` tokens for all colours
5. Alternate section background with adjacent sections (white vs `--color-bg-secondary`)
6. Use the `py-14 lg:py-24` mobile-aware padding pattern

### Specialist photos

`public/specialists/` has its own `README.md` listing the exact filenames expected for each of the 6 team members. Drop a same-named image in to replace the current placeholder — no code changes needed. Two specialists (Mahbub Hasan Apu, Sayeda Humaira Haque) still need photos as of this writing.

### Editing specialist bios/credentials

Specialist data lives in `app/specialists/page.tsx` (`consultants` and `physios` arrays). Do not change names, credentials, titles, or bios without the client's explicit sign-off — this is real professional/medical information (sourced from CVs and direct client input), not marketing copy.

---

## Outstanding Before Launch

| Item | Status |
|---|---|
| Formspree endpoint | Placeholder — must be replaced in `app/book/page.tsx` |
| Real domain confirmation | `therapystation.com.bd` is unconfirmed, hardcoded in 4 places |
| Privacy policy / consent notice | Not present — forms collect age/gender/health-adjacent info |
| "500+ patients" / "98% satisfaction" stats | Unverified marketing numbers (Hero, TrustBar, Stats) |
| Specialist photos | 4 of 6 supplied; 2 pending |
| WhyUs (×3) and About clinic photo | Still on branded placeholders — pending real or AI-generated images |
| Google Search Console verification | Not yet added — client will handle separately |
| Spam protection on `/book` | None yet (honeypot/reCAPTCHA) — worth adding once the real Formspree endpoint is live |
