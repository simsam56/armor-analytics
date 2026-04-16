# Refonte Navigation, Homepage & Cas Clients

**Date :** 2026-04-16
**Statut :** Approuvé

---

## 1. Navigation (Header)

### Dropdown Services

Remplacer le lien plat `/#services` par un dropdown à 3 entrées :

| Label | Route |
|-------|-------|
| Audit & Diagnostic | `/audit-ia` |
| IA & Automatisation | `/ia` |
| Pilotage data | `/data` |

Reste de la nav inchangé : Cas clients (`/cas-clients`), Blog (`/blog`), À propos (`/a-propos`), Contact (`/contact`).

### CTA Header

Remplacer "Mes priorités IA →" (`/audit-ia`) par **"Nous contacter →"** (`/contact`).

### Accessibilité dropdown

- Desktop : hover pour ouvrir, clic aussi supporté
- Mobile : accordion (clic pour toggle la liste)
- `aria-haspopup="true"`, `aria-expanded` toggle
- Keyboard : Enter/Space ouvre, Escape ferme, flèches haut/bas naviguent les items, Tab sort
- Focus management : premier item reçoit le focus à l'ouverture

### Type TypeScript NAV_LINKS

```typescript
type NavLink =
  | { href: string; label: string }
  | { label: string; children: { href: string; label: string }[] };
```

### Fichiers impactés

- `src/lib/constants.ts` — modifier `NAV_LINKS` avec le type union ci-dessus
- `src/components/layout/Header.tsx` — implémenter le dropdown (desktop hover, mobile accordion)

---

## 2. Homepage — Nouvelle structure

### Ordre des sections

1. **Hero** (HeroV3 simplifié) — texte + 2 CTA
2. **Bande métriques** (MetricsBand) — inchangée
3. **Logo Carousel** (LogoCarousel) — inchangé
4. **Nos expertises** — nouvelle section, 3 cartes
5. **Cas clients** — grille 3 vignettes vidéo
6. **Incarnation** (IncarnationSection) — inchangée
7. **CTA final** (CtaContact) — CTA contact

### 2.1 Hero — Suppression TransformationDemo

- Supprimer le composant `TransformationDemo` du hero
- Garder : badge "PME industrielles - Bretagne", titre, sous-titre
- CTA principal : "Nous contacter →" → `/contact`
- CTA secondaire : "Voir nos cas clients →" → `/cas-clients`
- Le hero reste sobre : texte centré sur fond foam→sand

**Fichiers impactés :**
- `src/components/sections/HeroV3.tsx` — retirer `<TransformationDemo />`, modifier les CTA
- `src/components/visuals/TransformationDemo.tsx` — peut être supprimé (plus utilisé nulle part)

### 2.2 Nos expertises — Fusion PillarsSection + Services

Nouvelle section remplaçant à la fois `PillarsSection` et la section services inline dans `page.tsx`.

3 cartes en grille (1 col mobile, 3 col desktop) :

| Carte | Icône | Titre | Description courte | Lien |
|-------|-------|-------|--------------------|------|
| Audit & Diagnostic | Search/Clipboard | Audit & Diagnostic | Identifier vos 2-3 automatisations les plus rentables | `/audit-ia` |
| IA & Automatisation | Bot/Workflow | IA & Automatisation | Agents IA, OCR, workflows branchés sur vos outils métier | `/ia` |
| Pilotage data | BarChart3/Database | Pilotage data | Dashboards temps réel connectés à votre ERP/GPAO | `/data` |

Style : fond blanc ou foam, cartes `rounded-2xl`, border `breton-sand`, hover shadow. Pas de vidéo.

**Fichiers impactés :**
- `src/app/page.tsx` — remplacer `PillarsSection` + section services par nouveau composant `ExpertisesSection`
- Créer `src/components/sections/ExpertisesSection.tsx`
- `src/components/sections/PillarsSection.tsx` — peut être supprimé

### 2.3 Cas clients homepage — 3 vignettes vidéo

Remplacer le composant `Projects` par une grille de 3 vignettes vidéo issues de `CASE_STUDIES`.

Chaque vignette :
- Vidéo autoplay, muet, en boucle (`autoPlay muted loop playsInline`)
- Titre du cas client
- Badge secteur + localisation
- Clic → `/cas-clients/[slug]`
- Lien "Voir tous les cas →" en dessous → `/cas-clients`

