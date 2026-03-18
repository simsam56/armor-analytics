import { Target, BarChart3, Users, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getBrandName, siteConfig } from '@/lib/site-config';

const PILLARS = [
  {
    id: 'concret',
    title: 'Concret',
    icon: Target,
    description:
      'On part de vos irritants quotidiens, pas de la technologie. Chaque projet répond à un problème terrain identifié.',
  },
  {
    id: 'mesure',
    title: 'Mesuré',
    icon: BarChart3,
    description:
      'ROI démontrable avant, pendant et après. On mesure le temps gagné, les erreurs évitées, les euros économisés.',
  },
  {
    id: 'transferable',
    title: 'Transférable',
    icon: Users,
    description:
      'Vos équipes sont formées et autonomes. On documente tout et on transmet les compétences pour que vous gardiez la main.',
  },
];

interface AboutProps {
  className?: string;
}

export function About({ className = '' }: AboutProps) {
  const brandName = getBrandName();

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column - Who we are */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Qui est derrière {brandName} ?
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Un collectif de consultants data et automatisation, spécialisé PME industrielles.
                On a tous travaillé en production, en logistique, ou en finance dans l&apos;industrie.
              </p>
              <p>
                On connaît les contraintes : ERP vieillissants, Excel partout, ressaisies
                manuelles, et des équipes qui n&apos;ont pas le temps de faire autrement.
              </p>
              <p className="font-medium text-slate-900">
                Notre mission : vous faire gagner du temps concret, mesurable, sans révolutionner
                votre SI ni former vos équipes pendant 6 mois.
              </p>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 text-slate-600">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>
                Basés à {siteConfig.location.city} – Interventions en {siteConfig.location.region}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button asChild>
                <Link href="/contact" className="gap-2">
                  Discutons de votre contexte
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Pillars */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Notre approche en 3 mots
            </h3>

            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <StatBlock value="10+" label="ans d'expérience terrain" />
          <StatBlock value="20+" label="projets livrés" />
          <StatBlock value="100%" label="projets en Bretagne" />
          <StatBlock value="48h" label="première réponse" />
        </div>
      </div>
    </section>
  );
}

interface PillarCardProps {
  pillar: (typeof PILLARS)[0];
}

function PillarCard({ pillar }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200/50">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{pillar.title}</h4>
        <p className="mt-1 text-sm text-slate-600">{pillar.description}</p>
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
      <p className="text-2xl font-bold text-blue-600">{value}</p>
      <p className="text-sm text-slate-600 mt-1">{label}</p>
    </div>
  );
}
