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
npm run test:e2e     # Tests E2E Playwright (30 tests, chromium)
npm run test:e2e:ui  # Tests E2E avec interface graphique
```

Pour lancer un seul fichier de test : `npx playwright test e2e/navigation.spec.ts`

Déploiement : chaque push sur `master` déclenche un déploiement automatique sur Vercel.

## Marque — Règles strictes

- **Nom** : `balise-ia` (minuscules). Jamais "Armor Analytics", "BALISE Data", "balisedata".
- **Email** : `contact@balise-ia.fr`. Jamais `balisedata@gmail.com`.
- **URL** : `https://www.balise-ia.fr` (avec `www`, canonique). Jamais `balisedata.fr`, `armor-analytics.fr`.
- **Palette bretonne** (tokens Tailwind `breton-*`) : `navy` (#0C1F3F), `slate` (#2E4057), `emerald` (#1A6B4A), `moss` (#2D7A4F), `sand` (#E8E0D5), `granite` (#8B9AAB), `foam` (#F4F8F5), `copper` (#9A5F3A) — accent principal text, `copper-light` (#C17F59) — accent décoratif SVG. Utiliser les classes `breton-*` partout, jamais de hex bruts ni `blue-*`/`gray-*`. Utiliser `breton-copper` pour le texte, `breton-copper-light` pour les éléments décoratifs SVG uniquement.
- **Typo** : Instrument Serif pour les H1, Geist Sans pour le body
- **Logo** : phare V18 — cercle centré + faisceau horizontal breakout + bande cyan bold. SVG inline dans `src/components/ui/logo.tsx`. Texte : `balise` (navy/white) + `-ia` (accent cyan), font-weight 800.
- **Ton** : concret, terrain, sobre, orienté ROI. Pas de jargon startup.

## Architecture

**Stack** : Next.js 16 (App Router) + React 19 + TypeScript strict + Tailwind CSS v4 + shadcn/ui (New York) + Framer Motion + Resend + Vercel.

### Configuration unique

`src/lib/constants.ts` est la seule source de vérité pour tout le contenu textuel. Il exporte `SITE_CONFIG`, `KEY_METRICS`, `SERVICES` (4 expertises modulables), `PROJECTS` (4 cas clients), `FAQ_ITEMS` (6 questions), `NAV_LINKS`, `PROCESS_STEPS` (4 étapes), `TRUST_SIGNALS`, `TECH_STACK`, `SECTORS`, `METHODOLOGY`, `PRICE_FACTORS` et les helpers `getContactEmail()`, `getBrandName()`. Calendly a été retiré du site — les CTA pointent vers `/audit-ia` (quiz) et `/contact` (formulaire Resend).

Autres fichiers de données :
- `src/data/blog-articles.ts` — Articles blog (metadata + contenu HTML)
- `src/data/case-studies.ts` — Cas clients (5 études, utilisées par listing et pages individuelles)
- `src/data/audit-questions.ts` — Questions du quiz audit IA

### Design system

- **Hero homepage** (`HeroV3`) : fond gradient `breton-foam` → `breton-sand`, badge local centré avec dot emerald pulsant, titre Instrument Serif centré + sous-titre + 2 CTAs + micro-preuves. `min-h-screen`, centré `text-center`.
- **Hero pages intérieures** (`Hero`) : fond gradient `breton-foam` → `breton-sand`, API simplifiée `title` + `subtitle`, `-mt-16 pt-32` pour chevaucher le header.
- **Header** : sticky top-0 z-50, frosted glass (`backdrop-blur-[24px] saturate-[1.8]`), toujours clair. Logo toujours `variant='default'` (navy + cuivre). CTA principal "Mes priorités IA →" (pointe vers `/audit-ia`, le quiz de diagnostic).
- **Sections** : alternance `bg-white` / `bg-breton-foam` / bande `bg-breton-sand`. Le navy n'apparaît qu'au CTA final et au footer. Padding `py-[110px]` desktop, `py-16` mobile
- **Cards** : `rounded-2xl`, borders `breton-sand`, hover shadows
- **CTA sombres** : fond `breton-navy`, bouton sable inversé `bg-breton-sand text-breton-navy`
- **Footer** : fond `breton-navy`, carte SVG Bretagne, badges confiance. Labels de colonnes = `<p>` (pas `<h3>`).
- **Animations** : variants réutilisables dans `src/lib/animations.ts`. Tous les composants Framer Motion respectent `useReducedMotion`.
- **Contrastes** : minimum `text-white/50` sur fond navy (WCAG AA). Jamais `text-white/30` ou `text-white/40`.

### Homepage — ordre des sections

```
HeroV3 (badge local + titre centré) → MetricsBand (bande sable, 4 métriques) →
LogoCarousel (logos clients marquee) → PillarsSection (3 piliers foam) →
Services (grille 2×2, 4 offres) → Projects (3 cas clients compact) →
IncarnationSection (photo + citation + badges) → CtaContact (CTA final navy)
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
- `balise-ia.fr` → 308 → `www.balise-ia.fr` (configuré dans Vercel Domains + `vercel.json`)

### Blog

- Route `/blog` avec listing + `/blog/[slug]` (SSG via `generateStaticParams`)
- Articles stockés dans `src/data/blog-articles.ts` (metadata + contenu HTML, 9 articles)
- JSON-LD Article + BreadcrumbList schema par article
- Prose styling via `.article-prose` dans `globals.css`
- RSS feed : `/blog/feed.xml` (Route Handler, cache 1h)
- Contenu HTML sanitisé via `sanitizeHtml()` (strip script/iframe/event handlers)

### Cas clients

- Route `/cas-clients` avec listing + `/cas-clients/[slug]` (SSG via `generateStaticParams`)
- 5 études de cas dans `src/data/case-studies.ts`
- JSON-LD Article + BreadcrumbList + Review schema par cas
- Avant/après, métriques, témoignage, outils

### Landing pages SEO

- `/power-bi-bretagne` — Power BI pour PME en Bretagne (JSON-LD FAQPage)
- `/automatisation-commandes-pme` — Automatisation commandes ERP (JSON-LD FAQPage)
- `/consultant-data-lorient` — Consultant data local (JSON-LD LocalBusiness)
- `/formation-ia-pme` — Formation IA pour PME (JSON-LD FAQPage)
- `/intelligence-artificielle-bretagne` — IA pour PME Bretagne (JSON-LD FAQPage)

### Pages légales

- `/mentions-legales` — Mentions légales (noindex)
- `/politique-confidentialite` — Politique de confidentialité RGPD CNIL-compliant (noindex)

### Analytics & Tracking

- **Vercel Analytics** : toujours actif
- **GA4** : actif — `G-FEZEF30YF9` — consent mode v2 (denied par défaut)
- **GTM** : activable via `NEXT_PUBLIC_GTM_ID` (env var Vercel) — avec fallback `<noscript>`
- Composant `src/components/Analytics.tsx` — rendu conditionnel si env var définie
- **Cookie banner RGPD** : `src/components/ui/cookie-banner.tsx` — accepter/refuser, localStorage, `role="dialog"`, focus trap, Escape
- **Conversion events GA4** : `contact_form_submit`, `audit_quiz_complete`, `cookie_consent` — via `trackEvent()` dans `Analytics.tsx`
- **Web Vitals** : `src/components/WebVitals.tsx` — LCP/CLS/INP/TTFB reportés vers GA4

### API Routes

- `POST /api/contact` — Validation Zod, rate limiting (5 req/15min/IP), honeypot, envoi Resend, HTML échappé (anti-XSS)
- `POST /api/audit` — Validation Zod, rate limiting, scoring quiz, email résultats, HTML échappé, sauvegarde Google Sheets (optionnel)
- `POST /api/subscribe` — Validation email, rate limiting, newsletter
- `GET /api/og` — Image OpenGraph dynamique 1200×630 (edge runtime, @vercel/og), params sanitisés
- `GET /blog/feed.xml` — Flux RSS 2.0 (cache 1h)

Rate limiting : `src/lib/rate-limit.ts` — in-memory par défaut, Upstash Redis si `UPSTASH_REDIS_REST_URL` configuré.

### Tests E2E

30 tests Playwright dans `e2e/` :
- `navigation.spec.ts` — 12 tests : pages principales, header, footer, offres, redirect /projets→/cas-clients, /mentions-legales, /politique-confidentialite, /cas-clients/[slug], 404 slug inexistant
- `seo.spec.ts` — 7 tests : meta tags, sitemap, robots, pages localisées, 404, meta cas-clients, sitemap nouvelles pages
- `contact-form.spec.ts` — 3 tests : validation, saisie, honeypot
- `api.spec.ts` — 8 tests : validation Zod contact, honeypot, body incomplet audit, rate limiting audit

Le serveur de dev est réutilisé si déjà lancé (`reuseExistingServer: true`).

**Note :** `.npmrc` contient `force=true` pour contourner le conflit `lightningcss` arm64/x64 entre le Mac Apple Silicon et Vercel (linux x64).

## Code style

- Prettier: semi, singleQuote, tabWidth 2, printWidth 100
- ESLint: next/core-web-vitals + typescript + prettier, `no-console` warn sauf warn/error
- Tailwind: `slate-*` pour les gris, `breton-*` pour la palette brand (jamais de hex bruts), `breton-copper` et `breton-copper-light` pour l'accent (jamais `breton-accent` qui est supprimé)
- Apostrophes en JSX : utiliser `&apos;` (texte français avec beaucoup de `d'`, `l'`, `n'`)
- Commits : Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`)
- **Title tags** : ne PAS inclure `balise-ia` dans les titles de page — le template layout.tsx l'ajoute automatiquement via `template: '%s | balise-ia'`

## Sécurité

- **Headers HTTP** (`next.config.ts`) : X-Frame-Options DENY, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP
- **CSP** : `script-src 'self' 'unsafe-inline' 'unsafe-eval'` (GA4, GTM, Vercel), `img-src 'self' data: https:`, `font-src 'self' fonts.gstatic.com`
- **Rate limiting** : `src/lib/rate-limit.ts` — in-memory (Map) ou distribué (Upstash Redis)
- **XSS** : échappement HTML dans les emails, sanitization du contenu blog, validation/sanitization des params OG
- **RGPD** : consent mode GA4 denied par défaut, cookie banner avec focus trap, politique de confidentialité dédiée

## PWA

- `public/manifest.json` — nom, couleurs, icônes 192×512
- Icônes dans `public/icon-192.png` et `public/icon-512.png` (phare balise-ia)
- `manifest` référencé dans `layout.tsx` metadata

## Error Handling

- `src/components/ui/error-boundary.tsx` — ErrorBoundary React class component, fallback UI en français
- Wraps `<main>` dans `layout.tsx`

## Environnement

Voir `.env.example` pour toutes les variables. Les 3 variables Resend sont requises, les 3 Google Sheets, les 2 Analytics et les 2 Upstash sont optionnelles.
