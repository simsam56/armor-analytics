'use client';

import { Target, BarChart3, Users, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { getBrandName, siteConfig } from '@/lib/site-config';

const PILLARS = [
  {
    id: 'concret',
    title: 'Concret',
    icon: Target,
    description: 'On part de vos irritants, pas de la techno.',
  },
  {
    id: 'mesure',
    title: 'Mesuré',
    icon: BarChart3,
    description: 'ROI démontrable avant, pendant, après.',
  },
  {
    id: 'transferable',
    title: 'Transférable',
    icon: Users,
    description: 'Vos équipes sont formées et autonomes.',
  },
];

interface AboutV4Props {
  className?: string;
}

export function AboutV4({ className = '' }: AboutV4Props) {
  const brandName = getBrandName();

  return (
    <section className={`py-16 sm:py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Visual / Image */}
          <FadeIn direction="right">
            <div className="relative">
              {/* TODO: Remplacer par une vraie photo équipe / bureau */}
              <div className="aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Users className="h-12 w-12 text-blue-600" />
                    </div>
                    <p className="text-sm text-slate-500">Photo équipe / bureau</p>
                  </div>
                </div>
              </div>

              {/* Location badge overlay */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-white rounded-xl shadow-lg p-4 ring-1 ring-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Basés à</p>
                    <p className="font-semibold text-slate-900">{siteConfig.location.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column - Content */}
          <div>
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Qui est derrière {brandName} ?
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Un collectif de consultants data, spécialisé PME industrielles. On a tous travaillé
                en production, logistique ou finance dans l'industrie.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <p className="mt-3 font-medium text-slate-900">
                Notre mission : vous faire gagner du temps concret, mesurable.
              </p>
            </FadeIn>

            {/* Pillars */}
            <div className="mt-8 space-y-4">
              {PILLARS.map((pillar, index) => (
                <FadeIn key={pillar.id} direction="up" delay={300 + index * 100}>
                  <PillarItem pillar={pillar} />
                </FadeIn>
              ))}
            </div>

            {/* CTA */}
            <FadeIn direction="up" delay={600}>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact" className="gap-2">
                    Discutons de votre contexte
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats row */}
        <FadeIn direction="up" delay={700}>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatBlock value="10+" label="ans d'expérience" />
            <StatBlock value="20+" label="projets livrés" />
            <StatBlock value="100%" label="en Bretagne" />
            <StatBlock value="48h" label="première réponse" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface PillarItemProps {
  pillar: (typeof PILLARS)[0];
}

function PillarItem({ pillar }: PillarItemProps) {
  const Icon = pillar.icon;

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <span className="font-semibold text-slate-900">{pillar.title}</span>
        <span className="text-slate-500 ml-2">– {pillar.description}</span>
      </div>
    </div>
  );
}

interface StatBlockProps {
  value: string;
  label: string;
}

function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center p-4 rounded-xl bg-slate-50">
      <p className="text-2xl font-bold text-blue-600">
        <AnimatedCounter value={value} />
      </p>
      <p className="text-sm text-slate-600 mt-1">{label}</p>
    </div>
  );
}
