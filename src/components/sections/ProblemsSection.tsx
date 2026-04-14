'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Clock, FileSearch, BarChart3, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { sectionStagger, sectionChild } from '@/lib/animations';

const PROBLEMS = [
  {
    icon: Clock,
    problem: 'On perd 2h/jour \u00e0 ressaisir des commandes',
    solution: 'Agent back-office',
    description: 'Traitement automatique des commandes, devis et relances fournisseurs.',
    href: '/automatisation-agents-ia',
  },
  {
    icon: FileSearch,
    problem: 'Personne ne retrouve la bonne fiche technique',
    solution: 'Agent documentaire RAG',
    description: 'L\u2019assistant qui conna\u00eet vos fiches techniques, proc\u00e9dures et normes.',
    href: '/automatisation-agents-ia',
  },
  {
    icon: BarChart3,
    problem: 'Je ne sais pas si ma prod est dans les clous',
    solution: 'Pilotage augment\u00e9',
    description: 'Indicateurs temps r\u00e9el, alertes anomalies, pilotage augment\u00e9.',
    href: '/pilotage-augmente',
  },
  {
    icon: GraduationCap,
    problem: 'Former mes \u00e9quipes \u00e0 l\u2019IA, par o\u00f9 commencer\u00a0?',
    solution: 'Formation terrain',
    description: 'Dirigeants et op\u00e9rateurs form\u00e9s sur site, \u00e0 votre rythme.',
    href: '/formation-ia',
  },
];

export function ProblemsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={shouldReduceMotion ? {} : sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={shouldReduceMotion ? {} : sectionChild} className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-breton-navy mb-4">
              Vous vous reconnaissez&nbsp;?
            </h2>
            <p className="text-breton-granite text-lg max-w-2xl mx-auto">
              Les probl&egrave;mes que nos clients industriels nous confient le plus souvent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((item) => (
              <motion.div key={item.problem} variants={shouldReduceMotion ? {} : sectionChild}>
                <Link
                  href={item.href}
                  className="group block rounded-2xl border border-breton-sand bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-xl bg-breton-foam p-3">
                      <item.icon className="h-6 w-6 text-breton-emerald" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-breton-navy mb-1">
                        &laquo;&nbsp;{item.problem}&nbsp;&raquo;
                      </p>
                      <p className="text-sm font-medium text-breton-emerald mb-2">
                        {item.solution}
                      </p>
                      <p className="text-breton-slate text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
