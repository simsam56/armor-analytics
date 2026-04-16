import { HeroV3 } from '@/components/sections/HeroV3';
import { ExpertisesSection } from '@/components/sections/ExpertisesSection';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agents IA métier pour PME industrielles | balise-ia, Lorient',
  description:
    'Agents IA métier pour supprimer les ressaisies, fiabiliser le reporting et piloter la production. 7 ans de terrain industriel. Bretagne.',
};

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* 1. Hero */}
      <HeroV3 />

      {/* 2. Proof strip */}
      <section className="py-12 bg-white border-b border-breton-sand/50">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { metric: '4h/sem', label: 'économisées en reporting' },
              { metric: '80%', label: 'de ressaisies éliminées' },
              { metric: 'J+0', label: 'reporting disponible' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-3xl sm:text-4xl font-bold text-breton-navy">
                  {item.metric}
                </p>
                <p className="mt-1 text-sm text-breton-granite">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Nos expertises */}
      <ExpertisesSection />

      {/* 4. Cas clients */}
      <CaseStudiesPreview />

      {/* 5. Méthode */}
      <section className="py-20 sm:py-28 bg-breton-foam">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold text-breton-granite uppercase tracking-[0.15em] mb-4">
            Méthode
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.03em] text-breton-navy mb-16 max-w-2xl">
            3 étapes, du diagnostic au déploiement
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Diagnostic terrain',
                description:
                  '3 jours sur site. Observation, échanges, cartographie des irritants. Vous repartez avec une roadmap.',
              },
              {
                step: '02',
                title: 'Prototype & validation',
                description:
                  'Un premier agent IA sur un périmètre restreint. Vous validez la valeur avant d&apos;étendre.',
              },
              {
                step: '03',
                title: 'Déploiement & adoption',
                description:
                  'Mise en production, prise en main par vos équipes. Objectif : autonomie.',
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-display text-[80px] font-bold text-breton-sand leading-none">
                  {item.step}
                </span>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-breton-navy mb-3">{item.title}</h3>
                  <p className="text-breton-slate leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. À propos */}
      <IncarnationSection />

      {/* 7. CTA final */}
      <CtaContact />
    </>
  );
}
