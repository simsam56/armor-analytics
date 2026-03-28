import { HeroV3 } from '@/components/sections/HeroV3';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { Projects } from '@/components/sections/Projects';
import { QuizCta } from '@/components/sections/QuizCta';
import { FAQ } from '@/components/sections/FAQ';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import { Bot, BarChart3, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const piliers = [
    {
      href: '/ia',
      title: 'Éliminer les tâches manuelles',
      description:
        'OCR, agents IA, workflows automatisés. Vos équipes arrêtent de ressaisir et se concentrent sur ce qui compte.',
      tags: ['n8n', 'Make', 'Python', 'Claude'],
      copper: false,
    },
    {
      href: '/data',
      title: 'Piloter avec des données fiables',
      description:
        'Dashboards temps réel, centralisation des sources, reporting automatisé. Vous décidez sur des faits.',
      tags: ['Power BI', 'Metabase', 'dbt'],
      copper: false,
    },
    {
      href: '/formation',
      title: 'Rendre vos équipes autonomes',
      description:
        'Formations sur site, accompagnement mensuel. Vos équipes prennent la main sur l\u2019IA et la data.',
      tags: ['Sur site', 'IA', 'Data'],
      copper: true,
    },
  ];

  const personas = [
    {
      icon: Bot,
      role: 'Dirigeant / DG',
      pain: 'Vous pilotez à l\u2019instinct faute de données fiables. Vos équipes perdent du temps sur des tâches répétitives. Vous savez que l\u2019IA peut aider, mais par où commencer ?',
      cta: 'Identifier vos priorités',
      href: '/audit-ia',
    },
    {
      icon: BarChart3,
      role: 'Responsable opérations',
      pain: 'Votre reporting prend des heures chaque semaine. Vos données sont éclatées entre ERP, Excel et papier. Vous détectez les problèmes trop tard.',
      cta: 'Voir un cas concret',
      href: '/cas-clients',
    },
    {
      icon: Users,
      role: 'DAF / DSI',
      pain: 'Vous consolidez des fichiers de 12 services différents. Les erreurs de saisie coûtent cher. Vous cherchez un partenaire fiable, pas un vendor lock-in.',
      cta: 'Découvrir notre approche',
      href: '/a-propos',
    },
  ];

  return (
    <>
      <JsonLd />
      <HeroV3 />
      <LogoCarousel />
      <MetricsBand />

      {/* Section : 3 Piliers */}
      <section className="py-[110px] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Trois leviers concrets pour votre PME
          </h2>
          <p className="text-center text-lg text-breton-slate mb-12 max-w-2xl mx-auto">
            Automatisation, pilotage data, formation. On part de vos irritants, pas d&apos;un
            catalogue de solutions.
          </p>
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
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Vous êtes... (personas) */}
      <section className="py-[110px] bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Vous vous reconnaissez ?
          </h2>
          <p className="text-center text-lg text-breton-slate mb-12 max-w-2xl mx-auto">
            Chaque PME a ses irritants. Voici les profils que l&apos;on accompagne le plus souvent.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((persona) => (
              <div
                key={persona.role}
                className="rounded-2xl border-2 border-breton-sand bg-white p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-breton-emerald/10">
                    <persona.icon className="h-5 w-5 text-breton-emerald" />
                  </div>
                  <h3 className="text-lg font-bold text-breton-navy">{persona.role}</h3>
                </div>
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

      {/* Section : Quiz CTA */}
      <QuizCta />

      {/* Section : Cas clients */}
      <Projects limit={2} showLink />

      {/* Section : FAQ */}
      <FAQ />

      {/* Section : CTA final */}
      <CtaContact />
    </>
  );
}
