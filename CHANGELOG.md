# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

## [8.0.0] - 2026-02-03

### Refonte Premium V8 - Design Studio UX/UI 2026

#### Objectif
Site premium B2B optimisé conversion, mobile-first, accessible (WCAG 2.2), rapide et orienté leads qualifiés pour PME industrielles bretonnes.

#### Nouvelle identité visuelle
- **Logo** : Nouveau symbole phare/lighthouse détaillé dans un cercle avec rayons de lumière
- **Couleur principale** : Vert foncé #1B3B2F (plus professionnel/premium)
- **Couleur secondaire** : Vert #2D5A47
- **Fond** : Blanc cassé #FAFBF9
- **Texte** : Gris foncé #1A1A1A
- **Footer** : Fond sombre #1A1A1A

#### Tendances 2025-2026 appliquées
- Minimalisme fonctionnel avec grands espaces blancs
- Navigation mobile-first "thumb-friendly"
- Micro-interactions subtiles (hover, transitions)
- Performance-first (optimisation images, lazy loading)
- Accessibilité WCAG 2.2 (contrastes, focus states, aria-labels, skip links)

#### Homepage premium (7 sections)
1. **Hero** : Split layout avec image + floating card metrics + trust indicators
2. **Problèmes clients** : 4 cards avec icônes (Excel, Reporting, Données obsolètes, Outils déconnectés)
3. **Offre & Solutions** : 3 blocs sur fond vert foncé avec bénéfices listés
4. **Missions types** : 3 cas concrets avec photos, format Problème/Intervention/Résultat
5. **Méthode** : 3 étapes avec timeline (Diagnostic, Mise en place, Suivi)
6. **Équipe** : Section avec photo + CTA vers /a-propos
7. **CTA final** : Fond vert foncé avec message d'action

#### Header V8
- Sticky avec effet scroll (shadow on scroll)
- Logo horizontal (phare + texte)
- Navigation simplifiée (À propos, Contact)
- CTA "Demander un diagnostic" visible
- Menu mobile full-screen avec navigation thumb-friendly
- Fermeture sur Escape key
- Body scroll lock quand ouvert

#### Footer V8
- Fond sombre #1A1A1A
- 3 colonnes : Brand/CTA, Navigation, Contact
- Logo en blanc
- Liens navigation et mentions légales

#### Page À propos V8
- Hero avec photo équipe et localisation
- Section valeurs (Pragmatisme, Proximité, Autonomie)
- Ce que nous faisons avec checklist
- Zones d'intervention (badges villes)
- CTA final

#### Page Contact V8
- Trust points en header (Réponse 48h, Sans engagement)
- Formulaire amélioré : 4 champs en 2 colonnes (Nom/Entreprise, Email/Téléphone) + Message
- Sidebar sticky avec contact direct et localisation
- Note confidentialité

#### Accessibilité (WCAG 2.2)
- Skip links sur toutes les pages
- aria-labels sur tous les éléments interactifs
- aria-labelledby sur les sections
- role="banner", role="contentinfo", role="navigation"
- Focus states visibles
- Contrastes conformes
- Structure H1-H2-H3 correcte

#### Composants mis à jour
- `Logo` : Nouveau design phare avec variants (full, symbol, monochrome)
- `LogoHorizontal` : Version header avec texte
- `ContactFormV7` : Formulaire avec validation, états loading, messages d'erreur accessibles

#### Performance
- Images optimisées avec next/image et sizes
- Lazy loading automatique
- CSS utility classes (transition-base, container-content, section-padding)

---

## [7.0.0] - 2026-02-03

### Refonte visuelle complète V7

#### Nouveau positionnement
- **Philosophie** : Très simple, très visuel, crédible, humain, ancré en Bretagne
- **Focus** : Site orienté contact, pas de vente directe, pas de tarifs affichés
- **Cible** : Dirigeants de PME industrielles bretonnes

#### Nouvelle charte graphique
- **Couleurs V7** :
  - Vert terre #3F5D4A (primaire)
  - Vert grisé #6F8F7A (secondaire)
  - Blanc cassé #F6F7F5 (fond)
  - Gris texte #2E2E2E
  - Gris UI #D9DED9
