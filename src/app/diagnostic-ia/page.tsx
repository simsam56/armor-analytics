import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaContact } from '@/components/sections/CtaContact';
import { SERVICES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const service = SERVICES.find((s) => s.id === 'diagnostic')!;

export const metadata: Metadata = {
  title: 'Diagnostic IA terrain — audit sur site pour PME industrielles',
  description:
    'Diagnostic IA sur site en 3 jours : cartographie de vos flux, identification des gisements d\u2019automatisation, feuille de route priorisée par ROI. PME industrielles en Bretagne.',
  alternates: { canonical: 'https://www.balise-ia.fr/diagnostic-ia' },
};

export default function DiagnosticIaPage() {
  return (
    <>
      <Hero title={service.title} subtitle={service.tagline} />

      {/* Badge point d'entrée + description */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-breton-emerald/10 px-4 py-1.5 text-sm font-semibold text-breton-emerald mb-6">
              <span className="h-2 w-2 rounded-full bg-breton-emerald animate-pulse" />
              Point de d&eacute;part recommand&eacute;
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
              Avant d&apos;automatiser, il faut comprendre
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
            Ce que couvre le diagnostic
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Chaque diagnostic est adapt&eacute; &agrave; votre contexte. On vient chez vous, on observe, on mesure.
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

      {/* Outils & méthodes */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-6">
            M&eacute;thodes & outils
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

      {/* CTA intermédiaire */}
      <section className="py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-breton-navy mb-4">
            Vous ne savez pas par o&ugrave; commencer ?
          </h2>
          <p className="text-breton-slate mb-8 max-w-xl mx-auto">
            C&apos;est justement le r&ocirc;le du diagnostic. En 3 jours, vous savez quoi automatiser, dans quel ordre, et avec quel retour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
              <Link href="/audit-ia">&Eacute;valuer mon potentiel IA &rarr;</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-breton-navy text-breton-navy"
            >
              <Link href="/contact">Prendre contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
