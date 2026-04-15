# Hero Transformation Demo — Design Spec

**Date** : 2026-04-15
**Statut** : Approuvé
**Portée** : Nouveau hero homepage avec composant avant/après animé

---

## Objectif

Remplacer le hero actuel (HeroV3) par un nouveau hero intégrant un composant visuel animé "avant/après" qui montre la transformation concrète : planning Excel / suivi manuel → dashboard production temps réel. Le visiteur doit comprendre la promesse de balise-ia en 2 secondes.

## Décisions de design

| Décision | Choix | Raison |
|---|---|---|
| Placement | Remplace le hero entier | Composant = pièce maîtresse, pas un complément |
| Fond | Foam → sand gradient (clair) | Meilleure lisibilité des détails mockup, surtout mobile |
| Mécanisme d'animation | Séquentielle temporelle (boucle 7s) | Narration claire, fonctionne en pleine largeur mobile |
| Librairie animation | Framer Motion (existante) | Déjà dans le projet, pas de dépendance supplémentaire |

## Structure du hero

Layout vertical centré sur fond `bg-gradient-to-b from-breton-foam to-breton-sand` :

```
[badge] PME industrielles · Bretagne (dot emerald pulsant)
[H1] Vos données terrain, enfin pilotables (Instrument Serif, centré)
[subtitle] court, breton-slate, max-w-2xl
[CTA primaire] + [CTA secondaire]

[COMPOSANT TRANSFORMATION DEMO]
  max-w-4xl centré, rounded-2xl, border breton-sand, shadow subtile
  ratio ~16:10 desktop, ~4:3 mobile

[micro-preuves] 7 ans terrain · 12+ projets (breton-granite)
```

Espacement : `-mt-16 pt-32` pour chevaucher le header (pattern existant). `min-h-[85vh]` sur desktop (cohérent avec le hero actuel). `pb-16`.

**Note** : Le hero actuel (HeroV3) utilise un layout 2-colonnes sombre (navy). Ce nouveau hero passe à un layout vertical centré sur fond clair. C'est un changement intentionnel de direction.

### Mobile

Même layout vertical. Le composant visuel prend toute la largeur (`mx-4`), hauteur ~280px (vs ~420px desktop). Les KPI du dashboard passent en grille 2x2.

## Composant TransformationDemo

Fichier : `src/components/visuals/TransformationDemo.tsx`

Client component (`'use client'`). Machine à 3 états pilotée par un timer interne.

### Phase 1 — "Avant" (durée : 2s)

Faux tableur minimaliste simulant un planning de production.

**En-tête tableur** :
- Barre `bg-breton-sand/60`, 3 onglets texte (`Sem. 16` actif, `Sem. 17`, `Suivi ADV`)
- Onglet actif : fond blanc, border-bottom invisible

**Grille** (5 lignes, 4 colonnes) :

| OF | Client | Statut | Délai |
|---|---|---|---|
| 2451 | Navale Bretagne | En cours | J+2 ⚠️ |
| 2452 | Méca-Précision | Attente matière | ? |
| 2453 | Kéroual Indus. | Ressaisie ADV | — |
| 2454 | Armor Métal | Ctrl qualité | J-1 |

- Fond blanc, bordures fines `breton-sand`
- Cellule "J+2 ⚠️" : fond `breton-copper/10`, texte `breton-copper` (alerte tiède)
- Cellule "?" : fond `breton-copper/20`, texte `breton-copper` (alerte chaude, font-bold)
- Cellule "Ressaisie ADV" : italique, `breton-granite`
- Une cellule avec texte tronqué (overflow hidden)

**Animation d'entrée** : `scaleIn` (0.96→1) + lignes en stagger 60ms (opacity + y translate).

### Phase 2 — "Transition" (durée : 1.5s)

Fondu-enchaîné structuré, pas de morphing :
1. **0–400ms** : bordures de grille → opacity 0
2. **200–800ms** : contenu des cellules → opacity 0 avec léger y-translate vers le haut (-10px)
3. **400–1000ms** : blur léger (0→4px→0) sur le conteneur
4. **600–1500ms** : structure dashboard apparaît en fade-in (opacity 0→1)

Implémenté via crossfade custom (animation orchestrée manuellement avec des `motion.div` superposés et des délais staggered). Ne pas utiliser `AnimatePresence mode="wait"` car il ne supporte pas les animations d'entrée/sortie qui se chevauchent.

