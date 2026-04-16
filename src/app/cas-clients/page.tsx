import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CASE_STUDIES } from '@/data/case-studies';
import { CaseStudyGrid } from './CaseStudyGrid';

export const metadata: Metadata = {
  title: 'Cas clients',
  description:
    'Découvrez nos réalisations : agents IA, automatisation, dashboards pour PME industrielles en Bretagne.',
};

export default function CasClientsPage() {
  return (
    <>
      <Hero
        title="Nos réalisations"
        subtitle="Des résultats concrets et mesurables pour des PME industrielles bretonnes."
      />

      <section className="py-16 sm:py-[110px] bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyGrid caseStudies={CASE_STUDIES} />
        </div>
      </section>
    </>
  );
}
