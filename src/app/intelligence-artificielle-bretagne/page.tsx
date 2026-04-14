import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  MapPin,
  Users,
  Shield,
  Clock,
  ScanLine,
  BarChart3,
  FileText,
  Eye,
  MessageSquare,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Intelligence artificielle pour PME en Bretagne',
  description:
    "Solutions d'IA pour PME bretonnes : OCR, prévision, classification, automatisation. Déployées sur site par un consultant basé à Lorient.",
  openGraph: {
    title: 'Intelligence artificielle pour PME en Bretagne — balise-ia',
    description:
      "Solutions d'intelligence artificielle concrètes pour PME bretonnes. OCR, prévision, classification, automatisation — déployées sur site par un consultant basé à Lorient.",
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/intelligence-artificielle-bretagne',
  },
};

const BENEFITS = [
  {
    icon: Brain,
    title: 'Des décisions plus rapides',
    description:
      'L&apos;IA analyse vos données historiques pour anticiper la demande, détecter les anomalies et vous alerter avant qu&apos;un problème ne survienne. Vos décisions reposent sur des prévisions fiables, pas sur l&apos;intuition seule.',
  },
  {
    icon: Zap,
    title: 'Des tâches répétitives éliminées',
    description:
      'Saisie de commandes, classification de documents, extraction de données depuis des PDF ou des emails : l&apos;IA prend en charge les tâches à faible valeur ajoutée. Vos équipes se concentrent sur ce qui compte vraiment.',
  },
  {
    icon: TrendingUp,
    title: 'Un ROI mesurable en quelques semaines',
    description:
      'Nos projets IA génèrent des résultats concrets dès les premières semaines. 80 % de temps gagné sur la saisie, 30 % de ruptures en moins, retour sur investissement en 2 à 3 mois sur les cas les plus courants.',
  },
];

const USE_CASES = [
  {
    icon: ScanLine,
    sector: 'Agroalimentaire',
    title: 'OCR et extraction de commandes',
    description:
      'Vos clients envoient des commandes par fax, email ou PDF. L&apos;IA extrait automatiquement les lignes de commande, les quantités et les références, puis injecte les données dans votre ERP. Plus de saisie manuelle, moins d&apos;erreurs.',
    metric: '95 % de temps gagné sur la saisie',
  },
  {
    icon: BarChart3,
    sector: 'Logistique / Distribution',
    title: 'Prévision de la demande',
    description:
      'Un modèle prédictif analyse vos ventes passées, la saisonnalité et les tendances pour anticiper la demande à 4-12 semaines. Vous ajustez vos stocks et vos approvisionnements avant les ruptures.',
    metric: '-30 % de ruptures de stock',
  },
  {
    icon: FileText,
    sector: 'Tous secteurs',
    title: 'Classification automatique de documents',
    description:
      'Factures, bons de livraison, réclamations, devis : l&apos;IA trie, classe et route automatiquement vos documents entrants vers les bons interlocuteurs. Ce qui prenait 2 heures par jour ne prend plus que 5 minutes.',
    metric: '2h → 5 min par jour',
  },
  {
    icon: Eye,
    sector: 'Métallurgie / Plasturgie',
    title: 'Contrôle qualité par vision IA',
    description:
      'Une caméra couplée à un modèle de vision par ordinateur détecte les défauts sur vos pièces en temps réel. Les rebuts non détectés diminuent, la qualité augmente sans ralentir la production.',
    metric: '-60 % de rebuts non détectés',
  },
  {
    icon: MessageSquare,
    sector: 'Industrie',
    title: 'Chatbot interne documentation technique',
    description:
      'Vos techniciens passent 20 minutes à chercher une procédure dans un classeur ou un dossier partagé. Un chatbot IA entraîné sur votre documentation interne répond en 10 secondes, avec la source exacte.',
    metric: 'Réponse en 10 sec vs 20 min',
  },
];

