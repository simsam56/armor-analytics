'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const RESULTS = [
  { metric: 'Temps gagné', detail: 'sur les tâches répétitives' },
  { metric: 'Erreurs évitées', detail: `grâce à l'automatisation` },
  { metric: 'Visibilité retrouvée', detail: `sur l'activité en temps réel` },
  { metric: 'Coûts réduits', detail: 'mesurés avant / après' },
];

export function ResultsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 sm:py-32 bg-breton-navy" id="resultats">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Des gains visibles sur le terrain
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Nous préférons montrer des gains concrets plutôt que des chiffres décoratifs. Chaque
            mission est évaluée avec un avant/après simple.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {RESULTS.map((item) => (
            <motion.div key={item.metric} variants={fadeInUp} className="text-center">
              <p className="text-lg font-semibold text-breton-accent">{item.metric}</p>
              <p className="mt-2 text-sm text-white/60">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-16 text-center text-sm text-white/50"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Chaque projet fait l&apos;objet d&apos;un bilan chiffré avant/après.
        </motion.p>
      </div>
    </section>
  );
}
