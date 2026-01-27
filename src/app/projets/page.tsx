import type { Metadata } from 'next';
import { Hero, ContactSection, ProjectsV4 } from '@/components/sections';

export const metadata: Metadata = {
  title: "Réalisations - Cas clients data et automatisation | Balise Data",
  description:
    "Projets concrets réalisés pour des PME industrielles bretonnes : automatisation, centralisation des données, optimisation. Résultats mesurés.",
  openGraph: {
    title: "Réalisations - Cas clients | Balise Data",
    description:
      "Projets concrets réalisés pour des PME industrielles bretonnes. Résultats mesurés.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Des PME bretonnes&#10;qui gagnent du temps"
        subtitle="Cas réels, anonymisés. Résultats mesurés."
        showCtas={false}
        showMetrics={false}
        showLocation={false}
        variant="page"
      />
      <ProjectsV4 showLink={false} detailed />
      <ContactSection />
    </>
  );
}
