'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

type Tab = 'pilotage' | 'commandes' | 'stocks';

const TABS: Tab[] = ['pilotage', 'commandes', 'stocks'];
const TAB_DURATION = 4000;

export function TransformationDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<Tab>('pilotage');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isInView) {
      clearTimer();
      return;
    }

    const scheduleNext = () => {
      clearTimer();
      timerRef.current = setTimeout(() => {
        setActiveTab((prev) => {
          const idx = TABS.indexOf(prev);
          return TABS[(idx + 1) % TABS.length];
        });
      }, TAB_DURATION);
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
  }, [activeTab, isInView, prefersReducedMotion, clearTimer]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-breton-sand bg-white shadow-sm"
      style={{ minHeight: 'clamp(460px, 60vw, 620px)' }}
    >
      <DashboardView activeTab={activeTab} reducedMotion={!!prefersReducedMotion} />
    </div>
  );
}

/* ─── Dashboard ─── */

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

/* ─── Sparkline SVG ─── */

function Sparkline({
  points,
  color,
  animate,
  delay,
}: {
  points: number[];
  color: string;
  animate: boolean;
  delay: number;
}) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const h = 20;
  const w = 48;
  const step = w / (points.length - 1);

  const d = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / range) * (h - 4) - 2;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');

  return (
    <motion.svg
      width={w}
      height={h}
      className="flex-shrink-0"
      initial={{ opacity: 0 }}
      animate={animate ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <path d={d} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </motion.svg>
  );
}

/* ─── Alert card with action button ─── */

const severityStyles = {
  critical: {
    dot: 'bg-breton-copper',
    border: 'border-breton-copper/20',
    bg: 'bg-breton-copper/[0.03]',
    btn: 'bg-breton-copper/10 text-breton-copper hover:bg-breton-copper/20',
  },
  warning: {
    dot: 'bg-breton-copper-light',
    border: 'border-breton-sand',
    bg: 'bg-breton-foam/50',
    btn: 'bg-breton-navy/10 text-breton-navy hover:bg-breton-navy/15',
  },
  info: {
    dot: 'bg-breton-emerald',
    border: 'border-breton-emerald/15',
    bg: 'bg-breton-emerald/[0.03]',
    btn: 'bg-breton-emerald/10 text-breton-emerald hover:bg-breton-emerald/15',
  },
} as const;

