import { HeroV3 } from '@/components/sections/HeroV3';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <LogoCarousel />
      <PillarsSection />
      <Services />
      <Projects />
      <Testimonials />
      <IncarnationSection />
      <CtaContact />
    </>
  );
}