const ADVANTAGES = [
  {
    icon: MapPin,
    title: 'Interventions sur site en Bretagne',
    description:
      'On vient chez vous, on observe vos process, on échange avec vos équipes. L&apos;IA ne se déploie pas depuis Paris : il faut comprendre le terrain.',
  },
  {
    icon: Users,
    title: 'Connaissance du tissu industriel breton',
    description:
      'PME agroalimentaires, métallurgie, plasturgie, réseaux de franchise : on connaît vos ERP, vos contraintes de production et vos enjeux de terrain.',
  },
  {
    icon: Shield,
    title: 'Données hébergées en France',
    description:
      'Vos données restent en France. NDA systématique, conformité RGPD, hébergement sur des serveurs français. Pas de transfert vers des clouds américains.',
  },
  {
    icon: Clock,
    title: 'Réactivité et suivi de proximité',
    description:
      'Un interlocuteur unique, joignable directement, qui connaît votre projet de A à Z. Pas de consultant parisien en déplacement une fois par mois.',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnostic IA',
    description:
      'On identifie les cas d&apos;usage les plus rentables pour votre contexte. Audit de vos données, de vos process et de vos outils existants.',
    duration: '1-2 semaines',
  },
  {
    step: '02',
    title: 'Prototypage',
    description:
      'On développe un premier cas d&apos;usage IA sur vos données réelles. Vous voyez les résultats concrets avant d&apos;aller plus loin.',
    duration: '2-3 semaines',
  },
  {
    step: '03',
    title: 'Déploiement',
    description:
      'On industrialise la solution, on la connecte à vos outils (ERP, CRM, outils métier) et on la teste en conditions réelles avec vos équipes.',
    duration: '2-4 semaines',
  },
  {
    step: '04',
    title: 'Formation',
    description:
      'On forme vos équipes à l&apos;utilisation et à la supervision de la solution. Documentation complète et suivi post-livraison inclus.',
    duration: '1 semaine',
  },
];

const IA_FAQ = [
  {
    question: "Quels types d\u2019IA sont utiles pour une PME industrielle ?",
    answer:
      "Les cas d\u2019usage les plus courants en PME industrielle sont l\u2019OCR (extraction automatique de données depuis des documents), la prévision de demande, la classification automatique de documents, le contrôle qualité par vision et les chatbots sur documentation interne. Il ne s\u2019agit pas de déployer ChatGPT partout, mais de cibler les tâches où l\u2019IA apporte un gain mesurable : temps, fiabilité, réactivité.",
  },
  {
    question: "Comment se lance un projet d\u2019intelligence artificielle dans une PME ?",
    answer:
      "On commence toujours par un diagnostic terrain gratuit pour identifier le cas d\u2019usage le plus rentable. Le retour sur investissement est généralement visible en 2 à 3 mois. Chaque projet est chiffré précisément après le diagnostic, sans engagement.",
  },
  {
    question: "Faut-il des données structurées avant de lancer un projet IA ?",
    answer:
      "Non. La plupart des PME que nous accompagnons n\u2019ont pas de données parfaitement structurées — et c\u2019est normal. L\u2019audit data est la première étape : on part de votre existant (ERP, fichiers Excel, emails, documents papier) et on structure ce qui est nécessaire pour le cas d\u2019usage ciblé.",
  },
  {
    question: "Quels secteurs bretons utilisent déjà l\u2019IA ?",
    answer:
      "En Bretagne, l\u2019IA est déjà utilisée dans l\u2019agroalimentaire (prévision de demande, OCR commandes), la métallurgie et la plasturgie (contrôle qualité vision), la logistique (optimisation de tournées, prévision de stock), et les réseaux de franchise (analyse de performance, automatisation reporting). Les PME de 50 à 500 salariés sont les plus actives sur ces sujets.",
  },
  {
    question: "Combien de temps pour déployer une première solution IA ?",
    answer:
      "Comptez 4 à 10 semaines entre le démarrage et la mise en production, selon le cas d\u2019usage. Un prototype fonctionnel sur vos données réelles est généralement prêt en 2 semaines, ce qui permet de valider l\u2019approche avant d\u2019industrialiser.",
  },
  {
    question: "Quelle est la différence entre automatisation et intelligence artificielle ?",
    answer:
      "L\u2019automatisation suit des règles fixes définies à l\u2019avance : si condition A, alors action B. L\u2019intelligence artificielle apprend des données pour prendre des décisions dans des situations nouvelles ou ambiguës. Les deux sont complémentaires : on automatise d\u2019abord ce qui peut l\u2019être par des règles simples, puis on déploie l\u2019IA là où il faut de l\u2019adaptabilité.",
  },
];

const iaFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: IA_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function IntelligenceArtificielleBretagnePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iaFaqJsonLd) }}
      />
      <Breadcrumbs items={[{ label: 'Nos offres', href: '/offres' }, { label: 'IA Bretagne' }]} />
      <Hero
        title="Intelligence artificielle pour les PME en Bretagne"
        subtitle="Des solutions d&apos;IA concrètes pour vos problèmes métier. OCR, prévision, classification, automatisation intelligente — déployées sur site, connectées à vos outils existants."
      />

      {/* Ce que l'IA change concrètement */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Intelligence artificielle
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            Ce que l&apos;IA change concrètement
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-breton-slate leading-relaxed">
            L&apos;intelligence artificielle n&apos;est pas un gadget. Pour une PME industrielle
            bretonne, c&apos;est un levier concret pour gagner du temps, fiabiliser les process et
            prendre de meilleures décisions — sans révolutionner votre informatique.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-breton-sand bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10">
                  <benefit.icon className="h-6 w-6 text-breton-emerald" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-breton-navy">{benefit.title}</h3>
                <p className="mt-3 text-breton-slate leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 cas d'usage concrets */}
      <section className="py-20 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Cas d&apos;usage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            5 cas d&apos;usage concrets de l&apos;IA dans les PME bretonnes
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-breton-slate leading-relaxed">
            Pas de promesses abstraites. Voici les projets d&apos;IA que nous déployons le plus
            souvent dans les PME industrielles et de services en Bretagne.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl border border-breton-sand bg-white p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-breton-emerald/10 px-3 py-1 text-xs font-medium text-breton-emerald">
                    {useCase.sector}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <useCase.icon className="h-5 w-5 text-breton-copper" />
                  <h3 className="text-lg font-semibold text-breton-navy">{useCase.title}</h3>
                </div>
                <p className="mt-3 text-sm text-breton-slate leading-relaxed">
                  {useCase.description}
                </p>
                <div className="mt-4 rounded-lg bg-breton-foam px-3 py-2">
                  <p className="text-sm font-semibold text-breton-emerald">{useCase.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi un partenaire IA local */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Proximité
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            Pourquoi un partenaire IA local en Bretagne
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-breton-slate leading-relaxed">
            Déployer de l&apos;IA dans une PME, ce n&apos;est pas livrer un algorithme depuis
            Paris. C&apos;est comprendre vos process sur le terrain, former vos équipes en
            personne et assurer un suivi de proximité.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {ADVANTAGES.map((advantage) => (
              <div key={advantage.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-breton-emerald/10 shrink-0">
                  <advantage.icon className="h-5 w-5 text-breton-emerald" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-breton-navy">{advantage.title}</h3>
                  <p className="mt-2 text-breton-slate leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="py-20 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
              Notre méthode pour vos projets IA
            </h2>
            <p className="mt-4 text-lg text-breton-slate leading-relaxed">
              Du diagnostic initial au déploiement en production, comptez 4 à 10 semaines. Voici
              les grandes étapes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="rounded-2xl border border-breton-sand bg-white p-6">
                <span className="text-3xl font-bold text-breton-copper/30">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-breton-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-breton-slate leading-relaxed">{item.description}</p>
                <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-breton-moss">
                  <Zap className="h-3.5 w-3.5" />
                  {item.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats concrets */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Résultats concrets
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl">
            De la saisie manuelle au traitement IA en temps réel
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contexte */}
            <div>
              <h3 className="text-xl font-semibold text-breton-navy">Le contexte</h3>
              <p className="mt-3 text-breton-slate leading-relaxed">
                Une PME agroalimentaire dans le Morbihan (120 salariés) recevait ses commandes
                clients par fax, email et PDF. Trois personnes passaient 6 heures par jour à
                ressaisir manuellement les lignes de commande dans l&apos;ERP Sage. Un travail
                répétitif, source d&apos;erreurs et de retards.
              </p>
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  Avant
                </h4>
                {[
                  '6 heures par jour de saisie manuelle',
                  '5 % d&apos;erreurs de saisie en moyenne',
                  'Délai de traitement J+1',
                  '3 personnes mobilisées à temps plein',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-red-400 mt-0.5 text-sm">&#x2717;</span>
                    <span className="text-sm text-breton-slate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div>
              <h3 className="text-xl font-semibold text-breton-navy">Les résultats</h3>
              <p className="mt-3 text-breton-slate leading-relaxed">
                Nous avons déployé une solution d&apos;OCR couplée à un modèle d&apos;extraction
                IA, connectée directement à l&apos;ERP Sage. Les commandes sont désormais lues,
                interprétées et injectées automatiquement. Une personne vérifie les cas ambigus
                pendant 15 minutes par jour.
              </p>
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-breton-emerald">
                  Après
                </h4>
                {[
                  '15 minutes de vérification par jour au lieu de 6 heures',
                  'Moins de 0,5 % d&apos;erreurs',
                  'Traitement des commandes en temps réel',
                  '2 personnes redéployées sur des tâches à valeur ajoutée',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-breton-emerald shrink-0 mt-0.5" />
                    <span className="text-sm text-breton-slate">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-lg bg-breton-emerald px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-white">-95 %</p>
                  <p className="text-xs text-white/70">Temps de saisie</p>
                </div>
                <div className="rounded-lg bg-breton-sand px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-breton-emerald">&lt;0,5 %</p>
                  <p className="text-xs text-breton-granite">Erreurs</p>
                </div>
                <div className="rounded-lg bg-breton-sand px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-breton-emerald">6 sem.</p>
                  <p className="text-xs text-breton-granite">ROI atteint</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
            >
              <Link href="/cas-clients" className="gap-2">
                Voir tous nos cas clients
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-breton-foam">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-breton-navy sm:text-4xl text-center">
            Questions fréquentes
          </h2>
          <div className="mt-12 space-y-8">
            {IA_FAQ.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-breton-navy">{faq.question}</h3>
                <p className="mt-2 text-breton-slate leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos autres expertises */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-breton-navy sm:text-3xl">
            Nos autres expertises
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              href="/power-bi-bretagne"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-breton-slate leading-relaxed">
                Vous cherchez aussi à piloter votre activité avec des tableaux de bord connectés ?
                Découvrez notre offre Power BI pour les PME bretonnes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Power BI en Bretagne
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/automatisation-commandes-pme"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-breton-slate leading-relaxed">
                Vos commandes arrivent par email, fax ou PDF ? Découvrez comment automatiser leur
                saisie et leur injection dans votre ERP.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Automatisation des commandes
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/formation-ia-pme"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-breton-slate leading-relaxed">
                Vous souhaitez former vos équipes à l&apos;IA et à la data ? Découvrez nos
                formations pratiques adaptées aux PME.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Formation IA pour PME
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/consultant-data-lorient"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-breton-slate leading-relaxed">
                Basés à Lorient, nous intervenons sur toute la Bretagne. En savoir plus sur notre
                accompagnement data local.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Consultant data à Lorient
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
