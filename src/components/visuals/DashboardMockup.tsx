'use client';

import { motion, useReducedMotion } from 'framer-motion';

const BARS = [
  { label: 'Saisie', before: 85, after: 15, color: '#9A5F3A' },
  { label: 'Erreurs', before: 60, after: 8, color: '#2D7A4F' },
  { label: 'Reporting', before: 70, after: 5, color: '#1A6B4A' },
];

const KPIS = [
  { label: 'Temps gagné', value: '4h', sub: '/semaine' },
  { label: 'Erreurs', value: '-80%', sub: 'ressaisies' },
  { label: 'ROI', value: '4 mois', sub: 'retour' },
];

export function DashboardMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
      transition={prefersReducedMotion ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 shadow-2xl shadow-black/20">
        {/* Title bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-xs text-white/40 ml-2">balise-ia — Tableau de bord</span>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="rounded-lg bg-white/10 p-3 text-center"
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
            >
              <p className="text-lg font-bold text-breton-copper">{kpi.value}</p>
              <p className="text-[10px] text-white/50">{kpi.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="space-y-3">
          {BARS.map((bar, i) => (
            <div key={bar.label} className="space-y-1">
              <div className="flex justify-between text-[10px] text-white/50">
                <span>{bar.label}</span>
                <span>
                  {bar.before}min → {bar.after}min
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: bar.color }}
                  initial={
                    prefersReducedMotion
                      ? { width: `${100 - (bar.after / bar.before) * 100}%` }
                      : { width: 0 }
                  }
                  animate={{ width: `${100 - (bar.after / bar.before) * 100}%` }}
                  transition={{
                    delay: 1.2 + i * 0.2,
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mini line chart */}
        <div className="mt-4 pt-3 border-t border-white/10">
          <p className="text-[10px] text-white/40 mb-2">Productivité (6 mois)</p>
          <svg viewBox="0 0 200 40" className="w-full h-8" fill="none">
            <motion.path
              d="M0 35 C20 32 40 28 60 25 C80 22 100 20 120 15 C140 10 160 8 180 5 L200 3"
              stroke="#9A5F3A"
              strokeWidth="2"
              strokeLinecap="round"
              initial={prefersReducedMotion ? {} : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 2, ease: 'easeOut' }}
            />
            <path
              d="M0 35 C20 32 40 28 60 25 C80 22 100 20 120 15 C140 10 160 8 180 5 L200 3 L200 40 L0 40 Z"
              fill="url(#chartGrad)"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9A5F3A" />
                <stop offset="100%" stopColor="#9A5F3A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
