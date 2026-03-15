import {
  HeroV3,
  StackGrid,
  Services,
  Methodology,
  Projects,
  About,
  FAQ,
  ContactSection,
} from '@/components/sections';
import { JsonLd } from '@/components/JsonLd';
import { MetricsSection } from '@/components/sections/MetricsSection';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <StackGrid />
      <Services />
      <MetricsSection />
      <Methodology />
      <Projects />
      <About />
      <FAQ />
      <ContactSection />
    </>
  );
}
