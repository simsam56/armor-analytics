# Refonte proposition commerciale — balise-ia

**Date :** 2026-03-28
**Statut :** Validé par l'utilisateur (v3)
**Scope :** Restructuration du site + Formation simplifée + Quiz mis en valeur

---

## 1. Contexte et objectifs

Le site balise-ia souffre de trop de texte et d'une structure commerciale peu lisible pour un prospect qui découvre. Les offres nautiques (Le Repérage, Le Cap, L'Équipage) sont méconnues à froid. L'objectif est de :

1. Restructurer autour de 3 piliers fonctionnels clairs : **IA · Data · Formation**
2. **Promouvoir le quiz `/audit-ia`** comme point d'entrée principal (remplace le CTA Calendly)
3. **Remplacer Calendly** par un formulaire de contact simple (`/contact` existant)
4. Simplifier la section Formation : PDF gratuits comme lead magnets, formations payantes en v2
5. Alléger significativement le volume de texte sur toutes les pages

---

## 2. Architecture du site

### Navigation principale
```
balise-ia  |  IA  |  Data  |  Formation  |  Réalisations  |  Blog  |  [Faire le diagnostic →]
```

Le CTA header pointe vers `/audit-ia` (quiz), pas vers Calendly ni `/contact`.

### Pages restructurées

| URL | Statut | Notes |
|-----|--------|-------|
| `/` | Modifiée | Homepage — 6 sections, structure allégée |
| `/ia` | Nouvelle | Pilier IA & Automatisation |
| `/data` | Nouvelle | Pilier Data & Reporting |
| `/audit-ia` | Valorisée | Quiz existant — promu comme CTA principal |
| `/services` | Redirigée | 301 → `/ia` (configuré dans `next.config.ts`) |
| `/cas-clients` | Inchangée | |
| `/blog` | Inchangée | |
| `/a-propos` | Inchangée | |
| `/contact` | Inchangée | Formulaire email — CTA secondaire partout |
| Landing pages SEO | Inchangées | Ajustements mineurs documentés en §6 |

### Pages Formation (simplifiées)

| URL | Rôle |
|-----|------|
| `/formation` | Page pilier — présente les 2 types + PDFs gratuits |
| `/formation/merci` | Post-téléchargement PDF — confirmation + upsell quiz |

**Pas de** `/formation/[slug]`, `/formation/[slug]/acces`, Stripe, Redis, webhooks en v1.

---

## 3. CTA — nouvelle hiérarchie

Calendly est **supprimé**. Les CTAs sont unifiés :

| Position | CTA | Destination |
|----------|-----|-------------|
| Header (principal) | "Faire le diagnostic →" | `/audit-ia` |
| Homepage hero (primaire) | "Faire le diagnostic →" | `/audit-ia` |
| Homepage hero (secondaire) | "Voir les réalisations" | `/cas-clients` |
| Fin de chaque page pilier | "Faire le diagnostic →" | `/audit-ia` |
| Après quiz (résultats) | "Discutons de vos résultats" | `/contact` |
| Footer | "Nous contacter" | `/contact` |

**Suppression `getCalendlyUrl()` — 15 call sites dans 8 fichiers à traiter :**
- `src/components/layout/Header.tsx` (×2)
- `src/components/layout/Footer.tsx` (×1)
- `src/components/sections/HeroV3.tsx` (×1)
- `src/components/ui/sticky-cta.tsx` (×1)
- `src/components/sections/CtaContact.tsx`, `CtaInline.tsx`, `Services.tsx`, `ContactSection.tsx`
- `src/app/audit-ia/page.tsx`, `src/app/services/page.tsx`, `src/app/a-propos/page.tsx`, `src/app/contact/page.tsx`, `src/app/merci/page.tsx`, `src/app/interventions/[ville]/page.tsx`

Remplacer chaque appel par `/contact` ou `/audit-ia` selon le contexte (voir §3). Supprimer ensuite `getCalendlyUrl()` de `constants.ts` et la variable `NEXT_PUBLIC_CALENDLY_URL`.

---

## 4. Quiz `/audit-ia` — mise en valeur

Le quiz existant score la maturité data/IA et oriente vers un pilier. Il devient le point d'entrée commercial principal.

