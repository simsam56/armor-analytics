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
```

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **shadcn/ui** (New York style, RSC, `@/components/ui/`)
- **Resend** (emails contact + audit)
- **googleapis** (Google Sheets, lead capture, optionnel)
- **Zod** (validation runtime)
- Path alias: `@/*` → `./src/*`

## Marque — Règles strictes

- **Nom** : `balise-ia` (minuscules). Jamais "Armor Analytics", "BALISE Data", "balisedata".
- **Email** : `contact@balise-ia.fr`. Jamais `balisedata@gmail.com`.
- **URL** : `https://balise-ia.fr`. Jamais `balisedata.fr`, `armor-analytics.fr`.
- **Palette** : vert breton `#1B4D3E` (primary), `#40916C` (accent). Pas de bleu.
- **Logo** : phare "Clean Silhouette" V3 — défini en SVG dans `src/components/ui/logo.tsx`
- **Ton** : concret, terrain, sobre, orienté ROI. Pas de jargon startup.

## Architecture

### Configuration

`src/lib/constants.ts` — source de vérité unique : `SITE_CONFIG`, `KEY_METRICS`, `SERVICES`, `PROJECTS`, `FAQ_ITEMS`, `NAV_LINKS`, `TRUST_SIGNALS`

`src/lib/site-config.ts` — config typée avec helpers (`getCalendlyUrl()`, `getContactEmail()`). Utilisé par Header, Footer, layout. À terme, fusionner avec constants.ts.

### Composants

- `src/components/layout/` — Header, Footer (logo SVG phare intégré)
- `src/components/sections/` — Sections des pages (Hero, Services, FAQ, About, Contact...)
- `src/components/audit/` — Quiz audit IA (AuditQuiz, QuizQuestion, QuizProgress, EmailCapture, AuditResult)
- `src/components/ui/` — shadcn/ui + custom (logo, animated-counter, fade-in)
- `src/components/visuals/` — Illustrations SVG (hero, cas clients, métriques avant/après)

### API Routes

- `POST /api/contact` — Validation Zod, rate limiting (5 req/15min/IP), honeypot, envoi Resend
- `POST /api/audit` — Scoring quiz, email résultats, Google Sheets (optionnel)

### Données

- `src/data/audit-questions.ts` — Questions quiz avec scoring pondéré
- `src/data/project-recommendations.ts` — Recommandations par réponse
- `src/lib/audit-scoring.ts` — Calcul score, niveau maturité, recommandations

## Code style

- Prettier: semi, singleQuote, tabWidth 2, printWidth 100
- ESLint: next/core-web-vitals + typescript + prettier
- Apostrophes JSX : `&apos;` (texte français)
- `no-console` warn (sauf warn/error)

## Dettes connues

- `phone: '06 XX XX XX XX'` placeholder dans constants.ts
- `site-config.ts` et `constants.ts` à fusionner (duplication partielle)
- Palette bleu résiduelle dans certaines sections (migration en cours)
- Pas de tests (E2E ni unitaires)

## Environnement

Voir `.env.example` pour toutes les variables nécessaires.
