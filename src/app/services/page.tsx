import type { Metadata } from 'next';
import { Hero, Services, ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Offres - Diagnostic, Automatisation & IA | Balise Data',
  description:
    "Accompagnement data pour PME industrielles bretonnes : diagnostic, automatisation, IA ciblée. Tarifs transparents, résultats mesurables.",
  openGraph: {
    title: 'Offres - Diagnostic, Automatisation & IA | Balise Data',
    description:
      "Accompagnement data pour PME industrielles : diagnostic, automatisation, IA. Tarifs transparents.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Une approche progressive,&#10;des résultats mesurables"
        subtitle="On avance étape par étape. Chaque phase apporte de la valeur. Vous décidez quand passer à la suivante."
        showCtas={false}
        showMetrics={false}
        showLocation={false}
        variant="page"
      />
      <Services showLink={false} detailed />
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Un collectif, pas une ESN
            </h2>
            <p className="mt-4 text-slate-600">
              Balise Data est un collectif de spécialistes seniors. Vous avez un interlocuteur
              unique et on mobilise les compétences nécessaires selon votre projet.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
