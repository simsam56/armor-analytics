'use client';

import { MapPin, Target, Brain, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { siteConfig } from '@/lib/site-config';

const REASONS = [
  {
    icon: MapPin,
    title: `Basés à ${siteConfig.location.city}`,
    description: `Interventions sur site en ${siteConfig.location.region} (${siteConfig.location.secondaryCity}, Morbihan, Finistère, Côtes-d'Armor).`,
  },
  {
    icon: Target,
    title: 'Approche terrain',
    description: 'On part de vos irritants quotidiens, pas de la technologie. Pas de jargon, du concret.',
  },
  {
    icon: Brain,
    title: 'IA pragmatique',
    description: 'On ne propose l\'IA que si elle apporte un gain mesurable. Pas de gadgets.',
  },
  {
    icon: TrendingUp,
    title: 'ROI démontrable',
    description: 'Chaque projet est mesuré : temps gagné, erreurs évitées, coûts réduits.',
  },
];

export function WhyBaliseIA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Pourquoi Balise IA ?
            </h2>
            <p className="mt-3 text-slate-600">
              Un collectif spécialisé en intelligence artificielle et automatisation pour PME bretonnes.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, index) => (
            <FadeIn key={reason.title} direction="up" delay={index * 100}>
              <ReasonCard reason={reason} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ReasonCardProps {
  reason: (typeof REASONS)[0];
}

function ReasonCard({ reason }: ReasonCardProps) {
  const Icon = reason.icon;
  return (
    <div className="text-center p-6">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="font-semibold text-slate-900 mb-2">{reason.title}</h3>
      <p className="text-sm text-slate-600">{reason.description}</p>
    </div>
  );
}
