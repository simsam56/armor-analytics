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
    <section className="relative -mt-16 flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-breton-foam to-breton-sand pt-32 pb-16">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={child}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-breton-sand bg-white/80 px-4 py-1.5 text-sm font-semibold text-breton-navy backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-breton-emerald" />
            </span>
            PME industrielles &bull; Bretagne
          </motion.p>

          <motion.h1
            variants={child}
            className="font-display text-[clamp(32px,5.5vw,64px)] font-bold leading-[1.08] tracking-[-0.03em] text-breton-navy"
          >
            Vos donn&eacute;es terrain, enfin pilotables
          </motion.h1>

          <motion.p
            variants={child}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-breton-slate"
          >
            On remplace vos fichiers Excel, ressaisies et suivis manuels par des agents IA
            branch&eacute;s sur vos outils m&eacute;tier.
          </motion.p>

          <motion.div
            variants={child}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-breton-navy px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-breton-slate"
            >
              Nous contacter &rarr;
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center rounded-full border border-breton-navy/20 bg-white px-8 py-4 text-base font-semibold text-breton-navy transition-colors duration-200 hover:bg-breton-foam"
            >
              Voir nos cas clients
            </Link>
          </motion.div>
        </motion.div>

        {/* Micro-proofs */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-breton-granite"
        >
          <span>7 ans de terrain industriel</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>12+ projets d&eacute;ploy&eacute;s</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Lorient, Bretagne</span>
        </motion.div>
      </div>
    </section>
  );
}
