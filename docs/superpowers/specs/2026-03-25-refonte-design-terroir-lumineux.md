# Refonte design balise-ia — "Terroir lumineux"

**Date :** 2026-03-25
**Scope :** Refonte complète du site (toutes les pages)
**Direction :** Fond clair dominant, chaleur artisanale, ancrage breton, style Apple (espaces, typo, animations)

---

## 1. Design System

### 1.1 Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `breton-navy` | `#0C1F3F` | Titres, CTAs principaux, header scrolled text, CTA final bg |
| `breton-copper` | `#9A5F3A` | **Accent principal** (remplace cyan). Logo "-ia", lanterne phare, faisceau, liens hover, italic hero. Foncé vs #C17F59 initial pour WCAG AA (4.7:1 sur blanc). |
| `breton-copper-light` | `#C17F59` | Variante claire pour éléments décoratifs large (bande phare, underline brush, glow). Ne pas utiliser pour du texte normal sur fond clair. |
| `breton-emerald` | `#1A6B4A` | Badges, labels secteur, checks, eyebrows, card hover bar |
| `breton-moss` | `#2D7A4F` | Variante emerald pour hover |
| `breton-sand` | `#E8E0D5` | Bandes structurelles, borders cards, CTA inversé sur navy, grain bg |
| `breton-slate` | `#2E4057` | Body text, sous-titres |
| `breton-granite` | `#8B9AAB` | Meta, labels secondaires, timestamps |
| `breton-foam` | `#F4F8F5` | Fonds sections alternées, icônes bg |

