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

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <TrustBand />
      <Services />
      <Methodology />
      <Projects />
      <About />
      <FAQ />
      <ContactSection />
    </>
  );
}
