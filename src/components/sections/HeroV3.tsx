'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { scaleInApple, sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;
  const scale = prefersReducedMotion ? noMotion : scaleInApple;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
          alt="Atelier de production industrielle"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-breton-navy/90 via-breton-navy/70 to-breton-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          className="max-w-2xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.p
            variants={child}
            className="text-sm font-semibold text-breton-emerald uppercase tracking-[0.12em] mb-6"
          >
            IA, data et automatisation
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={scale}
            className="font-serif text-[40px] sm:text-5xl lg:text-[64px] leading-[1.08] tracking-[-0.03em] text-white"
          >
            Votre partenaire IA &amp; data pour le pilotage de production.
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={child}
            className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl"
          >
            On transforme vos plannings Excel en pilotage temps réel et vos tâches
            répétitives en automatisations robustes, pour les PME industrielles bretonnes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={child}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[14px] px-8 py-4 text-sm font-semibold
                bg-breton-sand text-breton-navy
                hover:-translate-y-[3px] hover:shadow-lg hover:bg-white
                transition-all duration-200"
            >
              Demander un diagnostic terrain →
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center rounded-[14px] px-8 py-4 text-sm font-semibold
                border border-white/20 text-white
                hover:border-white/40 hover:-translate-y-[3px]
                transition-all duration-200"
            >
              Voir un exemple de dashboard
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
