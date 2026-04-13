'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
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
            Arrêtez de piloter votre production{' '}
            <br />
            <span className="relative inline-block text-breton-sand italic">
              à l&apos;aveugle.
              <span
                className="absolute bottom-0.5 -inset-x-1 h-2 bg-white/10 rounded"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* 3. Sous-titre */}
          <motion.p
            variants={child}
            className="mt-7 text-lg sm:text-xl text-white/80 leading-relaxed max-w-[600px] mx-auto"
          >
            J&apos;aide les PME industrielles bretonnes à remplacer leur planning Excel
            par un pilotage temps réel — et à ne plus dépendre d&apos;une seule personne
            pour faire tourner leur atelier.
          </motion.p>

          {/* 4. Accroche secondaire */}
          <motion.p
            variants={child}
            className="mt-4 text-sm sm:text-base text-breton-copper-light font-medium tracking-wide"
          >
            Par quelqu&apos;un qui a fait ce travail à la main pendant 7 ans.
          </motion.p>

          {/* 5. CTAs */}
          <motion.div
            variants={child}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/audit-ia"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] px-7 py-3.5 text-sm font-semibold
                bg-breton-sand text-breton-navy
                hover:-translate-y-[3px] hover:shadow-lg hover:bg-white
                transition-all duration-200"
            >
              Diagnostic terrain gratuit →
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] px-7 py-3.5 text-sm font-semibold
                bg-breton-sand text-breton-navy
                hover:-translate-y-[3px] hover:shadow-lg hover:bg-white
                transition-all duration-200"
            >
              Voir les résultats clients →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </VideoBackground>
  );
}
