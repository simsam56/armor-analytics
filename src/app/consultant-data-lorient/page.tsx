import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  CheckCircle,
  Search,
  BarChart3,
  Brain,
  GraduationCap,
  ArrowRight,
  Users,
  Building2,
  Handshake,
  Compass,
} from 'lucide-react';
import { Hero, CtaContact } from '@/components/sections';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Consultant data et IA à Lorient',
  description:
    'Consultant data et IA basé à Lorient, interventions sur site en Bretagne. Audit data, tableaux de bord, automatisation et formation pour PME industrielles et réseaux. Collectif senior, résultats mesurables.',
  keywords:
    'consultant data Lorient, consultant data Bretagne, consultant IA Lorient, consultant IA Bretagne, data scientist Lorient, expert data PME Morbihan, consultant Power BI Lorient',
  openGraph: {
    title: 'Consultant data et IA à Lorient — balise-ia',
    description:
      'Collectif data senior basé à Lorient. Audit, pilotage data, automatisation et formation pour PME bretonnes. Interventions sur site.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/consultant-data-lorient',
  },
};

const MISSIONS = [
  {
    icon: Search,
    title: 'Audit & diagnostic data',
    description:
      'Cartographier vos flux de données, identifier les tâches manuelles chronophages, chiffrer les gains potentiels. Vous repartez avec un plan d&apos;action priorisé, pas un rapport de 80 pages.',
    examples: [
      'Cartographie des flux entre ERP, Excel et outils métier',
      'Identification des ressaisies et des ruptures de données',
      'Plan d&apos;action chiffré avec ordre de priorité',
    ],
  },
  {
    icon: BarChart3,
    title: 'Tableaux de bord et pilotage',
    description:
      'Connecter vos sources de données, structurer un modèle propre et livrer des dashboards utilisables par vos équipes. Power BI, Metabase ou Looker Studio selon votre contexte.',
    examples: [
      'Dashboard production, commercial, stocks, direction',
      'Reporting automatisé envoyé par email chaque lundi',
      'Alertes sur les écarts et anomalies',
    ],
  },
  {
    icon: Brain,
    title: 'Automatisation et IA',
    description:
      'Supprimer les tâches répétitives grâce à l&apos;OCR, aux pipelines automatisés et à l&apos;IA appliquée. Chaque automatisation doit produire un gain concret et compréhensible.',
    examples: [
      'Extraction automatique de commandes (OCR)',
      'Classification et routage de documents',
      'Prévision de la demande ou des pannes',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Formation et montée en compétences',
    description:
      'Accompagner vos équipes dans la prise en main des outils, former les utilisateurs clés et transmettre les bonnes pratiques. L&apos;objectif : que vous soyez autonomes.',
    examples: [
      'Formation Power BI ou Metabase pour vos équipes',
      'Documentation et guides utilisateur',
      'Accompagnement mensuel et support',
    ],
  },
];

const LOCAL_ADVANTAGES = [
  {
    icon: Handshake,
    title: 'On se déplace sur site',
    description:
      'Les projets data qui fonctionnent commencent par une compréhension fine du terrain. On vient dans vos locaux, on observe les process, on échange avec les équipes. C&apos;est comme ça qu&apos;on identifie les vrais irritants — pas depuis un écran en visio.',
  },
  {
    icon: Building2,
    title: 'On connaît le tissu industriel breton',
    description:
      'Agroalimentaire, métallurgie, plasturgie, logistique portuaire, négoce : ce sont les secteurs dans lesquels nous intervenons depuis le début. On connaît vos ERP, vos contraintes de production, vos enjeux de conformité. Pas besoin de tout expliquer.',
  },
  {
    icon: Users,
    title: 'Un interlocuteur unique et disponible',
    description:
      'Pas de commercial qui vend et disparaît. Pas de junior envoyé sur le terrain. Vous travaillez directement avec les experts qui réalisent le projet, du diagnostic à la livraison. Et quand il y a un problème, on décroche.',
  },
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Comprendre',
    subtitle: 'Écoute terrain',
    description:
      'On part des irritants réels, des outils en place et des contraintes opérationnelles. On vient sur site, on observe, on écoute les équipes.',
  },
  {
    step: 2,
    title: 'Prioriser',
    subtitle: 'Analyse et tri',
    description:
      'On identifie les chantiers à plus fort impact, en tenant compte du retour sur effort. Pas de projets pharaoniques : on commence par ce qui rapporte vite.',
  },
  {
    step: 3,
    title: 'Déployer',
    subtitle: 'Mise en œuvre',
    description:
      'On conçoit des solutions simples, adaptées à votre niveau de maturité et à vos équipes. On itère avec vous, on ajuste en continu.',
  },
  {
    step: 4,
    title: 'Transmettre',
    subtitle: 'Autonomie',
    description:
      'On documente, on forme, et on vous laisse une solution exploitable sans dépendance excessive. Le but : que ça tourne sans nous.',
  },
];

const CITIES = [
  { name: 'Lorient', department: 'Morbihan (56)', note: 'Siège — sur place' },
  { name: 'Vannes', department: 'Morbihan (56)', note: '60 km — interventions régulières' },
  { name: 'Quimper', department: 'Finistère (29)', note: '70 km — interventions régulières' },
  { name: 'Rennes', department: 'Ille-et-Vilaine (35)', note: '150 km — interventions sur devis' },
  { name: 'Brest', department: 'Finistère (29)', note: '150 km — interventions sur devis' },
  {
    name: 'Saint-Brieuc',
    department: 'Côtes-d&apos;Armor (22)',
    note: '120 km — interventions sur devis',
  },
  {
    name: 'Saint-Malo',
    department: 'Ille-et-Vilaine (35)',
    note: '200 km — interventions sur devis',
  },
  {
    name: 'Saint-Nazaire',
    department: 'Loire-Atlantique (44)',
    note: '170 km — interventions sur devis',
  },
];

