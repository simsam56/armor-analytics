import { Hero, Services, Process, Projects, FAQ, ContactSection } from '@/components/sections';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <FAQ />
      <ContactSection />
    </>
  );
}
