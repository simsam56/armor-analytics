'use client';

import Link from 'next/link';
import { Search, Zap, Brain, ArrowRight, Clock, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

interface Step {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  price: string;
  result: string;
}

const STEPS: Step[] = [
  {
    id: 'diagnostic',
    number: 1,
    title: 'Diagnostic',
    subtitle: 'Comprendre où vous perdez du temps',
    description: 'On analyse vos process et identifie les quick wins.',
    icon: Search,
    duration: '1-2 sem',
    price: '2-5k€',
    result: 'Vision claire des priorités',
  },
  {
    id: 'automatisation',
    number: 2,
    title: 'Automatisation',
    subtitle: 'Supprimer le travail manuel',
    description: 'On met en place les automatisations et tableaux de bord.',
    icon: Zap,
    duration: '3-8 sem',
    price: '8-25k€',
    result: 'Fin des ressaisies',
  },
  {
    id: 'ia',
    number: 3,
    title: 'IA Ciblée',
    subtitle: 'Optimiser si pertinent',
    description: 'IA uniquement là où elle apporte un gain mesurable.',
    icon: Brain,
    duration: '4-10 sem',
    price: '15-40k€',
    result: 'Traitement intelligent',
  },
];

interface StepsV4Props {
  className?: string;
}

export function StepsV4({ className = '' }: StepsV4Props) {
  return (
    <section className={`py-16 sm:py-20 bg-slate-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Une approche progressive
            </h2>
            <p className="mt-3 text-slate-400">
              Chaque étape apporte de la valeur. Vous décidez quand passer à la suivante.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <FadeIn key={step.id} direction="up" delay={index * 150}>
              <StepCard step={step} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={500}>
          <div className="mt-12 text-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/services" className="gap-2">
                Voir le détail des offres
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface StepCardProps {
  step: Step;
}

function StepCard({ step }: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="group relative rounded-2xl bg-slate-800 p-6 hover:bg-slate-800/80 transition-colors">
      {/* Step number */}
      <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {step.number}
      </div>

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 mb-4">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
      <p className="text-sm text-blue-400 mb-3">{step.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-slate-400 mb-4">{step.description}</p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-700 px-2.5 py-1 text-xs text-slate-300">
          <Clock className="h-3 w-3" />
          {step.duration}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-700 px-2.5 py-1 text-xs text-slate-300">
          <Euro className="h-3 w-3" />
          {step.price}
        </span>
      </div>

      {/* Result */}
      <div className="rounded-lg bg-green-500/10 p-3 ring-1 ring-green-500/20">
        <p className="text-sm font-medium text-green-400">→ {step.result}</p>
      </div>
    </div>
  );
}
