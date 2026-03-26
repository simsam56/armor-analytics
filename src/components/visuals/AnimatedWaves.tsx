'use client';

import { useReducedMotion } from 'framer-motion';

/**
 * Animated SVG wave section divider — maritime Breton theme.
 * Place between sections for a fluid transition.
 * 3 layered waves with staggered CSS animations.
 *
 * @param flip - Flip vertically (waves on top instead of bottom)
 * @param variant - Color variant: 'foam-to-white' | 'white-to-foam' | 'sand-to-white' | 'navy'
 */
export function AnimatedWaves({
  className = '',
  flip = false,
  variant = 'foam-to-white',
}: {
  className?: string;
  flip?: boolean;
  variant?: 'foam-to-white' | 'white-to-foam' | 'sand-to-white' | 'navy';
}) {
  const reduced = useReducedMotion();

  const colors = {
    'foam-to-white': {
      bg: 'bg-breton-foam',
      wave1: 'var(--color-breton-foam)',
      wave2: 'var(--color-breton-sand)',
      wave3: 'white',
    },
    'white-to-foam': {
      bg: 'bg-white',
      wave1: 'white',
      wave2: 'var(--color-breton-sand)',
      wave3: 'var(--color-breton-foam)',
    },
    'sand-to-white': {
      bg: 'bg-breton-sand',
      wave1: 'var(--color-breton-sand)',
      wave2: 'var(--color-breton-foam)',
      wave3: 'white',
    },
    navy: {
      bg: 'bg-breton-navy',
      wave1: 'rgba(12,31,63,0.8)',
      wave2: 'rgba(46,64,87,0.5)',
      wave3: 'var(--color-breton-foam)',
    },
  };

  const c = colors[variant];
  const dur1 = reduced ? '0s' : '12s';
  const dur2 = reduced ? '0s' : '10s';
  const dur3 = reduced ? '0s' : '14s';

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: 80,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
      aria-hidden="true"
    >
      {/* Wave 1 — back, slowest */}
      <svg
        className="absolute bottom-0 w-[200%]"
        style={{
          animation: reduced ? 'none' : `wave-drift ${dur1} linear infinite`,
          opacity: 0.4,
          height: 60,
        }}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C240 5 480 55 720 30 C960 5 1200 55 1440 30 L1440 60 L0 60Z"
          fill={c.wave1}
        />
      </svg>

      {/* Wave 2 — middle */}
      <svg
        className="absolute bottom-0 w-[200%]"
        style={{
          animation: reduced ? 'none' : `wave-drift ${dur2} linear infinite reverse`,
          opacity: 0.6,
          height: 50,
        }}
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
      >
        <path
          d="M0 25 C180 45 360 5 540 25 C720 45 900 5 1080 25 C1260 45 1440 5 1440 25 L1440 50 L0 50Z"
          fill={c.wave2}
        />
      </svg>

      {/* Wave 3 — front, fastest */}
      <svg
        className="absolute bottom-0 w-[200%]"
        style={{
          animation: reduced ? 'none' : `wave-drift ${dur3} linear infinite`,
          height: 40,
        }}
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 C360 0 720 40 1080 20 C1260 10 1350 30 1440 20 L1440 40 L0 40Z"
          fill={c.wave3}
        />
      </svg>
    </div>
  );
}
