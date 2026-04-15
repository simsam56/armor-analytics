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
            PME industrielles &bull; Bretagne
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-[clamp(36px,8vw,88px)] font-bold leading-[1.02] tracking-[-0.04em] text-white max-w-[900px]"
          >
            Votre planning Excel,{' '}
            <span className="text-white/40">vos ressaisies,</span>{' '}
            <span className="text-white/40">vos reportings du vendredi.</span>
            <br />
            On s&apos;en occupe.
          </motion.h1>

          <motion.p
            variants={child}
            className="mt-8 text-xl text-white/60 leading-relaxed max-w-[560px]"
          >
            Pilotage temps r&eacute;el, automatisation et agents IA d&eacute;ploy&eacute;s
            directement dans vos ateliers. Par quelqu&apos;un qui a v&eacute;cu 7&nbsp;ans sur le
            terrain.
          </motion.p>

          <motion.div variants={child} className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white text-breton-navy hover:bg-breton-sand transition-colors duration-200"
            >
              Demander un diagnostic terrain &rarr;
            </Link>
          </motion.div>

          {/* Proof strip */}
          <motion.div
            variants={child}
            className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-bold text-white">4h</p>
              <p className="text-sm text-white/50">
                &eacute;conomis&eacute;es / semaine en reporting
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">80%</p>
              <p className="text-sm text-white/50">du temps de traitement &eacute;limin&eacute;</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">J+0</p>
              <p className="text-sm text-white/50">
                reporting disponible le jour m&ecirc;me
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
