import type { Metadata } from 'next';
import { Hero, Projects, ContactSection } from '@/components/sections';

export const metadata: Metadata = {
  title: "Projets - Cas d'usage data et IA pour PME industrielles",
  description:
    "Découvrez des projets concrets réalisés pour des PME industrielles bretonnes : automatisation, centralisation des données, optimisation par l'IA. Contexte, approche et résultats.",
  openGraph: {
    title: "Projets - Cas d'usage data et IA | Armor Analytics",
    description:
      "Découvrez des projets concrets réalisés pour des PME industrielles bretonnes : automatisation, centralisation des données, optimisation par l'IA.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Des PME bretonnes&#10;qui gagnent du temps"
        subtitle="Chaque projet est unique, mais les problématiques se ressemblent. Ressaisies, données éparpillées, reporting manuel. Voici comment on les a résolues."
        showCtas={false}
        showMetrics={false}
        showLocation={false}
        variant="page"
      />
      <Projects showLink={false} detailed />
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Une problématique similaire ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ressaisies, données éparpillées, reporting chronophage ? On connaît. Un appel de 30 minutes
              suffit pour évaluer les opportunités et définir une approche adaptée à votre contexte.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
