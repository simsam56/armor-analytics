'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, BarChart3, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const PILLARS = [
  {
    icon: Database,
    title: 'Data & Dataviz',
    description: 'On centralise vos données et on les rend lisibles',
  },
  {
    icon: Brain,
    title: 'IA & Automatisation',
    description: 'On supprime les tâches manuelles qui vous coûtent cher',
  },
  {
    icon: BarChart3,
    title: 'Audit & Formation',
    description: 'On vous aide à prioriser et on rend vos équipes autonomes',
  },
];

const MARQUEE_ITEMS = [
  { text: 'DATA PLATFORM', icon: '◆' },
  { text: 'DASHBOARDS', icon: '◆' },
  { text: 'INTELLIGENCE ARTIFICIELLE', icon: '◆' },
  { text: 'OCR', icon: '◆' },
  { text: 'PRÉVISION', icon: '◆' },
  { text: 'REPORTING', icon: '◆' },
  { text: 'AUTOMATISATION', icon: '◆' },
  { text: 'PILOTAGE', icon: '◆' },
];

export function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-white">
      {/* Marquee band — large format */}
      <div className="border-y border-slate-100 py-6 overflow-hidden bg-slate-50/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="mx-6 sm:mx-10 text-lg sm:text-2xl font-bold uppercase tracking-[0.15em] text-breton-granite/30 flex items-center gap-4"
            >
              <span className="text-breton-accent/30 text-xs">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* 3 Pillar cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          ref={ref}
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-slate-200 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-xl hover:border-breton-accent/30"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-breton-accent/10 group-hover:bg-breton-accent/15 transition-colors">
                <pillar.icon className="h-7 w-7 text-breton-accent" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-breton-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm text-breton-slate">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
