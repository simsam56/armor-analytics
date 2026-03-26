import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BarChart3,
  Clock,
  CheckCircle,
  Eye,
  ArrowRight,
  Settings,
  Zap,
  Shield,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Power BI pour les PME en Bretagne',
  description:
    'Déploiement de tableaux de bord Power BI pour PME bretonnes : production, commercial, stocks, direction. Connectés à vos ERP (Sage, Cegid, Dynamics), livrés en 4 à 8 semaines. Consultant basé à Lorient.',
  keywords:
    'Power BI Bretagne, Power BI PME, tableau de bord Power BI Bretagne, Power BI Lorient, reporting PME Bretagne, dataviz PME industrie',
  openGraph: {
    title: 'Power BI pour les PME en Bretagne — balise-ia',
    description:
      'Tableaux de bord Power BI connectés à vos ERP, livrés clé en main pour les PME bretonnes. Production, commercial, stocks, direction.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/power-bi-bretagne',
  },
};

const BENEFITS = [
  {
    icon: Eye,
    title: 'Visibilité en temps réel',
    description:
      'Fini le reporting du vendredi soir. Vos indicateurs de production, de ventes et de stocks sont disponibles en permanence, actualisés automatiquement. Vous prenez des décisions sur des données fraîches, pas sur des tableaux Excel vieux de trois jours.',
  },
  {
    icon: Clock,
    title: 'Des heures de reporting économisées',
    description:
      'Les responsables de production et les DAF passent en moyenne 4 heures par semaine à compiler des chiffres manuellement. Un tableau de bord Power BI automatise cette consolidation : les données remontent seules, les rapports se génèrent tout seuls.',
  },
  {
    icon: Shield,
    title: 'Des données fiables et partagées',
    description:
      'Plus de débat en CODIR sur la fiabilité des chiffres. Tout le monde travaille sur la même base de données, avec des définitions claires. Les écarts entre services disparaissent, les décisions sont plus rapides.',
  },
];

const DELIVERABLES = [
  {
    title: 'Dashboard production',
    description:
      'Suivi des encours, TRS, rendements, alertes sur les écarts qualité. Connecté à votre ERP et à vos machines.',
    kpis: ['TRS par ligne', 'Encours temps réel', 'Écarts qualité', 'Alertes automatiques'],
  },
  {
    title: 'Dashboard commercial',
    description:
      'CA par client, par produit, par commercial. Marges, prévisions, suivi des objectifs. Données actualisées quotidiennement.',
    kpis: ['CA par segment', 'Marges par client', 'Pipeline commercial', 'Objectifs vs réalisé'],
  },
  {
    title: 'Dashboard stocks & approvisionnement',
    description:
      'Niveaux de stock en temps réel, taux de rotation, alertes de rupture, suivi des commandes fournisseurs.',
    kpis: ['Stock valorisé', 'Taux de rotation', 'Alertes rupture', 'Délai fournisseurs'],
  },
  {
    title: 'Dashboard direction',
    description:
      'Vue consolidée pour le CODIR : indicateurs financiers, opérationnels et RH. Un seul écran pour piloter l&apos;entreprise.',
    kpis: ['Synthèse P&L', 'KPIs opérationnels', 'Trésorerie', 'Effectifs'],
  },
];

const TOOLS_COMPARISON = [
  {
    name: 'Power BI',
    ideal: 'PME avec environnement Microsoft',
    strengths: [
      'Intégration native avec Excel, SharePoint, Dynamics',
      'Capacités avancées de modélisation (DAX)',
      'Partage sécurisé via Microsoft 365',
      'Licence incluse dans certains plans Microsoft',
    ],
    license: 'Inclus ou 8,40 €/utilisateur/mois',
  },
  {
    name: 'Metabase',
    ideal: 'PME avec besoin de dashboards simples et rapides',
    strengths: [
      'Interface intuitive, prise en main rapide',
      'Open source, auto-hébergeable en France',
      'Requêtes visuelles sans code',
      'Idéal pour les équipes non techniques',
    ],
    license: 'Gratuit (open source) ou hébergé',
  },
  {
    name: 'Looker Studio',
    ideal: 'PME avec écosystème Google',
    strengths: [
      'Gratuit et illimité en nombre d&apos;utilisateurs',
      'Connexion native Google Ads, Sheets, BigQuery',
      'Partage simple par lien',
      'Bon pour le reporting marketing',
    ],
    license: 'Gratuit',
  },
];

