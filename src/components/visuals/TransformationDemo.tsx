'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Phase = 'avant' | 'transition' | 'apres';

const TIMING = {
  avant: 2000,
  transition: 1500,
  apres: 4500,
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
      style={{ minHeight: 'clamp(340px, 50vw, 520px)' }}
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

function DecimalCounter({ animate, reducedMotion }: { animate: boolean; reducedMotion: boolean }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) {
      setValue(18);
      return;
    }
    if (!animate) {
      setValue(0);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / 600, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * 18));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, reducedMotion]);

  const display = reducedMotion ? 1.8 : animate ? (value / 10).toFixed(1) : '0';
  return <span>{display}j</span>;
}

/* ─── Sidebar icon (simple SVG placeholders) ─── */

function SidebarIcon({ d, active = false }: { d: string; active?: boolean }) {
  return (
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-lg ${active ? 'bg-breton-emerald/15' : ''}`}
    >
      <svg
        className={`h-3.5 w-3.5 ${active ? 'text-breton-emerald' : 'text-breton-granite/60'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  );
}

/* ─── Mini bar chart ─── */

function MiniBarChart({ animate }: { animate: boolean }) {
  const bars = [
    { label: 'Lun', h: 65 },
    { label: 'Mar', h: 82 },
    { label: 'Mer', h: 74 },
    { label: 'Jeu', h: 91 },
    { label: 'Ven', h: 68 },
  ];

  return (
    <div className="flex items-end gap-1.5 sm:gap-2">
      {bars.map((bar, i) => (
        <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
          <motion.div
            className="w-full rounded-t bg-breton-emerald/70"
            style={{ minHeight: 2 }}
            initial={{ height: 0 }}
            animate={animate ? { height: `${bar.h * 0.6}px` } : { height: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
          />
          <span className="text-[8px] text-breton-granite/60 sm:text-[9px]">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Activity row ─── */

function ActivityRow({
  of,
  client,
  status,
  statusColor,
  time,
  animate,
  delay,
}: {
  of: string;
  client: string;
  status: string;
  statusColor: string;
  time: string;
  animate: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-center gap-2 border-b border-breton-sand/40 py-1.5 text-[10px] sm:gap-3 sm:text-xs"
      initial={{ opacity: 0, x: -8 }}
      animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
    >
      <span className="w-8 font-mono text-breton-navy sm:w-10">{of}</span>
      <span className="flex-1 truncate text-breton-slate">{client}</span>
      <span
        className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium sm:px-2 sm:text-[10px] ${statusColor}`}
      >
        {status}
      </span>
      <span className="hidden text-breton-granite/50 sm:inline">{time}</span>
    </motion.div>
  );
}

function DashboardView({ animate, reducedMotion }: { animate: boolean; reducedMotion: boolean }) {
  const kpis = [
    { label: 'Livraisons', value: 24, suffix: '', color: 'text-breton-navy', trend: '+3' },
    { label: 'Taux service', value: 96, suffix: '%', color: 'text-breton-emerald', trend: '+2.1' },
    {
      label: 'D\u00e9lai moyen',
      value: 18,
      suffix: '',
      color: 'text-breton-navy',
      trend: '-0.4',
      decimal: true,
    },
    { label: 'Retards', value: 2, suffix: '', color: 'text-breton-copper', trend: '' },
  ];

  return (
    <div className="flex h-full">
      {/* Sidebar — hidden on mobile */}
      <motion.div
        className="hidden w-11 flex-shrink-0 flex-col items-center gap-3 border-r border-breton-sand/60 bg-breton-foam/30 py-3 sm:flex"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Dashboard icon (active) */}
        <SidebarIcon
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
          active
        />
        {/* Commandes */}
        <SidebarIcon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        {/* Stocks */}
        <SidebarIcon d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        {/* Stats */}
        <SidebarIcon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        <div className="mt-auto">
          <SidebarIcon d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-breton-sand/60 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-breton-emerald" />
            </span>
            <span className="text-[10px] font-medium text-breton-emerald sm:text-xs">
              Temps r&eacute;el
            </span>
          </div>
          <div className="flex gap-1">
            {['Vue g\u00e9n\u00e9rale', 'Commandes', 'Stocks'].map((tab, i) => (
              <span
                key={tab}
                className={`rounded px-2 py-0.5 text-[9px] font-medium sm:text-[10px] ${
                  i === 0
                    ? 'bg-breton-navy text-white'
                    : 'text-breton-granite hover:bg-breton-sand/40'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <span className="text-[9px] text-breton-granite sm:text-[10px]">MAJ : 2 min</span>
        </div>

        {/* KPIs row */}
        <div className="grid grid-cols-2 gap-2 px-3 pt-3 sm:grid-cols-4 sm:px-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="rounded-lg border border-breton-sand/50 bg-breton-foam/40 px-2.5 py-2 sm:px-3"
              initial={{ opacity: 0, y: 10 }}
              animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: 'easeOut' }}
            >
              <p className="text-[9px] font-medium uppercase tracking-wider text-breton-granite sm:text-[10px]">
                {kpi.label}
              </p>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className={`text-lg font-bold sm:text-xl ${kpi.color}`}>
                  {'decimal' in kpi && kpi.decimal ? (
                    <DecimalCounter animate={animate} reducedMotion={reducedMotion} />
                  ) : (
                    <AnimatedCounter
                      target={kpi.value}
                      animate={animate}
                      reducedMotion={reducedMotion}
                      suffix={kpi.suffix}
                    />
                  )}
                </span>
                {kpi.trend && (
                  <span
                    className={`text-[9px] font-semibold ${
                      kpi.trend.startsWith('+') ? 'text-breton-emerald' : 'text-breton-copper'
                    }`}
                  >
                    {kpi.trend}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Middle: chart + activity split */}
        <div className="flex flex-1 gap-2 overflow-hidden px-3 pt-3 sm:gap-3 sm:px-4">
          {/* Left: bar chart */}
          <motion.div
            className="flex w-1/3 flex-col rounded-lg border border-breton-sand/50 bg-breton-foam/30 p-2 sm:p-2.5"
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className="mb-1.5 text-[9px] font-medium uppercase tracking-wider text-breton-granite sm:text-[10px]">
              Charge semaine
            </p>
            <div className="flex-1">
              <MiniBarChart animate={animate} />
            </div>
          </motion.div>

          {/* Right: activity feed */}
          <div className="flex flex-1 flex-col rounded-lg border border-breton-sand/50 bg-breton-foam/30 p-2 sm:p-2.5">
            <p className="mb-1 text-[9px] font-medium uppercase tracking-wider text-breton-granite sm:text-[10px]">
              Activit&eacute; en cours
            </p>
            <div className="flex-1 overflow-hidden">
              <ActivityRow
                of="2451"
                client="Navale Bretagne"
                status="Expédié"
                statusColor="bg-breton-emerald/15 text-breton-emerald"
                time="09:42"
                animate={animate}
                delay={0.5}
              />
              <ActivityRow
                of="2452"
                client="Méca-Précision"
                status="En prod."
                statusColor="bg-breton-navy/10 text-breton-navy"
                time="09:38"
                animate={animate}
                delay={0.6}
              />
              <ActivityRow
                of="2453"
                client="Kéroual Indus."
                status="Validé"
                statusColor="bg-breton-emerald/15 text-breton-emerald"
                time="09:31"
                animate={animate}
                delay={0.7}
              />
              <ActivityRow
                of="2454"
                client="Armor Métal"
                status="Retard"
                statusColor="bg-breton-copper/15 text-breton-copper"
                time="09:15"
                animate={animate}
                delay={0.8}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar: progress + notification */}
        <div className="flex items-center gap-3 border-t border-breton-sand/60 px-3 py-2 sm:px-4">
          {/* Progress */}
          <div className="flex flex-1 items-center gap-2">
            <span className="text-[9px] text-breton-slate sm:text-[10px]">Charge</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-breton-emerald/15">
              <motion.div
                className="h-full rounded-full bg-breton-emerald"
                initial={{ width: '0%' }}
                animate={animate ? { width: '82%' } : { width: '0%' }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              />
            </div>
            <span className="text-[9px] font-semibold text-breton-slate sm:text-[10px]">82%</span>
          </div>
          {/* Notification */}
          <motion.div
            className="flex items-center gap-1.5 rounded-full bg-breton-copper/10 px-2 py-0.5 sm:px-2.5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 1.2, ease: 'easeOut' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-breton-copper" />
            <span className="text-[9px] font-medium text-breton-copper sm:text-[10px]">
              2 retards critiques
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
