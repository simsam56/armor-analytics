'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Shield, MapPin, Building2, Clock } from 'lucide-react';
import { sectionStagger, sectionChild } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const stagger = prefersReducedMotion ? noMotion : sectionStagger;
  const child = prefersReducedMotion ? noMotion : sectionChild;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-breton-foam to-breton-sand -mt-16 pt-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={child}>
            <span className="inline-flex items-center gap-2 rounded-full border border-breton-granite/30 bg-white/40 backdrop-blur-md px-4 py-2 text-sm font-medium text-breton-slate">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-breton-emerald opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-breton-emerald" />
              </span>
              PME industrielles | Lorient, Bretagne
            </span>
          </motion.div>

          <motion.h1
            variants={child}
            className="mt-8 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-balance text-breton-navy"
          >
            Vos donn&eacute;es de production m&eacute;ritent mieux qu&apos;un fichier Excel
          </motion.h1>

          <motion.p
            variants={child}
            className="mt-6 text-lg md:text-xl text-breton-slate max-w-[640px]"
          >
            Pilotage, automatisation et agents IA pour vos ateliers et back-offices.
            Par un ancien de Naval Group, depuis Lorient.
          </motion.p>

          <motion.div
            variants={child}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/audit-ia"
              className="inline-flex items-center justify-center bg-breton-navy text-white rounded-xl px-8 py-4 font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Diagnostic IA terrain →
            </Link>
            <Link
              href="/cas-clients"
              className="inline-flex items-center justify-center border-2 border-breton-navy text-breton-navy rounded-xl px-8 py-4 font-semibold hover:bg-breton-navy/5 transition-colors duration-200"
            >
              Voir nos r&eacute;alisations
            </Link>
          </motion.div>

          <motion.div
            variants={child}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-breton-slate font-medium"
          >
            <span className="inline-flex items-center gap-1.5 text-breton-copper">
              <Shield className="h-4 w-4" />
              7 ans terrain Naval Group
            </span>
            <span className="text-breton-granite/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Lorient, Bretagne
            </span>
            <span className="text-breton-granite/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="h-4 w-4" />
              100% PME industrielles
            </span>
            <span className="text-breton-granite/40" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Diagnostic 3 jours
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
