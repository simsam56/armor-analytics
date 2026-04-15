import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { CtaContact } from '@/components/sections';
import { CasClientsListing } from '@/components/cas-clients/CasClientsListing';
import { CASE_STUDIES } from '@/data/case-studies';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cas clients — Résultats concrets PME industrielles',
  description:
    'Dashboard production temps réel, automatisation commandes, traçabilité qualité. Résultats concrets et mesurés dans des PME industrielles en Bretagne.',
  openGraph: {
    title: 'Cas clients — Résultats concrets IA et data pour PME bretonnes',
    description: 'Des résultats concrets et mesurables chez nos clients PME en Bretagne.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/cas-clients',
  },
};

const STATS = [
  { value: '5', label: 'cas clients documentés' },
  { value: '5', label: 'secteurs industriels' },
  { value: '100%', label: 'projets livrés en Bretagne' },
];

export default function CasClientsPage() {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cas clients balise-ia',
    itemListElement: CASE_STUDIES.map((cs, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: cs.title,
      url: `${SITE_CONFIG.url}/cas-clients/${cs.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <Breadcrumbs items={[{ label: 'Cas clients' }]} />

      {/* Hero — light gradient foam→sand */}
      <section className="bg-gradient-to-b from-breton-foam to-breton-sand -mt-16 pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-breton-sand bg-white/80 px-4 py-1.5 text-sm font-medium text-breton-slate mb-6">
            <span className="h-2 w-2 rounded-full bg-breton-emerald animate-pulse" />
            PME industrielles bretonnes
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-breton-navy mb-6">
            Des problèmes réels,
            <br />
            des résultats mesurables
          </h1>
          <p className="text-lg text-breton-slate max-w-2xl mx-auto">
            Chaque cas client part d&apos;un problème terrain concret — reporting manuel, erreurs
            de saisie, traçabilité incomplète — et documente les résultats obtenus.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-breton-sand bg-breton-sand/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 lg:gap-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-breton-emerald">{stat.value}</p>
                <p className="mt-1 text-sm text-breton-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing with filter — client component */}
      <CasClientsListing />

      {/* CTA final */}
      <CtaContact />
    </>
  );
}
