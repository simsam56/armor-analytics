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
import { MetricsBeforeAfter } from '@/components/visuals';

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroV3 />
      <StackGrid />
      <Services />

      {/* Metrics visual section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Transformation concrète de votre quotidien
            </h2>
            <p className="mt-3 text-slate-600">
              Voici ce qui change quand on automatise vos process manuels.
            </p>
          </div>
          <MetricsBeforeAfter />
        </div>
      </section>

      <Methodology />
      <Projects />
      <About />
      <FAQ />
      <ContactSection />
    </>
  );
}
