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
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(26,107,74,0.15)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={child}
            className="text-sm font-semibold text-breton-emerald uppercase tracking-[0.15em] mb-6"
          >
            Agents IA m&eacute;tier &bull; PME industrielles &bull; Bretagne
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-[clamp(36px,7vw,80px)] font-bold leading-[1.05] tracking-[-0.04em] text-white max-w-[950px]"
          >
            On d&eacute;ploie les agents IA m&eacute;tier qui suppriment vos ressaisies, fiabilisent votre reporting et pilotent votre production.
          </motion.h1>

          <motion.p
            variants={child}
            className="mt-8 text-xl text-white/60 leading-relaxed max-w-[600px]"
          >
            Agent de reporting, agent de commandes fournisseurs, agent de suivi d&apos;encours&nbsp;&mdash; d&eacute;ploy&eacute;s directement dans vos ateliers, sans changer vos &eacute;quipes ni vos outils.
          </motion.p>

          <motion.div variants={child} className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white text-breton-navy hover:bg-breton-sand transition-colors duration-200"
            >
              Diagnostic terrain gratuit &rarr;
            </Link>
          </motion.div>

          <motion.div
            variants={child}
            className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">7 ans</p>
              <p className="text-sm text-white/50">de terrain industriel</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3 jours</p>
              <p className="text-sm text-white/50">pour un diagnostic complet</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-white/50">PME industrielles</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
