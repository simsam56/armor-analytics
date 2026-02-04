import type { Metadata } from 'next';
import { AuditQuiz } from '@/components/audit';
import { Lightbulb, Clock, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Audit IA Gratuit | Évaluez votre potentiel data | BALISE Data',
  description: 'Quiz en 3 minutes pour évaluer la maturité data de votre PME. Recevez un score personnalisé et 3 projets IA recommandés avec estimation de ROI.',
  keywords: [
    'audit IA PME',
    'maturité digitale entreprise',
    'diagnostic data gratuit',
    'évaluation automatisation',
    'ROI intelligence artificielle',
    'PME Bretagne data',
  ],
  openGraph: {
    title: 'Audit IA Gratuit | Évaluez votre potentiel data',
    description: 'Quiz en 3 minutes pour évaluer la maturité data de votre PME industrielle.',
    type: 'website',
  },
};

const BENEFITS = [
  {
    icon: Clock,
    title: '3 minutes',
    description: '12 questions simples',
  },
  {
    icon: Target,
    title: 'Score personnalisé',
    description: 'Évaluation sur 100 points',
  },
  {
    icon: Lightbulb,
    title: '3 recommandations',
    description: 'Projets adaptés avec ROI',
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[104px]" />

      <main id="main-content">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-[#F8FAF9] to-white py-12 md:py-16">
          <div className="container-content">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-[#1B4D3E]/10 text-[#1B4D3E] text-sm font-medium rounded-full mb-4">
                Gratuit et sans engagement
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2922] mb-4">
                Évaluez le potentiel IA de votre entreprise
              </h1>
              <p className="text-lg text-[#64756C] mb-8">
                Répondez à 12 questions simples et découvrez votre score de maturité data,
                vos points forts et les projets les plus adaptés à votre situation.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1B4D3E]/10 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-[#1B4D3E]" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-[#1E2922]">{benefit.title}</p>
                      <p className="text-sm text-[#64756C]">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quiz section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-content">
            <AuditQuiz />
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-12 md:py-16 bg-[#F8FAF9]">
          <div className="container-content">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-[#1E2922] text-center mb-8">
                Questions fréquentes
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-[#E2E8E5]">
                  <h3 className="font-semibold text-[#1E2922] mb-2">
                    Que mesure ce quiz ?
                  </h3>
                  <p className="text-[#64756C]">
                    Le quiz évalue votre maturité digitale sur plusieurs axes : outils en place,
                    compétences internes, défis actuels et objectifs. Le score vous donne une
                    vision claire de votre positionnement.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[#E2E8E5]">
                  <h3 className="font-semibold text-[#1E2922] mb-2">
                    Les recommandations sont-elles fiables ?
                  </h3>
                  <p className="text-[#64756C]">
                    Elles sont basées sur notre expérience de 7 ans avec des PME industrielles.
                    Les projets suggérés correspondent à ce qui fonctionne vraiment pour des
                    entreprises similaires à la vôtre.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[#E2E8E5]">
                  <h3 className="font-semibold text-[#1E2922] mb-2">
                    Mes données sont-elles protégées ?
                  </h3>
                  <p className="text-[#64756C]">
                    Absolument. Vos réponses sont utilisées uniquement pour générer vos
                    recommandations. Nous ne partageons jamais vos informations avec des tiers.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[#E2E8E5]">
                  <h3 className="font-semibold text-[#1E2922] mb-2">
                    Que se passe-t-il après le quiz ?
                  </h3>
                  <p className="text-[#64756C]">
                    Vous recevez immédiatement vos résultats. Si vous souhaitez aller plus loin,
                    vous pouvez nous contacter pour un échange gratuit et approfondir votre
                    diagnostic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