export default function ConsultantDataLorientPage() {
  return (
    <>
      <Hero
        title="Votre consultant data à Lorient"
        subtitle="Un collectif de spécialistes data et IA, basé à Lorient, qui intervient sur site dans toute la Bretagne. Audit, tableaux de bord, automatisation, formation — des solutions concrètes pour les PME industrielles."
      />

      {/* Ce qu'un consultant data fait concrètement */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Nos missions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Ce qu&apos;un consultant data fait concrètement
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Un consultant data, ce n&apos;est pas quelqu&apos;un qui parle de &ldquo;big
            data&rdquo; et de &ldquo;machine learning&rdquo; en CODIR. C&apos;est quelqu&apos;un
            qui résout des problèmes concrets : éliminer les ressaisies, fiabiliser les données,
            automatiser le reporting, rendre vos équipes plus efficaces.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {MISSIONS.map((mission) => (
              <div
                key={mission.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-emerald/10">
                    <mission.icon className="h-6 w-6 text-breton-emerald" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{mission.title}</h3>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{mission.description}</p>
                <ul className="mt-5 space-y-2">
                  {mission.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-breton-moss shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi un consultant local */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Proximité
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi choisir un consultant local
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Les projets data qui échouent ont souvent un point commun : le prestataire ne connaît
            pas le terrain. Il travaille à distance, ne comprend pas les contraintes
            opérationnelles, et livre une solution qui ne colle pas à la réalité. Nous faisons
            l&apos;inverse.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {LOCAL_ADVANTAGES.map((advantage) => (
              <div key={advantage.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-breton-navy/10">
                  <advantage.icon className="h-6 w-6 text-breton-navy" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{advantage.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
                Notre méthode
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Comprendre, Prioriser, Déployer, Transmettre
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Quatre étapes, toujours les mêmes. On ne brûle pas les étapes et on ne commence
                jamais par la solution technique. Le point de départ, c&apos;est toujours un
                irritant métier concret.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
                >
                  <Link href="/services" className="gap-2">
                    Découvrir nos offres
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-breton-emerald text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}{' '}
                      <span className="text-sm font-normal text-slate-400">
                        — {item.subtitle}
                      </span>
                    </h3>
                    <p className="mt-1 text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
            Zone d&apos;intervention
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Basés à Lorient, nous intervenons dans toute la Bretagne
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Notre siège est à Lorient (Morbihan). Nous intervenons régulièrement sur site dans
            toute la Bretagne et ponctuellement en Loire-Atlantique. Les phases de travail à
            distance sont complétées par des déplacements pour les ateliers, les formations et les
            restitutions.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CITIES.map((city) => (
              <div
                key={city.name}
                className={`rounded-xl border p-5 ${
                  city.name === 'Lorient'
                    ? 'border-breton-emerald bg-breton-emerald/5'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin
                    className={`h-4 w-4 ${city.name === 'Lorient' ? 'text-breton-emerald' : 'text-breton-copper'}`}
                  />
                  <h3 className="font-semibold text-slate-900">{city.name}</h3>
                </div>
                <p className="mt-1 text-xs text-slate-500">{city.department}</p>
                <p
                  className={`mt-2 text-sm ${city.name === 'Lorient' ? 'font-medium text-breton-emerald' : 'text-slate-600'}`}
                >
                  {city.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-breton-navy/10 bg-breton-navy/5 p-8">
            <div className="flex items-start gap-4">
              <Compass className="h-6 w-6 text-breton-navy shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Visio ou sur site, selon la phase du projet
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Les phases de cadrage et de restitution se font en présentiel. Les phases de
                  développement technique se font à distance, avec des points réguliers. C&apos;est
                  un modèle qui permet de limiter les coûts de déplacement tout en maintenant une
                  relation de proximité avec vos équipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Des PME industrielles et des réseaux bretons
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Nous travaillons principalement avec des PME de 20 à 200 salariés, dans des secteurs
              où la donnée est abondante mais mal exploitée. Voici les secteurs où nous intervenons
              le plus souvent.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                sector: 'Agroalimentaire',
                context:
                  'Commandes, traçabilité, conformité, suivi de production. Des flux de données importants et des marges faibles qui imposent l&apos;efficacité.',
              },
              {
                sector: 'Métallurgie',
                context:
                  'Suivi de production, TRS, qualité, maintenance préventive. Des données machines souvent inexploitées.',
              },
              {
                sector: 'Plasturgie',
                context:
                  'Gestion des déchets, traçabilité des lots, suivi qualité, conformité ISO. Beaucoup de données, peu de visibilité.',
              },
              {
                sector: 'Transport et logistique',
                context:
                  'Consolidation TMS/compta/RH, pilotage de flotte, optimisation des tournées, reporting direction.',
              },
              {
                sector: 'Négoce et distribution',
                context:
                  'Analyse des marges par client, segmentation, prévision de la demande, optimisation des stocks.',
              },
              {
                sector: 'Réseaux et franchises',
                context:
                  'Consolidation multi-sites, benchmarking entre points de vente, pilotage central des performances.',
              },
            ].map((item) => (
              <div
                key={item.sector}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-breton-navy">{item.sector}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.context}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-breton-emerald text-breton-emerald hover:bg-breton-emerald/5"
            >
              <Link href="/cas-clients" className="gap-2">
                Voir nos cas clients
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
