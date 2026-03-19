'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, BarChart3, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const PILLARS = [
  {
    icon: Database,
    title: 'Infrastructure Data',
    description: 'On centralise et structure vos données',
  },
  {
    icon: BarChart3,
    title: 'Analyse & Dashboards',
    description: 'On vous donne les outils pour piloter',
  },
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: `On active l'IA là où elle fait gagner du temps`,
  },
];

const MARQUEE_WORDS = [
  'DATA',
  'DASHBOARDS',
  'IA',
  'PILOTAGE',
  'DATA PLATFORM',
  'REPORTING',
  'OCR',
  'PRÉVISION',
];

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid gap-6 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              className="flex items-center gap-4 rounded-xl bg-slate-50 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-breton-accent/10">
                <pillar.icon className="h-5 w-5 text-breton-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-breton-navy">{pillar.title}</h3>
                <p className="text-sm text-breton-slate">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee défilant */}
      <div className="mt-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, idx) => (
            <span
              key={idx}
              className="mx-6 text-xs font-semibold uppercase tracking-[0.2em] text-breton-granite/40"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
