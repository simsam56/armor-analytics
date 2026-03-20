'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Cog, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const EXPERTISES = [
  {
    icon: Eye,
    title: 'Voir clair',
    description: `Tableaux de bord, indicateurs fiables, données centralisées : vous pilotez l'activité sans courir après Excel.`,
  },
  {
    icon: Cog,
    title: 'Automatiser utile',
    description:
      'Saisie, extraction, tri, consolidation, relances : on enlève les tâches répétitives qui ralentissent vos équipes.',
  },
  {
    icon: Users,
    title: 'Rendre autonome',
    description:
      'On forme vos équipes, on documente les flux, et vous gardez la main sur les outils livrés.',
  },
];

export function ExpertisesBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="expertises" className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ce qu&apos;on améliore concrètement
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Chaque mission part d&apos;un irritant terrain, puis débouche sur un gain mesurable.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {EXPERTISES.map((expertise) => (
            <motion.div
              key={expertise.title}
              variants={fadeInUp}
              className="rounded-2xl border border-slate-200 bg-white p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10">
                <expertise.icon className="h-6 w-6 text-breton-emerald" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{expertise.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{expertise.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
