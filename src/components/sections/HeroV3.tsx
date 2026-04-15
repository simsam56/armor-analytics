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
    <section className="relative min-h-[85vh] flex items-center bg-breton-navy overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(26,107,74,0.15)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12 py-28 sm:py-36">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-[800px]">
          <motion.p
            variants={child}
            className="text-sm font-semibold text-breton-emerald uppercase tracking-[0.15em] mb-6"
          >
            Agents IA m&eacute;tier &bull; PME industrielles
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-[clamp(36px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
          >
            Des agents IA qui font le travail que personne n&apos;a le temps de faire.
          </motion.h1>

          <motion.p
            variants={child}
            className="mt-6 text-lg text-white/55 leading-relaxed max-w-[520px]"
          >
            Reporting, ressaisies, suivi d&apos;encours, commandes fournisseurs. D&eacute;ploy&eacute;s dans vos ateliers, sur vos outils.
          </motion.p>

          <motion.div variants={child} className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white text-breton-navy hover:bg-breton-sand transition-colors duration-200"
            >
              Diagnostic terrain gratuit &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
