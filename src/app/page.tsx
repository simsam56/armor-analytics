import { HeroV3 } from '@/components/sections/HeroV3';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { Projects } from '@/components/sections/Projects';
import { QuizCta } from '@/components/sections/QuizCta';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export default function Home() {
  const piliers = [
    {
      href: '/ia',
      title: 'IA & Automatisation',
      description: 'OCR, agents IA, workflows n8n. Moins de saisie, plus de valeur.',
      tags: ['n8n', 'Make', 'Python'],
      copper: false,
    },
    {
      href: '/data',
      title: 'Data & Reporting',
      description: 'Dashboards temps réel, data engineering, reporting automatisé.',
      tags: ['Power BI', 'Metabase'],
      copper: false,
    },
    {
      href: '/formation',
      title: 'Formation',
      description: 'Ateliers sur site et ressources gratuites pour vos équipes.',
      tags: ['Sur site', 'Ressources PDF'],
      copper: true,
    },
  ];

  return (
    <>
      <JsonLd />
      <HeroV3 />
      <LogoCarousel />

      {/* Section 3 : 3 Piliers */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-breton-navy mb-12">
            Ce qu&apos;on fait
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {piliers.map((pilier) => (
              <Link
                key={pilier.href}
                href={pilier.href}
                className="group rounded-2xl border-2 border-breton-sand p-8 hover:border-breton-emerald transition-colors"
              >
                <h3
                  className={`text-xl font-bold mb-3 ${pilier.copper ? 'text-breton-copper' : 'text-breton-navy'}`}
                >
                  {pilier.title}
                </h3>
                <p className="text-breton-slate mb-4 leading-relaxed">{pilier.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pilier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-breton-foam border border-breton-sand rounded-full px-3 py-1 text-breton-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-breton-emerald group-hover:underline">
                  Découvrir →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 : Quiz CTA */}
      <QuizCta />

      {/* Section 5 : Cas clients */}
      <Projects limit={2} showLink />

      {/* Section 6 : CTA final */}
      <CtaContact />
    </>
  );
}
