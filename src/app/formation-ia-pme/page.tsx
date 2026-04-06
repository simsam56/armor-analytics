import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Target,
  TrendingUp,
  Wrench,
  BookOpen,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Zap,
  Bot,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Formation IA et data pour PME en Bretagne',
  description:
    'Formations IA et data pour PME bretonnes : Claude Code, n8n, prompting, Power BI. Ateliers sur site ou en visio, à Lorient.',
  keywords:
    'formation IA PME, formation data entreprise Bretagne, formation intelligence artificielle PME, formation n8n, formation Claude Code, formation prompting, formation Power BI Bretagne',
  openGraph: {
    title: 'Formation IA et data pour PME en Bretagne \u2014 balise-ia',
    description:
      'Ateliers pratiques IA et data pour PME bretonnes. Claude Code, n8n, prompting m\u00e9tier, Power BI. Vos \u00e9quipes deviennent autonomes.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/formation-ia-pme',
  },
};

const BENEFITS = [
  {
    icon: Target,
    title: 'Autonomie r\u00e9elle',
    description:
      'Vos \u00e9quipes apprennent \u00e0 utiliser l\u2019IA elles-m\u00eames, sur leurs cas m\u00e9tier concrets. Pas de d\u00e9pendance \u00e0 un prestataire : vous gagnez en comp\u00e9tences durablement.',
  },
  {
    icon: TrendingUp,
    title: 'ROI concret et mesurable',
    description:
      'Chaque module est con\u00e7u pour produire des r\u00e9sultats imm\u00e9diats : automatisations mises en place, rapports g\u00e9n\u00e9r\u00e9s plus vite, t\u00e2ches r\u00e9p\u00e9titives \u00e9limin\u00e9es d\u00e8s la semaine suivante.',
  },
  {
    icon: Wrench,
    title: 'Adapt\u00e9 \u00e0 vos outils',
    description:
      'On ne forme pas sur des outils g\u00e9n\u00e9riques. On travaille avec vos logiciels, vos fichiers, vos process. Les ateliers repartent de votre quotidien, pas d\u2019un cas d\u2019\u00e9cole.',
  },
];

const MODULES = [
  {
    icon: Bot,
    title: 'Claude Code / IA g\u00e9n\u00e9rative',
    description:
      'Prise en main de Claude Code pour acc\u00e9l\u00e9rer la r\u00e9daction, l\u2019analyse et la production de contenu. Cas pratiques adapt\u00e9s \u00e0 chaque m\u00e9tier : commercial, RH, direction, production.',
    topics: ['Prise en main Claude Code', 'Cas m\u00e9tier concrets', 'Bonnes pratiques s\u00e9curit\u00e9'],
  },
  {
    icon: Zap,
    title: 'n8n / automatisation no-code',
    description:
      'Cr\u00e9ation de workflows automatis\u00e9s sans code : int\u00e9grations entre outils, alertes, synchronisation de donn\u00e9es. Vos \u00e9quipes construisent leurs propres automatisations.',
    topics: ['Workflows no-code', 'Int\u00e9grations outils', 'Triggers et alertes'],
  },
  {
    icon: MessageSquare,
    title: 'Prompting m\u00e9tier',
    description:
      'Apprendre \u00e0 formuler des prompts efficaces pour vos cas d\u2019usage pr\u00e9cis : synth\u00e8ses de r\u00e9unions, r\u00e9ponses clients, extraction de donn\u00e9es, g\u00e9n\u00e9ration de rapports.',
    topics: ['Prompts sur mesure', 'Templates r\u00e9utilisables', 'Optimisation it\u00e9rative'],
  },
  {
    icon: BarChart3,
    title: 'Power BI / data visualisation',
    description:
      'Lecture et utilisation de tableaux de bord Power BI ou Metabase. Cr\u00e9ation de rapports simples, compr\u00e9hension des indicateurs, prise de d\u00e9cision \u00e0 partir des donn\u00e9es.',
    topics: ['Lecture de dashboards', 'Cr\u00e9ation de rapports', 'KPIs et d\u00e9cision'],
  },
  {
    icon: BookOpen,
    title: 'Suivi et mont\u00e9e en comp\u00e9tence',
    description:
      'Bilan individuel par participant, recommandations personnalis\u00e9es, guides pas-\u00e0-pas et templates r\u00e9utilisables. Un accompagnement qui dure au-del\u00e0 des ateliers.',
    topics: ['Bilan par participant', 'Guides et templates', 'Recommandations'],
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnostic des besoins',
    description:
      'On identifie les cas d\u2019usage prioritaires dans votre entreprise, le niveau de maturit\u00e9 de vos \u00e9quipes et les outils d\u00e9j\u00e0 en place. Pas de programme g\u00e9n\u00e9rique : tout part de votre r\u00e9alit\u00e9.',
    duration: '1 semaine',
  },
  {
    step: '02',
    title: 'Ateliers pratiques',
    description:
      'Des sessions de 2 \u00e0 3 heures en petits groupes, sur site ou en visio. Chaque atelier produit un r\u00e9sultat concret : un workflow automatis\u00e9, un prompt m\u00e9tier, un dashboard utilisable.',
    duration: '2 \u00e0 4 semaines',
  },
  {
    step: '03',
    title: 'Suivi autonomie',
    description:
      'On mesure la mont\u00e9e en comp\u00e9tence, on ajuste les modules si n\u00e9cessaire, et on livre les guides et templates pour que vos \u00e9quipes continuent seules. L\u2019objectif : z\u00e9ro d\u00e9pendance.',
    duration: 'En continu',
  },
];

