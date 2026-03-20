'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';
import { fadeInUp, heroStagger } from '@/lib/animations';

const noMotion = { hidden: {}, visible: {} };

export function HeroV3() {
  const prefersReducedMotion = useReducedMotion();
  const v = prefersReducedMotion ? noMotion : undefined;

  return (
    <section className="relative bg-breton-navy -mt-16">
      {/* Barre haute locale — pt-20 compense le header qui chevauche */}
      <div className="border-b border-white/10 pt-20">
        <p className="pb-2.5 text-center text-sm text-white/50">
          Basés à Lorient, nous accompagnons les PME bretonnes sur site et à distance.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          className="max-w-3xl"
          variants={prefersReducedMotion ? noMotion : heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* H1 — Titre principal */}
          <motion.h1
            variants={v ?? fadeInUp}
            className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            Vos données travaillent.
            <br />
            <span className="text-breton-accent italic">Pas vos équipes.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            variants={v ?? fadeInUp}
            className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl sm:text-xl"
          >
            Nous aidons les PME bretonnes à supprimer les ressaisies, fiabiliser leur pilotage et
            déployer des automatisations utiles, sans complexifier le quotidien.
          </motion.p>

          {/* Micro-preuves */}
          <motion.ul variants={v ?? fadeInUp} className="mt-10 space-y-3">
            {[
              'Moins de tâches manuelles',
              'Plus de visibilité opérationnelle',
              'Des solutions documentées et transférables',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/45">
                <span className="h-1.5 w-1.5 rounded-full bg-breton-accent shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={v ?? fadeInUp} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-white text-breton-navy hover:bg-breton-sand shadow-lg shadow-black/20 h-13 px-8 text-base font-semibold"
            >
              <a
                href={getCalendlyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2.5"
              >
                <Calendar className="h-5 w-5" />
                Demander un diagnostic
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base"
            >
              <Link href="/projets" className="gap-2.5">
                Voir nos réalisations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
