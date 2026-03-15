import type { Metadata } from 'next';
import { Hero, Services, ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Offres - Diagnostic, Automatisation & IA',
  description:
    "Nos offres d'accompagnement data pour PME industrielles bretonnes : diagnostic et priorisation, projets d'automatisation, solutions IA ciblées. Tarifs transparents, résultats mesurables.",
  openGraph: {
    title: 'Offres - Diagnostic, Automatisation & IA | balise-ia',
    description:
      "Nos offres d'accompagnement data pour PME industrielles bretonnes : diagnostic, automatisation, IA. Tarifs transparents, résultats mesurables.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Une approche progressive,&#10;des résultats mesurables"
        subtitle="On avance étape par étape. Chaque phase apporte de la valeur. Vous décidez quand passer à la suivante. Tarifs clairs, pas de surprises."
        showCtas={false}
        showMetrics={false}
        showLocation={false}
        variant="page"
      />
      <Services showLink={false} detailed />
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Un collectif, pas une ESN
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              balise-ia est un collectif de spécialistes seniors : data engineers, développeurs,
              data scientists. Vous avez un interlocuteur unique et on mobilise les compétences
              nécessaires selon votre projet.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Pas de commerciaux, pas de juniors envoyés sur le terrain, pas de marges pyramidales.
              Vous travaillez directement avec les experts qui réalisent le projet.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
