'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;

  return (
    <section className="relative min-h-screen flex items-center bg-breton-navy overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(26,107,74,0.15)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* H1 — Montserrat massive comme Atos */}
          <motion.h1
            variants={child}
            className="font-display text-[clamp(48px,10vw,120px)] font-normal leading-[0.95] tracking-[-0.05em] text-white max-w-[900px]"
          >
            Pilotage
            <br />
            de production_
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={child}
            className="mt-8 text-xl sm:text-2xl text-white/60 leading-relaxed max-w-[640px]"
          >
            On transforme vos plannings Excel en pilotage temps réel
            et vos tâches répétitives en automatisations robustes.
            Pour les PME industrielles bretonnes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={child}
            className="mt-12 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium
                bg-white text-breton-navy
                hover:bg-white/90 hover:-translate-y-[2px]
                transition-all duration-200"
            >
              Demander un diagnostic terrain →
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium
                border border-white/20 text-white
                hover:border-white/40 hover:-translate-y-[2px]
                transition-all duration-200"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