### Changements sur le quiz
- Page `/audit-ia` : hero renforcé, titre plus accrocheur, sous-titre orienté bénéfice
- **Page de résultats** : doit recommander explicitement un pilier (IA / Data / Formation) avec un lien vers la page correspondante
- CTA final des résultats : "Discutons de vos résultats" → `/contact` (remplace Calendly)
- Le quiz est promu sur la homepage (section dédiée ou intégré dans le Hero)

### Position sur la homepage
Section distincte entre "3 Piliers" et "Cas clients" :
```
[Quiz] En 5 minutes, identifiez vos opportunités data & IA
→ Bouton "Faire le diagnostic" → /audit-ia
```

---

## 5. Homepage — nouvelle structure

### Sections (6, au lieu de 9)

| # | Section | Contenu | Remplace |
|---|---------|---------|---------|
| 1 | **Hero** | Titre court + sous-titre + CTA quiz + badges piliers | HeroV3 (allégé) |
| 2 | **Métriques + Logos** | 3 chiffres clés + logo carousel | MetricsBand + LogoCarousel fusionnés |
| 3 | **3 Piliers** | IA / Data / Formation — cards cliquables | PillarsSection + Services |
| 4 | **Quiz** | Accroche + bouton "Faire le diagnostic" | — (nouveau) |
| 5 | **Cas clients** | 2 exemples chiffrés + lien vers /cas-clients | Projects (réduit) |
| 6 | **CTA Final** | "Discutons de vos résultats" / "Nous contacter" | CtaContact |

**Supprimés :** Testimonials (doublonne), IncarnationSection (compactée dans le footer ou /a-propos).

### Visuels à conserver impérativement
- Fond vidéo drone (`VideoBackground`) dans le Hero
- Logo carousel animé (marquee)
- Photos terrain bretonnes

### Hero
- Titre : max 8 mots — ex. *"Data, IA et Formation pour les PME bretonnes"*
- Sous-titre : 1 phrase, max 15 mots
- CTA primaire : "Faire le diagnostic →" → `/audit-ia`
- CTA secondaire : "Voir les réalisations" → `/cas-clients`
- Badges : `IA` · `Data` · `Formation`

### Section 3 Piliers
- Cards cliquables → `/ia`, `/data`, `/formation`
- Description 2 lignes max par pilier
- Tags technos (Power BI, n8n, OCR…)
- Formation en couleur cuivre (`breton-copper`)

---

## 6. Pages piliers

### `/ia` — IA & Automatisation
- Hero court : titre + 1 phrase + CTA "Faire le diagnostic →"
- Cas d'usage : OCR, agents IA, classification, workflows n8n
- Outils : n8n, Make, Python, Claude
- 1-2 cas clients filtrés (secteur industriel)
- CTA navy en fin : "Faire le diagnostic →"

### `/data` — Data & Reporting
- Hero court : titre + 1 phrase + CTA "Faire le diagnostic →"
- Cas d'usage : dashboards temps réel, data engineering, ETL, reporting
- Outils : Power BI, Metabase, Microsoft Fabric, DuckDB, dbt
- 1-2 cas clients filtrés (métallurgie, franchises)
- CTA navy en fin : "Faire le diagnostic →"

### `/formation` — Formation
Deux sous-sections distinctes sur la même page :

**1. Accompagnement sur site**
- Description : on va chez le client, on forme les équipes pendant qu'elles mettent en place les outils
- Format : ateliers pratiques, petits groupes, sur mesure
- CTA : "Discutons de votre projet" → `/contact`

**2. Ressources en ligne (gratuites)**
- 1-2 PDFs téléchargeables en lead magnet (guide, checklist)
- Capture email obligatoire → Resend envoie le PDF
- Badge "Formations vidéo · Bientôt disponible" pour teaser la v2

---

## 7. Formation — flux PDF gratuit

```
Bouton "Télécharger gratuitement"
  → Modale (Prénom + Email)
  → POST /api/formation/register
      → Rate limiting : 3 req / 15 min / IP
      → Validation Zod (email, prénom)
      → Honeypot anti-spam
      → Resend : email avec PDF (URL Vercel Blob signée)
  → Redirect /formation/merci
```

### Stockage PDF
- Vercel Blob, chemin : `formations/gratuit/{slug}.pdf`
- Upload manuel avant mise en prod
- `pdfKey` dans la définition de la ressource → résolu en URL Blob dans la route API

