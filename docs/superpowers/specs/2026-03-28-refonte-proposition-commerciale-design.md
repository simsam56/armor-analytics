# Refonte proposition commerciale — balise-ia

**Date :** 2026-03-28
**Statut :** Validé par l'utilisateur
**Scope :** Restructuration du site + e-commerce Formation (MVP)

---

## 1. Contexte et objectifs

Le site balise-ia souffre de trop de texte et d'une structure commerciale peu lisible pour un prospect qui découvre. Les offres nautiques (Le Repérage, Le Cap, L'Équipage) sont méconnues à froid. L'objectif est de :

1. Restructurer autour de 3 piliers fonctionnels clairs : **IA · Data · Formation**
2. Repositionner le Diagnostic comme CTA universel (point d'entrée, pas une offre)
3. Ajouter un e-commerce Formation MVP (PDF gratuits + formations vidéo payantes Stripe)
4. Alléger significativement le volume de texte sur toutes les pages

---

## 2. Architecture du site

### Navigation principale
```
balise-ia  |  IA  |  Data  |  Formation  |  Réalisations  |  Blog  |  [Demander un diagnostic →]
```

### Pages restructurées

| URL | Statut | Notes |
|-----|--------|-------|
| `/` | Modifiée | Homepage — 6 sections, structure allégée |
| `/ia` | Nouvelle | Remplace `/services` pour le pilier IA |
| `/data` | Nouvelle | Remplace `/services` pour le pilier Data |
| `/services` | Redirigée | 301 → `/ia` (cible définitive, configurée dans `next.config.ts`) |
| `/cas-clients` | Inchangée | |
| `/blog` | Inchangée | |
| `/a-propos` | Inchangée | |
| Landing pages SEO | Inchangées | `/power-bi-bretagne`, `/consultant-data-lorient`, etc. |

### Nouvelles pages Formation

| URL | Rôle |
|-----|------|
| `/formation` | Catalogue — liste toutes les formations avec filtres |
| `/formation/[slug]` | Page détail d'une formation |
| `/formation/[slug]/acces` | Contenu protégé par token (vidéo) |
| `/formation/merci?type=free` | Post-inscription gratuite — confirmation + upsell formations payantes |
| `/formation/merci?type=paid` | Post-achat — confirmation + "vérifiez votre email pour accéder" |

---

## 3. Homepage — nouvelle structure

### Avant → Après

| Avant (9 sections) | Après (6 sections) |
|---|---|
| HeroV3 — long, beaucoup de texte | **Hero** — titre court + 3 piliers badges + 2 CTAs |
| MetricsBand | **Métriques + Logos** — fusionnés en 1 bande |
| LogoCarousel | *(fusionné avec métriques)* |
| PillarsSection — 3 piliers longs | **3 Piliers** — IA / Data / Formation, cards cliquables |
| Services — 3 offres nautiques | *(remplacé par 3 Piliers)* |
| Projects — 3 cas clients | **Cas clients** — 2 exemples chiffrés + lien |
| Testimonials | *(supprimé — doublonne avec cas clients)* |
| IncarnationSection | **Qui on est** — 2 lignes + photo (compact) |
| CtaContact | **CTA Diagnostic** — navy, identique partout |

### Visuels à conserver impérativement
- Fond vidéo drone dans le Hero (composant `VideoBackground`)
- Logo carousel animé (marquee)
- Photos terrain bretonnes (IncarnationSection compactée)

### Contenu Hero
- Titre : court, max 8 mots — ex. *"Data, IA et Formation pour les PME bretonnes"*
- Sous-titre : 1 phrase, max 15 mots
- CTA primaire : "Demander un diagnostic →"
- CTA secondaire : "Voir les réalisations"
- Badges piliers : IA · Data · Formation (sous le hero)

### Section 3 Piliers
- 3 cards cliquables menant vers `/ia`, `/data`, `/formation`
- Description courte : 2 lignes max par pilier
- Tags technos visibles (Power BI, n8n, OCR…)
- Formation : couleur cuivre (`breton-copper`) pour la distinguer

---

## 4. Pages piliers

### `/ia` — IA & Automatisation
- Hero court : titre + 1 phrase + CTA diagnostic
- Cas d'usage : OCR, agents IA, classification, workflows
- Outils : n8n, Make, Python, Claude
- 1-2 cas clients filtrés (secteur industriel)
- CTA diagnostic navy en fin de page

### `/data` — Data & Reporting
- Hero court : titre + 1 phrase + CTA diagnostic
- Cas d'usage : dashboards, data engineering, ETL, reporting temps réel
- Outils : Power BI, Metabase, Microsoft Fabric, DuckDB, dbt
- 1-2 cas clients filtrés (métallurgie, franchises)
- CTA diagnostic navy en fin de page

---

## 5. E-commerce Formation (MVP)

### Modèle
- **Gratuit** : PDF téléchargeable — capture email obligatoire
- **Payant** : formation vidéo — paiement one-time via Stripe Checkout
- **Abonnement** : affiché "Bientôt disponible" — implémenté en v2 quand le catalogue existe
- **Contenu au lancement** : aucun — l'infrastructure est construite, le contenu à venir

### Flux gratuit (PDF)
```
Bouton "Télécharger gratuitement"
  → Modale (Prénom + Email)
  → POST /api/formation/register
      → Rate limiting : 3 req / 15 min / IP (même pattern que /api/contact)
      → Validation Zod (email, prénom)
      → Honeypot anti-spam
      → Resend : email avec PDF en pièce jointe (URL Blob signée)
  → Redirect /formation/merci?type=free
```

### Flux payant (vidéo)
```
Bouton "Acheter · XX €"
  → Stripe Checkout (session one-time, metadata: { slug, email })
  → Webhook /api/webhooks/stripe
      → Vérification signature (STRIPE_WEBHOOK_SECRET obligatoire)
      → Générer token UUID v4, stocker dans Redis (TTL 30j)
      → Resend : email avec lien /formation/[slug]/acces?token=...
  → Page /formation/[slug]/acces : vérifie token Redis → embed vidéo
```

**Sécurité webhook :** la route `/api/webhooks/stripe` doit vérifier la signature `stripe-signature` via `stripe.webhooks.constructEvent()` avant tout traitement. Variable d'env requise : `STRIPE_WEBHOOK_SECRET`.

**Attention App Router :** `stripe.webhooks.constructEvent()` requiert le body brut (non parsé). Dans Next.js App Router, utiliser `await req.text()` (pas `req.json()`) pour lire le body, puis passer la chaîne à `constructEvent`. Ne pas utiliser `bodyParser` ou `json()`.

**Génération UUID :** utiliser `crypto.randomUUID()` (natif Node.js 19+, pas de dépendance npm).

### Protection du contenu vidéo
- Token = UUID v4 stocké dans Upstash Redis (TTL = 30 jours, suppression automatique)
- Structure Redis : clé `token:{uuid}` → valeur `{ slug, email, purchasedAt }`
- Vérification côté serveur à chaque accès (`GET /formation/[slug]/acces`)
- Expiration : 30 jours après achat (TTL Redis natif)
- Page d'expiration : si token absent ou expiré, afficher page avec CTA "Racheter la formation"
- Pas de compte utilisateur requis (pas d'auth complète)

### Stockage PDF (formations gratuites)
- Upload manuel dans Vercel Blob avant mise en production
- Convention de chemin : `formations/gratuit/{slug}.pdf`
- Route `/api/formation/subscribe` résout `pdfKey` → URL Blob signée → joint au Resend

### Structure données formation (constants.ts)
```typescript
export type Formation = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'ia' | 'data';
  type: 'free' | 'paid';
  format: 'pdf' | 'video';
  duration: string;              // ex: "3h", "15 min"
  price?: number;                // en centimes pour Stripe (ex: 19700)
  priceDisplay?: string;         // ex: "197 €"
  tags: string[];
  videoUrl?: string;             // URL Vimeo ou YouTube unlisted (paid)
  videoProvider?: 'youtube' | 'vimeo';  // détermine le pattern d'embed
  pdfKey?: string;               // chemin Vercel Blob : formations/gratuit/{slug}.pdf
  stripeProductId?: string;
  stripePriceId?: string;
}
```

**Choix du provider vidéo :** à décider avant implémentation. Vimeo recommandé (meilleur contrôle de la confidentialité, pas d'annonces, embed propre). YouTube unlisted acceptable si budget contraint.

### Catalogue /formation
- Filtres : Toutes · Gratuites · IA · Data
- Cards avec badge GRATUIT (vert) ou prix (cuivre)
- Abonnement en card grisée "Bientôt disponible"

---

## 6. Constantes et migrations `constants.ts`

- `SERVICES` : restructuré — 2 entrées (ia, data) avec nouveau format, noms nautiques en commentaire historique uniquement
- Nouvelle export `FORMATIONS` : tableau de `Formation[]`
- `NAV_LINKS` : mise à jour (`/ia`, `/data`, `/formation`)
- `PROCESS_STEPS` : **supprimé** — les fichiers qui l'importent doivent être mis à jour :
  - `src/components/sections/Methodology.tsx` → supprimer le composant ou le réécrire sans PROCESS_STEPS
  - `src/app/intelligence-artificielle-bretagne/page.tsx` → retirer la section Methodology
  - `src/app/consultant-data-lorient/page.tsx` → retirer la section Methodology
  - `src/app/formation-ia-pme/page.tsx` → retirer la section Methodology

### Liens internes `/services` à mettre à jour
La redirection 301 `/services` → `/ia` gère les liens entrants externes, mais les **liens internes** doivent être mis à jour :
- `src/app/consultant-data-lorient/page.tsx` (×2)
- `src/app/formation-ia-pme/page.tsx`
- `src/components/sections/Services.tsx`
- `src/data/blog-articles.ts` (×3 occurrences)
- `src/lib/constants.ts` (NAV_LINKS)

---

## 7. Ce qui ne change pas (avec précisions)

- `/power-bi-bretagne`, `/automatisation-commandes-pme`, `/intelligence-artificielle-bretagne` — inchangées
- `/consultant-data-lorient` — inchangée **sauf** : liens `/services` → `/data` + retrait Methodology
- `/formation-ia-pme` — inchangée **sauf** : retrait Methodology + ajout lien vers `/formation` pour le catalogue. **Décision explicite** : cette page SEO reste distincte de `/formation` (angles différents : SEO local vs catalogue e-commerce)
- `/cas-clients` et les 4 cas clients existants
- `/blog` et tous les articles
- `/a-propos`
- `/audit-ia`
- Design system (palette bretonne, Instrument Serif, Geist Sans)
- Composants visuels (vidéo drone, logo carousel, photos terrain)
- API `/api/contact` et `/api/og`
- Cookie banner RGPD, Analytics GA4/Vercel
- `robots.ts` — **à mettre à jour** : ajouter `/formation/merci` aux routes disallowed (comme `/merci` existant)

---

## 8. Stack technique additions (Formation e-commerce)

| Besoin | Solution |
|--------|----------|
| Paiement | Stripe Checkout (déjà sur marketplace Vercel) |
| Email | Resend (déjà intégré) |
| Stockage PDF | Vercel Blob |
| Stockage tokens | Upstash Redis (TTL natif, MVP sans BDD relationnelle) |
| Vidéo | YouTube unlisted ou Vimeo embed |
| Webhook | Route handler `/api/webhooks/stripe` |

---

## 9. Hors scope (v2)

- Abonnement Stripe (recurring)
- Espace membre / authentification
- Contenu des formations (à créer séparément)
- Certificats de complétion
- Commentaires / forum sur les formations
