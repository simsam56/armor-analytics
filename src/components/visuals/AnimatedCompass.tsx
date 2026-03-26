'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Animated compass rose — nautical navigation theme.
 * Draws itself on scroll, needle finds north with spring physics.
 * Breton palette on light backgrounds.
 */
export function AnimatedCompass({ className = '' }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      className={`w-full max-w-[180px] h-auto ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring — draws on scroll */}
      <motion.circle
        cx="100"
        cy="100"
        r="90"
        stroke="var(--color-breton-sand)"
        strokeWidth="2"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 0, duration: 1, ease: 'easeOut' }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="82"
        stroke="var(--color-breton-sand)"
        strokeWidth="1"
        initial={reduced ? undefined : { pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : undefined}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      />

      {/* Tick marks — 8 directions */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const major = angle % 90 === 0;
        const inner = major ? 72 : 76;
        const outer = 82;
        return (
          <motion.line
            key={angle}
            x1={100 + inner * Math.sin(rad)}
            y1={100 - inner * Math.cos(rad)}
            x2={100 + outer * Math.sin(rad)}
            y2={100 - outer * Math.cos(rad)}
            stroke="var(--color-breton-navy)"
            strokeWidth={major ? 2 : 1}
            strokeLinecap="round"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={inView ? { opacity: major ? 0.8 : 0.4 } : undefined}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.3 }}
          />
        );
      })}

      {/* Cardinal labels */}
      {[
        { letter: 'N', x: 100, y: 28, color: 'var(--color-breton-copper)' },
        { letter: 'E', x: 172, y: 104, color: 'var(--color-breton-granite)' },
        { letter: 'S', x: 100, y: 180, color: 'var(--color-breton-granite)' },
        { letter: 'W', x: 28, y: 104, color: 'var(--color-breton-granite)' },
      ].map((label, i) => (
        <motion.text
          key={label.letter}
          x={label.x}
          y={label.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill={label.color}
          fontSize="14"
          fontWeight="700"
          fontFamily="var(--font-sans, system-ui)"
          initial={reduced ? undefined : { opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
          style={{ transformOrigin: `${label.x}px ${label.y}px` }}
        >
          {label.letter}
        </motion.text>
      ))}

      {/* Compass rose points */}
      <motion.g
        initial={reduced ? undefined : { opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ delay: 1.2, duration: 0.5, type: 'spring', stiffness: 200 }}
        style={{ transformOrigin: '100px 100px' }}
      >
        {/* N-S diamond — navy */}
        <polygon
          points="100,38 108,100 100,162 92,100"
          fill="var(--color-breton-navy)"
          opacity="0.15"
        />
        {/* N point — copper (north highlighted) */}
        <polygon
          points="100,38 108,100 92,100"
          fill="var(--color-breton-copper)"
          opacity="0.3"
        />
        {/* E-W diamond — lighter */}
        <polygon
          points="38,100 100,92 162,100 100,108"
          fill="var(--color-breton-navy)"
          opacity="0.08"
        />
      </motion.g>

      {/* Needle — swings then settles (spring physics) */}
      <motion.g
        style={{ transformOrigin: '100px 100px' }}
        initial={reduced ? undefined : { rotate: 120 }}
        animate={inView ? { rotate: 0 } : undefined}
        transition={{
          delay: 1.5,
          type: 'spring',
          stiffness: 60,
          damping: 8,
          mass: 1.2,
        }}
      >
        {/* North half — copper */}
        <polygon
          points="100,42 104,96 96,96"
          fill="var(--color-breton-copper)"
        />
        {/* South half — navy */}
        <polygon
          points="100,158 104,104 96,104"
          fill="var(--color-breton-navy)"
          opacity="0.5"
        />
      </motion.g>

      {/* Center pin */}
      <motion.circle
        cx="100"
        cy="100"
        r="5"
        fill="var(--color-breton-navy)"
        initial={reduced ? undefined : { scale: 0 }}
        animate={inView ? { scale: 1 } : undefined}
        transition={{ delay: 1.5, duration: 0.3, type: 'spring' }}
        style={{ transformOrigin: '100px 100px' }}
      />
      <circle cx="100" cy="100" r="2.5" fill="var(--color-breton-copper-light)" />
    </svg>
  );
}
