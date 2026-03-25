# Refonte "Terroir lumineux" — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refonte complète du design system balise-ia — fond clair dominant, palette cuivre, animations Apple, homepage simplifiée à 7 sections.

**Architecture:** Approche bottom-up : design tokens d'abord (CSS + Tailwind), puis composants partagés (logo, animations, header/footer), puis sections homepage une par une, et enfin pages secondaires. Chaque tâche produit un diff testable visuellement.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide icons

**Spec:** `docs/superpowers/specs/2026-03-25-refonte-design-terroir-lumineux.md`

---

## File Structure

### Modified files
- `src/app/globals.css` — Tokens couleur, grain texture, article prose
- `src/lib/animations.ts` — Nouveaux variants Framer Motion
- `src/lib/constants.ts` — Vérifier/mettre à jour titre hero si hardcodé
- `src/components/ui/logo.tsx` — Couleur accent cyan → copper
- `src/components/ui/animated-section.tsx` — Supprimer si plus utilisé après Task 15
- `src/components/layout/Header.tsx` — Frosted glass, fond clair
- `src/components/layout/Footer.tsx` — Accent copper, hover links
- `src/components/sections/index.ts` — Exports mis à jour
- `src/components/sections/HeroV3.tsx` — Refonte complète
- `src/components/sections/LogoCarousel.tsx` — Restyle marquee
- `src/components/sections/TeamSection.tsx` — Accent copper
- `src/components/sections/Services.tsx` — Nouveau design cards
- `src/components/sections/Projects.tsx` — Cards avec métriques
- `src/components/sections/About.tsx` — Garde pour /a-propos (homepage utilise IncarnationSection)
- `src/components/sections/CtaContact.tsx` — Navy + orb glow
- `src/components/sections/Hero.tsx` — Fond clair pages intérieures
- `src/components/visuals/DashboardMockup.tsx` — Accent copper
- `src/components/visuals/ParticleBackground.tsx` — Accent copper ou supprimer si inutilisé
- `src/app/page.tsx` — Nouvelle structure 7 sections
- `src/app/services/page.tsx` — Nouveau design system
- `src/app/cas-clients/page.tsx` — Nouveau design system
- `src/app/contact/page.tsx` — Nouveau design system
- `src/app/a-propos/page.tsx` — Nouveau design system
- `src/app/blog/page.tsx` — Nouveau design system
- `src/app/blog/[slug]/page.tsx` — Prose links copper
- `src/app/audit-ia/page.tsx` — Nouveau design system
- `src/app/power-bi-bretagne/page.tsx` — Accent copper
- `src/app/automatisation-commandes-pme/page.tsx` — Accent copper
- `src/app/consultant-data-lorient/page.tsx` — Accent copper
- `src/app/interventions/[ville]/page.tsx` — Hero clair
- `src/app/mentions-legales/page.tsx` — Hero clair
- `src/app/merci/page.tsx` — Hero clair
- `src/app/api/og/route.tsx` — Couleur copper OG image
- `CLAUDE.md` — Documentation mise à jour

### New files
- `src/components/sections/MetricsBand.tsx` — Bande sable métriques animées
- `src/components/sections/PillarsSection.tsx` — 3 piliers (remplace ProofBlock)
- `src/components/sections/IncarnationSection.tsx` — Citation + photo + badges

### Deleted files
- `src/components/sections/ProofBlock.tsx` — Remplacé par PillarsSection
- `src/components/sections/Pillars.tsx` — Doublon supprimé
- `src/components/sections/ExpertisesBlock.tsx` — Fusionné dans PillarsSection
- `src/components/sections/ResultsBlock.tsx` — Fusionné dans Projects cards
- `src/components/sections/AnimatedCounters.tsx` — Remplacé par MetricsBand
- `src/components/sections/MetricsSection.tsx` — Inutilisé

---

## Task 1: Design tokens — CSS + Tailwind

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace accent token and add copper tokens**

In `globals.css`, replace `--color-breton-accent: #00b4d8;` with:
```css
--color-breton-copper: #9a5f3a;
--color-breton-copper-light: #c17f59;
```

- [ ] **Step 2: Update grain texture CSS**

