import { HeroV3 } from '@/components/sections/HeroV3';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <MetricsBand />
      <LogoCarousel />
      <PillarsSection />
      <Services />
      <Projects />
      <IncarnationSection />
      <CtaContact />
    </>
  );
}
