# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Identité

**balise-ia** — Site vitrine B2B pour un collectif data & automatisation ciblant les PME industrielles bretonnes (Lorient). Le nom du repo (`armor-analytics`) est un vestige historique ; le produit s'appelle **balise-ia**. Tout le contenu est en français.

## Commandes

```bash
npm run dev          # Dev server (Turbopack, port 3000)
npm run build        # Build production
npm run lint         # ESLint avec --fix
npm run typecheck    # TypeScript check
npm run format       # Prettier write
npm run test:e2e     # Tests E2E Playwright (17 tests)
```

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **shadcn/ui** (New York style, RSC, `@/components/ui/`)
- **Resend** (emails contact + audit)
- **googleapis** (Google Sheets, lead capture, optionnel)
- **Zod** (validation runtime)
- **Playwright** (tests E2E)
- Path alias: `@/*` → `./src/*`

## Marque — Règles strictes

- **Nom** : `balise-ia` (minuscules). Jamais "Armor Analytics", "BALISE Data", "balisedata".
- **Email** : `contact@balise-ia.fr`. Jamais `balisedata@gmail.com`.
- **URL** : `https://balise-ia.fr`. Jamais `balisedata.fr`, `armor-analytics.fr`.
- **Palette** : vert breton `#1B4D3E` (primary), `#40916C` (accent), `slate-*` (gris). Jamais `blue-*` ni `gray-*`.
- **Logo** : phare "Clean Silhouette" V3 — défini en SVG dans `src/components/ui/logo.tsx`
- **Ton** : concret, terrain, sobre, orienté ROI. Pas de jargon startup.

## Architecture

### Configuration

`src/lib/constants.ts` — source de vérité unique : `SITE_CONFIG`, `KEY_METRICS`, `SERVICES`, `PROJECTS`, `FAQ_ITEMS`, `NAV_LINKS`, `TRUST_SIGNALS` + helpers (`getCalendlyUrl()`, `getContactEmail()`, `getBrandName()`)

### Design system

- **Hero homepage** : fond `#0F2B23`, CTA blanc inversé
- **Hero pages intérieures** : fond `#0F2B23`, titre blanc, sous-titre `white/70`
- **Header** : transparent sur hero → solide blanc au scroll (transition 300ms)
- **Sections** : alternance `bg-white` / `bg-slate-50`, padding `py-20 sm:py-24`
- **Labels section** : `text-sm font-semibold uppercase tracking-wider text-[#40916C]`
- **Cards** : `rounded-2xl`, borders `slate-200`, hover shadows

### Composants

- `src/components/layout/` — Header (transparent→solide), Footer (CTA vert + liens villes)
- `src/components/sections/` — Hero, HeroV3, Services, Methodology, Projects, About, FAQ, ContactSection, ContactForm, TrustBand, StackGrid, LogoCarousel
- `src/components/audit/` — Quiz audit IA complet
- `src/components/ui/` — shadcn/ui + logo, animated-counter, fade-in

### Pages

- `/` — Homepage (Hero + TrustBand + Services + Methodology + Projects + About + FAQ + Contact)
- `/services` — Offres détaillées
- `/projets` — Cas clients avec avant/après
- `/cas-clients` — Études de cas détaillées (5 cas avec témoignages)
- `/a-propos` — Histoire, valeurs, avantages, zone d'intervention
- `/audit-ia` — Quiz interactif 12 questions
- `/contact` — Formulaire + Calendly
- `/interventions/[ville]` — 6 pages SEO localisées (SSG)

### API Routes

- `POST /api/contact` — Validation Zod, rate limiting (5 req/15min/IP), honeypot, envoi Resend
- `POST /api/audit` — Scoring quiz, email résultats, Google Sheets (optionnel)

### Tests E2E

17 tests Playwright dans `e2e/` :
- `navigation.spec.ts` — Pages principales, header, footer
- `seo.spec.ts` — Meta tags, sitemap, robots, pages localisées, 404
- `contact-form.spec.ts` — Validation, saisie, honeypot

## Code style

- Prettier: semi, singleQuote, tabWidth 2, printWidth 100
- ESLint: next/core-web-vitals + typescript + prettier
- Tailwind: `slate-*` pour les gris, `[#1B4D3E]` / `[#40916C]` pour le brand
- Apostrophes JSX : `&apos;` (texte français)

## Environnement

Voir `.env.example` pour toutes les variables nécessaires.
