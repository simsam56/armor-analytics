import type { Metadata } from 'next';
import { CheckCircle, Lock, Wrench, BookOpen, Calendar } from 'lucide-react';
import { Hero, Services, FAQ } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Offres - Audit, Data, IA & Formation',
  description:
    'Nos expertises data pour PME et réseaux bretons : audit & diagnostic, socle data & dataviz, intégration IA, formation & accompagnement local. Tarifs transparents.',
  openGraph: {
    title: 'Offres - Audit, Data, IA & Formation | balise-ia',
    description:
      'Accompagnement data pour PME et réseaux bretons. 4 expertises modulables, résultats mesurables.',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/services',
  },
};

const REASSURANCES = [
  {
    icon: Wrench,
    title: 'On travaille avec vos outils',
    description:
      'Sage, Cegid, EBP, Excel, Metabase, Power BI — on se branche sur votre existant. Pas de migration forcée.',
  },
  {
    icon: Lock,
    title: 'Confidentialité contractuelle',
    description:
      'NDA signé avant tout accès aux données. Hébergement en France. Suppression des données de test après livraison.',
  },
  {
    icon: BookOpen,
    title: 'Vous restez autonomes',
    description:
      'Documentation complète, formation de vos équipes, support post-livraison inclus. On construit pour que ça dure sans nous.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Une approche progressive, des résultats mesurables"
        subtitle="On avance étape par étape. Chaque phase apporte de la valeur. Vous décidez quand passer à la suivante. Tarifs clairs, pas de surprises."
      />
      <Services showLink={false} detailed />

      {/* Réassurance */}
      <section className="py-16 bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {REASSURANCES.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-breton-emerald/10">
                  <item.icon className="h-5 w-5 text-breton-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Un collectif, pas une ESN */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
                Notre modèle
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Un collectif, pas une ESN
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                balise-ia est un collectif de spécialistes seniors : data engineers, développeurs,
                data scientists. Vous avez un interlocuteur unique et on mobilise les compétences
                nécessaires selon votre projet.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Pas de commerciaux qui vendent sans comprendre. Pas de juniors envoyés sur le
                terrain. Pas de marges pyramidales. Vous travaillez directement avec les experts qui
                réalisent le projet.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Interlocuteur unique du diagnostic à la livraison',
                'Seuls des profils seniors interviennent sur votre projet',
                'On se déplace sur site en Bretagne pour les phases clés',
                'Support post-livraison inclus dans chaque offre',
                'NDA systématique, données hébergées en France',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-breton-moss shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA Calendly */}
      <section className="py-16 sm:py-20 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Vous hésitez entre diagnostic et projet ?
          </h2>
          <p className="mt-4 text-white/60">
            Un appel de 30 minutes suffit pour identifier le bon point de départ. Gratuit, sans
            engagement.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-breton-emerald hover:bg-white/90 h-13 px-8 text-base font-semibold gap-2"
            >
              <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5" />
                Réserver un créneau
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
