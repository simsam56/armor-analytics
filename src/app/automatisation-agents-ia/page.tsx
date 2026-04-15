import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaContact } from '@/components/sections/CtaContact';
import { SERVICES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const service = SERVICES.find((s) => s.id === 'ia')!;

export const metadata: Metadata = {
  title: 'Automatisation & Agents IA m\u00e9tier pour PME industrielles',
  description:
    'Agents back-office, assistant documentaire RAG, alertes production, automatisation de workflows. On automatise ce qui ralentit vos \u00e9quipes. PME industrielles en Bretagne.',
  alternates: { canonical: 'https://www.balise-ia.fr/automatisation-agents-ia' },
};

export default function AutomatisationAgentsIaPage() {
  return (
    <>
      <Hero title={service.title} subtitle={service.tagline} />

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
              Moins de ressaisie, plus de valeur
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
            Ce qu&apos;on automatise
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Des cas d&apos;usage &eacute;prouv&eacute;s, pas des projets pilotes. Chaque mission se mesure avant et apr&egrave;s.
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

      {/* CTA intermédiaire */}
      <section className="py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-breton-navy mb-4">
            Vos process manuels vous co&ucirc;tent combien ?
          </h2>
          <p className="text-breton-slate mb-8 max-w-xl mx-auto">
            Le diagnostic identifie les 2-3 automatisations les plus rentables pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
              <Link href="/audit-ia">&Eacute;valuer mon potentiel d&apos;automatisation &rarr;</Link>
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

      {/* Maillage interne */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/automatiser-saisie-commandes-erp"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Lire : Comment automatiser la saisie de commandes dans votre ERP &rarr;
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/pilotage-augmente"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Pilotage augment&eacute; &rarr;
          </Link>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
