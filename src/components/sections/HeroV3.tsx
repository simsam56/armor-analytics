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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,107,74,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12 py-24 sm:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={child}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] tracking-tight text-white"
          >
            Vos donn&eacute;es de production m&eacute;ritent mieux qu&apos;un fichier Excel
          </motion.h1>

          <motion.p
            variants={child}
            className="mt-8 text-lg md:text-xl text-white/60 max-w-[560px] leading-relaxed"
          >
            Pilotage augment&eacute;, automatisation et agents IA pour vos ateliers et back-offices.
          </motion.p>

          <motion.div
            variants={child}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/audit-ia"
              className="inline-flex items-center justify-center bg-white text-breton-navy rounded-full px-8 py-4 font-semibold hover:bg-breton-sand transition-colors duration-200"
            >
              Diagnostic IA terrain &rarr;
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center border border-white/20 text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Voir nos r&eacute;alisations
            </Link>
          </motion.div>

          <motion.div
            variants={child}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            {[
              { value: '7 ans', label: 'de terrain industriel' },
              { value: '3 jours', label: 'pour un diagnostic' },
              { value: '100%', label: 'PME industrielles' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
