# Hero Transformation Demo — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer le hero HeroV3 par un nouveau hero avec composant animé avant/après (Excel → dashboard production) sur fond clair.

**Architecture:** Un composant `TransformationDemo` (machine à 3 états avec crossfade) injecté dans un hero rewritten `HeroV3`. Le composant utilise Framer Motion avec `useInView`, `useReducedMotion`, et des timers nettoyés au unmount. Layout vertical centré, fond foam→sand.

**Tech Stack:** React 19, Framer Motion, Tailwind CSS v4 (tokens breton-*), Next.js App Router

**Spec:** `docs/superpowers/specs/2026-04-15-hero-transformation-demo-design.md`

---

## File Structure

| Fichier | Action | Responsabilité |
|---|---|---|
| `src/components/visuals/TransformationDemo.tsx` | Créer | Composant avant/après animé (machine 3 états) |
| `src/components/sections/HeroV3.tsx` | Réécrire | Nouveau layout hero vertical centré + TransformationDemo |
| `src/app/page.tsx` | Aucune modif | Import HeroV3 inchangé |
| `e2e/navigation.spec.ts` | Vérifier | Le test `h1 contient "donnée"` passe déjà |

---

## Task 1: Créer le squelette de TransformationDemo

**Files:**
- Create: `src/components/visuals/TransformationDemo.tsx`

- [ ] **Step 1: Créer le composant avec la structure de base**

Créer `src/components/visuals/TransformationDemo.tsx` avec la machine à états (3 phases), le hook `useInView`, `useReducedMotion`, et le timer avec cleanup. Pas encore d'UI — juste la logique de cycle.

```tsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Phase = 'avant' | 'transition' | 'apres';

const TIMING = {
  avant: 2000,
  transition: 1500,
  apres: 3500, // 3s display + 0.5s pause
} as const;

export function TransformationDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('avant');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const nextPhase = useCallback((current: Phase): Phase => {
    if (current === 'avant') return 'transition';
    if (current === 'transition') return 'apres';
    return 'avant';
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase('apres');
      return;
    }

    if (!isInView) {
      clearTimer();
      return;
    }

    const scheduleNext = () => {
      clearTimer();
      timerRef.current = setTimeout(() => {
        setPhase((prev) => nextPhase(prev));
      }, TIMING[phase]);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearTimer();
      } else {
        scheduleNext();
      }
    };

    scheduleNext();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [phase, isInView, prefersReducedMotion, clearTimer, nextPhase]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-breton-sand bg-white shadow-sm"
      style={{ minHeight: 'clamp(280px, 40vw, 420px)' }}
    >
      {/* Phase Avant */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: phase === 'avant' ? 1 : phase === 'transition' ? 0 : 0,
        }}
        transition={{ duration: phase === 'transition' ? 0.8 : 0.4 }}
      >
        <SpreadsheetView />
      </motion.div>

      {/* Phase Apres */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: phase === 'apres' ? 1 : phase === 'transition' ? 0.3 : 0,
        }}
        transition={{ duration: phase === 'transition' ? 0.8 : 0.4, delay: phase === 'apres' ? 0 : 0.4 }}
      >
        <DashboardView animate={phase === 'apres'} reducedMotion={!!prefersReducedMotion} />
      </motion.div>

      {/* Blur overlay during transition */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backdropFilter: phase === 'transition' ? 'blur(4px)' : 'blur(0px)',
          opacity: phase === 'transition' ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}

function SpreadsheetView() {
  return <div className="p-4 h-full">TODO: spreadsheet</div>;
}

function DashboardView({ animate, reducedMotion }: { animate: boolean; reducedMotion: boolean }) {
  return <div className="p-4 h-full">TODO: dashboard</div>;
}
```

- [ ] **Step 2: Vérifier que le fichier compile**

Run: `npx tsc --noEmit src/components/visuals/TransformationDemo.tsx 2>&1 || npm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/visuals/TransformationDemo.tsx
git commit -m "feat: add TransformationDemo skeleton with phase state machine"
```

---

## Task 2: Implémenter SpreadsheetView

**Files:**
- Modify: `src/components/visuals/TransformationDemo.tsx`

- [ ] **Step 1: Remplacer le placeholder SpreadsheetView**

Implémenter le faux tableur avec en-tête onglets et grille de données. Utiliser les tokens breton-* pour toutes les couleurs.

