import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { VideoBackground } from '@/components/ui/video-background';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  Bot,
  Workflow,
  ScanText,
  BrainCircuit,
  MessageSquare,
  FileText,
  Eye,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IA & automatisation pour PME industrielles en Bretagne — GPAO, OF, qualité',
  description:
    'Automatisez vos flux de production avec l\u2019IA : GPAO, ordres de fabrication, contrôle qualité, CBN. Pour PME industrielles bretonnes de 50 à 200 salariés.',
  openGraph: {
    title: 'IA & automatisation pour PME industrielles en Bretagne',
    description: 'Automatisez vos flux de production : GPAO, ordres de fabrication, contr\u00f4le qualit\u00e9, CBN. PME industrielles bretonnes.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: { canonical: 'https://www.balise-ia.fr/ia' },
};

const IA_FAQ = [
  {
    q: 'Par où commencer quand on n\u2019a aucune expérience en IA ?',
    a: 'Par le diagnostic. En 5 minutes (quiz) ou 30 minutes (appel), on identifie les 2-3 automatisations les plus rentables pour votre PME. Pas besoin de compétences techniques.',
  },
  {
    q: 'Est-ce que ça marche avec notre ERP actuel ?',
    a: 'Oui. On travaille avec Sage, Cegid, EBP, Dynamics, et tout système qui exporte des données. On connecte, on ne remplace pas.',
  },
  {
    q: 'Combien de temps pour un premier résultat ?',
    a: 'Les premiers gains sont mesurables dès le premier mois de déploiement. Un projet typique dure 4 à 10 semaines du diagnostic au résultat.',
  },
  {
    q: 'Est-ce que mes équipes devront changer leurs habitudes ?',
    a: 'Le moins possible. On conçoit des solutions qui s\u2019intègrent dans vos outils existants. Formation incluse pour que vos équipes soient autonomes.',
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: 'NDA systématique, données hébergées en France, conformité RGPD. On ne travaille qu\u2019avec des solutions maîtrisées et traçables.',
  },
];

const iaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: IA_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function IaPage() {
  const painPoints = [
    'Vos opérateurs ressaisissent les OF entre la GPAO et le terrain',
    'Le traitement des bons de commande, BL et fiches qualité est encore manuel',
    'Vos temps de cycle et taux de rebut ne sont suivis que dans Excel',
    'Vos équipes atelier posent les mêmes questions sur les gammes et les procédures',
    'Votre CBN tourne sur des prévisions approximatives, les ruptures sont fréquentes',
    'Le MES n\u2019est pas connecté à l\u2019ERP : double saisie, données en retard',
  ];

  const useCases = [
    {
      icon: ScanText,
      title: 'OCR bons de commande, BL & fiches qualité',
      description:
        'Éliminez la ressaisie des bons de commande, bons de livraison et fiches qualité. L\u2019IA extrait, structure et injecte les données dans votre GPAO.',
    },
    {
      icon: MessageSquare,
      title: 'Base de connaissances atelier',
      description:
        'Un agent IA qui répond 24/7 aux questions des opérateurs : gammes, procédures, fiches de poste, consignes qualité. Accessible sur tablette au pied de la machine.',
    },
    {
      icon: Workflow,
      title: 'Automatisation des flux de production',
      description:
        'Connectez GPAO, MES et ERP avec n8n. Synchronisation automatique des OF, gammes et temps de cycle. Zéro double saisie.',
    },
    {
      icon: FileText,
      title: 'Génération de contenus métier',
      description:
        'Fiches produit, comptes-rendus, réponses à appels d\u2019offres, rapports. L\u2019IA rédige, vous validez.',
    },
    {
      icon: Eye,
      title: 'Vision & contrôle qualité',
      description:
        'Contrôle qualité visuel en sortie de ligne, lecture de compteurs, détection de défauts. L\u2019IA réduit le taux de rebut.',
    },
    {
      icon: TrendingUp,
      title: 'CBN & prévision d\u2019approvisionnement',
      description:
        'Fiabilisez votre calcul des besoins nets. Modèles de prévision connectés à vos historiques de commande et à votre plan de production.',
    },
    {
      icon: Bot,
      title: 'Intégration ERP',
      description:
        'Synchronisation automatique entre vos outils métier. Finis les exports CSV et les doubles saisies. Le tout sans changer d\u2019ERP ni bouleverser vos habitudes.',
    },
    {
      icon: BrainCircuit,
      title: 'Classification & indexation',
      description:
        'Documents, tickets, emails : l\u2019IA trie, classe et route automatiquement vers les bonnes personnes.',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Diagnostic',
      description:
        'On identifie vos irritants concrets et les automatisations les plus rentables. Quiz en ligne ou appel de 30 min.',
    },
    {
      step: '2',
      title: 'Prototype',
      description:
        'On déploie un premier cas d\u2019usage sur un périmètre restreint. Vous validez la valeur avant de scaler.',
    },
    {
      step: '3',
      title: 'Déploiement',
      description:
        'Mise en production, intégration à vos outils, tests. On mesure les gains avant et après.',
    },
    {
      step: '4',
      title: 'Formation & autonomie',
      description:
        'Vos équipes prennent la main. Documentation, formation sur site, accompagnement si besoin.',
    },
  ];

  const tools = ['n8n', 'Make', 'Python', 'Claude', 'LangChain', 'Mistral'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iaFaqJsonLd) }}
      />
      <Hero
        title="Automatisez ce qui ralentit votre atelier"
        subtitle="Connectez votre GPAO, votre ERP et votre terrain — sans tout refaire. Des automatisations concrètes pour PME industrielles, directement sur vos outils existants."
      />

      {/* CTA sous le hero */}
      <div className="bg-breton-sand py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-breton-navy text-white hover:bg-breton-slate">
            <Link href="/audit-ia">Évaluer mon potentiel d&apos;automatisation →</Link>
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

      {/* Problèmes que l\u2019on résout */}
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

      {/* Cas d\u2019usage */}
      <section className="py-[110px] bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy mb-4">
            Ce qu&apos;on automatise
          </h2>
          <p className="text-lg text-breton-slate mb-12 max-w-2xl">
            Des cas d&apos;usage éprouvés, pas des projets pilotes. Chaque mission se mesure avant et
            après.
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
          <p className="mt-6 text-sm text-breton-slate">
            Nous choisissons l&apos;outil, vous gardez le focus sur votre m&eacute;tier.
          </p>
        </div>
      </section>

      {/* Cas clients */}
      <Projects filter="ia" limit={3} />

      {/* Maillage interne */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog/automatiser-saisie-commandes-erp"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Lire : Comment automatiser la saisie de commandes dans votre ERP →
          </Link>
          <span className="text-breton-sand">|</span>
          <Link
            href="/data"
            className="text-sm text-breton-emerald hover:underline font-medium"
          >
            Voir aussi : Piloter avec des données fiables →
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
            {IA_FAQ.map((item) => (
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
            Vos process manuels vous co&ucirc;tent combien ?
          </h2>
          <p className="mt-4 text-white/60">
            Le diagnostic identifie les 2-3 automatisations les plus rentables pour votre
            entreprise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-breton-sand text-breton-navy hover:bg-breton-sand/90"
            >
              <Link href="/audit-ia">Identifier mes priorit&eacute;s IA &amp; data →</Link>
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
