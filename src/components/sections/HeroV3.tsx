'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';
import { scaleInApple, sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;
  const scale = prefersReducedMotion ? noMotion : scaleInApple;

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-breton-foam to-breton-sand grain-texture flex items-center justify-center text-center overflow-hidden pt-28 pb-16 sm:py-0">
      {/* Radial glow behind the title */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="h-[600px] w-[800px] animate-pulse-glow rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(26,107,74,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-0"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Badge local */}
          <motion.div variants={child}>
            <span className="inline-flex items-center gap-2 bg-breton-navy/5 backdrop-blur-sm px-[18px] py-2 rounded-full text-sm text-breton-slate border border-breton-navy/5">
              <span
                className="w-2 h-2 rounded-full bg-breton-emerald shrink-0 animate-pulse-dot"
                aria-hidden="true"
              />
              Basés à Lorient — interventions sur toute la Bretagne
            </span>
          </motion.div>

          {/* 2. H1 */}
          <motion.h1
            variants={scale}
            className="mt-8 font-serif text-[40px] sm:text-5xl lg:text-[76px] leading-[1.05] tracking-[-0.03em] text-breton-navy max-w-[820px] mx-auto"
          >
            De la donnée brute à la
            <br />
            <span className="relative inline-block text-breton-emerald italic">
              décision claire.
              <span
                className="absolute bottom-0.5 -inset-x-1 h-2 bg-breton-emerald/10 rounded"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* 3. Sous-titre */}
          <motion.p
            variants={child}
            className="mt-7 text-lg sm:text-xl text-breton-slate leading-relaxed max-w-[520px] mx-auto"
          >
            On structure votre entreprise pour que l&apos;IA serve vraiment. Diagnostic, déploiement
            et formation pour les PME bretonnes.
          </motion.p>

          {/* 4. CTAs */}
          <motion.div
            variants={child}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-breton-navy text-white hover:bg-breton-slate rounded-[14px] px-8 py-4 h-auto font-semibold transition-all duration-200 hover:-translate-y-[3px] hover:shadow-lg"
            >
              <a
                href={getCalendlyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5"
              >
                <Calendar className="h-5 w-5 shrink-0" />
                Demander un diagnostic
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-breton-navy/15 text-breton-navy hover:border-breton-navy bg-transparent rounded-[14px] px-8 py-4 h-auto transition-all duration-200 hover:-translate-y-[3px] hover:shadow-md"
            >
              <Link href="/cas-clients" className="inline-flex items-center gap-2.5">
                Voir nos réalisations
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
              'Moins de tâches manuelles',
              'Plus de visibilité opérationnelle',
              'Des solutions documentées et transférables',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-breton-slate">
                <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-full bg-breton-emerald/8 shrink-0">
                  <Check className="w-3 h-3 stroke-breton-emerald" strokeWidth={2.5} />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
