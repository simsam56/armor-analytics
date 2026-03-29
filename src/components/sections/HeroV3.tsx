'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
            On aide les PME bretonnes à intégrer l&apos;intelligence artificielle dans leurs
            process. Automatisation, pilotage data, formation de vos équipes.
          </motion.p>

          {/* 4. CTAs */}
          <motion.div
            variants={child}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-breton-sand text-breton-navy hover:bg-white rounded-[14px] px-8 py-4 h-auto font-semibold transition-all duration-200 hover:-translate-y-[3px] hover:shadow-lg"
            >
              <Link href="/audit-ia" className="inline-flex items-center gap-2.5">
                Identifier mes quick wins →
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-white/20 text-white hover:border-white/50 hover:bg-white/10 bg-transparent rounded-[14px] px-8 py-4 h-auto transition-all duration-200 hover:-translate-y-[3px] hover:shadow-md"
            >
              <Link href="/cas-clients" className="inline-flex items-center gap-2.5">
                Voir les résultats clients
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          </motion.div>

          {/* 5. Micro-preuves */}
          <motion.div
            variants={child}
            className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-9 justify-center"
          >
            {[
              'Automatisation sur mesure',
              'Dashboards temps réel',
              'Formation des équipes',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-white/70">
                <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-breton-emerald/20 shrink-0">
                  <Check className="w-3 h-3 stroke-breton-emerald" strokeWidth={2.5} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </VideoBackground>
  );
}
