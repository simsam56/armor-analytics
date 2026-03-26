'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const BARS = [
  { label: 'Lun', value: 65 },
  { label: 'Mar', value: 85 },
  { label: 'Mer', value: 45 },
  { label: 'Jeu', value: 92 },
  { label: 'Ven', value: 70 },
  { label: 'Sam', value: 30 },
];

const KPIS = [
  { value: '4h', label: 'gagnées/sem', trend: '+12%' },
  { value: '−80%', label: 'erreurs évitées', trend: '↗' },
  { value: '12+', label: 'projets livrés', trend: '+3' },
];

const LINE_PATH =
  'M 0 45 C 15 42 25 38 40 32 C 55 26 65 30 80 24 C 95 18 105 22 120 16 C 135 10 150 14 165 8 C 175 4 185 6 200 3';
const AREA_PATH = LINE_PATH + ' L 200 55 L 0 55 Z';

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Animated dashboard mockup — light theme, breton palette.
 * Designed for foam/sand backgrounds (hero, sections).
 * Floats gently, bars grow on scroll, line draws, KPIs fade in.
 */
export function AnimatedDashboard({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={`relative w-full max-w-[480px] mx-auto ${className}`}>
      {/* Subtle float */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -8, 0] }}
        transition={reduced ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Window shell */}
        <div className="rounded-2xl bg-white border border-breton-sand/80 shadow-[0_20px_60px_-12px_rgba(12,31,63,0.12)] overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-breton-sand/60 bg-breton-foam/40">
            <div className="flex gap-1.5">
              <div className="w-[9px] h-[9px] rounded-full bg-[#FF5F57]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#FEBC2E]" />
              <div className="w-[9px] h-[9px] rounded-full bg-[#28C840]" />
            </div>
            <span className="text-[10px] text-breton-granite ml-1.5 font-medium tracking-wide">
              Tableau de bord — Production
            </span>
          </div>

          <div className="p-4 sm:p-5 space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2.5">
              {KPIS.map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  className="rounded-xl bg-breton-foam/70 border border-breton-sand/40 p-2.5 sm:p-3"
                  initial={reduced ? undefined : { opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease }}
                >
                  <p className="text-[17px] sm:text-xl font-bold text-breton-navy leading-none">
                    {kpi.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-breton-granite mt-1">{kpi.label}</p>
                  <p className="text-[9px] sm:text-[10px] text-breton-emerald font-semibold mt-0.5">
                    {kpi.trend}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="rounded-xl bg-breton-foam/40 border border-breton-sand/30 p-3 sm:p-4">
              <p className="text-[10px] text-breton-granite font-medium mb-2.5 uppercase tracking-wider">
                Commandes traitées
              </p>
              <div className="flex items-end gap-[6px]" style={{ height: 90 }}>
                {BARS.map((bar, i) => {
                  const barH = Math.round((bar.value / 100) * 78);
                  return (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5">
                      <motion.div
                        className="w-full rounded-t-[5px] bg-breton-emerald"
                        style={{ minHeight: 0 }}
                        initial={reduced ? { height: barH } : { height: 0 }}
                        animate={inView ? { height: barH } : undefined}
                        transition={{
                          delay: 0.6 + i * 0.07,
                          duration: 0.7,
                          ease,
                        }}
                      />
                      <span className="text-[8px] sm:text-[9px] text-breton-granite">{bar.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Line chart */}
            <div className="rounded-xl bg-breton-foam/40 border border-breton-sand/30 p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[10px] text-breton-granite font-medium uppercase tracking-wider">
                  Productivité (6 mois)
                </p>
                <span className="text-[10px] text-breton-emerald font-semibold">+35%</span>
              </div>
              <svg viewBox="0 0 200 55" className="w-full h-[50px] sm:h-[55px]" fill="none">
                <defs>
                  <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-breton-copper-light)" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="var(--color-breton-copper-light)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <motion.path
                  d={AREA_PATH}
                  fill="url(#areaFill)"
                  initial={reduced ? { opacity: 0.6 } : { opacity: 0 }}
                  animate={inView ? { opacity: 0.6 } : undefined}
                  transition={{ delay: 1.6, duration: 0.8 }}
                />
                {/* Line */}
                <motion.path
                  d={LINE_PATH}
                  stroke="var(--color-breton-copper-light)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reduced ? undefined : { pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : undefined}
                  transition={{ delay: 1, duration: 1.4, ease: 'easeOut' }}
                />
                {/* End dot */}
                <motion.circle
                  cx="200"
                  cy="3"
                  r="4"
                  fill="var(--color-breton-copper-light)"
                  initial={reduced ? undefined : { scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : undefined}
                  transition={{ delay: 2.2, duration: 0.3 }}
                />
              </svg>
            </div>

            {/* Mini table row */}
            <div className="flex items-center gap-3 px-1">
              {['En cours', 'Validé', 'Livré'].map((status, i) => (
                <motion.div
                  key={status}
                  className="flex items-center gap-1.5"
                  initial={reduced ? undefined : { opacity: 0 }}
                  animate={inView ? { opacity: 1 } : undefined}
                  transition={{ delay: 2 + i * 0.1, duration: 0.4 }}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      i === 0
                        ? 'bg-breton-copper-light'
                        : i === 1
                          ? 'bg-breton-emerald'
                          : 'bg-breton-navy'
                    }`}
                  />
                  <span className="text-[9px] text-breton-granite">{status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ground shadow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-breton-navy/[0.04] rounded-full blur-xl" />
    </div>
  );
}
