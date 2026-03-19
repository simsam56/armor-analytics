import {
  HeroV3,
  Services,
  Methodology,
  Projects,
  About,
  FAQ,
} from '@/components/sections';
import { TrustBand } from '@/components/sections/TrustBand';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <TrustBand />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Methodology />
      </AnimatedSection>
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
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
