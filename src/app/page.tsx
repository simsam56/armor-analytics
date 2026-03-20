import { HeroV3, Services, Projects, About, FAQ, Methodology } from '@/components/sections';
import { ProofBlock } from '@/components/sections/ProofBlock';
import { ExpertisesBlock } from '@/components/sections/ExpertisesBlock';
import { ResultsBlock } from '@/components/sections/ResultsBlock';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function Home() {
  return (
    <>
      <JsonLd />
      {/* Hero — titre + sous-titre + CTAs */}
      <HeroV3 />
      {/* Preuve rapide — 3 piliers concrets */}
      <ProofBlock />
      {/* Expertises — ce qu'on améliore */}
      <ExpertisesBlock />
      {/* Offres — 4 façons de travailler */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      {/* Résultats — gains qualitatifs */}
      <ResultsBlock />
      {/* Cas clients — réalisations PME */}
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      {/* Méthode — 4 étapes */}
      <AnimatedSection>
        <Methodology />
      </AnimatedSection>
      {/* Incarnation — qui sommes-nous */}
      <AnimatedSection>
        <About />
      </AnimatedSection>
      {/* FAQ — 6 questions */}
      <FAQ />
      {/* CTA final */}
      <CtaContact />
    </>
  );
}
