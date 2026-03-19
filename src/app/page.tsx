import {
  HeroV3,
  Services,
  Methodology,
  Projects,
  About,
  FAQ,
  ContactSection,
} from '@/components/sections';
import { TrustBand } from '@/components/sections/TrustBand';
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
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