Replace the existing `.hero-grain::after` with updated grain (baseFrequency 0.65, 512px):
```css
.grain-texture::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 512px 512px;
  pointer-events: none;
  z-index: 1;
}
```

- [ ] **Step 3: Update article prose links**

Change `.article-prose a` from `text-breton-emerald` to `text-breton-copper`.

- [ ] **Step 4: Verify build compiles**

Run: `npm run build 2>&1 | head -20`
Expected: Build may have warnings about missing `breton-accent` class usages — that's expected, we fix those in subsequent tasks.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: design tokens — copper palette, grain texture, prose links"
```

---

## Task 2: Animation variants

**Files:**
- Modify: `src/lib/animations.ts`

- [ ] **Step 1: Add new Apple-style variants**

Add after existing variants:
```ts
// Apple-style scale-in (hero, cards)
export const scaleInApple: Variants = {
  hidden: { scale: 0.94, opacity: 0, y: 30 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

// Stagger for section eyebrow → title → subtitle
export const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

// Fast reveal for section children
export const sectionChild: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Card reveal with scale
export const cardReveal: Variants = {
  hidden: { scale: 0.95, opacity: 0, y: 20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/animations.ts
git commit -m "feat: Apple-style animation variants (scaleIn, sectionStagger, cardReveal)"
```

---

## Task 3: Logo — cyan to copper

**Files:**
- Modify: `src/components/ui/logo.tsx`

- [ ] **Step 1: Update color constants**

Replace:
```ts
const ACCENT_CYAN = '#00B4D8';
```
With:
```ts
const ACCENT_COPPER = '#9A5F3A';
const ACCENT_COPPER_LIGHT = '#C17F59';
```

- [ ] **Step 2: Update PhareIcon**

Replace all `accentColor` assignments from `ACCENT_CYAN` to `ACCENT_COPPER_LIGHT` (SVG decorative elements). Update the text color references in `Logo`, `LogoWithIcon`, `LogoCompact` to use `text-breton-copper` instead of `text-breton-accent`.

- [ ] **Step 3: Update LogoIcon (favicon)**

Same replacement in the small icon variant.

- [ ] **Step 4: Verify visually**

Run: `npm run dev` — check logo in header renders with copper tones.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/logo.tsx
git commit -m "feat: logo accent cyan → copper (#9A5F3A / #C17F59)"
```

---

## Task 4: Global accent migration (non-section files)

**Files:**
- Modify: `src/components/ui/cookie-banner.tsx`
- Modify: `src/components/ui/sticky-cta.tsx`
- Modify: `src/components/visuals/DashboardMockup.tsx`
- Modify: `src/app/api/og/route.tsx`

- [ ] **Step 1: Find all `breton-accent` and `#00B4D8` usages**

Run: `grep -rn "breton-accent\|00B4D8\|ACCENT_CYAN" src/ --include="*.tsx" --include="*.ts" --include="*.css"`

- [ ] **Step 2: Replace in non-section files**

Files to update (replace `breton-accent` → `breton-copper`, `#00B4D8` → `#9A5F3A`):
- `src/components/visuals/DashboardMockup.tsx`
- `src/components/visuals/ParticleBackground.tsx` (or delete if unused)
- `src/components/sections/TeamSection.tsx`
- `src/app/api/og/route.tsx` — replace `#00B4D8` with `#9A5F3A`

Also check and update if present: `src/components/ui/cookie-banner.tsx`, `src/components/ui/sticky-cta.tsx`.

- [ ] **Step 3: Check constants.ts for hardcoded hero title**

Read `src/lib/constants.ts` — if the hero title "Vos données travaillent" is hardcoded, update to "De la donnée brute à la décision claire."

- [ ] **Step 4: Verify typecheck passes**

Run: `npm run typecheck`

- [ ] **Step 5: Commit**

```bash
git add src/components/visuals/ src/components/sections/TeamSection.tsx src/components/ui/cookie-banner.tsx src/components/ui/sticky-cta.tsx src/app/api/og/ src/lib/constants.ts
git commit -m "feat: global accent migration breton-accent → breton-copper"
```

---

## Task 5: Header — frosted glass

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Update header styles**

Replace the scroll-dependent className logic. Default state: `bg-breton-foam/70 backdrop-blur-[24px] saturate-[1.8] border-b border-transparent`. Scrolled state: `bg-white/85 backdrop-blur-[24px] border-b border-breton-sand/50 shadow-sm`.

- [ ] **Step 2: Remove logo variant switching**

Since background is always light, logo is always `variant="default"`. Remove the `scrolled ? 'default' : 'white'` conditional. Nav links always use dark text colors.

- [ ] **Step 3: Update CTA button styling**

Always navy bg: `bg-breton-navy text-white hover:bg-breton-slate`. Remove the scrolled conditional for CTA.

- [ ] **Step 4: Update mobile menu colors**

Ensure mobile Sheet uses `bg-white`, links use `text-breton-slate hover:text-breton-navy`.

- [ ] **Step 5: Verify visually**

Check header on homepage — frosted glass visible, logo with copper accent, smooth scroll transition.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: header frosted glass, always light background"
```

---

## Task 6: Footer — copper accents

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Replace accent color in hover links**

Change `hover:text-breton-accent` → `hover:text-breton-copper` throughout.

- [ ] **Step 2: Update Bretagne map**

Change `fill="#00B4D8"` to `fill="#C17F59"` for city dots and halos in BretagneMap SVG.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: footer accent cyan → copper"
```

---

## Task 7: Hero — refonte complète

**Files:**
- Modify: `src/components/sections/HeroV3.tsx`

- [ ] **Step 1: Rewrite HeroV3 with light background**

Full rewrite: `min-h-screen`, centré, fond gradient `breton-foam → breton-sand`, grain texture overlay, radial glow emerald.

Key elements:
- Badge local pill with pulsing emerald dot
- H1: "De la donnée brute à la *décision claire.*" — Instrument Serif, 76px desktop / 40px mobile, emerald italic with copper underline brush
- Sous-titre: 19px, breton-slate, max-w-[520px]
- CTAs: primary (navy) + secondary (outline)
- Micro-preuves: 3 check items

Use `scaleInApple` for H1, `sectionStagger` (from Task 2) for sequential reveal of badge→title→subtitle→CTAs→proofs.

- [ ] **Step 2: Verify visually**

Check hero on homepage — light gradient, centered, animations work, responsive at 375px and 1440px.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroV3.tsx
git commit -m "feat: hero V3 — light gradient, centered, Apple animations"
```

---

## Task 8: MetricsBand — new component

**Files:**
- Create: `src/components/sections/MetricsBand.tsx`

- [ ] **Step 1: Create MetricsBand component**

`'use client'` component. Sand background, 4 metrics from `KEY_METRICS`, Instrument Serif 40px (28px mobile), vertical separators. Counter animation with `useInView` and spring. Mobile: `grid-cols-2`.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/MetricsBand.tsx
git commit -m "feat: MetricsBand — animated counters on sand background"
```

---

## Task 9: PillarsSection — new component

**Files:**
- Create: `src/components/sections/PillarsSection.tsx`

> **Note:** Do NOT delete `ProofBlock.tsx`, `Pillars.tsx`, `ExpertisesBlock.tsx` yet — they are still imported in `page.tsx`. Deletion happens in Task 15 when `page.tsx` is rewritten.

- [ ] **Step 1: Create PillarsSection**

3 cards on foam background. Eyebrow "Notre approche" (emerald). Title Instrument Serif. Cards: white bg, sand border, rounded-2xl. Lucide icons (Search, BarChart3, Zap). Hover: translateY(-6px) + shadow + gradient bar top (emerald→copper-light). Mobile: stack 1 col, p-6.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/PillarsSection.tsx
git commit -m "feat: PillarsSection — 3 pillar cards with hover effects"
```

---

## Task 10: Services — new card design

**Files:**
- Modify: `src/components/sections/Services.tsx`

- [ ] **Step 1: Restyle Services cards**

Update to spec: rounded-2xl, sand borders, Instrument Serif titles, emerald taglines, hover effects (translateY + shadow + gradient bg + arrow glide). Audit card featured with emerald border.

- [ ] **Step 2: Update section header**

Add eyebrow "Nos offres" (emerald, uppercase). Title Instrument Serif 50px.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "feat: services cards — new terroir design with hover effects"
```

---

## Task 11: Projects — metric highlight cards

**Files:**
- Modify: `src/components/sections/Projects.tsx`

> **Note:** Do NOT delete `ResultsBlock.tsx` yet — deletion happens in Task 15.

- [ ] **Step 1: Restyle Projects cards**

Grid 3 cols (mobile: 1 col). Each card: image placeholder + sector label (emerald uppercase) + title Instrument Serif + description + metric highlight (Instrument Serif 28px). Foam background for section.

- [ ] **Step 2: Add section header**

Eyebrow "Réalisations" + title "Cas clients" + "Tout voir →" link.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "feat: projects cards with metric highlights"
```

---

## Task 12: IncarnationSection — new component

**Files:**
- Create: `src/components/sections/IncarnationSection.tsx`
- Modify: `src/components/sections/About.tsx` (keep for /a-propos page, but homepage uses Incarnation)

- [ ] **Step 1: Create IncarnationSection**

Grid 2 cols. Left: photo placeholder (rounded-[28px], parallax with `useScroll`/`useTransform`, hover scale 1.02). Right: eyebrow + quote (Instrument Serif 30px italic, left border gradient emerald→copper) + name + role + 3 trust badges (Flag, Lock, MapPin icons).

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/IncarnationSection.tsx
git commit -m "feat: IncarnationSection — citation, photo parallax, trust badges"
```

---

## Task 13: CtaContact — navy + orb glow

**Files:**
- Modify: `src/components/sections/CtaContact.tsx`

- [ ] **Step 1: Restyle CTA final**

Navy background, grain texture, copper orb glow (radial gradient). Title: "Prêt à passer de la donnée brute à *l'action* ?" — copper for "l'action". CTAs: sand primary + ghost white secondary.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/CtaContact.tsx
git commit -m "feat: CTA final — navy bg, copper orb glow, sand buttons"
```

---

## Task 14: LogoCarousel — marquee restyle

**Files:**
- Modify: `src/components/sections/LogoCarousel.tsx`

- [ ] **Step 1: Update styling**

White background. Label "Ils nous font confiance" (granite, uppercase, letter-spacing 0.12em). Ensure marquee CSS animation works (25s, pause on hover).

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/LogoCarousel.tsx
git commit -m "feat: logo carousel — white bg, granite label"
```

---

## Task 15: Homepage assembly + cleanup

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/sections/index.ts`
- Delete: `src/components/sections/ProofBlock.tsx`
- Delete: `src/components/sections/Pillars.tsx`
- Delete: `src/components/sections/ExpertisesBlock.tsx`
- Delete: `src/components/sections/ResultsBlock.tsx`
- Delete: `src/components/sections/AnimatedCounters.tsx`
- Delete: `src/components/sections/MetricsSection.tsx`
- Delete (if unused elsewhere): `src/components/ui/animated-section.tsx`

> **Critical:** This task rewrites `page.tsx` first, THEN deletes old components and updates exports. Do NOT reverse the order — the build would break.

- [ ] **Step 1: Rewrite page.tsx**

New structure (remove all old imports, add new ones):
```tsx
<HeroV3 />
<MetricsBand />
<LogoCarousel />
<PillarsSection />
<Services showLink={true} />
<Projects />
<IncarnationSection />
<CtaContact />
```

Remove: `AnimatedSection` wrappers, CTA quiz inline div, FAQ, Methodology, About imports and JSX.

- [ ] **Step 2: Update section exports (index.ts)**

Add new exports: `MetricsBand`, `PillarsSection`, `IncarnationSection`.
Remove old exports: `ProofBlock`, `Pillars`, `ExpertisesBlock`, `ResultsBlock`, `AnimatedCounters`.
Keep: `FAQ`, `Methodology`, `About` (used on other pages).

- [ ] **Step 3: Delete unused component files**

Remove: `ProofBlock.tsx`, `Pillars.tsx`, `ExpertisesBlock.tsx`, `ResultsBlock.tsx`, `AnimatedCounters.tsx`, `MetricsSection.tsx`.

Check if `animated-section.tsx` is still imported anywhere (`grep -r "animated-section\|AnimatedSection" src/ --include="*.tsx" -l`). If not, delete it too.

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 5: Verify homepage visually**

Run dev server. Check all 7 sections render, animations trigger on scroll, responsive at 375px/768px/1440px.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: homepage assembly — 7 sections terroir lumineux, cleanup old components"
```

---

## Task 16: Hero pages intérieures — fond clair

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Update interior Hero**

Replace navy background with gradient foam→sand. Title color: breton-navy. Remove `-mt-16` logic if background was navy-dependent. Add grain texture.

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: interior hero — light gradient foam→sand"
```

---

## Task 17: Pages secondaires

**Files:**
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/cas-clients/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/a-propos/page.tsx`
- Modify: `src/app/blog/page.tsx`
- Modify: `src/app/blog/[slug]/page.tsx`
- Modify: `src/app/audit-ia/page.tsx`
- Modify: `src/app/mentions-legales/page.tsx`
- Modify: `src/app/merci/page.tsx`

- [ ] **Step 1: Update /services**

New hero with light gradient. Services cards with `detailed={true}` and new design system. Add FAQ at bottom (moved from homepage).

- [ ] **Step 2: Update /cas-clients**

Light hero. Projects grid with new card design.

- [ ] **Step 3: Update /contact**

Light hero. Form on white, info cards with sand borders.

- [ ] **Step 4: Update /a-propos**

Light hero. Extended incarnation layout with About content.

- [ ] **Step 5: Update /blog and /blog/[slug]**

Light hero. Article prose links already copper (Task 1).

- [ ] **Step 6: Update /audit-ia**

Light hero. Quiz cards with sand borders, progress bar copper.

- [ ] **Step 7: Update /mentions-legales, /merci, /interventions/[ville]**

Light hero. Content with design system. Note: `/projets` redirects to `/cas-clients` — no change needed.

- [ ] **Step 8: Commit content pages**

```bash
git add src/app/services/ src/app/cas-clients/ src/app/a-propos/ src/app/blog/
git commit -m "feat: content pages — light hero, terroir design system"
```

- [ ] **Step 9: Commit form + utility pages**

```bash
git add src/app/contact/ src/app/audit-ia/ src/app/mentions-legales/ src/app/merci/ src/app/interventions/
git commit -m "feat: form + utility pages — light hero, terroir design system"
```

---

## Task 18: Landing pages SEO — accent copper

**Files:**
- Modify: `src/app/power-bi-bretagne/page.tsx`
- Modify: `src/app/automatisation-commandes-pme/page.tsx`
- Modify: `src/app/consultant-data-lorient/page.tsx`

- [ ] **Step 1: Update all 3 landing pages**

Replace any remaining `breton-accent` with `breton-copper`. Update hero to light gradient. Keep SEO content unchanged.

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: SEO landing pages — light hero, copper accents"
```

---

## Task 19: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update all sections per spec section 10**

Update: palette (copper), hero design, header behavior, section padding, card borders, CTA buttons, homepage section order, code style notes.

- [ ] **Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: CLAUDE.md — terroir lumineux design system"
```

---

## Task 20: Final verification

- [ ] **Step 1: Run typecheck**

Run: `npm run typecheck`
Expected: No errors

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No errors (warnings OK)

- [ ] **Step 3: Run build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Visual check all pages**

Navigate through all pages in browser: /, /services, /cas-clients, /contact, /blog, /a-propos, /audit-ia, /power-bi-bretagne, /automatisation-commandes-pme, /consultant-data-lorient, /mentions-legales, /merci

- [ ] **Step 5: Mobile responsive check**

Check homepage at 375px, 768px, 1024px, 1440px.

- [ ] **Step 6: Commit if any fixes needed**

```bash
git add -A
git commit -m "fix: visual polish and responsive adjustments"
```

---

## Out of scope (follow-up tasks)

- **E2E tests update:** The 24 Playwright tests will need updating (new text, new structure, removed sections). Create a separate task after visual validation is complete. Key files: `e2e/navigation.spec.ts` (structure changes), `e2e/seo.spec.ts` (should pass as-is), `e2e/contact-form.spec.ts` (should pass as-is).
- **Methodology section placement:** Spec says to move Methodology to `/services` or `/a-propos`. Task 17 step 1 adds FAQ to `/services`. Decide where Methodology goes during implementation.
- **About.tsx clarification:** `About.tsx` stays in the codebase for `/a-propos`. The homepage replaces it with `IncarnationSection.tsx`. These are different components serving different purposes.
