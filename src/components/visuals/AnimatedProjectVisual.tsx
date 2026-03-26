'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

interface ProjectVisualProps {
  className?: string;
}

/**
 * Agroalimentaire — animated before/after bar chart
 * Shows time reduction from 8min to 30sec per order.
 */
export function AgroChartVisual({ className = '' }: ProjectVisualProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();

  return (
    <svg ref={ref} viewBox="0 0 400 190" className={`w-full h-auto ${className}`} fill="none">
      <rect width="400" height="190" rx="0" fill="var(--color-breton-foam)" />

      {/* Title */}
      <text x="200" y="28" textAnchor="middle" fill="var(--color-breton-granite)"
        fontSize="10" fontWeight="500" fontFamily="var(--font-sans, system-ui)">
        Temps de traitement par commande
      </text>

      {/* Before bar */}
      <motion.rect
        x="100" y="130" width="60" rx="4"
        fill="var(--color-breton-copper-light)" opacity="0.5"
        initial={reduced ? { height: 80, y: 50 } : { height: 0 }}
        animate={inView ? { height: 80, y: 50 } : undefined}
        transition={{ delay: 0.2, duration: 0.8, ease }}
      />
      <text x="130" y="155" textAnchor="middle" fill="var(--color-breton-granite)"
        fontSize="9" fontFamily="var(--font-sans, system-ui)">
        Avant
      </text>
      <motion.text
        x="130" y="46" textAnchor="middle" fill="var(--color-breton-copper)"
        fontSize="13" fontWeight="700" fontFamily="var(--font-sans, system-ui)"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        8 min
      </motion.text>

      {/* After bar */}
      <motion.rect
        x="240" y="130" width="60" rx="4"
        fill="var(--color-breton-emerald)"
        initial={reduced ? { height: 8, y: 122 } : { height: 0 }}
        animate={inView ? { height: 8, y: 122 } : undefined}
        transition={{ delay: 0.5, duration: 0.8, ease }}
      />
      <text x="270" y="155" textAnchor="middle" fill="var(--color-breton-granite)"
        fontSize="9" fontFamily="var(--font-sans, system-ui)">
        Après
      </text>
      <motion.text
        x="270" y="118" textAnchor="middle" fill="var(--color-breton-emerald)"
        fontSize="13" fontWeight="700" fontFamily="var(--font-sans, system-ui)"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 1.1, duration: 0.4 }}
      >
        30 sec
      </motion.text>

      {/* Baseline */}
      <line x1="80" y1="131" x2="320" y2="131"
        stroke="var(--color-breton-sand)" strokeWidth="1" />

      {/* Reduction arrow */}
      <motion.g
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <text x="200" y="178" textAnchor="middle" fill="var(--color-breton-emerald)"
          fontSize="12" fontWeight="700" fontFamily="var(--font-sans, system-ui)">
          −94% de temps
        </text>
      </motion.g>
    </svg>
  );
}

/**
 * Métallurgie — animated line chart showing reporting time improvement
 * Weekly hours saved on reporting.
 */
export function MetallurgieChartVisual({ className = '' }: ProjectVisualProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();

  const linePath = 'M 40 40 L 100 55 L 160 48 L 220 70 L 280 85 L 340 110 L 360 115';
  const areaPath = linePath + ' L 360 140 L 40 140 Z';

  return (
    <svg ref={ref} viewBox="0 0 400 190" className={`w-full h-auto ${className}`} fill="none">
      <rect width="400" height="190" rx="0" fill="var(--color-breton-foam)" />

      {/* Title */}
      <text x="200" y="28" textAnchor="middle" fill="var(--color-breton-granite)"
        fontSize="10" fontWeight="500" fontFamily="var(--font-sans, system-ui)">
        Heures de reporting par semaine
      </text>

      {/* Y-axis labels */}
      <text x="30" y="44" textAnchor="end" fill="var(--color-breton-granite)" fontSize="8">8h</text>
      <text x="30" y="80" textAnchor="end" fill="var(--color-breton-granite)" fontSize="8">6h</text>
      <text x="30" y="118" textAnchor="end" fill="var(--color-breton-granite)" fontSize="8">4h</text>

      {/* Grid lines */}
      <line x1="40" y1="40" x2="360" y2="40" stroke="var(--color-breton-sand)" strokeWidth="0.5" />
      <line x1="40" y1="77" x2="360" y2="77" stroke="var(--color-breton-sand)" strokeWidth="0.5" />
      <line x1="40" y1="114" x2="360" y2="114" stroke="var(--color-breton-sand)" strokeWidth="0.5" />

      {/* Area fill */}
      <defs>
        <linearGradient id="metaAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-breton-copper-light)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--color-breton-copper-light)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill="url(#metaAreaGrad)"
        initial={reduced ? { opacity: 0.6 } : { opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : undefined}
        transition={{ delay: 1.2, duration: 0.6 }}
      />

      {/* Trend line */}
      <motion.path
        d={linePath}
        stroke="var(--color-breton-copper-light)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 0.3, duration: 1.5, ease: 'easeOut' }}
      />

      {/* Target line (4h saved = from 8h to 4h) */}
      <motion.line
        x1="40" y1="115" x2="360" y2="115"
        stroke="var(--color-breton-emerald)"
        strokeWidth="1.5"
        strokeDasharray="6 3"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : undefined}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
      <motion.text
        x="365" y="113" fill="var(--color-breton-emerald)"
        fontSize="8" fontWeight="600" fontFamily="var(--font-sans, system-ui)"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 1.8, duration: 0.4 }}
      >
        objectif
      </motion.text>

      {/* Result */}
      <motion.g
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <text x="200" y="178" textAnchor="middle" fill="var(--color-breton-emerald)"
          fontSize="12" fontWeight="700" fontFamily="var(--font-sans, system-ui)">
          4h/semaine gagnées
        </text>
      </motion.g>

      {/* Baseline */}
      <line x1="40" y1="140" x2="360" y2="140"
        stroke="var(--color-breton-sand)" strokeWidth="1" />
    </svg>
  );
}

