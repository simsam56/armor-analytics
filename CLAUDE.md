# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Identité

**balise-ia** — Site vitrine B2B pour un collectif data ciblant les PME et réseaux bretons (Lorient). Le nom du repo (`armor-analytics`) est un vestige historique ; le produit s'appelle **balise-ia**. Tagline : "Data, automatisation et IA pour les PME bretonnes". Tout le contenu est en français.

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

Déploiement : chaque push sur `master` déclenche un déploiement automatique sur Vercel.

## Marque — Règles strictes

- **Nom** : `balise-ia` (minuscules). Jamais "Armor Analytics", "BALISE Data", "balisedata".
- **Email** : `contact@balise-ia.fr`. Jamais `balisedata@gmail.com`.
- **URL** : `https://balise-ia.fr`. Jamais `balisedata.fr`, `armor-analytics.fr`.
- **Palette bretonne** (tokens Tailwind `breton-*`) : `navy` (#0C1F3F), `slate` (#2E4057), `emerald` (#1A6B4A), `moss` (#2D7A4F), `sand` (#E8E0D5), `granite` (#8B9AAB), `foam` (#F4F8F5), `accent` (#00B4D8 cyan). Utiliser les classes `breton-*` partout, jamais de hex bruts ni `blue-*`/`gray-*`.
- **Typo** : Instrument Serif pour les H1, Geist Sans pour le body
- **Logo** : phare "Clean Silhouette" V3 en navy + accent cyan — SVG inline dans `src/components/ui/logo.tsx`
- **Ton** : concret, terrain, sobre, orienté ROI. Pas de jargon startup.

## Architecture

**Stack** : Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS v4 + shadcn/ui (New York) + Framer Motion + Resend + Vercel.

### Configuration unique

`src/lib/constants.ts` est la seule source de vérité pour tout le contenu textuel. Il exporte `SITE_CONFIG`, `KEY_METRICS`, `SERVICES` (4 expertises modulables), `PROJECTS` (4 cas clients), `FAQ_ITEMS` (6 questions), `NAV_LINKS`, `PROCESS_STEPS` (4 étapes), `TRUST_SIGNALS`, `TECH_STACK`, `SECTORS`, `METHODOLOGY`, `PRICE_FACTORS` et les helpers `getCalendlyUrl()`, `getContactEmail()`, `getBrandName()`.

### Design system

- **Hero homepage** (`HeroV3`) : fond `breton-navy` plein, barre locale intégrée ("Basés à Lorient..."), titre + sous-titre + micro-preuves texte + 2 CTAs. Pas de particles, pas de wave SVG. `-mt-16` pour chevaucher le header.
- **Hero pages intérieures** (`Hero`) : fond `breton-navy`, API simplifiée `title` + `subtitle`, `-mt-16 pt-32` pour chevaucher le header.
- **Header** : sticky top-0 z-50, transparent sur fond sombre → solide blanc au scroll. Logo bascule entre variant `white` et `default`. Un seul CTA "Demander un diagnostic" (Calendly).
- **Sections** : alternance `bg-white` / `bg-slate-50` / `bg-breton-navy`, padding `py-24 sm:py-32`
- **Cards** : `rounded-2xl`, borders `slate-200`, hover shadows
- **CTA sombres** : fond `breton-navy`, bouton blanc inversé `bg-white text-breton-navy`
- **Footer** : fond `breton-navy`, carte SVG Bretagne, badges confiance. Labels de colonnes = `<p>` (pas `<h3>`).
- **Animations** : variants réutilisables dans `src/lib/animations.ts`. Tous les composants Framer Motion respectent `useReducedMotion`.
- **Contrastes** : minimum `text-white/50` sur fond navy (WCAG AA). Jamais `text-white/30` ou `text-white/40`.

### Homepage — ordre des sections

```
HeroV3 (local bar + titre) → ProofBlock (3 piliers) → ExpertisesBlock (3 compétences) →
CTA Quiz (micro-conversion audit-ia) → Services (grille 2×2, 4 offres) → ResultsBlock (qualitatif) →
Projects (4 cas clients compact) → Methodology (4 étapes) → About (incarnation + 3 piliers) →
FAQ (6 questions, accordéon simple) → CtaContact (CTA final)
```

Sections wrappées dans `<AnimatedSection>`. StickyCta mobile fixe après scroll du hero.

### Offres (SERVICES)

4 expertises modulables :
1. **Audit & Diagnostic** (`isEntryPoint: true`) — 2 000–5 000 € HT — 1 à 2 semaines
2. **Pilotage data** — pipeline + dataviz — sur devis — 4 à 10 semaines
3. **Automatisations & IA utiles** — OCR, prévision, classification — 5 000–20 000 € HT — 4 à 10 semaines
4. **Formation & Accompagnement** — forfait mensuel — 800–3 200 € HT/mois — selon besoin

### Redirections

- `/projets` → 301 → `/cas-clients` (anti-cannibalisation SEO, configuré dans `next.config.ts`)

### Analytics

- **Vercel Analytics** : toujours actif
- **GA4** : activable via `NEXT_PUBLIC_GA_ID` (env var Vercel)
- **GTM** : activable via `NEXT_PUBLIC_GTM_ID` (env var Vercel)
- Composant `src/components/Analytics.tsx` — rendu conditionnel si env var définie.

### API Routes

- `POST /api/contact` — Validation Zod, rate limiting (5 req/15min/IP), honeypot, envoi Resend
- `POST /api/audit` — Scoring quiz, email résultats, sauvegarde Google Sheets (optionnel)
- `GET /api/og` — Image OpenGraph dynamique 1200×630 (edge runtime, @vercel/og)

### Tests E2E

24 tests Playwright dans `e2e/` :
- `navigation.spec.ts` — 9 tests : pages principales, header, footer, offres, redirect /projets→/cas-clients
- `seo.spec.ts` — 5 tests : meta tags, sitemap, robots, pages localisées, 404
- `contact-form.spec.ts` — 3 tests : validation, saisie, honeypot
- `api.spec.ts` — 7 tests : validation Zod contact, honeypot, body incomplet audit

Le serveur de dev est réutilisé si déjà lancé (`reuseExistingServer: true`).

## Code style

- Prettier: semi, singleQuote, tabWidth 2, printWidth 100
- ESLint: next/core-web-vitals + typescript + prettier, `no-console` warn sauf warn/error
- Tailwind: `slate-*` pour les gris, `breton-*` pour la palette brand (jamais de hex bruts)
- Apostrophes en JSX : utiliser `&apos;` (texte français avec beaucoup de `d'`, `l'`, `n'`)
- Commits : Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **Title tags** : ne PAS inclure `balise-ia` dans les titles de page — le template layout.tsx l'ajoute automatiquement via `template: '%s | balise-ia'`

## Environnement

Voir `.env.example` pour toutes les variables. Les 3 variables Resend sont requises, les 3 Google Sheets et les 2 Analytics sont optionnelles.
