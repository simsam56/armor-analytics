'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Animated lighthouse SVG — line drawing reveal + rotating beam.
 * Breton palette, designed for foam/sand/white backgrounds.
 * The lighthouse draws itself on scroll, then the beam starts sweeping.
 */
export function AnimatedLighthouse({ className = '' }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 300"
      className={`w-full max-w-[200px] h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Beam gradient — fades from copper to transparent */}
        <radialGradient id="beamGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="var(--color-breton-copper-light)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-breton-copper-light)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beamFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-breton-copper-light)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-breton-copper-light)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Lighthouse beam (rotating) ── */}
      <motion.g
        style={{ transformOrigin: '100px 95px' }}
        animate={
          reduced
            ? undefined
            : inView
              ? { rotate: [0, 25, 0, -25, 0] }
              : undefined
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        <motion.polygon
          points="100,95 40,20 160,20"
          fill="url(#beamFade)"
          initial={reduced ? { opacity: 0.5 } : { opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : undefined}
          transition={{ delay: 2.5, duration: 1 }}
        />
      </motion.g>

      {/* ── Beam glow at lantern ── */}
      <motion.circle
        cx="100"
        cy="95"
        r="12"
        fill="var(--color-breton-copper-light)"
        initial={reduced ? { opacity: 0.7 } : { opacity: 0, scale: 0 }}
        animate={
          inView
            ? {
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.15, 1],
              }
            : undefined
        }
        transition={{
          delay: 2,
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformOrigin: '100px 95px' }}
      />

      {/* ── Lighthouse body — drawn on scroll ── */}
      {/* Base */}
      <motion.path
        d="M 70 280 L 60 280 L 60 290 L 140 290 L 140 280 L 130 280"
        stroke="var(--color-breton-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 0, duration: 0.5, ease: 'easeOut' }}
      />

      {/* Tower — tapered */}
      <motion.path
        d="M 70 280 L 80 120 L 120 120 L 130 280"
        stroke="var(--color-breton-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      />

      {/* Stripes — drawn after tower */}
      {[160, 190, 220, 250].map((y, i) => (
        <motion.line
          key={y}
          x1={73 + (y - 120) * 0.125}
          y1={y}
          x2={127 - (y - 120) * 0.125}
          y2={y}
          stroke="var(--color-breton-copper-light)"
          strokeWidth="2"
          initial={reduced ? undefined : { pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
        />
      ))}

      {/* Lantern room */}
      <motion.path
        d="M 80 120 L 75 105 L 75 85 L 125 85 L 125 105 L 120 120"
        stroke="var(--color-breton-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 1.1, duration: 0.6, ease: 'easeOut' }}
      />

      {/* Lantern glass */}
      <motion.rect
        x="82"
        y="88"
        width="36"
        height="14"
        rx="2"
        stroke="var(--color-breton-copper-light)"
        strokeWidth="2"
        fill="var(--color-breton-copper-light)"
        fillOpacity="0.1"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ delay: 1.5, duration: 0.4 }}
      />

      {/* Cap / dome */}
      <motion.path
        d="M 80 85 L 90 70 L 100 62 L 110 70 L 120 85"
        stroke="var(--color-breton-navy)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 1.6, duration: 0.5, ease: 'easeOut' }}
      />

      {/* ── Waves at base ── */}
      <motion.path
        d="M 30 285 C 50 278 70 292 90 285 C 110 278 130 292 150 285 C 170 278 190 285 190 285"
        stroke="var(--color-breton-emerald)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
        opacity="0.5"
      />
      <motion.path
        d="M 20 293 C 45 286 65 298 90 293 C 115 288 140 298 165 293 C 180 289 195 293 195 293"
        stroke="var(--color-breton-emerald)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 2.2, duration: 0.6, ease: 'easeOut' }}
        opacity="0.3"
      />
    </svg>
  );
}
