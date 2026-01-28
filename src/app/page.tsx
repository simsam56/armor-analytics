import {
  HeroV5,
  WhyBaliseIA,
  WhatWeDo,
  UseCasesV5,
  FAQ,
  ContactSection,
} from '@/components/sections';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV5 />
      <WhyBaliseIA />
      <WhatWeDo />
      <UseCasesV5 limit={4} />
      <FAQ />
      <ContactSection />
    </>
  );
}
