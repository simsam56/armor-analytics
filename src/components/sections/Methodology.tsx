'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROCESS_STEPS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="methode" className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Une méthode simple, du terrain à la mise en œuvre
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.step} variants={fadeInUp} className="relative">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-breton-navy text-white text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
