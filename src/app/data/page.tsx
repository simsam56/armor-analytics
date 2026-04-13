import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Projects } from '@/components/sections/Projects';
import { VideoBackground } from '@/components/ui/video-background';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  BarChart3,
  Database,
  RefreshCw,
  TrendingUp,
  ShieldCheck,
  Users,
  AlertTriangle,
  Layers,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tableaux de bord production industrielle en Bretagne',
  description:
    'Pilotez votre production en temps r\u00e9el : TRS, encours, non-conformit\u00e9. Dashboards Power BI connect\u00e9s \u00e0 votre ERP/GPAO.',
  openGraph: {
    title: 'Tableaux de bord production industrielle en Bretagne',
    description: 'TRS, suivi d\u2019encours, non-conformit\u00e9s : dashboards Power BI connect\u00e9s \u00e0 votre ERP/GPAO.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: { canonical: 'https://www.balise-ia.fr/data' },
};

const DATA_FAQ = [
  {
    q: `On a d\u00e9j\u00e0 des fichiers Excel partout. C\u2019est rattrapable ?`,
    a: `C\u2019est justement notre quotidien. On centralise vos sources (ERP, Excel, emails, API) dans un entrep\u00f4t de donn\u00e9es propre. Vos Excel deviennent des dashboards automatis\u00e9s.`,
  },
  {
    q: 'Power BI ou Metabase, lequel choisir ?',
    a: `Power BI si vous \u00eates dans l\u2019\u00e9cosyst\u00e8me Microsoft et que vous voulez des rapports riches. Metabase si vous cherchez un outil open source, rapide \u00e0 d\u00e9ployer, sans licence. On vous oriente selon votre contexte.`,
  },
  {
    q: 'Combien de temps pour avoir un premier dashboard ?',
    a: `Un premier tableau de bord est livrable en 2 \u00e0 4 semaines. Un projet complet (centralisation + dashboards + alertes) prend 4 \u00e0 10 semaines.`,
  },
  {
    q: 'Faut-il un data engineer en interne ?',
    a: `Non. On con\u00e7oit des solutions que vos \u00e9quipes utilisent sans comp\u00e9tences techniques. Formation incluse. Et si vous grandissez, on peut former quelqu\u2019un en interne.`,
  },
  {
    q: 'Mes données actuelles sont-elles exploitables ?',
    a: 'Probablement. On commence par un audit de qualité des données : doublons, incohérences, trous. Ensuite on nettoie et on structure avant de construire les dashboards.',
  },
];

const dataFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: DATA_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function DataPage() {
  const painPoints = [
    'Votre TRS est calcul\u00e9 \u00e0 la main sur un fichier Excel mis \u00e0 jour en fin de semaine',
    'Le suivi de production repose sur 3 syst\u00e8mes qui ne se parlent pas : ERP, GPAO, fichiers terrain',
    'Vos encours atelier sont un angle mort — vous d\u00e9couvrez les retards apr\u00e8s coup',
    'Le taux de non-conformit\u00e9 n\u2019est consolid\u00e9 qu\u2019au reporting mensuel, jamais en temps r\u00e9el',
    'Votre reporting production arrive \u00e0 J+5 apr\u00e8s compilation manuelle par le responsable qualit\u00e9',
    'Vous ne savez pas quelles lignes ou quels OF sont r\u00e9ellement rentables',
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: 'Pilotage production & TRS',
      description:
        'TRS, taux de rebut, cadence par ligne : vos indicateurs atelier disponibles en temps r\u00e9el, connect\u00e9s \u00e0 votre ERP/GPAO.',
    },
    {
      icon: Database,
      title: 'Centralisation ERP, GPAO & terrain',
      description:
        'On unifie vos sources : ERP, GPAO, saisies op\u00e9rateurs, fichiers Excel terrain. Un entrep\u00f4t de donn\u00e9es propre, automatis\u00e9, sans ressaisie.',
    },
    {
      icon: Layers,
      title: 'Fiabilit\u00e9 des donn\u00e9es production',
      description:
        'Doublons d\u2019OF, \u00e9carts de stock, saisies incoh\u00e9rentes : on audite et on nettoie vos donn\u00e9es avant de construire les dashboards.',
    },
    {
      icon: AlertTriangle,
      title: 'Non-conformit\u00e9s & alertes process',
      description:
        'D\u00e9tectez les d\u00e9rives process et les non-conformit\u00e9s en temps r\u00e9el. Alertes automatiques sur seuils qualit\u00e9, avant que le lot ne parte.',
    },
    {
      icon: RefreshCw,
      title: 'Reporting production automatis\u00e9',
      description:
        'Fini le reporting \u00e0 J+5 compil\u00e9 \u00e0 la main. Vos indicateurs atelier — TRS, encours, rendement — arrivent automatiquement chaque matin.',
    },
    {
      icon: Users,
      title: 'Suivi encours & ordres de fabrication',
      description:
        'Visualisez vos encours atelier, l\u2019avancement des OF et les goulets d\u2019\u00e9tranglement en un coup d\u2019\u0153il.',
    },
    {
      icon: TrendingUp,
      title: 'Pilotage en temps r\u00e9el',
      description:
        'D\u00e9cidez sur la base de donn\u00e9es fra\u00eeches, pas d\u2019exports d\u2019hier. Seuils et alertes configurables par ligne ou par atelier.',
    },
    {
      icon: ShieldCheck,
      title: 'Conformit\u00e9 & tra\u00e7abilit\u00e9',
      description:
        'Reporting r\u00e9glementaire automatis\u00e9 pour vos audits qualit\u00e9 et certifications. Tra\u00e7abilit\u00e9 lot par lot, sans compilation manuelle.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Diagnostic',
      description:
        'On cartographie vos sources de données, vos irritants et vos priorités. Quiz en ligne ou appel de 30 min.',
    },
    {
      step: '2',
      title: 'Centralisation',
      description:
        'On connecte vos sources et on structure vos données dans un entrepôt propre et automatisé.',
    },
    {
      step: '3',
      title: 'Dashboards & alertes',
      description:
        'On construit vos tableaux de bord et vos alertes. Vous validez, on ajuste.',
    },
    {
      step: '4',
      title: 'Formation & autonomie',
      description:
        'Vos équipes apprennent à lire, modifier et maintenir les dashboards. Documentation incluse.',
    },
  ];

  const tools = ['Power BI', 'Metabase', 'Microsoft Fabric', 'DuckDB', 'dbt', 'Python'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataFaqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'Nos offres', href: '/data' }, { label: 'Mémoire opérationnelle' }]} />
      <Hero
        title="Votre TRS en temps réel. Vos OF suivis. Votre reporting sans Excel."
        subtitle="Dashboard production connecté à votre ERP et votre terrain. Fini le reporting J+5 compilé à la main."
      />

      {/* CTA sous le hero */}
      <div className="bg-breton-sand py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
            <Link href="/audit-ia">Identifier mes priorit&eacute;s data →</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-breton-navy text-breton-navy"
          >
            <Link href="/contact">Prendre contact</Link>
          </Button>
        </div>
      </div>

      {/* Problèmes que l'on résout */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-8">
            Vous vous reconnaissez ?
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((pain) => (
              <div
                key={pain}
                className="flex items-start gap-3 rounded-xl border border-breton-sand bg-breton-foam p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-breton-emerald/10 text-breton-emerald text-xs font-bold">
                  !
                </span>
                <p className="text-sm text-breton-slate leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-[110px] bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Ce qu&apos;on met en place
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Des cas d&apos;usage concrets, pas des tableaux de bord gadgets. Chaque dashboard se
            justifie par une décision qu&apos;il aide à prendre.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-breton-emerald/10">
                  <uc.icon className="h-5 w-5 text-breton-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-breton-navy mb-1">{uc.title}</h3>
                  <p className="text-breton-slate text-sm leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-12">
            Comment ça se passe concrètement
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-breton-emerald text-white font-bold text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-breton-navy mb-2">{s.title}</h3>
                <p className="text-sm text-breton-slate leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-16 bg-breton-foam border-y border-breton-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss mb-6">
            Nos outils
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-breton-sand bg-white px-4 py-1.5 text-sm font-medium text-breton-slate"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cas clients */}
      <Projects filter="data" limit={2} />

      {/* Maillage interne */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/power-bi-pme-industrielle"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Lire : Power BI pour PME — par où commencer →
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/ia"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Éliminer les tâches manuelles →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-breton-foam">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-breton-navy text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {DATA_FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-breton-sand bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-breton-foam transition-colors">
                  <h3 className="font-medium text-breton-navy pr-4">{item.q}</h3>
                  <ChevronDown className="w-4 h-4 text-breton-granite shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-breton-slate leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final avec vidéo drone */}
      <VideoBackground
        src="/videos/drone-sunset-voilier.mp4"
        poster="/videos/poster-sunset.jpg"
        startTime={3}
        overlayClassName="bg-breton-navy/75"
        className="py-20 sm:py-28"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Votre reporting vous co&ucirc;te combien d&apos;heures par semaine ?
          </h2>
          <p className="mt-4 text-white/60">
            Le diagnostic identifie les dashboards et automatisations les plus utiles pour votre
            entreprise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90"
            >
              <Link href="/audit-ia">Identifier mes priorit&eacute;s data →</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:border-white/40"
            >
              <Link href="/contact">Prendre contact</Link>
            </Button>
          </div>
        </div>
      </VideoBackground>
    </>
  );
}