const FORMATION_FAQ = [
  {
    question: 'Les formations sont-elles adapt\u00e9es aux non-techniques ?',
    answer:
      'Oui, c\u2019est m\u00eame notre sp\u00e9cialit\u00e9. Nos ateliers sont con\u00e7us pour des \u00e9quipes m\u00e9tier sans comp\u00e9tences techniques pr\u00e9alables : commerciaux, RH, responsables production, dirigeants. On part de vos cas concrets, pas de la th\u00e9orie.',
  },
  {
    question: 'Combien de temps dure un cycle de formation ?',
    answer:
      'Un cycle complet dure g\u00e9n\u00e9ralement 4 \u00e0 8 semaines, avec des ateliers de 2 \u00e0 3 heures espac\u00e9s pour laisser le temps de pratiquer entre chaque session. Le rythme est adapt\u00e9 \u00e0 vos contraintes op\u00e9rationnelles.',
  },
  {
    question: 'Peut-on combiner formation et d\u00e9ploiement ?',
    answer:
      'Absolument. Beaucoup de nos clients combinent L\u2019\u00c9quipage (formation) avec Le Cap (d\u00e9ploiement). On d\u00e9ploie les solutions et on forme vos \u00e9quipes en parall\u00e8le pour qu\u2019elles prennent la main progressivement.',
  },
];

const formationFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FORMATION_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function FormationIaPmePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formationFaqJsonLd) }}
      />
      <Hero
        title="Formation IA et data pour les PME en Bretagne"
        subtitle="Des ateliers pratiques pour que vos &eacute;quipes ma&icirc;trisent l&apos;IA au quotidien. Claude Code, n8n, prompting m&eacute;tier, Power BI &mdash; on forme sur ce qui vous sert vraiment."
      />

      {/* Pourquoi former vos equipes a l'IA */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Formation &amp; autonomie
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi former vos &eacute;quipes &agrave; l&apos;IA
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            L&apos;IA n&apos;est utile que si vos &eacute;quipes savent l&apos;utiliser. Pas besoin
            d&apos;&ecirc;tre d&eacute;veloppeur : il faut comprendre les outils, savoir poser les
            bonnes questions et int&eacute;grer l&apos;IA dans ses habitudes de travail.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10">
                  <benefit.icon className="h-6 w-6 text-breton-emerald" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre programme */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Programme
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Notre programme de formation
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Cinq modules compl&eacute;mentaires, &agrave; combiner selon vos besoins. Chaque module
            est construit autour d&apos;ateliers pratiques en petits groupes (2-3h), sur site ou en
            visio.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((mod) => (
              <div
                key={mod.title}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <div className="flex items-center gap-3">
                  <mod.icon className="h-5 w-5 text-breton-copper" />
                  <h3 className="text-lg font-semibold text-slate-900">{mod.title}</h3>
                </div>
                <p className="mt-3 text-slate-600 leading-relaxed">{mod.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mod.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-breton-foam px-3 py-1 text-xs font-medium text-breton-emerald"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-8">
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 text-breton-emerald shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Format adapt&eacute; &agrave; votre entreprise
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Sessions en petits groupes (4-8 personnes), sur site &agrave; Lorient et en
                  Bretagne ou en visio. Chaque atelier repart de vos fichiers, vos process, vos
                  outils. Pas de cas d&apos;&eacute;cole : on travaille sur votre quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ca se passe */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comment &ccedil;a se passe
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Un parcours en trois &eacute;tapes, adapt&eacute; &agrave; votre rythme et &agrave;
              vos contraintes op&eacute;rationnelles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-3xl font-bold text-breton-copper/30">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-breton-moss">
                  <Zap className="h-3.5 w-3.5" />
                  {item.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
            Questions fr&eacute;quentes
          </h2>
          <div className="mt-12 space-y-8">
            {FORMATION_FAQ.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos autres expertises */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Nos autres expertises
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/formation"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-slate-600 leading-relaxed">
                D&eacute;couvrez l&apos;ensemble de nos offres : audit, pilotage data,
                automatisations et IA pour les PME bretonnes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Toutes nos offres
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/power-bi-bretagne"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-slate-600 leading-relaxed">
                Tableaux de bord Power BI connect&eacute;s &agrave; vos ERP, livr&eacute;s
                cl&eacute; en main pour les PME bretonnes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Power BI pour PME
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/automatisation-commandes-pme"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-slate-600 leading-relaxed">
                Automatisez la saisie de commandes, la lecture de documents et
                l&apos;int&eacute;gration ERP avec l&apos;IA.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Automatisation des commandes
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/intelligence-artificielle-bretagne"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-slate-600 leading-relaxed">
                Vous envisagez un projet d&apos;IA ? D&eacute;couvrez nos solutions
                d&apos;intelligence artificielle pour PME bretonnes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Intelligence artificielle
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
