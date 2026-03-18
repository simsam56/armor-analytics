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
import { FadeIn } from '@/components/ui/fade-in';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <TrustBand />
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <Methodology />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <FAQ />
      </FadeIn>
      <FadeIn>
        <ContactSection />
      </FadeIn>
    </>
  );
}