- **Typographie** : Inter (sans-serif unique, pas d'effets décoratifs)
- **Logo** : Nouveau symbole balise/phare en SVG

#### Structure simplifiée
- **Homepage** : Exactement 5 sections
  1. Hero plein écran avec image industrielle
  2. Constat problème (4 lignes max)
  3. 3 blocs solutions (Automatisation, Tableaux de bord, Indicateurs)
  4. Preuve terrain avec photos
  5. CTA final
- **Navigation** : Uniquement "À propos" et "Contact"
- **Header** : Fixe avec backdrop blur

#### Pages
- `/` : Homepage V7 (5 sections)
- `/a-propos` : Page simplifiée avec photo équipe, localisation Lorient
- `/contact` : Formulaire épuré (nom, email, entreprise, message)
- `/mentions-legales` : Page légale V7
- `/merci` : Page de confirmation V7

#### Suppressions
- Pages supprimées : /offres, /cas-usage, /methode, /bretagne, /newsletter
- Composants V6 supprimés : HeroV6, IrritantsSection, SolutionsSection, MethodePreview, CasUsagePreview, BretagneSection, NewsletterSection, CTASection, ContactForm, FAQ
- API newsletter supprimée
- Constants simplifiés (suppression des structures V6 inutilisées)

#### Nouveaux composants
- `Logo` : Composant SVG du symbole balise (variants: full, symbol, monochrome)
- `ContactFormV7` : Formulaire de contact simplifié

#### Règles de design V7
- Pas de sections additionnelles
- Pas d'icônes décoratives
- Pas de storytelling marketing
- Pas de texte dense
- Photos réelles uniquement (contexte PME/industriel européen)
- Pas de visuels IA, pas d'illustrations abstraites

---

## [6.0.0] - 2026-02-02

### Rebranding majeur : Balise IA → Balise Data

#### Nouveau positionnement
- **Nouveau nom** : Balise Data (retour du nom original, repositionné)
- **Nouvelle tagline** : "Automatisation & pilotage des données pour PME bretonnes"
- **Focus** : L'IA devient un outil secondaire, pas la promesse principale
- **Cible** : Dirigeants, DAF, responsables production/opérations de PME (10-250 salariés) en Bretagne
- **Suppression de Calendly** : Tous les CTAs dirigent vers /contact

#### Structure des pages V6
- `/` : Homepage avec Hero, Irritants, Solutions, Méthode, Cas d'usage, Bretagne, Newsletter
- `/offres` : 3 prestations (Diagnostic, Automatisation, Pilotage) avec tarifs transparents
- `/cas-usage` : 6 scénarios types avec format Contexte/Problème/Approche/Résultat
- `/methode` : 4 étapes détaillées avec livrables et durées
- `/a-propos` : Équipe (3 membres), valeurs, mission, histoire
- `/contact` : Formulaire enrichi (entreprise, fonction, outils utilisés)
- `/bretagne` : Page SEO local avec zones d'intervention et schema LocalBusiness
- `/newsletter` : Page d'inscription simple

#### Nouveaux composants V6
- `HeroV6` : Hero sobre avec H1 SEO "Automatisation & pilotage des données pour PME bretonnes"
- `IrritantsSection` : 5 irritants métier (Excel, dispersion, reporting, visibilité, outils)
- `SolutionsSection` : 5 solutions concrètes
- `MethodePreview` : Preview des 4 étapes
- `CasUsagePreview` : 3 cas d'usage en preview
- `BretagneSection` : Ancrage local avec villes
- `NewsletterSection` : Formulaire d'inscription newsletter
- `CTASection` : CTA final avec réassurance

#### Modifications structurelles
- **site-config.ts** : Branding Balise Data, suppression Calendly
- **constants.ts** : Nouvelles structures (IRRITANTS, SOLUTIONS, METHOD_STEPS, PRESTATIONS, CAS_USAGE, TEAM, VALUES, FAQ_ITEMS, ENGAGEMENTS, ZONES_BRETAGNE)
- **Header/Footer** : Mise à jour branding, suppression Calendly, ajout liens Bretagne/Newsletter
- **API newsletter** : Nouvel endpoint avec Resend

#### Nettoyage
- Suppression des pages legacy (/services, /projets, /automatisation-pme-bretagne, /intelligence-artificielle-pme-bretagne)
- Suppression des composants legacy V1-V5 (Hero, HeroV3-V5, Services, Process, Projects, etc.)
- Redirections 301 configurées dans next.config.ts

#### SEO & Performance
- Métadonnées geo (geo.region, geo.placename, ICBM) conservées
- Schema LocalBusiness sur /bretagne
- Keywords ciblés par page (automatisation PME, pilotage données, consultant data Lorient)
- Structure H1/H2 optimisée

---

## [5.0.0] - 2026-01-28

### Rebranding majeur : Balise Data → Balise IA

#### Nouveau positionnement
- **Nouveau nom** : Balise IA (anciennement Balise Data)
- **Nouvelle tagline** : "Intelligence artificielle & automatisation pour PME bretonnes"
- **Focus SEO** : Mots-clés ciblés sur "intelligence artificielle Bretagne", "IA PME Bretagne", "IA Lorient", "IA Rennes"
- **Cible** : Dirigeants et DAF de PME (10-250 salariés) en Bretagne

#### Nouvelles pages
- `/offres` : Page restructurée avec les 3 offres (Diagnostic IA, Automatisation, IA appliquée)
- `/cas-usage` : Remplace `/projets`, format Problème → Solution → Résultat
- `/intelligence-artificielle-pme-bretagne` : Page SEO longue pour la Bretagne
- `/automatisation-pme-bretagne` : Page SEO dédiée à l'automatisation

#### Nouveaux composants V5
- `HeroV5` : Hero SEO optimisé avec H1 "Intelligence artificielle pour les PME en Bretagne"
- `WhyBaliseIA` : Section "Pourquoi Balise IA ?" avec 4 piliers
- `WhatWeDo` : Section "Ce que nous faisons" avec 3 domaines d'expertise
- `UseCasesV5` : Composant cas d'usage avec structure Problème/Solution/Résultat

#### Modifications structurelles
- Header/Footer : Icône Brain, nouveau branding Balise IA
- Layout : Métadonnées SEO optimisées avec géolocalisation Lorient
- Constants : Nouvelles structures `SERVICES_V5`, `USE_CASES`, `FAQ_ITEMS`
- Site-config : Configuration centralisée pour Balise IA

#### SEO & Performance
- Métadonnées geo (geo.region, geo.placename, ICBM)
- Canonical URLs
- Keywords ciblés par page
- Structure H1/H2 optimisée

---

## [4.0.0] - 2026-01-XX

### Rebranding : Armor Analytics → Balise Data
- Nouveau nom et nouvelle identité visuelle
- Composants V4 (HeroV4, StepsV4, ProjectsV4, etc.)

---

## [3.0.0] - 2026-01-XX

### Version V3
- Design system refactorisé
- Composants V3 avec animations FadeIn

---

## [2.0.0] - 2026-01-XX

### Version V2
- Amélioration des pages
- Ajout de métriques et témoignages

---

## [1.0.0] - 2026-01-XX

### Version initiale
- Site vitrine Armor Analytics
- Pages : Accueil, Services, Projets, Contact
