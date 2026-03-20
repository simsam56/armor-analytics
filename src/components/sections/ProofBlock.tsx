'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, BarChart3, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const PROOFS = [
  {
    icon: Search,
    title: 'Audit ciblé',
    description: `On identifie où vous perdez du temps, où vous perdez de l'argent, et quoi traiter en priorité.`,
  },
  {
    icon: BarChart3,
    title: 'Pilotage fiable',
    description: 'On centralise les données utiles pour que vos équipes décident plus vite.',
  },
  {
    icon: Zap,
    title: 'Automatisation utile',
    description: 'On ne déploie que ce qui simplifie vraiment les opérations.',
  },
];

export function ProofBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Des chantiers concrets, pas des promesses vagues
        </h2>

        <motion.div
          ref={ref}
          className="mt-16 grid gap-12 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {PROOFS.map((proof) => (
            <motion.div key={proof.title} variants={fadeInUp}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-foam">
                <proof.icon className="h-6 w-6 text-breton-navy" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">{proof.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{proof.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