function AlertCard({
  severity,
  agent,
  agentColor,
  message,
  action,
  time,
  animate,
  delay,
  reducedMotion,
}: {
  severity: keyof typeof severityStyles;
  agent: string;
  agentColor: string;
  message: string;
  action: string;
  time: string;
  animate: boolean;
  delay: number;
  reducedMotion: boolean;
}) {
  const styles = severityStyles[severity];

  return (
    <motion.div
      className={`flex flex-col gap-1 rounded-lg border ${styles.border} ${styles.bg} px-2.5 py-1.5 sm:flex-row sm:items-center sm:gap-3 sm:py-2`}
      initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
      animate={animate ? { opacity: 1, y: 0 } : reducedMotion ? {} : { opacity: 0, y: 8 }}
      transition={{ duration: 0.35, delay, ease: 'easeOut' }}
    >
      {/* Left: severity dot + agent + message */}
      <div className="flex flex-1 items-start gap-2">
        <span className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${styles.dot}`} />
        <div className="flex flex-1 flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className={`rounded-full px-1.5 py-px text-[7px] font-semibold ${agentColor}`}>
              {agent}
            </span>
            <span className="text-[8px] text-breton-granite/50">{time}</span>
          </div>
          <p className="text-[9px] leading-snug text-breton-slate sm:text-[10px]">{message}</p>
        </div>
      </div>
      {/* Right: action button */}
      <span
        className={`w-fit cursor-default rounded-md px-2 py-1 text-[8px] font-semibold sm:text-[9px] ${styles.btn}`}
      >
        {action} &rarr;
      </span>
    </motion.div>
  );
}

/* ─── Tab content: Pilotage ─── */

function PilotageContent({ reducedMotion }: { reducedMotion: boolean }) {
  const animate = true;
  const kpis = [
    {
      label: 'Livraisons',
      value: 24,
      suffix: '',
      color: 'text-breton-navy',
      trend: '+3',
      spark: [18, 20, 19, 22, 21, 24],
      sparkColor: 'var(--color-breton-navy)',
    },
    {
      label: 'Taux service',
      value: 96,
      suffix: '%',
      color: 'text-breton-emerald',
      trend: '+2.1',
      spark: [91, 89, 93, 92, 95, 96],
      sparkColor: 'var(--color-breton-emerald)',
    },
    {
      label: 'Délai moyen',
      value: 18,
      suffix: '',
      color: 'text-breton-navy',
      trend: '-0.4',
      decimal: true,
      spark: [2.4, 2.3, 2.1, 2.0, 1.9, 1.8],
      sparkColor: 'var(--color-breton-navy)',
    },
    {
      label: 'Retards',
      value: 2,
      suffix: '',
      color: 'text-breton-copper',
      trend: '',
      spark: [],
      sparkColor: '',
    },
  ];

  return (
    <>
      {/* KPIs row with sparklines */}
      <div className="grid grid-cols-2 gap-2 px-3 pt-2.5 sm:grid-cols-4 sm:px-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="rounded-lg border border-breton-sand/50 bg-breton-foam/40 px-2.5 py-1.5 sm:px-3"
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.08, ease: 'easeOut' }}
          >
            <p className="text-[8px] font-medium uppercase tracking-wider text-breton-granite sm:text-[9px]">
              {kpi.label}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className={`text-base font-bold sm:text-lg ${kpi.color}`}>
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
                    className={`text-[8px] font-semibold ${
                      kpi.trend.startsWith('+') ? 'text-breton-emerald' : 'text-breton-copper'
                    }`}
                  >
                    {kpi.trend}
                  </span>
                )}
              </div>
              {kpi.spark.length > 0 && (
                <Sparkline
                  points={kpi.spark}
                  color={kpi.sparkColor}
                  animate={animate}
                  delay={0.3 + i * 0.1}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pilotage header */}
      <div className="mx-3 mt-2 flex items-center gap-1.5 sm:mx-4">
        <svg
          className="h-3 w-3 text-breton-emerald"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-[8px] font-semibold uppercase tracking-wider text-breton-navy sm:text-[9px]">
          Pilotage — actions requises
        </span>
        <span className="ml-auto rounded-full bg-breton-copper/10 px-1.5 py-0.5 text-[7px] font-semibold text-breton-copper">
          3 en attente
        </span>
      </div>

      {/* Agent alerts with actions */}
      <div className="mx-3 mt-1.5 flex flex-1 flex-col gap-1.5 overflow-hidden sm:mx-4">
        <AlertCard
          severity="critical"
          agent="Agent Production"
          agentColor="bg-breton-copper/10 text-breton-copper"
          message="OF 2454 : retard fournisseur détecté (+1j)"
          action="Relancer fournisseur"
          time="2 min"
          animate={animate}
          delay={0.2}
          reducedMotion={reducedMotion}
        />
        <AlertCard
          severity="warning"
          agent="Agent Logistique"
          agentColor="bg-breton-navy/10 text-breton-navy"
          message="Capacité atelier jeudi à 94% — risque surcharge"
          action="Réaffecter OF 2458"
          time="8 min"
          animate={animate}
          delay={0.35}
          reducedMotion={reducedMotion}
        />
        <AlertCard
          severity="info"
          agent="Agent Commandes"
          agentColor="bg-breton-emerald/10 text-breton-emerald"
          message="Cde #2452 : écart prix +3% vs devis initial"
          action="Approuver l'écart"
          time="12 min"
          animate={animate}
          delay={0.5}
          reducedMotion={reducedMotion}
        />
      </div>
    </>
  );
}

/* ─── Tab content: Commandes ─── */

const commandeRows = [
  {
    ref: 'CMD-1247',
    client: 'Navale Bretagne',
    montant: '12 400 €',
    statut: 'Validée',
    color: 'text-breton-emerald',
  },
  {
    ref: 'CMD-1248',
    client: 'Méca-Précision',
    montant: '8 750 €',
    statut: 'En attente',
    color: 'text-breton-copper',
  },
  {
    ref: 'CMD-1249',
    client: 'Kéroual Indus.',
    montant: '3 200 €',
    statut: 'Expédiée',
    color: 'text-breton-emerald',
  },
  {
    ref: 'CMD-1250',
    client: 'Armor Métal',
    montant: '15 800 €',
    statut: 'À vérifier',
    color: 'text-breton-copper',
  },
];

function CommandesContent({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      {/* Table */}
      <div className="mx-3 mt-2.5 overflow-hidden rounded-lg border border-breton-sand/50 sm:mx-4">
        <table className="w-full text-left text-[9px] sm:text-[10px]">
          <thead>
            <tr className="border-b border-breton-sand/50 bg-breton-foam/40">
              <th className="px-2.5 py-1.5 font-semibold text-breton-granite">Réf.</th>
              <th className="px-2.5 py-1.5 font-semibold text-breton-granite">Client</th>
              <th className="hidden px-2.5 py-1.5 font-semibold text-breton-granite sm:table-cell">
                Montant
              </th>
              <th className="px-2.5 py-1.5 font-semibold text-breton-granite">Statut</th>
            </tr>
          </thead>
          <tbody>
            {commandeRows.map((row, i) => (
              <motion.tr
                key={row.ref}
                className="border-b border-breton-sand/30 last:border-0"
                initial={reducedMotion ? {} : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
              >
                <td className="px-2.5 py-1.5 font-medium text-breton-navy">{row.ref}</td>
                <td className="px-2.5 py-1.5 text-breton-slate">{row.client}</td>
                <td className="hidden px-2.5 py-1.5 text-breton-slate sm:table-cell">
                  {row.montant}
                </td>
                <td className={`px-2.5 py-1.5 font-semibold ${row.color}`}>{row.statut}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Agent alert */}
      <div className="mx-3 mt-2 flex items-center gap-1.5 sm:mx-4">
        <svg
          className="h-3 w-3 text-breton-copper"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-[8px] font-semibold uppercase tracking-wider text-breton-navy sm:text-[9px]">
          Agent Logistique — alerte
        </span>
      </div>
      <div className="mx-3 mt-1.5 flex flex-1 flex-col gap-1.5 overflow-hidden sm:mx-4">
        <AlertCard
          severity="critical"
          agent="Agent Logistique"
          agentColor="bg-breton-navy/10 text-breton-navy"
          message="CMD-1248 : délai fournisseur dépassé, livraison attendue J+3"
          action="Relancer fournisseur"
          time="5 min"
          animate
          delay={0.3}
          reducedMotion={reducedMotion}
        />
        <AlertCard
          severity="warning"
          agent="Agent Commandes"
          agentColor="bg-breton-emerald/10 text-breton-emerald"
          message="CMD-1250 : montant supérieur au devis (+8%), vérification requise"
          action="Comparer au devis"
          time="10 min"
          animate
          delay={0.45}
          reducedMotion={reducedMotion}
        />
      </div>
    </>
  );
}

/* ─── Tab content: Stocks ─── */

const stockRows = [
  { ref: 'ACR-42', designation: 'Acier S355', stock: '120 kg', seuil: '200 kg', alert: true },
  { ref: 'INX-18', designation: 'Inox 316L', stock: '85 m', seuil: '50 m', alert: false },
  { ref: 'BOU-07', designation: 'Boulonnerie M12', stock: '450', seuil: '100', alert: false },
  { ref: 'ALU-22', designation: 'Alu 6061', stock: '30 kg', seuil: '80 kg', alert: true },
];

function StocksContent({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      {/* Table */}
      <div className="mx-3 mt-2.5 overflow-hidden rounded-lg border border-breton-sand/50 sm:mx-4">
        <table className="w-full text-left text-[9px] sm:text-[10px]">
          <thead>
            <tr className="border-b border-breton-sand/50 bg-breton-foam/40">
              <th className="px-2.5 py-1.5 font-semibold text-breton-granite">Réf.</th>
              <th className="px-2.5 py-1.5 font-semibold text-breton-granite">Désignation</th>
              <th className="px-2.5 py-1.5 font-semibold text-breton-granite">Stock</th>
              <th className="hidden px-2.5 py-1.5 font-semibold text-breton-granite sm:table-cell">
                Seuil
              </th>
            </tr>
          </thead>
          <tbody>
            {stockRows.map((row, i) => (
              <motion.tr
                key={row.ref}
                className={`border-b border-breton-sand/30 last:border-0 ${row.alert ? 'bg-breton-copper/[0.03]' : ''}`}
                initial={reducedMotion ? {} : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
              >
                <td className="px-2.5 py-1.5 font-medium text-breton-navy">{row.ref}</td>
                <td className="px-2.5 py-1.5 text-breton-slate">{row.designation}</td>
                <td
                  className={`px-2.5 py-1.5 font-semibold ${row.alert ? 'text-breton-copper' : 'text-breton-emerald'}`}
                >
                  {row.stock}
                </td>
                <td className="hidden px-2.5 py-1.5 text-breton-granite sm:table-cell">
                  {row.seuil}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Agent alert */}
      <div className="mx-3 mt-2 flex items-center gap-1.5 sm:mx-4">
        <svg
          className="h-3 w-3 text-breton-copper"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-[8px] font-semibold uppercase tracking-wider text-breton-navy sm:text-[9px]">
          Agent Logistique — alerte stock
        </span>
      </div>
      <div className="mx-3 mt-1.5 flex flex-1 flex-col gap-1.5 overflow-hidden sm:mx-4">
        <AlertCard
          severity="critical"
          agent="Agent Logistique"
          agentColor="bg-breton-navy/10 text-breton-navy"
          message="ACR-42 : stock critique (120/200 kg), prévoir réapprovisionnement"
          action="Passer commande"
          time="3 min"
          animate
          delay={0.3}
          reducedMotion={reducedMotion}
        />
        <AlertCard
          severity="warning"
          agent="Agent Logistique"
          agentColor="bg-breton-navy/10 text-breton-navy"
          message="ALU-22 : stock sous seuil (30/80 kg), consommation en hausse"
          action="Relancer fournisseur"
          time="7 min"
          animate
          delay={0.45}
          reducedMotion={reducedMotion}
        />
      </div>
    </>
  );
}

/* ─── Dashboard shell ─── */

const TAB_LABELS: Record<Tab, string> = {
  pilotage: 'Pilotage',
  commandes: 'Commandes',
  stocks: 'Stocks',
};

const SIDEBAR_AGENTS = [
  { initial: 'P', label: 'Production', bg: 'bg-breton-emerald' },
  { initial: 'L', label: 'Logistique', bg: 'bg-breton-navy' },
  { initial: 'C', label: 'Commandes', bg: 'bg-breton-copper' },
];

function DashboardView({ activeTab, reducedMotion }: { activeTab: Tab; reducedMotion: boolean }) {
  const activeIdx = TABS.indexOf(activeTab);

  return (
    <div className="flex h-full">
      {/* Sidebar — agent list, hidden on mobile */}
      <div className="hidden w-[68px] flex-shrink-0 flex-col gap-1.5 border-r border-breton-sand/60 bg-breton-foam/30 px-1.5 py-2.5 sm:flex">
        <p className="mb-0.5 text-[6px] font-semibold uppercase tracking-widest text-breton-granite/70">
          Agents
        </p>
        {SIDEBAR_AGENTS.map((agent, i) => (
          <div
            key={agent.label}
            className={`flex items-center gap-1.5 rounded-md px-1 py-1 ${i === activeIdx ? 'bg-white/80 shadow-sm' : ''}`}
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded text-[7px] font-bold text-white ${agent.bg}`}
            >
              {agent.initial}
            </span>
            <div className="flex flex-col">
              <span className="text-[7px] font-semibold leading-tight text-breton-navy">
                {agent.label}
              </span>
              <span className="flex items-center gap-0.5 text-[6px] text-breton-granite">
                <span className="h-1 w-1 rounded-full bg-breton-emerald" />
                actif
              </span>
            </div>
          </div>
        ))}
        <div className="mt-auto text-center text-[6px] text-breton-granite">3/3 en ligne</div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-breton-sand/60 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-breton-emerald" />
            </span>
            <span className="text-[9px] font-medium text-breton-emerald sm:text-xs">3 agents</span>
          </div>
          <div className="flex gap-0.5 sm:gap-1">
            {TABS.map((tab) => (
              <span
                key={tab}
                className={`rounded px-1.5 py-0.5 text-[8px] font-medium transition-colors duration-200 sm:px-2 sm:text-[10px] ${
                  tab === activeTab ? 'bg-breton-navy text-white' : 'text-breton-granite'
                }`}
              >
                {TAB_LABELS[tab]}
              </span>
            ))}
          </div>
          <span className="hidden rounded-full bg-breton-emerald/10 px-2 py-0.5 text-[9px] font-medium text-breton-emerald sm:inline-block sm:text-[10px]">
            12 actions
          </span>
        </div>

        {/* Tab content with crossfade */}
        <div className="relative min-h-[340px] flex-1 overflow-hidden sm:min-h-[320px]">
          {TABS.map((tab) => (
            <motion.div
              key={tab}
              className="absolute inset-0 flex flex-col overflow-y-auto pb-2"
              initial={false}
              animate={{
                opacity: tab === activeTab ? 1 : 0,
                pointerEvents: tab === activeTab ? ('auto' as const) : ('none' as const),
              }}
              transition={{ duration: reducedMotion ? 0 : 0.35, ease: 'easeInOut' }}
            >
              {tab === 'pilotage' && <PilotageContent reducedMotion={reducedMotion} />}
              {tab === 'commandes' && <CommandesContent reducedMotion={reducedMotion} />}
              {tab === 'stocks' && <StocksContent reducedMotion={reducedMotion} />}
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-breton-sand/60 px-3 py-1.5 sm:px-4">
          <span className="text-[8px] text-breton-granite sm:text-[9px]">MAJ : il y a 2 min</span>
          <span className="text-[8px] text-breton-granite sm:text-[9px]">
            2 actions auto &bull; 3 en attente validation
          </span>
        </div>
      </div>
    </div>
  );
}
