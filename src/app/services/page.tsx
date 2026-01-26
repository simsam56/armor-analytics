import type { Metadata } from 'next';
import { Hero, Services, ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services - Audit, Structuration & POC IA',
  description:
    "Découvrez nos offres d'accompagnement data et IA pour PME industrielles : audit et diagnostic, structuration des données, POC IA métier. Approche pragmatique, résultats concrets.",
  openGraph: {
    title: 'Services - Audit, Structuration & POC IA | Armor Analytics',
    description:
      "Découvrez nos offres d'accompagnement data et IA pour PME industrielles : audit et diagnostic, structuration des données, POC IA métier.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Des offres adaptées aux PME industrielles"
        subtitle="Du diagnostic à l'implémentation, nous vous accompagnons avec pragmatisme. Chaque offre est dimensionnée pour des résultats concrets et un investissement maîtrisé."
        showCtas={false}
      />
      <Services showLink={false} detailed />
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre approche collective
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Armor Analytics est un réseau de spécialistes indépendants : data engineers, data
              scientists, experts en automatisation et IA. Nous mobilisons les compétences
              nécessaires selon les besoins de chaque projet.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Vous bénéficiez d&apos;expertises pointues sans les coûts fixes d&apos;une équipe permanente.
              Plus de réactivité, plus de valeur, moins de frictions.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
