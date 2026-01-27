import { Hero, Services, Projects, FAQ, ContactSection, Methodology } from '@/components/sections';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Methodology />
      <Projects />
      <FAQ />
      <ContactSection />
    </>
  );
}
