import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CtaContact } from '@/components/sections/CtaContact';
import { SERVICES } from '@/lib/constants';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const service = SERVICES.find((s) => s.id === 'formation')!;

export const metadata: Metadata = {
  title: 'Adoption & prise en main IA — PME industrielles Bretagne',
  description:
    'Accompagnement \u00e0 la prise en main des outils IA et data d\u00e9ploy\u00e9s. Vos \u00e9quipes deviennent autonomes sur les dashboards, agents IA et automatisations. PME industrielles en Bretagne.',
  alternates: { canonical: 'https://www.balise-ia.fr/formation-ia' },
};

export default function FormationIaPage() {
  return (
    <>
      <Hero title={service.title} subtitle={service.tagline} />

      {/* Description */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
              On ne vous laisse pas seuls avec les outils
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
            Nos formations
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Chaque formation est adapt&eacute;e &agrave; votre contexte. On part de vos vrais outils, vos vrais process, vos vrais probl&egrave;mes.
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
            Outils couverts
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

      {/* Format type */}
      <section className="py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
                Accompagnement sur site, dans vos ateliers
              </h2>
              <p className="text-lg text-breton-slate leading-relaxed">
                On vient directement dans vos locaux de production. Op&eacute;rateurs, chefs d&apos;&eacute;quipe,
                responsable production &mdash; chacun apprend en faisant, sur ses vrais outils et ses
                vraies donn&eacute;es.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-breton-sand p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
                Format type
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Dur\u00e9e', value: 'Demi-journ\u00e9e ou journ\u00e9e compl\u00e8te' },
                  { label: 'Participants', value: '4 \u00e0 8 personnes par atelier' },
                  { label: 'Lieu', value: 'Dans vos locaux (Bretagne)' },
                  { label: 'Suivi', value: 'Support 30 jours post-formation' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between border-b border-breton-sand pb-3"
                  >
                    <span className="text-sm text-breton-granite">{row.label}</span>
                    <span className="text-sm font-medium text-breton-navy">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA intermédiaire */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-breton-navy mb-4">
            Vos &eacute;quipes sont pr&ecirc;tes &agrave; monter en comp&eacute;tences ?
          </h2>
          <p className="text-breton-slate mb-8 max-w-xl mx-auto">
            On d&eacute;finit ensemble le programme le plus adapt&eacute; &agrave; votre contexte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
              <Link href="/contact">Discutons de votre projet &rarr;</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-breton-navy text-breton-navy"
            >
              <Link href="/audit-ia">Lancer le diagnostic</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-12 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/intelligence-artificielle-pme-bretagne-guide"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Lire : Guide IA pour les PME bretonnes &rarr;
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/automatisation-agents-ia"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Automatisation &amp; Agents IA &rarr;
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
