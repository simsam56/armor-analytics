import Link from 'next/link';
import { HeroV3, Services, Projects, About, FAQ, Methodology } from '@/components/sections';
import { ProofBlock } from '@/components/sections/ProofBlock';
import { ExpertisesBlock } from '@/components/sections/ExpertisesBlock';
import { ResultsBlock } from '@/components/sections/ResultsBlock';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <JsonLd />
      {/* Hero — titre + sous-titre + CTAs */}
      <HeroV3 />
      {/* Preuve rapide — 3 piliers concrets */}
      <ProofBlock />
      {/* Expertises — ce qu'on améliore */}
      <ExpertisesBlock />
      {/* CTA quiz — micro-conversion */}
      <div className="py-12 bg-breton-foam border-y border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-breton-navy">
            Pas sûr par où commencer ?
          </p>
          <p className="mt-1 text-sm text-breton-slate/70">
            Testez votre maturité data en 3 minutes et recevez 3 projets concrets adaptés à votre
            PME.
          </p>
          <div className="mt-5">
            <Button asChild className="bg-breton-navy hover:bg-breton-slate gap-2">
              <Link href="/audit-ia">Faire le quiz — 3 min, gratuit</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Offres — 4 façons de travailler */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      {/* Résultats — gains qualitatifs */}
      <ResultsBlock />
      {/* Cas clients — réalisations PME */}
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      {/* Méthode — 4 étapes */}
      <AnimatedSection>
        <Methodology />
      </AnimatedSection>
      {/* Incarnation — qui sommes-nous */}
      <AnimatedSection>
        <About />
      </AnimatedSection>
      {/* FAQ — 6 questions */}
      <FAQ />
      {/* CTA final */}
      <CtaContact />
    </>
  );
}