const POWER_BI_FAQ = [
  {
    question: 'Faut-il une licence Microsoft pour utiliser Power BI ?',
    answer:
      'Power BI Desktop est gratuit. Pour le partage en ligne, il faut une licence Power BI Pro (8,40 €/utilisateur/mois) ou une capacité Premium. Si vous avez déjà Microsoft 365 E5, la licence est incluse. On vous conseille la formule la plus adaptée à votre contexte.',
  },
  {
    question:
      "On n\u2019a pas de compétences techniques en interne, c\u2019est un problème ?",
    answer:
      "Non. Les tableaux de bord que nous livrons sont conçus pour être utilisés sans compétence technique. On forme vos équipes à la lecture et à l\u2019utilisation des dashboards. Si vous avez besoin de modifications ultérieures, notre offre Formation & Accompagnement couvre la maintenance.",
  },
  {
    question: 'Combien de temps faut-il pour avoir un premier tableau de bord ?',
    answer:
      "Comptez 4 à 8 semaines entre le démarrage et la mise en production. Un premier prototype fonctionnel est généralement prêt après 2 semaines, ce qui permet d\u2019itérer rapidement avec vos équipes.",
  },
];

const powerBiFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: POWER_BI_FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function PowerBiBretagnePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(powerBiFaqJsonLd) }}
      />
      <Hero
        title="Power BI pour les PME en Bretagne"
        subtitle="Des tableaux de bord connectés à vos ERP, livrés clé en main. Vous pilotez votre activité en temps réel, sans dépendre d&apos;un fichier Excel."
      />

      {/* Pourquoi Power BI pour votre PME */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Pilotage data
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi Power BI pour votre PME
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Power BI n&apos;est pas réservé aux grands groupes. Pour une PME industrielle bretonne,
            c&apos;est l&apos;outil le plus adapté pour passer du pilotage à l&apos;aveugle au
            pilotage par la donnée — sans révolutionner votre informatique.
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

      {/* Ce que nous déployons */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Livrables concrets
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ce que nous déployons
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Chaque tableau de bord est conçu sur mesure, connecté à vos sources de données et livré
            avec la documentation et la formation nécessaires. Voici les cas les plus fréquents.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {DELIVERABLES.map((deliverable) => (
              <div
                key={deliverable.title}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-breton-copper" />
                  <h3 className="text-lg font-semibold text-slate-900">{deliverable.title}</h3>
                </div>
                <p className="mt-3 text-slate-600 leading-relaxed">{deliverable.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {deliverable.kpis.map((kpi) => (
                    <span
                      key={kpi}
                      className="rounded-full bg-breton-foam px-3 py-1 text-xs font-medium text-breton-emerald"
                    >
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-breton-emerald/20 bg-breton-emerald/5 p-8">
            <div className="flex items-start gap-4">
              <Settings className="h-6 w-6 text-breton-emerald shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Connecté à vos outils existants
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Nous connectons Power BI directement à votre ERP (Sage, Cegid, Dynamics 365,
                  EBP), à vos fichiers Excel et CSV, à vos bases de données, et à vos outils
                  métier. Pas de migration, pas de changement d&apos;habitudes : on se branche sur
                  votre existant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos outils — comparaison */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Nos outils
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Power BI, Metabase ou Looker Studio ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Nous maîtrisons les trois outils et recommandons celui qui correspond le mieux à votre
            contexte technique et à vos usages. Pas de dogme : la meilleure solution est celle que
            vos équipes utiliseront vraiment.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {TOOLS_COMPARISON.map((tool) => (
              <div
                key={tool.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-breton-navy">{tool.name}</h3>
                <p className="mt-2 text-sm font-medium text-breton-moss">{tool.ideal}</p>
                <ul className="mt-5 space-y-3">
                  {tool.strengths.map((strength) => (
                    <li key={strength} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-breton-emerald shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{strength}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-lg bg-slate-50 px-4 py-3">
                  <p className="text-xs text-slate-500">Licence</p>
                  <p className="text-sm font-semibold text-slate-900">{tool.license}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas concret */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Cas concret
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Du reporting J+5 au pilotage en temps réel
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contexte */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Le contexte</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Une entreprise de métallurgie dans le Finistère (80 salariés) compilait ses données
                de production chaque vendredi. Le responsable production passait 4 heures par semaine
                à consolider les chiffres provenant de l&apos;ERP, de fichiers Excel et de fiches
                papier. Les problèmes étaient découverts avec 5 jours de retard.
              </p>
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  Avant
                </h4>
                {[
                  'Reporting disponible à J+5 seulement',
                  '4 heures de compilation manuelle par semaine',
                  'Données souvent incohérentes entre les sources',
                  'Aucune alerte sur les dérives de production',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-red-400 mt-0.5 text-sm">&#x2717;</span>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Résultats */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Les résultats</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Nous avons connecté les sources de données existantes, construit une base
                centralisée et déployé des tableaux de bord Metabase en temps réel. Le projet a
                duré 8 semaines, formation des équipes incluse.
              </p>
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-breton-emerald">
                  Après
                </h4>
                {[
                  'Données disponibles en temps réel (J+0)',
                  '4 heures par semaine rendues au responsable production',
                  'Alertes automatiques sur les anomalies',
                  '2 arrêts de ligne évités dès le premier mois',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 text-breton-emerald shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-lg bg-breton-emerald px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-white">J+0</p>
                  <p className="text-xs text-white/70">Fraîcheur données</p>
                </div>
                <div className="rounded-lg bg-slate-100 px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-breton-emerald">-4h/sem</p>
                  <p className="text-xs text-slate-500">Temps gagné</p>
                </div>
                <div className="rounded-lg bg-slate-100 px-4 py-3 text-center">
                  <p className="text-2xl font-bold text-breton-emerald">3 mois</p>
                  <p className="text-xs text-slate-500">ROI atteint</p>
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

      {/* Process rapide */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comment se passe un projet Power BI
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              De l&apos;expression du besoin au tableau de bord en production, comptez 4 à 8
              semaines. Voici les grandes étapes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Cadrage',
                description:
                  'On identifie les KPIs prioritaires, les sources de données disponibles et les utilisateurs cibles.',
                duration: '1 semaine',
              },
              {
                step: '02',
                title: 'Connexion',
                description:
                  'On connecte vos sources (ERP, fichiers, bases) et on structure un modèle de données propre.',
                duration: '1-2 semaines',
              },
              {
                step: '03',
                title: 'Construction',
                description:
                  'On construit les tableaux de bord, on itère avec vos équipes, on ajuste jusqu&apos;à ce que ce soit utile.',
                duration: '2-3 semaines',
              },
              {
                step: '04',
                title: 'Formation',
                description:
                  'On forme vos équipes, on livre la documentation, et on assure un suivi post-livraison.',
                duration: '1 semaine',
              },
            ].map((item) => (
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

      {/* FAQ rapide */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
            Questions fréquentes
          </h2>
          <div className="mt-12 space-y-8">
            {POWER_BI_FAQ.map((faq) => (
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              href="/automatisation-commandes-pme"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-slate-600 leading-relaxed">
                Vous cherchez aussi à automatiser vos saisies de commandes ? Découvrez notre solution
                d&apos;automatisation des commandes pour PME.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-breton-emerald group-hover:gap-2.5 transition-all">
                Automatisation des commandes
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/consultant-data-lorient"
              className="group rounded-2xl border border-breton-sand bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-slate-600 leading-relaxed">
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
