'use client';

import { Target, BarChart3, Users, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { getBrandName, SITE_CONFIG } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const PILLARS = [
  {
    id: 'concret',
    title: 'Concret',
    icon: Target,
    description: 'On part de vos irritants terrain, pas de la technologie.',
  },
  {
    id: 'mesure',
    title: 'Mesuré',
    icon: BarChart3,
    description: 'ROI démontrable : temps gagné, erreurs évitées, euros économisés.',
  },
  {
    id: 'transferable',
    title: 'Transférable',
    icon: Users,
    description: 'Vos équipes formées et autonomes. On documente tout.',
  },
];

const STATS = [
  { value: 10, suffix: '+', label: "ans d'expérience" },
  { value: 20, suffix: '+', label: 'projets livrés' },
  { value: 100, suffix: '%', label: 'en Bretagne' },
  { value: 48, suffix: 'h', label: 'première réponse' },
];

function useCountUp(target: number, inView: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

interface AboutProps {
  className?: string;
}

export function About({ className = '' }: AboutProps) {
  const brandName = getBrandName();
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left column */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Qui est derrière {brandName} ?
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Un collectif de consultants data, spécialisé PME et réseaux bretons.
              On connaît les contraintes : ERP vieillissants, Excel partout, zéro visibilité.
            </p>
            <p className="mt-3 font-medium text-slate-900">
              Notre mission : vous faire gagner du temps concret, mesurable.
            </p>
            <div className="mt-6 flex items-center gap-2 text-slate-600">
              <MapPin className="h-5 w-5 text-breton-emerald" />
              <span>
                Basés à {SITE_CONFIG.location.city} – Interventions en{' '}
                {SITE_CONFIG.location.region}
              </span>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/contact" className="gap-2">
                  Discutons de votre contexte
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right column — Pillars */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Notre approche en 3 mots
            </h3>
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="flex gap-4 p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-breton-emerald/10">
                    <Icon className="h-6 w-6 text-breton-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{pillar.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Animated stats */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} stat={stat} inView={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  stat,
  inView,
}: {
  stat: { value: number; suffix: string; label: string };
  inView: boolean;
}) {
  const count = useCountUp(stat.value, inView);
  return (
    <div className="text-center p-4 rounded-xl bg-slate-50">
      <p className="text-3xl font-bold text-breton-emerald">
        {count}
        {stat.suffix}
      </p>
      <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
    </div>
  );
}
