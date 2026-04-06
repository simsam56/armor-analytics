import { HeroV3 } from '@/components/sections/HeroV3';
import { LogoCarousel } from '@/components/sections/LogoCarousel';
import { MetricsBand } from '@/components/sections/MetricsBand';
import { Projects } from '@/components/sections/Projects';
import { QuizCta } from '@/components/sections/QuizCta';
import { FAQ } from '@/components/sections/FAQ';
import { CtaContact } from '@/components/sections/CtaContact';
import { JsonLd } from '@/components/JsonLd';
import { ScanDivider } from '@/components/animations';
import Link from 'next/link';
import { Bot, BarChart3, Users, ArrowRight, Shield, Server, Lock } from 'lucide-react';
import { BLOG_ARTICLES } from '@/data/blog-articles';

export default function Home() {
  const latestArticles = [...BLOG_ARTICLES]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const piliers = [
    {
      href: '/ia',
      title: 'Éliminer les tâches manuelles',
      description:
        'Agents IA, extraction de documents, workflows automatisés. Vos équipes arrêtent de ressaisir et se concentrent sur ce qui compte.',
      tags: ['Claude', 'Python', 'n8n', 'Make'],
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
      role: 'Dirigeant',
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
      role: 'Responsable administratif',
      pain: 'Vous consolidez des fichiers de 12 services différents. Les erreurs de saisie coûtent cher. Vous cherchez un partenaire fiable, pas un prestataire de plus.',
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
          <h2 className="text-center font-serif text-4xl sm:text-[44px] leading-[1.1] tracking-[-0.02em] text-breton-navy mb-4">
            Trois leviers concrets pour votre entreprise
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

      {/* Séparateur scanné */}
      <ScanDivider label="Notre approche" className="my-0" />

      {/* Section : Vous êtes... (personas) */}
      <section className="py-[110px] bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-4xl sm:text-[44px] leading-[1.1] tracking-[-0.02em] text-breton-navy mb-4">
            Vous vous reconnaissez ?
          </h2>
          <p className="text-center text-lg text-breton-slate mb-12 max-w-2xl mx-auto">
            Chaque entreprise a ses irritants. Voici les profils que l&apos;on accompagne le plus souvent.
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
      <Projects limit={3} showLink />

      {/* Section : FAQ */}
      <FAQ />

      {/* Section : Blog */}
      <section className="py-16 sm:py-20 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-breton-navy mb-4">
            Derniers articles
          </h2>
          <p className="text-center text-breton-slate mb-12 max-w-2xl mx-auto">
            Conseils pratiques pour tirer parti de la data et de l&apos;IA dans votre PME.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-2xl border-2 border-breton-sand bg-white p-6 hover:border-breton-emerald transition-colors"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-breton-foam border border-breton-sand rounded-full px-3 py-1 text-breton-slate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-breton-navy group-hover:text-breton-emerald transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-breton-slate line-clamp-2 mb-3">
                  {article.description}
                </p>
                <span className="text-xs text-slate-400">{article.readTime}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="text-sm font-semibold text-breton-emerald hover:underline"
            >
              Voir tous les articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Section : Éthique & protection des données */}
      <section className="py-16 sm:py-20 bg-white border-t border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-breton-navy mb-4">
            Vos données, notre responsabilité
          </h2>
          <p className="text-center text-breton-slate mb-12 max-w-2xl mx-auto">
            L&apos;IA est un outil puissant. On s&apos;engage à l&apos;utiliser de façon
            responsable, transparente et au service de vos équipes.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10 mb-4">
                <Lock className="h-6 w-6 text-breton-emerald" />
              </div>
              <h3 className="font-semibold text-breton-navy mb-2">NDA systématique</h3>
              <p className="text-sm text-breton-slate leading-relaxed">
                Chaque mission commence par un accord de confidentialité. Vos données ne sortent
                jamais de votre périmètre.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10 mb-4">
                <Server className="h-6 w-6 text-breton-emerald" />
              </div>
              <h3 className="font-semibold text-breton-navy mb-2">Hébergement en France</h3>
              <p className="text-sm text-breton-slate leading-relaxed">
                Toutes les solutions que nous déployons sont hébergées en France, conformes RGPD.
                Pas de transfert hors UE.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10 mb-4">
                <Shield className="h-6 w-6 text-breton-emerald" />
              </div>
              <h3 className="font-semibold text-breton-navy mb-2">IA transparente</h3>
              <p className="text-sm text-breton-slate leading-relaxed">
                On n&apos;utilise que des modèles d&apos;IA maîtrisés et traçables. Vos équipes
                comprennent ce que fait l&apos;IA et gardent le contrôle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section : CTA final */}
      <CtaContact />
    </>
  );
}
