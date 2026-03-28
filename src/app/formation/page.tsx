import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FREE_RESOURCES } from '@/lib/constants';
import { BookOpen, Users, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation',
  description:
    'Formations IA & Data pour PME bretonnes. Accompagnement sur site et ressources gratuites téléchargeables.',
  alternates: { canonical: 'https://www.balise-ia.fr/formation' },
};

export default function FormationPage() {
  return (
    <>
      <Hero
        title="Formez vos équipes à l&apos;IA et à la data"
        subtitle="Sur site ou en ligne. Pratique, pas théorique."
      />

      {/* Sous-section 1 : Accompagnement sur site */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10 mb-6">
                <Users className="h-6 w-6 text-breton-emerald" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-breton-navy">
                Accompagnement sur site
              </h2>
              <p className="mt-4 text-lg text-breton-slate leading-relaxed">
                On vient chez vous. Vos équipes apprennent en faisant, sur leurs vrais outils,
                avec leurs vrais process. La formation et la mise en place se font en même temps.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Ateliers pratiques en petits groupes (2-3h)',
                  'Adaptés à chaque métier (production, ADV, direction)',
                  'Outils : n8n, Claude, Excel IA, Power BI',
                  'Documentation et support post-formation inclus',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-breton-emerald shrink-0" />
                    <span className="text-breton-slate">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Discutons de votre projet →</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-breton-foam border border-breton-sand p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-4">
                Format type
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Durée', value: 'Demi-journée ou journée complète' },
                  { label: 'Participants', value: '4 à 8 personnes par atelier' },
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

      {/* Sous-section 2 : Ressources gratuites */}
      <section className="py-[110px] bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-copper/10 mb-6">
            <BookOpen className="h-6 w-6 text-breton-copper" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy">
            Ressources gratuites
          </h2>
          <p className="mt-4 text-lg text-breton-slate">
            Guides et checklists pratiques, téléchargeables gratuitement.
          </p>

          {FREE_RESOURCES.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-breton-sand bg-white p-12 text-center">
              <Download className="mx-auto h-8 w-8 text-breton-granite mb-4" />
              <p className="text-breton-slate">Ressources en préparation — revenez bientôt.</p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FREE_RESOURCES.map((resource) => (
                <div key={resource.id} className="rounded-2xl bg-white border border-breton-sand p-6">
                  <span className="inline-block bg-breton-emerald/10 text-breton-emerald text-xs font-semibold px-2 py-1 rounded-full mb-4">
                    GRATUIT
                  </span>
                  <h3 className="font-bold text-breton-navy mb-2">{resource.title}</h3>
                  <p className="text-sm text-breton-slate mb-4">{resource.description}</p>
                  {/* TODO Plan B: open email capture modal */}
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/contact">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger gratuitement
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Teaser formations vidéo v2 */}
          <div className="mt-12 rounded-2xl border border-dashed border-breton-copper/30 bg-white p-8 text-center">
            <p className="text-sm font-semibold text-breton-copper uppercase tracking-wider mb-2">
              Bientôt disponible
            </p>
            <p className="text-breton-navy font-medium">Formations vidéo en ligne</p>
            <p className="mt-2 text-sm text-breton-slate">
              Modules courts et pratiques, accessibles à la demande.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Par où commencer ?</h2>
          <p className="mt-4 text-white/60">
            Le diagnostic identifie les formations les plus adaptées à vos équipes.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90"
            >
              <Link href="/audit-ia">Faire le diagnostic →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
