'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Animated sailing boat — floats on waves with gentle rocking.
 * Breton palette. Use as a decorative element near sections or in backgrounds.
 */
export function FloatingBoat({
  className = '',
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const reduced = useReducedMotion();

  const dims = {
    sm: 'max-w-[80px]',
    md: 'max-w-[120px]',
    lg: 'max-w-[180px]',
  };

  return (
    <div className={`${dims[size]} w-full ${className}`} aria-hidden="true">
      {/* Boat rocks gently */}
      <motion.div
        animate={
          reduced
            ? undefined
            : {
                rotate: [-2, 2, -2],
                y: [0, -4, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        style={{ transformOrigin: '50% 80%' }}
      >
        <svg viewBox="0 0 120 80" className="w-full h-auto" fill="none">
          {/* Mast */}
          <line
            x1="55"
            y1="10"
            x2="55"
            y2="55"
            stroke="var(--color-breton-navy)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Main sail — triangle */}
          <path
            d="M 57 14 L 57 50 L 90 50 Z"
            fill="var(--color-breton-sand)"
            stroke="var(--color-breton-navy)"
            strokeWidth="1"
            opacity="0.9"
          />

          {/* Jib sail — front triangle */}
          <path
            d="M 53 16 L 53 45 L 35 45 Z"
            fill="white"
            stroke="var(--color-breton-navy)"
            strokeWidth="1"
            opacity="0.8"
          />

          {/* Sail stripe (breton copper accent) */}
          <line
            x1="57"
            y1="32"
            x2="74"
            y2="50"
            stroke="var(--color-breton-copper-light)"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Hull */}
          <path
            d="M 25 55 L 30 65 L 85 65 L 95 55 Z"
            fill="var(--color-breton-navy)"
            stroke="var(--color-breton-navy)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Hull accent stripe */}
          <line
            x1="32"
            y1="60"
            x2="88"
            y2="60"
            stroke="var(--color-breton-copper-light)"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Flag at top */}
          <motion.path
            d="M 55 10 L 55 5 L 65 7.5 L 55 10"
            fill="var(--color-breton-emerald)"
            animate={
              reduced
                ? undefined
                : {
                    d: [
                      'M 55 10 L 55 5 L 65 7.5 L 55 10',
                      'M 55 10 L 55 5 L 63 6.5 L 55 10',
                      'M 55 10 L 55 5 L 65 7.5 L 55 10',
                    ],
                  }
            }
            transition={
              reduced
                ? undefined
                : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        </svg>
      </motion.div>

      {/* Water line — wave under the boat */}
      <svg viewBox="0 0 120 12" className="w-full h-auto -mt-3" fill="none">
        <motion.path
          d="M 0 6 C 15 2 30 10 45 6 C 60 2 75 10 90 6 C 105 2 120 6 120 6"
          stroke="var(--color-breton-emerald)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
          animate={
            reduced
              ? undefined
              : {
                  d: [
                    'M 0 6 C 15 2 30 10 45 6 C 60 2 75 10 90 6 C 105 2 120 6 120 6',
                    'M 0 6 C 15 10 30 2 45 6 C 60 10 75 2 90 6 C 105 10 120 6 120 6',
                    'M 0 6 C 15 2 30 10 45 6 C 60 2 75 10 90 6 C 105 2 120 6 120 6',
                  ],
                }
          }
          transition={
            reduced
              ? undefined
              : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      </svg>
    </div>
  );
}
