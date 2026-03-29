'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ThreePillars } from '@/components/sections/ThreePillars';
import { VideoBackground } from '@/components/ui/video-background';
import { LocationBadge } from '@/components/animations';
import { scaleInApple, sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;
  const scale = prefersReducedMotion ? noMotion : scaleInApple;

  return (
    <VideoBackground
      src="/videos/drone-baie-bretonne.mp4"
      poster="/videos/poster-baie.jpg"
      startTime={3}
      overlayClassName="bg-gradient-to-b from-breton-navy/40 via-breton-navy/55 to-breton-navy/75"
      className="relative min-h-screen grain-texture flex items-center justify-center text-center overflow-hidden pt-28 pb-16 sm:py-0"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-0"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Badge local — sonar animé */}
          <motion.div variants={child}>
            <LocationBadge variant="dark" />
          </motion.div>

          {/* 2. H1 */}
          <motion.h1
            variants={scale}
            className="mt-8 font-serif text-[40px] sm:text-5xl lg:text-[76px] leading-[1.05] tracking-[-0.03em] text-white max-w-[820px] mx-auto"
          >
            De la donnée brute à la{' '}
            <br />
            <span className="relative inline-block text-breton-sand italic">
              décision claire.
              <span
                className="absolute bottom-0.5 -inset-x-1 h-2 bg-white/10 rounded"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* 3. Sous-titre */}
          <motion.p
            variants={child}
            className="mt-7 text-lg sm:text-xl text-white/80 leading-relaxed max-w-[520px] mx-auto"
          >
            Intégrateur d&apos;IA dans les entreprises bretonnes. Automatisation, pilotage
            data, formation de vos équipes.
          </motion.p>

          {/* 4. CTAs — compacts */}
          <motion.div
            variants={child}
            className="mt-10 flex flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/audit-ia"
              className="text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-colors"
            >
              Identifier mes quick wins →
            </Link>
            <Link
              href="/cas-clients"
              className="text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-colors"
            >
              Voir les résultats clients →
            </Link>
          </motion.div>

          {/* 5. Trois piliers animés */}
          <motion.div variants={child} className="mt-14 w-full">
            <ThreePillars />
          </motion.div>
        </motion.div>
      </div>
    </VideoBackground>
  );
}
