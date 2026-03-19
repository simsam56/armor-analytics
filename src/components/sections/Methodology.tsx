'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROCESS_STEPS } from '@/lib/constants';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/animations';

export function Methodology() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.3 });

  return (
    <section id="methode" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Méthode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comment on mesure les gains
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pas de promesses vagues : des indicateurs concrets, mesurés avant et après.
          </p>
        </div>

        {/* 3 steps */}
        <motion.div
          ref={stepsRef}
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={stepsInView ? 'visible' : 'hidden'}
        >
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div key={step.step} variants={scaleIn} className="relative">
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-slate-200 -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-2xl border border-slate-200 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-breton-emerald text-white text-lg font-bold">
                  {step.step}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-breton-moss">{step.subtitle}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics — fond navy différencié */}
        <motion.div
          ref={metricsRef}
          className="mt-16 rounded-2xl bg-breton-navy p-8 sm:p-10"
          variants={staggerContainer}
          initial="hidden"
          animate={metricsInView ? 'visible' : 'hidden'}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Saisie commande', before: '8 min', after: '30 sec' },
              { label: 'Taux d\u2019erreur', before: '5%', after: '0.2%' },
              { label: 'Reporting', before: 'J+5', after: 'Temps réel' },
              { label: 'Économie annuelle', before: '', after: '8 280 €' },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-xs font-medium text-white/40 uppercase tracking-wider">
                  {metric.label}
                </p>
                <div className="mt-2 flex items-baseline justify-center gap-2">
                  {metric.before && (
                    <>
                      <span className="text-sm text-white/30 line-through">{metric.before}</span>
                      <span className="text-white/20">→</span>
                    </>
                  )}
                  <span className="text-xl font-bold text-breton-accent">{metric.after}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/40">
            Chaque projet fait l&apos;objet d&apos;un bilan chiffré avant/après.{' '}
            <span className="text-white/60">NDA possible dès le premier échange.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