**Suppressions :** `breton-accent` (#00B4D8 cyan) est supprimé et remplacé par `breton-copper`.

**Migration accent :** Remplacement global dans tous les fichiers source. Fichiers concernés (exhaustif) :
- `src/components/ui/logo.tsx` — `ACCENT_CYAN` → `#9A5F3A`
- `src/components/layout/Footer.tsx` — hover links, carte Bretagne
- `src/components/sections/HeroV3.tsx` — accent text
- `src/components/sections/Pillars.tsx` — à supprimer ou fusionner
- `src/components/sections/AnimatedCounters.tsx` — couleur accent
- `src/components/sections/ResultsBlock.tsx` — à supprimer
- `src/components/sections/TeamSection.tsx` — accent
- `src/components/visuals/DashboardMockup.tsx` — accent
- `src/app/power-bi-bretagne/page.tsx` — accent
- `src/app/automatisation-commandes-pme/page.tsx` — accent
- `src/app/consultant-data-lorient/page.tsx` — accent
- `src/app/globals.css` — token CSS
- `src/components/ui/cookie-banner.tsx` — accent couleur
- `src/app/api/og/route.tsx` — couleur OG image

**Contrastes WCAG vérifiés :**

| Combinaison | Ratio | WCAG AA |
|-------------|-------|---------|
| Copper (#9A5F3A) sur blanc | 4.7:1 | PASS |
| Copper (#9A5F3A) sur foam (#F4F8F5) | 4.4:1 | PASS (large text) |
| Copper (#9A5F3A) sur navy (#0C1F3F) | 3.5:1 | PASS (large text) |
| Copper-light (#C17F59) sur navy | 5.0:1 | PASS |

**Règle d'usage :** `breton-copper` (#9A5F3A) pour tout le texte (liens, labels, italic). `breton-copper-light` (#C17F59) uniquement pour éléments décoratifs (bande phare SVG, underline brush, glow orb, backgrounds à faible opacité).

### 1.2 Typographie

| Élément | Font | Taille | Weight | Notes |
|---------|------|--------|--------|-------|
| H1 (hero) | Instrument Serif | 72-76px (mobile: 40px) | 400 | `letter-spacing: -0.03em`, `line-height: 1.05` |
| H2 (sections) | Instrument Serif | 48-50px (mobile: 32px) | 400 | `letter-spacing: -0.025em` |
| H3 (cards) | Instrument Serif | 22-23px | 400 | — |
| Body | Geist Sans | 14-17px | 400 | `line-height: 1.6-1.65` |
| Eyebrow | Geist Sans | 12px | 600 | `text-transform: uppercase`, `letter-spacing: 0.12em`, couleur emerald |
| Métriques | Instrument Serif | 36-40px | 400 | Pour les chiffres (4h, 80%, etc.) |
| Meta/labels | Geist Sans | 11-12px | 400-500 | Couleur granite |
| Code/mono | Geist Mono | — | — | Inchangé |

### 1.3 Spacing & Layout

- **Sections :** `py-[110px]` (desktop), `py-16` (mobile)
- **Max-width :** `max-w-[1200px]` pour le contenu
- **Cards :** `rounded-2xl` (22px), `border: 1px solid breton-sand`
- **Buttons :** `rounded-[14px]`, `padding: 16px 34px`
- **Gaps :** Cards grid `gap-6`, piliers `gap-6`, offres `gap-5`
- **Hero :** `min-h-screen`, centré, `text-align: center`

### 1.4 Effets visuels

- **Grain texture :** SVG feTurbulence overlay sur hero et CTA final (`opacity: 0.035`)
- **Radial glow :** Halo `breton-emerald` subtil derrière le titre hero (pulse 6s)
- **Frosted glass header :** `backdrop-blur(24px) saturate(1.8)` au scroll
- **Borders sable :** Toutes les cards utilisent `border-breton-sand` au lieu de `border-slate-200`
- **Fond dominant clair :** Alternance `white` / `breton-foam` / `breton-sand` (bandes). Le navy n'apparaît qu'au CTA final et au footer.

---

## 2. Logo

### 2.1 Changements

Le logo phare V18 est conservé. Seule modification : `ACCENT_CYAN` (#00B4D8) remplacé par `ACCENT_COPPER` (#C17F59) dans `src/components/ui/logo.tsx`.

Éléments affectés :
- Lanterne vitrée du phare → cuivre
- Faisceau horizontal → cuivre
- Bande bold du corps → cuivre
- Texte "-ia" → cuivre
- Tiret "-" → cuivre

### 2.2 Variants

- `default` : navy + cuivre (sur fond clair)
- `white` : blanc + cuivre (sur fond navy)

---

## 3. Homepage — Structure

8 blocs au total : Header (persistent) + 7 sections de contenu + Footer. Le header et le footer ne comptent pas comme "sections" — ils sont des éléments de layout. Les 7 sections de contenu sont : Hero, Bande métriques, Logos, Piliers, Offres, Cas clients, Incarnation + CTA final.

### 3.1 Header (sticky)

- Frosted glass par défaut (fond clair) : `bg-foam/70 backdrop-blur-[24px] saturate-[1.8]`
- Au scroll (>20px) : `bg-white/85 backdrop-blur-[24px]` + `border-b border-breton-sand/50`
- **Fallback mobile :** `bg-white/90` sans backdrop-filter si `@supports not (backdrop-filter: blur(1px))`
- Logo phare V18 + texte "balise-ia" (cuivre pour "-ia")
- Nav links : Vérifier `NAV_LINKS` dans `constants.ts` et utiliser tels quels
- CTA : "Diagnostic gratuit" (bg navy, text white)
- Mobile : Sheet slide-out (inchangé structurellement, nouveau style)

### 3.2 Section 1 — Hero

- **Layout :** Full-height (`min-h-screen`), centré, `text-align: center`
- **Fond :** Gradient `breton-foam` → `breton-sand` + grain texture
- **Badge local :** Pill avec dot emerald pulsant + "Basés à Lorient — interventions sur toute la Bretagne"
- **H1 :** "De la donnée brute à la *décision claire.*" — Instrument Serif 76px, italique emerald pour "décision claire" avec underline brush cuivre
- **Sous-titre :** "Audit, automatisation et pilotage data pour les PME bretonnes. On simplifie vos opérations sans complexifier le quotidien."
- **CTAs :** "Demander un diagnostic" (navy, icône calendrier) + "Voir nos réalisations →" (outline navy)
- **Micro-preuves :** 3 items avec check circle emerald

### 3.3 Bande métriques (sable)

- **Composant :** Nouveau `src/components/sections/MetricsBand.tsx` (remplace `AnimatedCounters.tsx`)
- **Fond :** `breton-sand` plein
- **Contenu :** 4 métriques (4h, 80%, 12+, 48h) depuis `KEY_METRICS` dans `constants.ts`, en Instrument Serif 40px, séparées par des lignes verticales `bg-navy/10`
- **Animation :** Counter animé de 0 à valeur (spring, stagger 100ms). État initial : "0" visible, animation trigger à InView.
- **Mobile :** Grille 2×2 (`grid-cols-2`), séparateurs horizontaux entre les lignes, verticaux entre les colonnes. Taille typo réduite à 28px.

### 3.4 Section 2 — Logos clients

- **Fond :** blanc
- **Label :** "Ils nous font confiance" (granite, uppercase, spaced)
- **Logos :** Marquee horizontal infini (CSS animation 25s), pause au hover
- **Données :** Les 11 logos existants dans `LogoCarousel`

### 3.5 Section 3 — Piliers (Problème/Solution)

- **Fond :** `breton-foam`
- **Composant :** Refactorer `ProofBlock.tsx` en `PillarsSection.tsx`. Supprimer l'ancien `Pillars.tsx` (doublon).
- **Eyebrow :** "Notre approche" (emerald)
- **Titre :** "Des chantiers concrets, pas des promesses vagues."
- **3 cards :** Audit ciblé / Pilotage fiable / Automatisation utile
  - Fond blanc, border sable, `rounded-2xl`
  - Icône SVG (Lucide) dans carré foam → emerald au hover
  - Titre Instrument Serif 23px + description Geist Sans
  - Hover : `translateY(-6px)` + shadow + barre gradient emerald→copper en haut
- **Mobile :** Stack vertical (`grid-cols-1`), padding cards réduit à `p-6`

### 3.6 Section 4 — Offres

- **Fond :** blanc
- **Eyebrow :** "Nos offres"
- **Titre :** "Quatre façons de travailler avec nous."
- **Grille 2×2 :** 4 cards offres
  - Audit (featured) : border emerald, badge "Recommandé"
  - Pilotage / Automatisation / Formation : border sable
  - Chaque card : icône + titre Instrument Serif + tagline emerald + description + footer (durée, prix, lien →)
  - Hover : `translateY(-6px)` + shadow + fond gradient subtil + flèche translateX(+6px)
- **Données :** `SERVICES` depuis `constants.ts`

### 3.7 Section 5 — Cas clients

- **Fond :** `breton-foam`
- **Eyebrow :** "Réalisations"
- **Titre :** "Cas clients" + lien "Tout voir →"
- **3 cards :** Image terrain + secteur (label emerald uppercase) + titre + description + métrique clé (Instrument Serif 28px)
- **Données :** Top 3 des `PROJECTS` depuis `constants.ts`

### 3.8 Section 6 — Incarnation

- **Fond :** blanc
- **Layout :** Grid 2 colonnes — photo à gauche (rounded-[28px], parallax léger) + texte à droite
- **Eyebrow :** "Qui sommes-nous"
- **Citation :** Instrument Serif 30px italic, barre latérale gradient emerald→copper
- **Nom :** Simon Hingant, Fondateur
- **Badges confiance :** 3 pills (Données hébergées en France, NDA systématique, Interventions sur site) — icônes SVG Lucide

### 3.9 Section 7 — CTA final

- **Fond :** `breton-navy` + grain texture + orb glow cuivre
- **Titre :** "Prêt à passer de la donnée brute à *l'action* ?" — copper pour "l'action"
- **Sous-titre :** "Diagnostic gratuit de 30 minutes, sans engagement."
- **CTAs :** "Réserver un créneau" (bg sable, text navy) + "Nous écrire →" (ghost white)

### 3.10 Footer

- **Fond :** `breton-navy` (inchangé structurellement)
- **Modifications :** Remplacer les accents cyan par cuivre dans les hover links et la carte Bretagne
- **Structure :** Logo + description + badges confiance + carte Bretagne SVG + colonnes liens + bottom bar

---

## 4. Pages secondaires

### 4.1 Layout commun

Toutes les pages intérieures utilisent :
- **Hero :** Fond gradient `foam → sand` (pas navy), `pt-32 -mt-16` pour chevaucher le header, `text-align: center`, titre Instrument Serif 48px
- **Header :** Toujours frosted glass (plus de switch transparent→solide car le fond est clair partout)

### 4.2 /services

- Hero : "Nos expertises modulables"
- 4 cards détaillées (layout vertical, une par offre) avec livrables, prix, durée, prérequis
- Reprend `detailed={true}` de `Services` mais avec le nouveau design system

### 4.3 /cas-clients

- Hero : "Cas clients"
- Grille de toutes les réalisations (cards avec image + métrique)
- Filtres par secteur (optional, badges cliquables)

### 4.4 /contact

- Hero : "Parlons de votre projet"
- Formulaire (structure actuelle conservée) + infos contact + carte Bretagne
- Style : cards sable pour les infos, formulaire sur blanc

### 4.5 /blog et /blog/[slug]

- Listing : cards articles avec image + date + titre + excerpt
- Article : prose styling avec la palette terroir (liens cuivre au lieu d'emerald dans `.article-prose a`)

### 4.6 /a-propos

- Photo + bio + parcours + valeurs
- Design : incarnation étendue, timeline ou blocks alternés

### 4.7 /audit-ia

- Quiz existant avec nouveau styling (cards sable pour les questions, progress bar cuivre)

### 4.8 Landing pages SEO (/power-bi-bretagne, /automatisation-commandes-pme, /consultant-data-lorient)

- Même structure que la homepage mais condensée : hero + problème + solution + CTA
- Contenu spécifique conservé

### 4.9 /mentions-legales, /merci, /interventions/[ville]

- Nouveau hero clair + contenu avec le design system appliqué

---

## 5. Animations (Framer Motion)

Toutes les animations respectent `useReducedMotion`. Pas de bounce ni overshoot — style Apple : rapide, net.

| # | Animation | Trigger | Timing | Easing |
|---|-----------|---------|--------|--------|
| 1 | Hero scale-in | Page load | scale(0.94→1) + fadeIn, 900ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| 2 | Hero underline brush | Après reveal H1 | clipPath left→right, 600ms | easeOut |
| 3 | Radial glow pulse | Continu | scale(1→1.1), opacity(0.6→1), 6s | ease-in-out |
| 4 | Dot pulse (badge) | Continu | scale(1→1.5), opacity(1→0.5), 2.5s | ease-in-out |
| 5 | Counter animé métriques | InView | 0→valeur, spring, stagger 100ms | spring(damping: 30) |
| 6 | Marquee logos | Continu | translateX, 25s linear infinite | linear |
| 7 | Cards reveal | InView (once) | scale(0.95→1) + fadeIn, stagger, 450ms | cubic-bezier(0.16, 1, 0.3, 1) |
| 8 | Card hover bar | Hover | opacity(0→1) barre gradient top, 400ms | ease |
| 9 | Card hover lift | Hover | translateY(-6px) + shadow, 450ms | cubic-bezier(0.16, 1, 0.3, 1) |
| 10 | Icône hover scale | Hover | scale(1→1.05), 400ms | ease |
| 11 | Flèche lien glide | Hover | translateX(+6px), 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| 12 | Photo parallax | Scroll | translateY scroll-driven | useScroll + useTransform |
| 13 | Photo hover scale | Hover | scale(1→1.02), 600ms | cubic-bezier(0.16, 1, 0.3, 1) |
| 14 | Header frosted glass | Scroll (>20px) | bg transparent→blur, 400ms | ease |
| 15 | Section eyebrows stagger | InView | fadeInUp, stagger 100ms, 600ms | easeOut |
| 16 | Button shimmer | Hover | gradient shine overlay left→right | 600ms linear |

---

## 6. Composants à modifier

| Fichier | Changement |
|---------|-----------|
| `src/components/ui/logo.tsx` | `ACCENT_CYAN` → `#9A5F3A` (texte "-ia"), `#C17F59` pour les éléments SVG décoratifs du phare |
| `src/app/globals.css` | `--color-breton-accent` → `--color-breton-copper: #9A5F3A` + `--color-breton-copper-light: #C17F59`, supprimer `--color-breton-accent` |
| `src/lib/constants.ts` | Mettre à jour le titre hero si hardcodé |
| `src/components/layout/Header.tsx` | Frosted glass, fond clair par défaut, border sable |
| `src/components/layout/Footer.tsx` | Accents cyan → cuivre |
| `src/components/sections/HeroV3.tsx` | Refonte complète → fond clair, centré, nouveau titre, scale-in |
| `src/components/sections/ProofBlock.tsx` | Renommer en `PillarsSection.tsx`, nouveau design, hover bar |
| `src/components/sections/Pillars.tsx` | **Supprimer** (doublon, remplacé par `PillarsSection.tsx`) |
| `src/components/sections/ExpertisesBlock.tsx` | **Supprimer** (fusionné dans Piliers) |
| `src/components/sections/AnimatedCounters.tsx` | **Supprimer**, remplacé par `MetricsBand.tsx` |
| `src/components/sections/MetricsBand.tsx` | **Nouveau** — bande sable avec 4 métriques animées |
| `src/components/sections/ResultsBlock.tsx` | Supprimer (fusionné dans Cas clients metrics) |
| `src/components/sections/Services.tsx` | Nouveau design cards, hover effects |
| `src/components/sections/Projects.tsx` | Nouveau design cards avec metric highlight |
| `src/components/sections/About.tsx` | → Incarnation (citation + photo + badges) |
| `src/components/sections/FAQ.tsx` | Supprimer de la homepage (garder le composant pour /services si besoin) |
| `src/components/sections/Methodology.tsx` | Supprimer de la homepage |
| `src/components/sections/LogoCarousel.tsx` | Garder, restyler marquee |
| `src/components/sections/CtaContact.tsx` | Nouveau design navy + orb glow |
| `src/components/ui/animated-section.tsx` | Mettre à jour variants (scale-in, stagger) |
| `src/components/sections/Hero.tsx` | Pages intérieures : fond clair au lieu de navy |
| `src/app/page.tsx` | Nouvelle structure 7 sections |
| Toutes les pages | Appliquer nouveau hero clair + design system |

---

## 7. Sections supprimées de la homepage

| Section | Raison | Destination |
|---------|--------|-------------|
| ExpertisesBlock | Redondant avec ProofBlock/Piliers | Fusionné dans section 3 |
| ResultsBlock | Métriques intégrées dans cas clients cards | Dans les cards cas clients |
| Methodology | Allonge inutilement la homepage | Déplacer sur /services ou /a-propos |
| FAQ | Allonge la homepage sans conversion | Garder sur /services |
| CTA Quiz (audit-ia) | Disruptif dans le flow | Garder comme page séparée, link dans nav ou offres |
| StickyCta mobile | **Conserver pendant l'implémentation.** Laisser dans `layout.tsx` tel quel. Mettre à jour les couleurs (accent → copper). Décision de suppression après test du nouveau flow sur mobile. |

---

## 8. Contraintes techniques

- **Stack inchangée :** Next.js 16 + React 19 + Tailwind v4 + shadcn/ui + Framer Motion
- **Tailwind :** Ajouter `breton-copper` et `breton-copper-light` au thème dans `globals.css`, supprimer `breton-accent`
- **Contrastes WCAG AA :** Copper (#9A5F3A) vérifié — 4.7:1 sur blanc. Voir table de contrastes en section 1.1.
- **`useReducedMotion` :** Toutes les animations Framer Motion doivent le respecter (déjà en place)
- **Fonts :** Instrument Serif déjà chargé, Geist Sans/Mono via next/font (inchangé)
- **Tests E2E :** Les 24 tests Playwright devront être mis à jour. Scope séparé — créer un ticket/tâche dédié après implémentation du design. Les tests critiques à mettre à jour : `navigation.spec.ts` (nouveaux liens, structure), `seo.spec.ts` (meta inchangés donc OK), `contact-form.spec.ts` (OK si formulaire inchangé).
- **SEO :** Les meta titles/descriptions restent inchangés (gérés par layout.tsx template). Les redirections existantes sont conservées.
- **Performance :** Le grain SVG et le radial glow sont des CSS purs (pas de JS). Le parallax utilise `useScroll` de Framer Motion (performant via `transform`).
- **Grain texture spec :** SVG filter `feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"`, appliqué via pseudo-élément `::after` avec `opacity: 0.035`. Background-size: 512×512px, repeat.
- **OG image :** Mettre à jour `src/app/api/og/route.tsx` pour utiliser copper au lieu de cyan dans l'image générée.
- **Cookie banner :** Mettre à jour `src/components/ui/cookie-banner.tsx` — remplacer les accents cyan par copper.

---

## 9. Mobile adaptations

| Section | Desktop | Mobile |
|---------|---------|--------|
| Header | Frosted glass + nav links + CTA | Sheet slide-out, hamburger. `bg-white/90` fallback si pas de backdrop-filter |
| Hero | `min-h-screen`, titre 76px, centré | `min-h-[80vh]`, titre 40px, padding `px-6 pt-28` |
| Bande métriques | 4 cols inline, séparateurs verticaux | Grid 2×2, titre 28px, séparateurs croisés |
| Logos | Marquee horizontal continu | Même, mais track plus rapide (15s) |
| Piliers | Grid 3 cols | Stack 1 col, `p-6` au lieu de `p-10` |
| Offres | Grid 2×2 | Stack 1 col |
| Cas clients | Grid 3 cols | Scroll horizontal (snap) ou stack 1 col |
| Incarnation | Grid 2 cols (photo + texte) | Stack 1 col, photo en haut, hauteur réduite à 240px |
| CTA final | Titre 52px | Titre 32px, boutons stack vertical |

---

## 10. Documentation updates (CLAUDE.md)

Après implémentation, mettre à jour ces sections dans `CLAUDE.md` :

1. **Palette bretonne** : Remplacer `accent` (#00B4D8 cyan) par `copper` (#9A5F3A) et `copper-light` (#C17F59). Ajouter note sur les deux variantes.
2. **Hero homepage** : `HeroV3` → fond gradient foam→sand (pas navy), centré, `min-h-screen`. Supprimer la référence `-mt-16`.
3. **Hero pages intérieures** : Fond gradient foam→sand (pas navy).
4. **Header** : Toujours frosted glass. Plus de switch transparent → solide. Border sable.
5. **Sections** : Padding `py-[110px]` (pas `py-24 sm:py-32`). Alternance `bg-white` / `bg-breton-foam` / bande `bg-breton-sand`.
6. **Cards** : borders `breton-sand` (pas `slate-200`).
7. **CTA sombres** : Bouton `bg-breton-sand text-breton-navy` (pas `bg-white`).
8. **Homepage — ordre des sections** : Mettre à jour avec les 7 nouvelles sections.
9. **Code style** : `breton-*` toujours pour la palette brand. `breton-copper` et `breton-copper-light` pour l'accent (jamais `breton-accent`).
