import {
  HeroV4,
  StackGridV4,
  StepsV4,
  ProjectsV4,
  AboutV4,
  FAQ,
  ContactSection,
} from '@/components/sections';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV4 />
      <StackGridV4 />
      <StepsV4 />
      <ProjectsV4 limit={3} />
      <AboutV4 />
      <FAQ />
      <ContactSection />
    </>
  );
}
