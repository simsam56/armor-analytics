'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Animated data flow: Source → Traitement → Décision
 * Shows flowing dots along connecting paths.
 * Works on light backgrounds (foam/sand/white).
 */
export function DataFlowAnimation({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className={`w-full max-w-[600px] mx-auto ${className}`}>
      <svg viewBox="0 0 600 200" className="w-full h-auto" fill="none">
        <defs>
          {/* Flow path for animated dots */}
          <path
            id="flowPath1"
            d="M 130 100 C 180 100 200 100 250 100"
          />
          <path
            id="flowPath2"
            d="M 350 100 C 400 100 420 100 470 100"
          />
          {/* Gradient for connecting lines */}
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-breton-emerald)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="var(--color-breton-emerald)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--color-breton-emerald)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* ── Connecting lines ── */}
        <motion.line
          x1="130" y1="100" x2="250" y2="100"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
        <motion.line
          x1="350" y1="100" x2="470" y2="100"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={reduced ? undefined : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ delay: 0.7, duration: 0.6 }}
        />

        {/* ── Flowing dots on path 1 ── */}
        {!reduced && [0, 1, 2].map((i) => (
          <motion.circle
            key={`dot1-${i}`}
            r="3"
            fill="var(--color-breton-emerald)"
            initial={{ opacity: 0 }}
            animate={inView ? {
              opacity: [0, 0.8, 0.8, 0],
              cx: [130, 170, 210, 250],
              cy: [100, 100, 100, 100],
            } : undefined}
            transition={{
              delay: 1 + i * 0.6,
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
        ))}

        {/* ── Flowing dots on path 2 ── */}
        {!reduced && [0, 1, 2].map((i) => (
          <motion.circle
            key={`dot2-${i}`}
            r="3"
            fill="var(--color-breton-copper-light)"
            initial={{ opacity: 0 }}
            animate={inView ? {
              opacity: [0, 0.8, 0.8, 0],
              cx: [350, 390, 430, 470],
              cy: [100, 100, 100, 100],
            } : undefined}
            transition={{
              delay: 1.3 + i * 0.6,
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
        ))}

        {/* ══════ NODE 1 — Source ══════ */}
        <motion.g
          initial={reduced ? undefined : { opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          style={{ transformOrigin: '65px 100px' }}
        >
          {/* Card */}
          <rect x="15" y="50" width="100" height="100" rx="16" fill="white"
            stroke="var(--color-breton-sand)" strokeWidth="1.5" />
          {/* Spreadsheet icon */}
          <rect x="42" y="68" width="36" height="28" rx="3"
            fill="var(--color-breton-foam)" stroke="var(--color-breton-emerald)" strokeWidth="1.2" />
          {/* Grid lines */}
          <line x1="42" y1="78" x2="78" y2="78" stroke="var(--color-breton-emerald)" strokeWidth="0.8" opacity="0.4" />
          <line x1="42" y1="86" x2="78" y2="86" stroke="var(--color-breton-emerald)" strokeWidth="0.8" opacity="0.4" />
          <line x1="55" y1="68" x2="55" y2="96" stroke="var(--color-breton-emerald)" strokeWidth="0.8" opacity="0.4" />
          <line x1="66" y1="68" x2="66" y2="96" stroke="var(--color-breton-emerald)" strokeWidth="0.8" opacity="0.4" />
          {/* Scattered data dots */}
          <circle cx="48" cy="73" r="2" fill="var(--color-breton-emerald)" opacity="0.6" />
          <circle cx="60" cy="82" r="2" fill="var(--color-breton-copper-light)" opacity="0.6" />
          <circle cx="72" cy="91" r="2" fill="var(--color-breton-emerald)" opacity="0.6" />
          {/* Label */}
          <text x="65" y="122" textAnchor="middle" fill="var(--color-breton-navy)"
            fontSize="11" fontWeight="600" fontFamily="var(--font-sans, system-ui)">
            Données
          </text>
          <text x="65" y="136" textAnchor="middle" fill="var(--color-breton-granite)"
            fontSize="9" fontFamily="var(--font-sans, system-ui)">
            Excel, ERP, CSV
          </text>
        </motion.g>

        {/* ══════ NODE 2 — Traitement ══════ */}
        <motion.g
          initial={reduced ? undefined : { opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          style={{ transformOrigin: '300px 100px' }}
        >
          {/* Card */}
          <rect x="250" y="50" width="100" height="100" rx="16" fill="white"
            stroke="var(--color-breton-sand)" strokeWidth="1.5" />
          {/* Gear icon */}
          <motion.g
            animate={reduced ? undefined : { rotate: 360 }}
            transition={reduced ? undefined : { duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '300px 82px' }}
          >
            <circle cx="300" cy="82" r="14" fill="none"
              stroke="var(--color-breton-copper-light)" strokeWidth="2.5" />
            {/* Gear teeth */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x = 300 + 17 * Math.cos(rad);
              const y = 82 + 17 * Math.sin(rad);
              return (
                <circle key={angle} cx={x} cy={y} r="3"
                  fill="var(--color-breton-copper-light)" />
              );
            })}
            <circle cx="300" cy="82" r="5" fill="var(--color-breton-copper-light)" />
          </motion.g>
          {/* Label */}
          <text x="300" y="122" textAnchor="middle" fill="var(--color-breton-navy)"
            fontSize="11" fontWeight="600" fontFamily="var(--font-sans, system-ui)">
            Traitement
          </text>
          <text x="300" y="136" textAnchor="middle" fill="var(--color-breton-granite)"
            fontSize="9" fontFamily="var(--font-sans, system-ui)">
            Pipeline &amp; IA
          </text>
        </motion.g>

        {/* ══════ NODE 3 — Décision ══════ */}
        <motion.g
          initial={reduced ? undefined : { opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.5, duration: 0.6, ease }}
          style={{ transformOrigin: '535px 100px' }}
        >
          {/* Card */}
          <rect x="485" y="50" width="100" height="100" rx="16" fill="white"
            stroke="var(--color-breton-sand)" strokeWidth="1.5" />
          {/* Mini chart bars */}
          <motion.rect x="505" y="88" width="10" height="0" rx="2"
            fill="var(--color-breton-emerald)"
            animate={inView ? { height: 18, y: 70 } : undefined}
            transition={{ delay: 1.2, duration: 0.5, ease }} />
          <motion.rect x="520" y="88" width="10" height="0" rx="2"
            fill="var(--color-breton-emerald)" opacity="0.7"
            animate={inView ? { height: 26, y: 62 } : undefined}
            transition={{ delay: 1.35, duration: 0.5, ease }} />
          <motion.rect x="535" y="88" width="10" height="0" rx="2"
            fill="var(--color-breton-emerald)"
            animate={inView ? { height: 22, y: 66 } : undefined}
            transition={{ delay: 1.5, duration: 0.5, ease }} />
          <motion.rect x="550" y="88" width="10" height="0" rx="2"
            fill="var(--color-breton-copper-light)"
            animate={inView ? { height: 32, y: 56 } : undefined}
            transition={{ delay: 1.65, duration: 0.5, ease }} />
          {/* Baseline */}
          <line x1="503" y1="90" x2="562" y2="90"
            stroke="var(--color-breton-sand)" strokeWidth="1" />
          {/* Label */}
          <text x="535" y="122" textAnchor="middle" fill="var(--color-breton-navy)"
            fontSize="11" fontWeight="600" fontFamily="var(--font-sans, system-ui)">
            Décision
          </text>
          <text x="535" y="136" textAnchor="middle" fill="var(--color-breton-granite)"
            fontSize="9" fontFamily="var(--font-sans, system-ui)">
            Dashboard &amp; KPI
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
