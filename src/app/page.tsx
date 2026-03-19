import {
  HeroV3,
  Pillars,
  Services,
  Projects,
  About,
  FAQ,
  AnimatedCounters,
} from '@/components/sections';
import { TrustBand } from '@/components/sections/TrustBand';
import { CtaContact } from '@/components/sections/CtaContact';
import { CtaInline } from '@/components/sections/CtaInline';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function Home() {
  return (
    <>
      <JsonLd />
      {/* Section 1 — Hero plein écran */}
      <HeroV3 />
      {/* Section 2 — Marquee + Section 4 — 3 piliers */}
      <Pillars />
      {/* Section 3 — Proposition de valeur (trust signals) */}
      <TrustBand />
      {/* Section 5 — 4 étapes (timeline stepper) */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      {/* Section 6 — Résultats chiffrés (compteurs animés) */}
      <AnimatedCounters />
      {/* CTA intermédiaire */}
      <CtaInline
        title="Ces résultats vous parlent ?"
        subtitle="30 minutes pour en discuter. Gratuit, sans engagement."
      />
      {/* Section 7 — Cas clients */}
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      {/* CTA intermédiaire */}
      <CtaInline
        title="Problématique similaire ?"
        subtitle="On a probablement déjà résolu un cas comme le vôtre."
      />
      {/* Section 8 — Qui sommes-nous */}
      <AnimatedSection>
        <About />
      </AnimatedSection>
      {/* Section 9 — FAQ compact */}
      <FAQ />
      {/* Section 10 — CTA final */}
      <CtaContact />
    </>
  );
}
