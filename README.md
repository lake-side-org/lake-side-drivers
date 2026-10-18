# Lakeside Drivers Development Self Help Group — website

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site for Lakeside
Drivers Development Self Help Group, Kakola, Ahero, Kisumu County.

## What's included

- 6 pages: Home, About us, How we work, Membership, Leadership, Contact
- A validated, spam-resistant contact form (client + server validation,
  honeypot field, rate limiting)
- SEO basics: per-page metadata, sitemap.xml, robots.txt, Organization
  structured data (JSON-LD)
- Security headers (`next.config.mjs`)
- Brand palette wired into Tailwind (`tailwind.config.ts`): lake blue,
  amber, sky blue, sand
- Fully responsive, keyboard-accessible, respects reduced-motion

## Getting started

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site. Changes to any file under
`src/` reload automatically.

## Before you deploy — 3 things to set up

1. **A real domain.** Update `url` in `src/lib/siteConfig.ts` once you've
   bought one (see the earlier budget discussion — a `.co.ke` or `.com`
   domain runs roughly Ksh 1,000–1,500/year).

2. **The contact form's email delivery.** Copy `.env.example` to
   `.env.local` and fill in a free access key from
   [web3forms.com](https://web3forms.com) (takes about a minute, no
   account needed) so form submissions actually reach your inbox. Until
   this is set, submissions are only logged to the server console —
   nothing is lost, but nobody gets emailed.

3. **Real photos and names.** Placeholder content lives in:
   - `src/app/leadership/page.tsx` — office bearer names and photos
   - `src/lib/siteConfig.ts` — contact details and location
   - Any page copy you want personalised further

## Deploying

The easiest path is [Vercel](https://vercel.com) (built by the makers of
Next.js, free tier is enough for this site):

1. Push this project to a GitHub repository.
2. Go to vercel.com, sign in with GitHub, and import the repository.
3. Add the environment variables from `.env.example` in the Vercel
   project settings.
4. Deploy. Every future push to the main branch redeploys automatically.

## Editing content later

There's no admin panel — content lives directly in the page files under
`src/app/`. Each page is plain TypeScript/JSX with the text written
straight into it, so a change is usually a one-line edit. If you'd
rather not touch code yourself, come back with what you want changed and
it can be edited for you directly.

## Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, metadata, JSON-LD, header/footer
    page.tsx             Home
    about/page.tsx        About us
    how-we-work/page.tsx  How we work
    membership/page.tsx   Membership
    leadership/page.tsx   Leadership
    contact/page.tsx      Contact us
    api/contact/route.ts  Contact form submission handler
    sitemap.ts            Auto-generated sitemap.xml
    robots.ts             Auto-generated robots.txt
  components/            Header, Footer, Button, ContactForm, etc.
  lib/
    siteConfig.ts         Central place for name, contact info, nav links
    validation.ts          Shared zod schema (client + server)
    rateLimit.ts            In-memory rate limiter for the contact API
```

## A note on the rate limiter

`src/lib/rateLimit.ts` is intentionally simple — it stops obvious spam on
a single server but resets on redeploy and won't coordinate across
multiple server instances. That's fine at this site's current traffic
level. If the group grows and this needs to be more robust, swap it for
a shared store like Upstash Redis; the function signature is designed to
make that a small change, not a rewrite.