Sélection des 3 cas à afficher : les 3 premiers de `CASE_STUDIES` dont le champ `image` termine par `.mp4`.

**Fichiers impactés :**
- `src/app/page.tsx` — remplacer `<Projects />` par nouveau composant
- Créer `src/components/sections/CaseStudiesPreview.tsx`
- `src/components/sections/Projects.tsx` — évaluer si encore utilisé ailleurs, sinon supprimer

---

## 3. Page `/cas-clients` — Bibliothèque vidéo

### Remplacement du listing

Remplacer le listing détaillé actuel (cartes avant/intervention/après) par une **grille de vignettes**.

### Layout grille

- **Desktop (lg+) :** 3 colonnes
- **Tablette (md) :** 2 colonnes
- **Mobile :** 1 colonne

### Chaque vignette

- Vidéo muet en boucle (si `.mp4`) ou image statique
- **Lazy playback** : `IntersectionObserver` pour ne lancer `play()` que sur les vidéos visibles dans le viewport. Les vidéos hors écran sont en pause. Critique pour la perf mobile avec 5+ vidéos.
- Ratio 16:9, `object-fit: cover`
- Titre du cas client sous la vidéo
- Badge secteur + localisation
- Hover : léger scale + shadow
- Clic sur toute la carte → `/cas-clients/[slug]`

### Simplification du header

Garder le hero simplifié (titre + sous-titre). Retirer les stats (5 secteurs, gratuit, 100% Bretagne) ou les déplacer en bande discrète.

### Pages détail individuelles

Inchangées (`/cas-clients/[slug]`).

**Fichiers impactés :**
- `src/app/cas-clients/page.tsx` — réécriture complète du listing

---

## 4. Vidéos — Nettoyage

### Crop bandes noires

Vérifier chaque vidéo pour des bandes noires résiduelles (barre navigateur en haut). Si présentes, appliquer un crop CSS via `object-position` pour masquer la zone problématique. Alternative : re-cropper les fichiers vidéo source avec ffmpeg.

Vidéos à vérifier :
- `/videos/demo-crm.mp4`
- `/videos/demo-commandes.mp4`
- `/videos/demo-production.mp4`
- `/assistant-documentaire.mp4`

### Qualité de rendu

- S'assurer que les vidéos sont affichées à leur **taille native** (pas de upscaling qui floute)
- Utiliser `object-fit: cover` avec un ratio fixe (16:9) pour les vignettes
- Tester le rendu sur écran Retina et écran standard

---

## 5. CTA — Contact prioritaire

### Remplacement global

Partout sur le site, remplacer les CTA qui poussent l'audit/quiz par du **contact direct** :

| Avant | Après |
|-------|-------|
| "Mes priorités IA →" → `/audit-ia` | "Nous contacter →" → `/contact` |
| "Diagnostic gratuit →" → `/audit-ia` | "Nous contacter →" → `/contact` |

La page `/audit-ia` reste accessible via le dropdown Services mais n'est plus le CTA principal.

**Fichiers impactés (recherche globale) :**
- `src/components/layout/Header.tsx` — CTA header
- `src/components/sections/HeroV3.tsx` — CTA hero
- `src/components/sections/CtaContact.tsx` — CTA final
- `src/app/page.tsx` — tout CTA inline
- Potentiellement : pages de services, blog, etc.

---

## 6. Page `/formation`

- **Pas dans le dropdown Services** (seulement Audit, IA, Data)
- Page conservée et accessible par URL directe
- L'accompagnement terrain est décrit dans les pages `/ia` et `/data` comme partie intégrante du process projet

---

## 7. Tests E2E & Documentation

### Tests à mettre à jour

Les 30 tests Playwright existants seront impactés par :
- Changement de nav (dropdown au lieu de lien plat) → `navigation.spec.ts`
- Changement des CTA (texte et href) → `navigation.spec.ts`, `seo.spec.ts`
- Nouvelle structure page `/cas-clients` → `navigation.spec.ts`

Mettre à jour les tests après implémentation.

### CLAUDE.md

Mettre à jour les sections suivantes de `CLAUDE.md` :
- "Homepage — ordre des sections" (nouveau layout)
- "Header" (dropdown + nouveau CTA)
- Description des CTA

---

## 8. Hors scope

- Refonte des pages détail cas clients (`/cas-clients/[slug]`)
- Refonte du blog
- Refonte de la page à propos
- Refonte du footer
- Re-enregistrement des vidéos en HD (côté utilisateur)
- Pages légales