```tsx
function SpreadsheetView() {
  const tabs = ['Sem. 16', 'Sem. 17', 'Suivi ADV'];

  const rows = [
    { of: '2451', client: 'Navale Bretagne', statut: 'En cours', delai: 'J+2', alert: 'warn' },
    { of: '2452', client: 'Méca-Précision', statut: 'Attente matière', delai: '?', alert: 'error' },
    { of: '2453', client: 'Kéroual Indus.', statut: 'Ressaisie ADV', delai: '—', alert: 'muted' },
    { of: '2454', client: 'Armor Métal', statut: 'Ctrl qualité', delai: 'J-1', alert: 'none' },
  ] as const;

  return (
    <motion.div
      className="flex h-full flex-col"
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Tab bar */}
      <div className="flex items-center gap-0 border-b border-breton-sand bg-breton-sand/40 px-2 pt-2">
        {tabs.map((tab, i) => (
          <div
            key={tab}
            className={`px-4 py-2 text-xs font-medium ${
              i === 0
                ? 'rounded-t-lg border border-b-0 border-breton-sand bg-white text-breton-navy'
                : 'text-breton-granite'
            }`}
          >
            {tab}
          </div>
        ))}
        <div className="ml-auto pr-2">
          <div className="flex gap-1">
            <div className="h-2.5 w-2.5 rounded-full bg-breton-sand" />
            <div className="h-2.5 w-2.5 rounded-full bg-breton-sand" />
            <div className="h-2.5 w-2.5 rounded-full bg-breton-sand" />
          </div>
        </div>
      </div>

      {/* Spreadsheet grid */}
      <div className="flex-1 overflow-hidden p-3 sm:p-4">
        {/* Header row */}
        <div className="mb-0.5 grid grid-cols-[1fr_2fr_2fr_1fr] gap-px text-[10px] font-semibold text-breton-granite uppercase tracking-wider sm:text-xs">
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">OF</div>
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">Client</div>
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">Statut</div>
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">D&eacute;lai</div>
        </div>

        {/* Data rows — stagger entry animation */}
        {rows.map((row, i) => (
          <motion.div
            key={row.of}
            className="grid grid-cols-[1fr_2fr_2fr_1fr] gap-px border-b border-breton-sand/50 text-[11px] sm:text-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
          >
            <div className="px-2 py-2 font-mono text-breton-navy sm:px-3">{row.of}</div>
            <div className="truncate px-2 py-2 text-breton-slate sm:px-3">{row.client}</div>
            <div
              className={`px-2 py-2 sm:px-3 ${row.alert === 'muted' ? 'italic text-breton-granite' : 'text-breton-slate'}`}
            >
              {row.statut}
            </div>
            <div
              className={`px-2 py-2 font-medium sm:px-3 ${
                row.alert === 'warn'
                  ? 'rounded bg-breton-copper/10 text-breton-copper'
                  : row.alert === 'error'
                    ? 'rounded bg-breton-copper/20 font-bold text-breton-copper'
                    : 'text-breton-slate'
              }`}
            >
              {row.delai}
            </div>
          </motion.div>
        ))}

        {/* Ghost row for visual depth */}
        <motion.div
          className="grid grid-cols-[1fr_2fr_2fr_1fr] gap-px text-[11px] opacity-30 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="px-2 py-2 sm:px-3">2455</div>
          <div className="px-2 py-2 sm:px-3">Le Bras &amp; Fils</div>
          <div className="px-2 py-2 sm:px-3">En attente...</div>
          <div className="px-2 py-2 sm:px-3">&mdash;</div>
        </motion.div>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/visuals/TransformationDemo.tsx
git commit -m "feat: implement SpreadsheetView in TransformationDemo"
```

---

## Task 3: Implémenter DashboardView

**Files:**
- Modify: `src/components/visuals/TransformationDemo.tsx`

- [ ] **Step 1: Implémenter le composant AnimatedCounter**

Ajouter un hook utilitaire pour animer les compteurs numériques (0→N).

