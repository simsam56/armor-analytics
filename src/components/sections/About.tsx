'use client';

import { Target, BarChart3, Users } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBrandName } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const PILLARS = [
  {
    title: 'Concret',
    icon: Target,
    description: 'On traite un problème métier identifiable.',
  },
  {
    title: 'Mesuré',
    icon: BarChart3,
    description: 'On suit un gain compréhensible.',
  },
  {
    title: 'Transférable',
    icon: Users,
    description: 'On documente et on forme.',
  },
];

interface AboutProps {
  className?: string;
}

export function About({ className = '' }: AboutProps) {
  const brandName = getBrandName();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="a-propos" className={`py-24 sm:py-32 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid gap-16 lg:grid-cols-2 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Colonne gauche — texte */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              {brandName}, un partenaire de proximité pour vos sujets data et automatisation
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              {brandName} accompagne les PME bretonnes qui veulent mieux exploiter leurs données,
              gagner du temps sur leurs processus et avancer sur l&apos;automatisation sans se
              perdre dans la complexité.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Basés à Lorient, nous intervenons en Bretagne avec une approche simple : partir du
              terrain, produire des gains mesurables et rendre les équipes autonomes.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/a-propos" className="gap-2">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Colonne droite — piliers */}
          <motion.div variants={fadeInUp} className="space-y-5">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200/60"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-breton-emerald/10">
                    <Icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
