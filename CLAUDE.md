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
npm run test:e2e     # Tests E2E Playwright (24 tests, chromium)
npm run test:e2e:ui  # Tests E2E avec interface graphique
```

Pour lancer un seul fichier de test : `npx playwright test e2e/navigation.spec.ts`

## Marque — Règles strictes

- **Nom** : `balise-ia` (minuscules). Jamais "Armor Analytics", "BALISE Data", "balisedata".
- **Email** : `contact@balise-ia.fr`. Jamais `balisedata@gmail.com`.
- **URL** : `https://balise-ia.fr`. Jamais `balisedata.fr`, `armor-analytics.fr`.
- **Palette** : vert breton `#1B4D3E` (primary), `#40916C` (accent), `slate-*` (gris). Jamais `blue-*` ni `gray-*` dans les classes Tailwind.
- **Logo** : phare "Clean Silhouette" V3 — SVG inline dans `src/components/ui/logo.tsx`
- **Ton** : concret, terrain, sobre, orienté ROI. Pas de jargon startup.

## Architecture

### Configuration unique

`src/lib/constants.ts` est la seule source de vérité. Il exporte `SITE_CONFIG`, `KEY_METRICS`, `SERVICES`, `PROJECTS`, `FAQ_ITEMS`, `NAV_LINKS`, `PROCESS_STEPS`, `TRUST_SIGNALS` et les helpers `getCalendlyUrl()`, `getContactEmail()`, `getBrandName()`. Il n'y a pas de `site-config.ts` (supprimé et fusionné).

### Design system

- **Hero homepage** (`HeroV3`) : fond `#0F2B23`, CTA blanc inversé
- **Hero pages intérieures** (`Hero`) : fond `#0F2B23`, API simplifiée `title` + `subtitle`
- **Header** : transparent sur fond sombre → solide blanc au scroll (`scrolled` state). Logo bascule entre variant `white` et `default`.
- **Sections** : alternance `bg-white` / `bg-slate-50`, padding `py-20 sm:py-24`
- **Labels section** : `text-sm font-semibold uppercase tracking-wider text-[#40916C]`
- **Cards** : `rounded-2xl`, borders `slate-200`, hover shadows
- **CTA sombres** : fond `#0F2B23`, bouton blanc inversé `bg-white text-[#1B4D3E]`

### Pages et routing

22 pages au total. Les pages `/interventions/[ville]` utilisent `generateStaticParams` pour pré-rendre 6 villes bretonnes (Lorient, Vannes, Quimper, Rennes, Brest, Saint-Brieuc). La homepage compose : HeroV3 → TrustBand → Services → Methodology → Projects → About → FAQ → ContactSection, chaque section wrappée dans `<AnimatedSection>` (Framer Motion) pour une apparition au scroll. Hero, TrustBand, Services et Methodology ont des animations stagger internes. Les variants réutilisables sont dans `src/lib/animations.ts` (fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer). 7 pages ont un canonical explicite.

### API Routes

- `POST /api/contact` — Validation Zod, rate limiting (5 req/15min/IP), honeypot (`name="website"` off-screen), envoi Resend
- `POST /api/audit` — Scoring quiz, email résultats, sauvegarde Google Sheets (optionnel)

### Tests E2E

24 tests Playwright dans `e2e/` :
- `navigation.spec.ts` — 8 tests : pages principales, header, footer
- `seo.spec.ts` — 5 tests : meta tags, sitemap, robots, pages localisées, 404
- `contact-form.spec.ts` — 3 tests : validation, saisie, honeypot
- `api.spec.ts` — 7 tests : validation Zod contact, honeypot, body incomplet audit

Le serveur de dev est réutilisé si déjà lancé (`reuseExistingServer: true`).

## Code style

- Prettier: semi, singleQuote, tabWidth 2, printWidth 100
- ESLint: next/core-web-vitals + typescript + prettier, `no-console` warn sauf warn/error
- Tailwind: `slate-*` pour les gris, `[#1B4D3E]` / `[#40916C]` pour le brand
- Apostrophes en JSX : utiliser `&apos;` (texte français avec beaucoup de `d'`, `l'`, `n'`)

## Environnement

Voir `.env.example` pour toutes les variables. Les 3 variables Resend sont requises, les 3 Google Sheets sont optionnelles.