### Type `FreeResource` (constants.ts)
```typescript
export type FreeResource = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'ia' | 'data' | 'general';
  format: 'pdf';
  duration: string;    // ex: "15 min"
  tags: string[];
  pdfKey: string;      // chemin Vercel Blob : formations/gratuit/{slug}.pdf
}
```

### Page `/formation/merci`
- Confirmation téléchargement
- "Vérifiez votre email"
- Upsell : "Et si on faisait le diagnostic ensemble ?" → CTA quiz `/audit-ia`

---

## 8. Constantes et migrations

### `constants.ts`
- `SERVICES` : restructuré — 2 entrées (ia, data), noms nautiques en commentaire uniquement
- Nouvelle export `FREE_RESOURCES` : tableau de `FreeResource[]`
- `NAV_LINKS` : mise à jour (`/ia`, `/data`, `/formation`)
- `PROCESS_STEPS` : **supprimé de `constants.ts`** — un seul fichier l'importe depuis constants :
  - `src/components/sections/Methodology.tsx` → supprimer le composant
  - **Note :** `intelligence-artificielle-bretagne/page.tsx`, `consultant-data-lorient/page.tsx` et `formation-ia-pme/page.tsx` définissent leur **propre** `const PROCESS_STEPS` locale — ils ne dépendent pas de constants, aucune modification requise
- `getCalendlyUrl()` : **supprimer après traitement des 15 call sites** (voir §3)

### Liens internes `/services` à mettre à jour
- `src/app/consultant-data-lorient/page.tsx` (×2) → `/data`
- `src/app/formation-ia-pme/page.tsx` → `/formation`
- `src/components/sections/Services.tsx` → sera supprimé/remplacé
- `src/data/blog-articles.ts` (×3) → `/ia` ou `/data` selon contexte
- `src/lib/constants.ts` NAV_LINKS → déjà mis à jour

---

## 9. Ce qui ne change pas (avec précisions)

- `/power-bi-bretagne`, `/automatisation-commandes-pme`, `/intelligence-artificielle-bretagne` — inchangées
- `/consultant-data-lorient` — inchangée **sauf** : liens → `/data` + retrait Methodology
- `/formation-ia-pme` — inchangée **sauf** : retrait Methodology + lien vers `/formation`
- `/cas-clients`, `/blog`, `/a-propos` — inchangées
- Design system (palette bretonne, Instrument Serif, Geist Sans)
- Composants visuels (vidéo drone, logo carousel, photos terrain)
- API `/api/contact` et `/api/og`
- Cookie banner RGPD, Analytics GA4/Vercel
- `robots.ts` — **à mettre à jour** : ajouter `/formation/merci/` aux disallowed. Aligner aussi le pattern `/merci` → `/merci/` (avec slash) pour couvrir les sous-paths. Résultat : `disallow: ['/api/', '/merci/', '/formation/merci/']`

---

## 10. Nouvelles dépendances

| Besoin | Solution |
|--------|----------|
| Email PDF | Resend (déjà intégré) |
| Stockage PDF | Vercel Blob (`@vercel/blob` — à installer) |

**Setup Vercel Blob :**
1. Provisionner un Blob store dans le dashboard Vercel (Storage → Blob)
2. `vercel env pull` pour récupérer `BLOB_READ_WRITE_TOKEN` en local
3. `npm install @vercel/blob`

Sans `BLOB_READ_WRITE_TOKEN`, la route `/api/formation/register` échouera silencieusement en production.

Pas de Stripe, Redis, ni hébergement vidéo en v1.

### Tests E2E à mettre à jour
Les changements suivants cassent des tests existants — à corriger en même temps que l'implémentation :

| Fichier | Test | Raison |
|---------|------|--------|
| `navigation.spec.ts` | `header nav a[href="/services"]` | Nav pointe maintenant vers `/ia` |
| `navigation.spec.ts` | `test('/services se charge avec les offres')` | Page `/services` n'existe plus |
| `navigation.spec.ts` | assertion `'Réserver un créneau'` | Texte Calendly supprimé |
| `seo.spec.ts` | sitemap contient `/services` | Sitemap doit lister `/ia`, `/data`, `/formation` |

---

## 11. Hors scope (v2)

- Formations vidéo payantes (Stripe Checkout, webhooks, tokens Redis)
- Abonnement Stripe
- Espace membre / authentification
- Certificats de complétion
- Contenu des formations vidéo (à créer séparément)
