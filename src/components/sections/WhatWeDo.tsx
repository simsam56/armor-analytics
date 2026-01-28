'use client';

import Link from 'next/link';
import { Zap, BarChart3, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

const SERVICES = [
  {
    id: 'automatisation',
    icon: Zap,
    title: 'Automatisation des processus',
    description: 'Fin des ressaisies, des copier-coller, des exports manuels. On connecte vos outils et on automatise les tâches répétitives.',
    examples: ['Traitement automatique des commandes', 'Synchronisation ERP/Excel', 'Alertes automatiques'],
  },
  {
    id: 'pilotage',
    icon: BarChart3,
    title: 'Pilotage & reporting décisionnel',
    description: 'Tableaux de bord temps réel pour piloter votre activité. Fini le reporting manuel du vendredi.',
    examples: ['Dashboard production', 'Suivi des KPI', 'Reporting automatisé'],
  },
  {
    id: 'ia',
    icon: Brain,
    title: 'Intelligence artificielle ciblée',
    description: 'L\'IA uniquement là où elle fait la différence : OCR, prévision, classification, aide à la décision.',
    examples: ['Extraction de documents', 'Prévision des stocks', 'Classification automatique'],
  },
];

export function WhatWeDo() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Ce que nous faisons
            </h2>
            <p className="mt-3 text-slate-600">
              Intelligence artificielle et automatisation pour PME en Bretagne.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} direction="up" delay={index * 100}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={400}>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/offres" className="gap-2">
                Découvrir nos offres
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof SERVICES)[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/80 h-full flex flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-semibold text-slate-900 text-lg mb-2">{service.title}</h3>
      <p className="text-slate-600 text-sm mb-4 flex-grow">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.examples.map((example) => (
          <span
            key={example}
            className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}
