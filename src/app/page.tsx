import { HeroV3 } from '@/components/sections/HeroV3';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { Projects } from '@/components/sections/Projects';
import { QuizCta } from '@/components/sections/QuizCta';
import { FAQ } from '@/components/sections/FAQ';
import { CtaContact } from '@/components/sections/CtaContact';
import { IncarnationSection } from '@/components/sections/IncarnationSection';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import { Factory, BarChart3, ArrowRight, Cpu, BookOpen, BrainCircuit } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pilotage production IA pour PME industrielles | Lorient, Bretagne',
  description:
    'Remplacez le planning Excel par un tableau de bord production temps r\u00e9el. 7 ans de terrain industriel. Diagnostic gratuit, Bretagne.',
};

export default function Home() {
  const personas = [
    {
      icon: Factory,
      role: 'Directeur de production / Responsable planning',
      title: 'Votre planning repose sur une seule personne ?',
      pain: 'Chaque aléa — retard fournisseur, absence, panne — vous oblige à tout recalculer à la main. Vous passez 2h par jour à mettre à jour des Excel que personne d\u2019autre ne comprend vraiment. Et si vous étiez absent une semaine, l\u2019atelier tournerait en roue libre.',
      cta: 'Voir comment on règle ça',
      href: '/cas-clients',
    },
    {
      icon: BarChart3,
      role: 'Directeur général / Gérant',
      title: 'Vous pilotez encore à l\u2019instinct ?',
      pain: 'Votre reporting arrive trop tard, vos données sont éparpillées entre l\u2019ERP, Excel et les têtes de vos équipes. Vous avez déjà failli perdre un client à cause d\u2019un retard que personne n\u2019avait vu venir. Vous savez que ça doit changer — mais par où commencer ?',
      cta: 'Identifier vos priorités',
      href: '/audit-ia',
    },
  ];

  const leviers = [
    {
      href: '/ia',
      icon: Cpu,
      title: 'Pilotage production temps réel',
      description:
        'Votre planning Excel devient un tableau de bord vivant. Aléas détectés automatiquement, charge atelier visible d\u2019un coup d\u2019\u0153il, reporting généré sans intervention manuelle.',
      tags: ['Power BI', 'Metabase', 'Python', 'ERP'],
    },
    {
      href: '/data',
      icon: BrainCircuit,
      title: 'Mémoire opérationnelle de l\u2019atelier',
      description:
        'Le régleur saisit son problème : « ma machine X vibre au démarrage ». L\u2019outil renvoie les 3 causes historiques et les solutions — y compris ce que Bernard avait noté il y a 2 ans. Quand il part en retraite, sa connaissance reste.',
      tags: ['Claude', 'RAG', 'Base de connaissances'],
    },
    {
      href: '/formation',
      icon: BookOpen,
      title: 'Formation terrain — pas en salle',
      description:
        'Vos équipes forment vraiment les outils, pas juste pendant 2 jours. J\u2019interviens sur site, dans votre contexte, avec vos données. Adoption réelle, pas adoption de façade.',
      tags: ['Sur site', 'IA', 'Data'],
    },
  ];

  return (
    <>
      <JsonLd />
      <HeroV3 />
      <MetricsBand />

      {/* Bandeau disponibilité */}
      <div className="bg-breton-navy py-3 text-center">
        <p className="text-sm text-white/80">
          <span className="inline-block h-2 w-2 rounded-full bg-breton-emerald mr-2 animate-pulse" />
          Actuellement : 1 créneau disponible pour un diagnostic terrain en mai 2026
        </p>
      </div>

      <LogoCarousel />

      {/* Section : Vous vous reconnaissez ? (2 personas) */}
      <section className="py-16 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-4xl sm:text-[44px] leading-[1.1] tracking-[-0.02em] text-breton-navy mb-4">
            Vous vous reconnaissez ?
          </h2>
          <p className="text-center text-lg text-breton-slate mb-12 max-w-2xl mx-auto">
            Deux profils que j&apos;accompagne au quotidien dans les PME industrielles bretonnes.
          </p>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {personas.map((persona) => (
              <div
                key={persona.role}
                className="rounded-2xl border-2 border-breton-sand bg-white p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-breton-emerald/10">
                    <persona.icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                  <p className="text-sm font-medium text-breton-granite">{persona.role}</p>
                </div>
                <h3 className="text-xl font-bold text-breton-navy mb-3">{persona.title}</h3>
                <p className="text-breton-slate text-sm leading-relaxed mb-6 flex-1">
                  {persona.pain}
                </p>
                <Link
                  href={persona.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-breton-emerald hover:underline"
                >
                  {persona.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Trois leviers */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-4xl sm:text-[44px] leading-[1.1] tracking-[-0.02em] text-breton-navy mb-4">
            Trois leviers concrets pour votre production
          </h2>
          <p className="text-center text-lg text-breton-slate mb-12 max-w-2xl mx-auto">
            Pilotage, mémoire opérationnelle, formation. On part de vos irritants terrain,
            pas d&apos;un catalogue de solutions.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {leviers.map((levier) => (
              <Link
                key={levier.href}
                href={levier.href}
                className="group rounded-2xl border-2 border-breton-sand p-8 hover:border-breton-emerald transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-breton-emerald/10 mb-4">
                  <levier.icon className="h-5 w-5 text-breton-emerald" />
                </div>
                <h3 className="text-xl font-bold text-breton-navy mb-3">
                  {levier.title}
                </h3>
                <p className="text-breton-slate mb-4 leading-relaxed">{levier.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {levier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-breton-foam border border-breton-sand rounded-full px-3 py-1 text-breton-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-breton-emerald group-hover:underline">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Pourquoi moi */}
      <IncarnationSection />

      {/* Section : Diagnostic terrain CTA */}
      <QuizCta />

      {/* Section : Cas clients */}
      <Projects limit={3} showLink />

      {/* Section : FAQ */}
      <FAQ />

      {/* Section : CTA final */}
      <CtaContact />
    </>
  );
}
