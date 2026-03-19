import {
  HeroV3,
  Pillars,
  Services,
  Methodology,
  Projects,
  About,
  FAQ,
} from '@/components/sections';
import { TrustBand } from '@/components/sections/TrustBand';
import { CtaContact } from '@/components/sections/CtaContact';
import { CtaInline } from '@/components/sections/CtaInline';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <TrustBand />
      <Pillars />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Methodology />
      </AnimatedSection>
      {/* CTA intermédiaire après la méthode */}
      <CtaInline
        title="Ces résultats vous parlent ?"
        subtitle="30 minutes pour en discuter. Gratuit, sans engagement."
      />
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      {/* CTA intermédiaire après les cas clients */}
      <CtaInline
        title="Problématique similaire ?"
        subtitle="On a probablement déjà résolu un cas comme le vôtre."
      />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <CtaContact />
    </>
  );
}