```tsx
function AnimatedCounter({
  target,
  duration = 600,
  animate,
  reducedMotion = false,
  suffix = '',
}: {
  target: number;
  duration?: number;
  animate: boolean;
  reducedMotion?: boolean;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Reduced motion: show final value immediately
    if (reducedMotion) {
      setValue(target);
      return;
    }

    if (!animate) {
      setValue(0);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, target, duration, reducedMotion]);

  return (
    <span>
      {reducedMotion ? target : animate ? value : 0}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Remplacer le placeholder DashboardView**

```tsx
function DashboardView({ animate, reducedMotion }: { animate: boolean; reducedMotion: boolean }) {
  const kpis = [
    { label: 'Taux de service', value: 96, suffix: '%', color: 'text-breton-emerald' },
    { label: 'Cmd. du jour', value: 24, suffix: '', color: 'text-breton-navy' },
    { label: 'OF encours', value: 18, suffix: '', color: 'text-breton-navy' },
    { label: 'Retards crit.', value: 2, suffix: '', color: 'text-breton-copper' },
  ];

  return (
    <div className="flex h-full flex-col">
      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-breton-sand/60 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-breton-emerald" />
          </span>
          <span className="text-xs font-medium text-breton-emerald">Temps r&eacute;el</span>
        </div>
        <span className="text-sm font-medium text-breton-navy">Pilotage production</span>
        <span className="text-breton-granite">&middot;&middot;&middot;</span>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:px-6">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="rounded-xl border border-breton-sand/60 bg-breton-foam/50 px-3 py-3 sm:px-4"
            initial={{ opacity: 0, y: 12 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            <p className="text-[10px] font-medium text-breton-granite uppercase tracking-wider sm:text-xs">
              {kpi.label}
            </p>
            <p className={`mt-1 text-xl font-bold sm:text-2xl ${kpi.color}`}>
              <AnimatedCounter target={kpi.value} animate={animate} reducedMotion={reducedMotion} suffix={kpi.suffix} />
            </p>
          </motion.div>
        ))}
      </div>

      {/* Progress bar: charge atelier */}
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between text-xs text-breton-slate mb-1.5">
          <span>Charge atelier</span>
          <span className="font-semibold">82%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-breton-emerald/15">
          <motion.div
            className="h-full rounded-full bg-breton-emerald"
            initial={{ width: '0%' }}
            animate={animate ? { width: '82%' } : { width: '0%' }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-breton-sand/60 px-4 py-3 sm:px-6">
        <span className="text-[10px] text-breton-granite sm:text-xs">
          MAJ : il y a 2 min
        </span>
        <motion.div
          className="flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-breton-copper" />
          <span className="text-[10px] font-medium text-breton-copper sm:text-xs">
            2 OF en retard critique
          </span>
        </motion.div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Vérifier la compilation**

Run: `npm run typecheck`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/components/visuals/TransformationDemo.tsx
git commit -m "feat: implement DashboardView with animated counters and KPIs"
```

---

## Task 4: Réécrire HeroV3 avec le nouveau layout

**Files:**
- Modify: `src/components/sections/HeroV3.tsx`

- [ ] **Step 1: Réécrire HeroV3 en layout vertical centré sur fond clair**

Remplacer entièrement le contenu de `src/components/sections/HeroV3.tsx` :

```tsx
'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionStagger, sectionChild } from '@/lib/animations';
import { TransformationDemo } from '@/components/visuals/TransformationDemo';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;

  return (
    <section className="relative -mt-16 flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-breton-foam to-breton-sand pt-32 pb-16">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Text block — centered */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={child}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-breton-sand bg-white/80 px-4 py-1.5 text-sm font-semibold text-breton-navy backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-breton-emerald" />
            </span>
            PME industrielles &bull; Bretagne
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-[clamp(32px,5.5vw,64px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy"
          >
            Vos donn&eacute;es terrain, enfin pilotables
          </motion.h1>

          <motion.p
            variants={child}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-breton-slate"
          >
            On remplace vos fichiers Excel, ressaisies et suivis manuels par des agents IA
            branch&eacute;s sur vos outils m&eacute;tier.
          </motion.p>

          <motion.div variants={child} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/audit-ia"
              className="inline-flex items-center justify-center rounded-full bg-breton-navy px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-breton-slate"
            >
              Mes priorit&eacute;s IA &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-breton-navy/20 bg-white px-8 py-4 text-base font-semibold text-breton-navy transition-colors duration-200 hover:bg-breton-foam"
            >
              Diagnostic gratuit
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual demo */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, scale: 0.96 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <TransformationDemo />
        </motion.div>

        {/* Micro-proofs */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-breton-granite"
        >
          <span>7 ans de terrain industriel</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>12+ projets d&eacute;ploy&eacute;s</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Lorient, Bretagne</span>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Vérifier la compilation**

Run: `npm run typecheck`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroV3.tsx
git commit -m "feat: rewrite HeroV3 — centered layout, light bg, TransformationDemo"
```

---

## Task 5: Vérification visuelle et tests

**Files:**
- Verify: `e2e/navigation.spec.ts`

- [ ] **Step 1: Lancer le serveur de dev et vérifier visuellement**

Run: `npm run dev`

Ouvrir `http://localhost:3000` et vérifier :
- Le hero s'affiche avec fond clair (foam → sand)
- Le badge, titre, sous-titre et CTAs sont centrés
- Le composant TransformationDemo est visible sous les CTAs
- L'animation boucle : tableur (2s) → fondu (1.5s) → dashboard (3.5s) → reboucle
- Les compteurs s'animent, la barre se remplit, l'alerte apparaît
- Sur mobile (375px) : layout correct, composant bien dimensionné, KPIs en 2x2

- [ ] **Step 2: Vérifier reduced-motion**

Dans DevTools > Rendering > Emulate CSS media feature `prefers-reduced-motion: reduce`.
Expected: Le dashboard s'affiche directement en statique, pas de boucle.

- [ ] **Step 3: Lancer les tests E2E**

Run: `npx playwright test e2e/navigation.spec.ts --project=chromium`
Expected: Tous les tests passent. Le test `h1 contient "donnée"` passe car le nouveau H1 contient "données".

- [ ] **Step 4: Lancer tous les tests E2E**

Run: `npm run test:e2e`
Expected: 30 tests passent.

- [ ] **Step 5: Build de production**

Run: `npm run build`
Expected: Build réussi sans erreurs.

- [ ] **Step 6: Commit final si des ajustements ont été nécessaires**

```bash
git add -A
git commit -m "fix: adjust TransformationDemo after visual review"
```

(Seulement si des corrections ont été faites lors de la vérification.)
