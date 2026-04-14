import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaContact } from '@/components/sections/CtaContact';
import { SERVICES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const service = SERVICES.find((s) => s.id === 'pilotage')!;

export const metadata: Metadata = {
  title: 'Pilotage augment\u00e9 — tableaux de bord temps r\u00e9el pour PME industrielles',
  description:
    'Indicateurs de production temps r\u00e9el, alertes anomalies, reporting automatis\u00e9. Dashboards Power BI et Metabase connect\u00e9s \u00e0 votre ERP/GPAO. PME industrielles en Bretagne.',
  alternates: { canonical: 'https://www.balise-ia.fr/pilotage-augmente' },
};

export default function PilotageAugmentePage() {
  return (
    <>
      <Hero title={service.title} subtitle={service.tagline} />

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
              Des faits, pas des impressions
            </h2>
            <p className="text-lg text-breton-slate leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Ce qu&apos;on met en place
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Des dashboards qui servent &agrave; d&eacute;cider, pas &agrave; d&eacute;corer. Chaque indicateur se justifie par une action concr&egrave;te.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {service.useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-start gap-4 rounded-2xl border border-breton-sand bg-white p-6"
              >
                <CheckCircle2 className="h-5 w-5 text-breton-emerald shrink-0 mt-0.5" />
                <p className="text-breton-slate leading-relaxed">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-6">
            Nos outils
          </p>
          <div className="flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-breton-sand bg-breton-foam px-4 py-1.5 text-sm font-medium text-breton-slate"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-12 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/power-bi-pme-industrielle"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Lire : Power BI pour PME &mdash; par o&ugrave; commencer &rarr;
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/automatisation-agents-ia"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Automatisation &amp; Agents IA &rarr;
          </Link>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
