'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Phase = 'avant' | 'transition' | 'apres';

const TIMING = {
  avant: 2000,
  transition: 1500,
  apres: 3500,
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
          opacity: phase === 'avant' ? 1 : 0,
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
        transition={{
          duration: phase === 'transition' ? 0.8 : 0.4,
          delay: phase === 'apres' ? 0 : 0.4,
        }}
      >
        <DashboardView animate={phase === 'apres'} reducedMotion={!!prefersReducedMotion} />
      </motion.div>

      {/* Blur overlay during transition */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          backdropFilter: phase === 'transition' ? 'blur(4px)' : 'blur(0px)',
          opacity: phase === 'transition' ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
}

/* ─── Spreadsheet (Phase "Avant") ─── */

function SpreadsheetView() {
  const tabs = ['Sem. 16', 'Sem. 17', 'Suivi ADV'];

  const rows = [
    { of: '2451', client: 'Navale Bretagne', statut: 'En cours', delai: 'J+2', alert: 'warn' },
    {
      of: '2452',
      client: 'M\u00e9ca-Pr\u00e9cision',
      statut: 'Attente mati\u00e8re',
      delai: '?',
      alert: 'error',
    },
    {
      of: '2453',
      client: 'K\u00e9roual Indus.',
      statut: 'Ressaisie ADV',
      delai: '\u2014',
      alert: 'muted',
    },
    {
      of: '2454',
      client: 'Armor M\u00e9tal',
      statut: 'Ctrl qualit\u00e9',
      delai: 'J-1',
      alert: 'none',
    },
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
        <div className="mb-0.5 grid grid-cols-[1fr_2fr_2fr_1fr] gap-px text-[10px] font-semibold uppercase tracking-wider text-breton-granite sm:text-xs">
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">OF</div>
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">Client</div>
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">Statut</div>
          <div className="bg-breton-foam/80 px-2 py-1.5 sm:px-3">D&eacute;lai</div>
        </div>

        {/* Data rows */}
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
              className={`px-2 py-2 sm:px-3 ${
                row.alert === 'muted' ? 'italic text-breton-granite' : 'text-breton-slate'
              }`}
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

        {/* Ghost row */}
        <motion.div
          className="grid grid-cols-[1fr_2fr_2fr_1fr] gap-px text-[11px] sm:text-sm"
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

/* ─── Dashboard (Phase "Après") ─── */

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
            <p className="text-[10px] font-medium uppercase tracking-wider text-breton-granite sm:text-xs">
              {kpi.label}
            </p>
            <p className={`mt-1 text-xl font-bold sm:text-2xl ${kpi.color}`}>
              <AnimatedCounter
                target={kpi.value}
                animate={animate}
                reducedMotion={reducedMotion}
                suffix={kpi.suffix}
              />
            </p>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="px-4 sm:px-6">
        <div className="mb-1.5 flex items-center justify-between text-xs text-breton-slate">
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
        <span className="text-[10px] text-breton-granite sm:text-xs">MAJ : il y a 2 min</span>
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
