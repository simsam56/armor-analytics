import type { Metadata } from 'next';
import { Hero, Projects } from '@/components/sections';
import { CtaContact } from '@/components/sections/CtaContact';

export const metadata: Metadata = {
  title: "Projets - Cas d'usage data pour PME et réseaux bretons",
  description:
    "Découvrez des projets concrets réalisés pour des PME et réseaux bretons : data platform, dashboards, automatisation, IA. Contexte, approche et résultats.",
  openGraph: {
    title: "Projets - Cas d'usage data | balise-ia",
    description:
      "Découvrez des projets concrets réalisés pour des PME et réseaux bretons.",
  },
  alternates: {
    canonical: 'https://balise-ia.fr/projets',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title={"Des PME bretonnes\nqui gagnent du temps"}
        subtitle="Chaque projet est unique, mais les problématiques se ressemblent. Ressaisies, données éparpillées, reporting manuel. Voici comment on les a résolues."
      />
      <Projects showLink={false} detailed />
      <CtaContact />
    </>
  );
}
