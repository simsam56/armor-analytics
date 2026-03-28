'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { getCalendlyUrl } from '@/lib/constants';
import { sectionStagger, sectionChild } from '@/lib/animations';
import { VideoBackground } from '@/components/ui/video-background';

export function CtaContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <VideoBackground
      src="/videos/drone-sunset-voilier.mp4"
      poster="/videos/poster-sunset.jpg"
      overlayClassName="bg-breton-navy/75"
      className="grain-texture py-24 sm:py-[120px]"
    >
      <section id="cta-contact">
        {/* Copper orb glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-[radial-gradient(circle,rgba(193,127,89,0.12)_0%,transparent_70%)]
            pointer-events-none animate-pulse-glow"
          aria-hidden="true"
        />

        <motion.div
          ref={ref}
          className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
          variants={prefersReducedMotion ? {} : sectionStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={prefersReducedMotion ? {} : sectionChild}
            className="font-serif text-[36px] sm:text-[60px] leading-[1.06] text-white tracking-[-0.025em]"
          >
            Prêt à passer de la donnée brute à <br />
            <span className="text-breton-copper-light">l&apos;action ?</span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? {} : sectionChild}
            className="text-lg text-white/60 mt-4"
          >
            Diagnostic gratuit de 30 minutes, sans engagement.
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? {} : sectionChild}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-11"
          >
            <a
              href={getCalendlyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] px-8 py-4 font-semibold
                bg-breton-sand text-breton-navy
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] hover:-translate-y-[3px]
                transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <Calendar className="h-5 w-5" />
              Réserver un créneau
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] px-8 py-4
                border border-white/15 text-white
                hover:border-white/35 hover:-translate-y-[3px]
                transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Nous écrire →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </VideoBackground>
  );
}