/**
 * Plasturgie — animated donut chart showing cost reduction
 */
export function PlasturgieChartVisual({ className = '' }: ProjectVisualProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();

  // Donut segments: total = 100
  const radius = 55;
  const circumference = 2 * Math.PI * radius;
  const savedPct = 25;
  const remainPct = 75;

  return (
    <svg ref={ref} viewBox="0 0 400 190" className={`w-full h-auto ${className}`} fill="none">
      <rect width="400" height="190" rx="0" fill="var(--color-breton-foam)" />

      {/* Title */}
      <text x="200" y="24" textAnchor="middle" fill="var(--color-breton-granite)"
        fontSize="10" fontWeight="500" fontFamily="var(--font-sans, system-ui)">
        Réduction des coûts de collecte
      </text>

      {/* Donut chart */}
      <g transform="translate(200, 100)">
        {/* Background ring */}
        <circle cx="0" cy="0" r={radius}
          stroke="var(--color-breton-sand)" strokeWidth="18" fill="none" />

        {/* Remaining segment */}
        <motion.circle
          cx="0" cy="0" r={radius}
          stroke="var(--color-breton-slate)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(remainPct / 100) * circumference} ${circumference}`}
          strokeDashoffset={0}
          transform="rotate(-90)"
          initial={reduced ? undefined : { strokeDasharray: `0 ${circumference}` }}
          animate={inView ? { strokeDasharray: `${(remainPct / 100) * circumference} ${circumference}` } : undefined}
          transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }}
          opacity="0.2"
        />

        {/* Saved segment */}
        <motion.circle
          cx="0" cy="0" r={radius}
          stroke="var(--color-breton-emerald)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${(savedPct / 100) * circumference} ${circumference}`}
          strokeDashoffset={-(remainPct / 100) * circumference}
          transform="rotate(-90)"
          initial={reduced ? undefined : { strokeDasharray: `0 ${circumference}` }}
          animate={inView ? { strokeDasharray: `${(savedPct / 100) * circumference} ${circumference}` } : undefined}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        />

        {/* Center text */}
        <motion.text
          x="0" y="-4" textAnchor="middle"
          fill="var(--color-breton-navy)"
          fontSize="22" fontWeight="700" fontFamily="var(--font-sans, system-ui)"
          initial={reduced ? undefined : { opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 1.5, duration: 0.4, ease }}
          style={{ transformOrigin: '0 0' }}
        >
          −25%
        </motion.text>
        <motion.text
          x="0" y="14" textAnchor="middle"
          fill="var(--color-breton-granite)"
          fontSize="9" fontFamily="var(--font-sans, system-ui)"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ delay: 1.7, duration: 0.4 }}
        >
          coûts de collecte
        </motion.text>
      </g>

      {/* Legend */}
      <motion.g
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <circle cx="130" cy="175" r="4" fill="var(--color-breton-emerald)" />
        <text x="140" y="178" fill="var(--color-breton-granite)" fontSize="9"
          fontFamily="var(--font-sans, system-ui)">
          Économies réalisées
        </text>
        <circle cx="260" cy="175" r="4" fill="var(--color-breton-slate)" opacity="0.3" />
        <text x="270" y="178" fill="var(--color-breton-granite)" fontSize="9"
          fontFamily="var(--font-sans, system-ui)">
          Coûts restants
        </text>
      </motion.g>
    </svg>
  );
}

/**
 * Map project IDs to their visual components.
 */
export const PROJECT_VISUALS: Record<string, React.FC<ProjectVisualProps>> = {
  'commandes-agroalimentaire': AgroChartVisual,
  'pilotage-metallurgie': MetallurgieChartVisual,
  'dechets-plasturgie': PlasturgieChartVisual,
};
