import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Quote,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Users,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Cas clients IA & automatisation PME Bretagne',
  description:
    'Résultats concrets de nos missions IA et automatisation : PME agroalimentaires, métallurgie, logistique en Bretagne. Gains de temps, fiabilité des données, tableaux de bord temps réel.',
  keywords:
    'cas clients IA PME Bretagne, résultats automatisation industrie Bretagne, témoignages IA PME Lorient, success stories data Morbihan',
  openGraph: {
    title: 'Cas clients IA & automatisation PME Bretagne — balise-ia',
    description:
      'Des résultats concrets et mesurables chez nos clients PME industriels en Bretagne.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://www.balise-ia.fr/cas-clients',
  },
};

const CASE_STUDIES = [
  {
    sector: 'Industrie agroalimentaire',
    location: 'Morbihan (56)',
    employees: '45 salariés',
    duration: '6 semaines',
    // AVANT
    beforeState: {
      description:
        "L'équipe ADV recevait les commandes par email (PDF, Excel) et les ressaisissait manuellement dans l'ERP. Processus lent, source d'erreurs, et impossible de prioriser les urgences.",
      painPoints: [
        '2h de ressaisie par jour pour 3 personnes',
        '5-10 erreurs de saisie par semaine',
        'Délai de traitement commande : 4h en moyenne',
        'Aucune alerte sur les commandes urgentes',
      ],
    },
    // INTERVENTION
    intervention: {
      description: 'Automatisation complète du flux de commandes entrantes.',
      actions: [
        'Extraction automatique des données des PDF et Excel reçus par email',
        'Validation et enrichissement automatique (codes articles, conditions)',
        "Injection directe dans l'ERP sans ressaisie",
        "Système d'alertes sur les commandes urgentes ou hors seuils",
      ],
      tools: ['Python', 'API ERP', 'Email automation'],
    },
    // APRÈS
    afterState: {
      description:
        "Les commandes sont traitées automatiquement en quelques minutes. L'équipe ADV peut se concentrer sur la relation client et les cas complexes.",
      results: [
        '80% du temps de traitement éliminé',
        'Zéro erreur de saisie depuis 6 mois',
        'Délai de traitement : 15 minutes',
        'Réactivité client multipliée par 2',
      ],
    },
    // TÉMOIGNAGE
    testimonial:
      "On a récupéré 2 heures par jour. L'équipe peut enfin se concentrer sur la relation client plutôt que sur la saisie. Et surtout, on n'a plus d'erreurs qui créaient des litiges avec les clients.",
    author: 'Marie Lebreton',
    role: 'Responsable ADV',
    metrics: [
      { label: 'Temps gagné', value: '2h/jour', highlight: true },
      { label: 'Erreurs', value: '0' },
      { label: 'ROI', value: '4 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1581091012184-0f28d7c8e6fd?w=800&q=80',
  },
  {
    sector: 'Métallurgie',
    location: 'Finistère (29)',
    employees: '80 salariés',
    duration: '8 semaines',
    beforeState: {
      description:
        'Le responsable production passait son vendredi après-midi à compiler des données de différentes sources pour produire un reporting hebdomadaire. Les problèmes de production étaient découverts avec 5 jours de retard.',
      painPoints: [
        '4h de compilation manuelle chaque semaine',
        'Données souvent incohérentes entre sources',
        'Découverte des problèmes à J+5 minimum',
        'Pas de vision temps réel sur les encours',
      ],
    },
    intervention: {
      description: "Mise en place d'un tableau de bord production connecté en temps réel.",
      actions: [
        'Connexion aux données machines (automates, capteurs)',
        'Intégration ERP pour les ordres de fabrication',
        'Dashboard temps réel : TRS, encours, écarts',
        'Alertes automatiques sur anomalies (retards, écarts qualité)',
      ],
      tools: ['API machines', 'Python', 'Metabase', 'Alerting'],
    },
    afterState: {
      description:
        "La production est pilotée en temps réel. Les problèmes sont détectés immédiatement et corrigés avant qu'ils ne deviennent critiques.",
      results: [
        '4h/semaine de reporting économisées',
        'Problèmes détectés en temps réel',
        'Réactivité x3 sur les incidents',
        '2 arrêts de ligne évités le premier mois',
      ],
    },
    testimonial:
      'Maintenant on voit les problèmes en temps réel au lieu de les découvrir en fin de semaine. On a pu éviter plusieurs arrêts de ligne qui nous auraient coûté très cher.',
    author: 'Jean-Pierre Morin',
    role: 'Directeur de production',
    metrics: [
      { label: 'Reporting', value: '-4h/sem', highlight: true },
      { label: 'Réactivité', value: 'x3' },
      { label: 'ROI', value: '3 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6122?w=800&q=80',
  },
  {
    sector: 'Transport & Logistique',
    location: "Côtes-d'Armor (22)",
    employees: '120 salariés',
    duration: '10 semaines',
    beforeState: {
      description:
        'Chaque CODIR commençait par une discussion sur la fiabilité des chiffres. Le DAF passait son début de semaine à consolider des données provenant du TMS, de la compta et des RH.',
      painPoints: [
        'Reporting disponible à J+5 au mieux',
        'Sources non connectées entre elles',
        '30% du temps du DAF sur de la compilation',
        'Décisions retardées par manque de données fiables',
      ],
    },
    intervention: {
      description: "Création d'un data warehouse unifié et d'un dashboard direction automatisé.",
      actions: [
        'Consolidation automatique des sources (TMS, compta, RH)',
        "Construction d'un référentiel de données unique",
        'Dashboard direction avec KPIs métier',
        'Envoi automatique du rapport hebdomadaire',
      ],
      tools: ['dbt', 'Airbyte', 'PowerBI', 'Scheduling'],
    },
    afterState: {
      description:
        'Le CODIR dispose de chiffres fiables dès le lundi matin. Plus de débat sur la donnée, place aux décisions.',
      results: [
        'Reporting disponible en J+0',
        'Fiabilité des données garantie à 100%',
        'DAF libéré pour des tâches à valeur ajoutée',
        'Décisions plus rapides et plus éclairées',
      ],
    },
    testimonial:
      'Le CODIR a enfin des chiffres fiables dès le lundi matin. On peut prendre des décisions sur des données fraîches, plus sur des approximations.',
    author: 'Sophie Duval',
    role: 'DAF',
    metrics: [
      { label: 'Délai reporting', value: 'J+0', highlight: true },
      { label: 'Fiabilité', value: '100%' },
      { label: 'ROI', value: '5 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
  },
  {
    sector: 'Industrie plastique',
    location: 'Ille-et-Vilaine (35)',
    employees: '60 salariés',
    duration: '5 semaines',
    beforeState: {
      description:
        "Le suivi qualité se faisait sur des fichiers Excel partagés. Lors des audits ISO, retrouver l'historique d'un lot était un cauchemar qui mobilisait plusieurs personnes pendant des heures.",
      painPoints: [
        'Fichiers Excel non versionnés, risque de perte',
        'Traçabilité incomplète et difficile à prouver',
        'Préparation des audits : 2-3 jours de recherche',
        'Stress récurrent à chaque audit client',
      ],
    },
    intervention: {
      description: 'Digitalisation complète du suivi qualité avec traçabilité intégrée.',
      actions: [
        'Application de saisie terrain (tablettes en atelier)',
        'Traçabilité complète lot par lot',
        'Tableaux de bord qualité temps réel',
        'Export automatique pour les audits',
      ],
      tools: ['Application web', 'Base de données', 'Export PDF'],
    },
    afterState: {
      description:
        'La traçabilité est complète et instantanément accessible. Les audits se passent sereinement.',
      results: [
        'Temps de recherche divisé par 10',
        'Dernier audit ISO : 0 non-conformité',
        "Préparation d'audit : 30 minutes",
        'Confiance renforcée des clients grands comptes',
      ],
    },
    testimonial:
      "Lors du dernier audit ISO, on a pu sortir toutes les données en 5 minutes. Avant c'était des heures de recherche dans les classeurs et les fichiers.",
    author: 'Nicolas Kermarrec',
    role: 'Responsable Qualité',
    metrics: [
      { label: 'Temps recherche', value: '/10', highlight: true },
      { label: 'Audits', value: '0 NC' },
      { label: 'ROI', value: '6 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    sector: 'Négoce B2B',
    location: 'Loire-Atlantique (44)',
    employees: '35 salariés',
    duration: '7 semaines',
    beforeState: {
      description:
        "Les commerciaux vendaient sans vraiment connaître la rentabilité de leurs affaires. Le dirigeant suspectait que certains clients coûtaient de l'argent, mais impossible de le prouver.",
      painPoints: [
        'Aucune visibilité sur les marges par client',
        'Décisions commerciales au feeling',
        'Pas de segmentation rentable/non rentable',
        'Effort commercial mal réparti',
      ],
    },
    intervention: {
      description: "Construction d'un outil d'analyse de rentabilité client et produit.",
      actions: [
        "Connexion à l'ERP pour récupérer les données ventes",
        'Calcul des coûts complets par client et produit',
        'Dashboard marge par client, famille, commercial',
        'Alertes sur les marges qui passent sous un seuil',
      ],
      tools: ['API ERP', 'Python', 'Metabase', 'Alerting'],
    },
    afterState: {
      description:
        'La rentabilité est transparente. Les commerciaux peuvent prioriser les bons clients et renégocier ou arrêter les contrats perdants.',
      results: [
        '+3 points de marge moyenne identifiés',
        '20% des clients étaient en réalité non rentables',
        'Renégociation ou arrêt de 15 contrats',
        'Effort commercial réalloué sur les meilleurs clients',
      ],
    },
    testimonial:
      "On a découvert que 20% de nos clients nous coûtaient de l'argent. On a pu renégocier ou arrêter certains contrats. La marge globale a augmenté de 3 points.",
    author: 'Franck Le Bras',
    role: 'Directeur Commercial',
    metrics: [
      { label: 'Marge', value: '+3 pts', highlight: true },
      { label: 'Visibilité', value: '100%' },
      { label: 'ROI', value: '2 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  },
];

const STATS = [
  { value: '5', label: 'Secteurs industriels couverts' },
  { value: '48h', label: 'Délai de première réponse' },
  { value: '100%', label: 'Projets livrés en Bretagne' },
];

export default function CasClientsPage() {
  return (
    <>
      <Hero
        title={'Des résultats concrets\net mesurables'}
        subtitle="Découvrez comment nous avons aidé des PME bretonnes à automatiser leurs flux de données et améliorer leur pilotage."
      />

      {/* Stats */}
      <section className="border-b border-slate-200 bg-slate-50/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-breton-emerald">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {CASE_STUDIES.map((caseStudy, index) => (
              <article key={index} className="relative">
                {/* Header avec image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <Image
                      src={caseStudy.image}
                      alt={`Cas client ${caseStudy.sector}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 bg-breton-emerald text-white rounded-full text-sm font-medium">
                        {caseStudy.sector}
                      </span>
                    </div>
                  </div>

                  {/* Infos générales */}
                  <div
                    className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1E2922] mb-4">
                      {caseStudy.sector}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-[#64756C]">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" />
                        {caseStudy.employees}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {caseStudy.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        Projet : {caseStudy.duration}
                      </span>
                    </div>

                    {/* Métriques clés */}
                    <div className="mt-6 flex flex-wrap gap-4">
                      {caseStudy.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className={`px-4 py-3 rounded-lg ${metric.highlight ? 'bg-breton-emerald text-white' : 'bg-[#F8FAF9] border border-[#E2E8E5]'}`}
                        >
                          <p
                            className={`text-2xl font-bold ${metric.highlight ? 'text-[#74C69D]' : 'text-breton-emerald'}`}
                          >
                            {metric.value}
                          </p>
                          <p
                            className={`text-xs ${metric.highlight ? 'text-white/70' : 'text-[#64756C]'}`}
                          >
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contenu AVANT / INTERVENTION / APRÈS */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* AVANT */}
                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-red-700 uppercase tracking-wide mb-4">
                      <AlertTriangle className="h-4 w-4" />
                      Avant
                    </h4>
                    <p className="text-[#334139] text-sm mb-4">
                      {caseStudy.beforeState.description}
                    </p>
                    <ul className="space-y-2">
                      {caseStudy.beforeState.painPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                          <span className="text-red-400 mt-1">✗</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* INTERVENTION */}
                  <div className="bg-[#F8FAF9] rounded-xl p-6 border border-[#E2E8E5]">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-breton-emerald uppercase tracking-wide mb-4">
                      <Wrench className="h-4 w-4" />
                      Notre intervention
                    </h4>
                    <p className="text-[#334139] text-sm mb-4">
                      {caseStudy.intervention.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {caseStudy.intervention.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334139]">
                          <CheckCircle className="h-4 w-4 text-breton-emerald shrink-0 mt-0.5" />
                          {action}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {caseStudy.intervention.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 bg-breton-emerald/10 text-breton-emerald text-xs font-medium rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* APRÈS */}
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-700 uppercase tracking-wide mb-4">
                      <TrendingUp className="h-4 w-4" />
                      Après
                    </h4>
                    <p className="text-[#334139] text-sm mb-4">
                      {caseStudy.afterState.description}
                    </p>
                    <ul className="space-y-2">
                      {caseStudy.afterState.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-emerald-800">
                          <span className="text-emerald-500 mt-1">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Témoignage */}
                <div className="mt-8 bg-breton-emerald rounded-xl p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-[#74C69D]/30 shrink-0" />
                    <div>
                      <blockquote className="text-white text-lg leading-relaxed mb-4">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#74C69D]/20 flex items-center justify-center">
                          <span className="text-[#74C69D] font-bold">
                            {caseStudy.author
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{caseStudy.author}</p>
                          <p className="text-sm text-white/60">{caseStudy.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Séparateur */}
                {index < CASE_STUDIES.length - 1 && (
                  <div className="mt-16 border-b border-[#E2E8E5]" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-breton-navy">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Votre situation ressemble à l&apos;une de ces problématiques ?
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Faites le point sur votre maturité data en 3 minutes et découvrez les projets adaptés à
            votre contexte.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-breton-emerald hover:bg-white/90 h-13 px-8 text-base font-semibold"
            >
              <Link href="/audit-ia" className="gap-2">
                Faire mon audit IA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base"
            >
              <Link href="/contact">Échanger avec nous</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/50">contact@balise-ia.fr — Lorient, Bretagne</p>
        </div>
      </section>
    </>
  );
}