### Phase 3 — "Après" (durée : 3s + 0.5s pause)

Dashboard "pilotage production" sobre.

**En-tête dashboard** :
- Dot vert pulsant + "Temps réel" en `breton-emerald`, `text-xs`
- Titre "Pilotage production" en `breton-navy`, `font-medium`
- "···" menu (décoratif) à droite

**4 KPI cards** (grille 4 colonnes desktop, 2x2 mobile) :

| Métrique | Valeur | Couleur | Animation |
|---|---|---|---|
| Taux de service | 96% | breton-emerald | Compteur 0→96, 600ms |
| Commandes du jour | 24 | breton-navy | Compteur 0→24, 600ms |
| Encours | 18 OF | breton-navy | Compteur 0→18, 600ms |
| Retards critiques | 2 | breton-copper | Compteur 0→2, 400ms |

Stagger 100ms entre chaque KPI.

**Barre charge atelier** :
- Label "Charge atelier" + valeur "82%" à droite
- Barre : fond `breton-emerald/15`, remplissage `breton-emerald`, `rounded-full`
- Animation : width 0→82%, 800ms, ease-out, délai 400ms après les KPIs

**Pied de dashboard** :
- Gauche : "MAJ : il y a 2 min" en `breton-granite`, `text-xs`
- Droite : dot `breton-copper` + "2 OF en retard critique" en `text-xs`
- L'alerte apparaît en fade-in avec délai 500ms

**Dot "Temps réel"** : animation pulse continue (scale 1→1.5→1, opacity 1→0.5→1, 2.5s, infinite).

### Timing de la boucle

```
0s        2s    3.5s              6.5s  7s
|--Avant--|--Trans--|----Après----|pause|→ reboucle
```

Le retour Après→Avant se fait par un fondu croisé rapide (400ms).

### Reduced motion

Si `prefers-reduced-motion: reduce` :
- Pas de boucle, pas de transition
- Le dashboard "Après" est affiché directement en statique
- Les compteurs affichent leur valeur finale immédiatement
- Le dot "Temps réel" ne pulse pas

### Visibilité

Le composant observe son `inView` via `useInView` (Framer Motion). L'animation ne démarre que quand le composant est visible et se pause quand il sort du viewport.

### Accessibilité

Le composant est décoratif (le H1 + sous-titre portent déjà le message). Ajouter `aria-hidden="true"` sur le conteneur `TransformationDemo`. Pas d'`aria-live` ni de texte alternatif nécessaire.

### Nettoyage des timers

Les timers internes (`setTimeout`/`requestAnimationFrame`) doivent être nettoyés au unmount (cleanup dans `useEffect`). Le composant doit aussi respecter `document.visibilityState` : mettre en pause la boucle quand l'onglet est inactif pour éviter le jank au retour.

## Fichiers impactés

| Fichier | Action |
|---|---|
| `src/components/visuals/TransformationDemo.tsx` | **Créer** — composant principal |
| `src/components/sections/HeroV3.tsx` | **Réécrire** — nouveau layout hero avec TransformationDemo |
| `src/app/page.tsx` | **Modifier** — ajuster les imports si nécessaire |

## Fichiers non impactés

- `src/components/visuals/DashboardMockup.tsx` — conservé (peut être utilisé ailleurs)
- `src/components/visuals/AnimatedDashboard.tsx` — conservé
- `src/lib/animations.ts` — réutiliser les variants existants quand possible
- `src/lib/constants.ts` — pas de changement

## Contraintes techniques

- Framer Motion uniquement, pas de GSAP ni de dépendance supplémentaire
- Responsive : `clamp()` pour les tailles texte, grilles Tailwind pour le layout
- Aucun backend
- Respecter `useReducedMotion()` (pattern existant dans le projet)
- Le composant doit fonctionner en SSR (client component avec `'use client'`)
- Fond transparent — le gradient est géré par le hero wrapper

## Critères de succès

1. Un visiteur comprend la transformation "Excel → dashboard" en moins de 3 secondes
2. Le composant est lisible et bien proportionné sur mobile (375px) comme desktop (1440px)
3. L'animation est fluide (60fps), sans jank
4. Le hero garde les éléments critiques : badge, titre, CTAs, micro-preuves
5. `prefers-reduced-motion` respecté — version statique fonctionnelle
6. Pas de régression sur les tests E2E existants (navigation, SEO) — mettre à jour les assertions sur le texte du H1 homepage si nécessaire
