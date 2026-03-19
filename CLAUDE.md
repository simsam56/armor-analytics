# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Identité

**balise-ia** — Site vitrine B2B pour un collectif data ciblant les PME et réseaux bretons (Lorient). Le nom du repo (`armor-analytics`) est un vestige historique ; le produit s'appelle **balise-ia**. Tagline : "Votre équipe data externalisée". Tout le contenu est en français.

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
- **Palette bretonne** (tokens Tailwind `breton-*`) : `navy` (#0C1F3F), `slate` (#2E4057), `emerald` (#1A6B4A), `moss` (#2D7A4F), `sand` (#E8E0D5), `granite` (#8B9AAB), `foam` (#F4F8F5), `accent` (#00B4D8 cyan). Utiliser les classes `breton-*` partout, jamais de hex bruts ni `blue-*`/`gray-*`.
- **Typo** : Instrument Serif pour les H1, Geist Sans pour le body
- **Logo** : phare "Clean Silhouette" V3 en navy + accent cyan — SVG inline dans `src/components/ui/logo.tsx`
- **Ton** : concret, terrain, sobre, orienté ROI. Pas de jargon startup.

## Architecture

### Configuration unique

`src/lib/constants.ts` est la seule source de vérité. Il exporte `SITE_CONFIG`, `KEY_METRICS`, `SERVICES` (5 : 4 offres numérotées + 1 module IA transversal avec `isTransversal: true`), `PROJECTS` (4 cas clients), `FAQ_ITEMS` (13), `NAV_LINKS`, `PROCESS_STEPS` (4 étapes), `TRUST_SIGNALS`, `TECH_STACK`, `SECTORS`, `METHODOLOGY`, `PRICE_FACTORS` et les helpers `getCalendlyUrl()`, `getContactEmail()`, `getBrandName()`. Il n'y a pas de `site-config.ts` (supprimé et fusionné).

### Design system

- **Hero homepage** (`HeroV3`) : gradient `breton-navy` → `breton-slate`, texture grain, vagues SVG animées, H1 en serif
- **Hero pages intérieures** (`Hero`) : fond `breton-navy`, API simplifiée `title` + `subtitle`
- **Header** : transparent sur fond sombre → solide blanc au scroll (`scrolled` state). Logo bascule entre variant `white` et `default`.
- **Sections** : alternance `bg-white` / `bg-slate-50`, padding `py-20 sm:py-24`
- **Labels section** : `text-sm font-semibold uppercase tracking-wider text-breton-moss`
- **Cards** : `rounded-2xl`, borders `slate-200`, hover shadows
- **CTA sombres** : fond `breton-navy`, bouton blanc inversé `bg-white text-breton-navy`
- **Footer** : fond `breton-navy`, carte SVG Bretagne avec 6 villes animées, badges confiance

### Pages et routing

22 pages au total. Les pages `/interventions/[ville]` utilisent `generateStaticParams` pour pré-rendre 6 villes bretonnes. La homepage compose : HeroV3 (avec DashboardMockup) → TrustBand → Services (4 offres en grid + module IA transversal en bandeau) → CtaInline → Methodology (4 étapes + bandeau IA) → CtaInline → Projects (4 cas clients) → About → FAQ → CtaContact, chaque section wrappée dans `<AnimatedSection>` (Framer Motion). Le formulaire de contact complet est uniquement sur `/contact` — les autres pages utilisent `CtaContact` ou `CtaInline` (CTA léger). Un `StickyCta` mobile fixe apparaît après scroll du hero (lg:hidden, dismiss possible). Hero, TrustBand, Services et Methodology ont des animations stagger internes. Les variants réutilisables sont dans `src/lib/animations.ts` (fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer). 7 pages ont un canonical explicite.

### Offres (SERVICES)

5 entrées dans `SERVICES` :
1. **Diagnostic & Priorisation** (step 1, `isEntryPoint: true`) — 2 000–5 000 € HT
2. **Data Platform** (step 2) — 10 000–30 000 € HT
3. **Dashboards & Analyse** (step 3) — 8 000–25 000 € HT
4. **Pilotage Data Continu** (step 4) — 800–3 200 € HT/mois
5. **Module IA** (`isTransversal: true`, step null) — +5 000–20 000 € HT en complément

Le module IA a un champ `useCases` (exemples par étape) et n'est jamais vendu seul. Les 4 premières offres ont `isTransversal: false`.

### API Routes

- `POST /api/contact` — Validation Zod, rate limiting (5 req/15min/IP), honeypot (`name="website"` off-screen), envoi Resend
- `POST /api/audit` — Scoring quiz, email résultats, sauvegarde Google Sheets (optionnel)
- `GET /api/og` — Génère dynamiquement une image OpenGraph 1200x630 (edge runtime, @vercel/og). Accepte `?title=` et `?subtitle=`.

### Tests E2E

24 tests Playwright dans `e2e/` :
- `navigation.spec.ts` — 9 tests : pages principales, header, footer, offres (5 titres vérifiés)
- `seo.spec.ts` — 5 tests : meta tags, sitemap, robots, pages localisées, 404
- `contact-form.spec.ts` — 3 tests : validation, saisie, honeypot
- `api.spec.ts` — 7 tests : validation Zod contact, honeypot, body incomplet audit

Le serveur de dev est réutilisé si déjà lancé (`reuseExistingServer: true`).

## Code style

- Prettier: semi, singleQuote, tabWidth 2, printWidth 100
- ESLint: next/core-web-vitals + typescript + prettier, `no-console` warn sauf warn/error
- Tailwind: `slate-*` pour les gris, `breton-*` pour la palette brand (jamais de hex bruts)
- Apostrophes en JSX : utiliser `&apos;` (texte français avec beaucoup de `d'`, `l'`, `n'`)

## Environnement

Voir `.env.example` pour toutes les variables. Les 3 variables Resend sont requises, les 3 Google Sheets sont optionnelles.
