export interface CaseStudyMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudyNarrative {
  context: string;
  trigger: string;
  approach: string;
  difficulties?: string;
  firstValue: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  sector: string;
  location: string;
  employees: string;
  duration: string;
  beforeState: {
    painPoints: string[];
  };
  intervention: {
    description: string;
    actions: string[];
    tools: string[];
  };
  afterState: {
    results: string[];
  };
  testimonial: string;
  author: string;
  role: string;
  metrics: CaseStudyMetric[];
  image: string;
  narrative?: CaseStudyNarrative;
  relatedLinks?: { label: string; href: string }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'metallurgie-finistere',
    title: 'Dashboard production temps r\u00e9el — PME m\u00e9tallurgie, Finist\u00e8re',
    sector: 'Métallurgie',
    location: 'Finistère (29)',
    employees: '80 salariés',
    duration: '8 semaines',
    beforeState: {
      painPoints: [
        '4h de compilation manuelle chaque semaine',
        'Découverte des problèmes à J+5 minimum',
        'Pas de vision temps réel sur les encours',
      ],
    },
    intervention: {
      description: 'Tableau de bord production connecté en temps réel.',
      actions: [
        'Connexion aux données machines et ERP',
        'Dashboard temps réel : TRS, encours, écarts',
        'Alertes automatiques sur anomalies',
      ],
      tools: ['API machines', 'Python', 'Metabase'],
    },
    afterState: {
      results: [
        '4h/semaine de reporting économisées',
        'Problèmes détectés en temps réel',
        '2 arrêts de ligne évités le premier mois',
      ],
    },
    testimonial:
      'On voit les problèmes en temps réel au lieu de les découvrir en fin de semaine.',
    author: 'Jean-Pierre Morin',
    role: 'Directeur de production',
    metrics: [
      { label: 'Reporting', value: '-4h/sem', highlight: true },
      { label: 'Réactivité', value: 'x3' },
      { label: 'ROI', value: '3 mois' },
    ],
    image: '/metallurgie.webp',
    relatedLinks: [
      { label: 'Tableaux de bord production', href: '/data' },
      { label: 'Pilotage production m\u00e9tallurgie', href: '/pilotage-production-metallurgie' },
      { label: 'IA et automatisation', href: '/ia' },
    ],
    narrative: {
      context:
        'Cette PME de métallurgie fine dans le Finistère (80 salariés, 2 lignes de production) avait un problème classique : les données de production existaient, mais personne ne les voyait au bon moment. Le responsable production passait chaque vendredi après-midi à compiler manuellement les chiffres de la semaine — TRS, encours, écarts qualité — depuis l\u2019ERP (GPAO), des fichiers Excel et des fiches papier remplies par les opérateurs.',
      trigger:
        'Le déclic est venu quand un problème qualité récurrent sur une ligne n\u2019a été détecté qu\u2019au bout de 5 jours — après avoir produit 3 lots défectueux. Le directeur de production a réalisé que son reporting à J+5 était un rétroviseur, pas un tableau de bord. Il a cherché quelqu\u2019un qui comprenne la réalité d\u2019un atelier de production — pas un éditeur de logiciel qui vend une solution générique.',
      approach:
        'On a commencé par 3 jours sur site pour cartographier les sources de données réelles : ce qui était dans la GPAO, ce qui était dans Excel, et ce qui n\u2019était que dans la tête du chef d\u2019atelier. Ensuite, on a construit un pipeline de collecte automatique (ETL Python) qui aspire les données de la GPAO, des fichiers terrain et des saisies opérateurs. Le tout alimente une base PostgreSQL et des dashboards Metabase consultables en temps réel sur un écran dans l\u2019atelier.',
      difficulties:
        'Le principal obstacle n\u2019était pas technique — c\u2019était l\u2019adoption. Les opérateurs avaient l\u2019habitude de leurs fiches papier. On a travaillé avec le chef d\u2019atelier pour que la saisie soit aussi rapide que le papier (tablette, 3 champs maximum). Au bout de 2 semaines, le papier a disparu naturellement.',
      firstValue:
        'Dès la troisième semaine, le responsable production a détecté une dérive de cadence sur la ligne 2 — un problème qui, normalement, n\u2019aurait été visible qu\u2019en fin de semaine. Intervention immédiate, zéro lot défectueux. C\u2019est à ce moment que toute l\u2019équipe a compris la valeur du temps réel. Aujourd\u2019hui, le vendredi après-midi est consacré à l\u2019analyse et à l\u2019amélioration continue — plus à la compilation.',
    },
  },
  {
    slug: 'agroalimentaire-morbihan',
    title: 'Automatisation des commandes — Agroalimentaire',
    sector: 'Agroalimentaire',
    location: 'Morbihan (56)',
    employees: '45 salariés',
    duration: '6 semaines',
    beforeState: {
      painPoints: [
        '2h de ressaisie par jour pour 3 personnes',
        '5-10 erreurs de saisie par semaine',
        'Délai de traitement commande : 4h en moyenne',
      ],
    },
    intervention: {
      description: 'Automatisation du flux de commandes entrantes.',
      actions: [
        'Extraction automatique des données des PDF et emails',
        'Validation et injection directe dans l\u2019ERP',
        'Alertes sur les commandes urgentes',
      ],
      tools: ['Python', 'API ERP', 'Email automation'],
    },
    afterState: {
      results: [
        '80% du temps de traitement éliminé',
        'Zéro erreur de saisie depuis 6 mois',
        'Délai de traitement : 15 minutes',
      ],
    },
    testimonial:
      'On a récupéré 2 heures par jour. L\u2019équipe peut enfin se concentrer sur la relation client.',
    author: 'Marie Lebreton',
    role: 'Responsable ADV',
    metrics: [
      { label: 'Temps gagné', value: '2h/jour', highlight: true },
      { label: 'Erreurs', value: '0' },
      { label: 'ROI', value: '4 mois' },
    ],
    image: '/agroalimentaire.jpg',
    relatedLinks: [
      { label: 'IA et automatisation', href: '/ia' },
      { label: 'IA pour l\u2019agroalimentaire breton', href: '/ia-agroalimentaire-bretagne' },
      { label: 'Tableaux de bord production', href: '/data' },
    ],
  },
  {
    slug: 'transport-logistique-cotes-armor',
    title: 'Reporting automatisé en J+0 — Transport & Logistique',
    sector: 'Transport & Logistique',
    location: "Côtes-d'Armor (22)",
    employees: '120 salariés',
    duration: '10 semaines',
    beforeState: {
      painPoints: [
        'Reporting disponible à J+5 au mieux',
        '30% du temps du DAF sur de la compilation',
        'Sources non connectées entre elles',
      ],
    },
    intervention: {
      description: 'Data warehouse unifié + dashboard direction automatisé.',
      actions: [
        'Consolidation automatique des sources (TMS, compta, RH)',
        'Dashboard direction avec KPIs métier',
        'Envoi automatique du rapport hebdomadaire',
      ],
      tools: ['dbt', 'Airbyte', 'Power BI'],
    },
    afterState: {
      results: [
        'Reporting disponible en J+0',
        'Fiabilité des données à 100%',
        'DAF libéré pour des tâches à valeur ajoutée',
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
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    relatedLinks: [
      { label: 'IA et automatisation', href: '/ia' },
      { label: 'Tableaux de bord production', href: '/data' },
    ],
  },
  {
    slug: 'industrie-plastique-ille-et-vilaine',
    title: 'Traçabilité qualité digitalisée — Industrie plastique',
    sector: 'Industrie plastique',
    location: 'Ille-et-Vilaine (35)',
    employees: '60 salariés',
    duration: '5 semaines',
    beforeState: {
      painPoints: [
        'Traçabilité incomplète, difficile à prouver',
        'Préparation des audits : 2-3 jours de recherche',
        'Fichiers Excel non versionnés',
      ],
    },
    intervention: {
      description: 'Digitalisation du suivi qualité avec traçabilité intégrée.',
      actions: [
        'Application de saisie terrain (tablettes)',
        'Traçabilité complète lot par lot',
        'Export automatique pour les audits',
      ],
      tools: ['Application web', 'Base de données', 'Export PDF'],
    },
    afterState: {
      results: [
        'Temps de recherche divisé par 10',
        'Dernier audit ISO : 0 non-conformité',
        'Préparation d\u2019audit : 30 minutes',
      ],
    },
    testimonial:
      'Lors du dernier audit ISO, on a pu sortir toutes les données en 5 minutes.',
    author: 'Nicolas Kermarrec',
    role: 'Responsable Qualité',
    metrics: [
      { label: 'Temps recherche', value: '/10', highlight: true },
      { label: 'Audits', value: '0 NC' },
      { label: 'ROI', value: '6 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    relatedLinks: [
      { label: 'Tableaux de bord production', href: '/data' },
      { label: 'IA et automatisation', href: '/ia' },
    ],
  },
  {
    slug: 'negoce-b2b-loire-atlantique',
    title: 'Analyse de rentabilité client — Négoce B2B',
    sector: 'Négoce B2B',
    location: 'Loire-Atlantique (44)',
    employees: '35 salariés',
    duration: '7 semaines',
    beforeState: {
      painPoints: [
        'Aucune visibilité sur les marges par client',
        'Décisions commerciales au feeling',
        'Effort commercial mal réparti',
      ],
    },
    intervention: {
      description: 'Analyse de rentabilité client et produit.',
      actions: [
        'Connexion à l\u2019ERP pour les données ventes',
        'Dashboard marge par client, famille, commercial',
        'Alertes sur les marges sous seuil',
      ],
      tools: ['API ERP', 'Python', 'Metabase'],
    },
    afterState: {
      results: [
        '+3 points de marge moyenne',
        '20% des clients étaient non rentables',
        '15 contrats renégociés ou arrêtés',
      ],
    },
    testimonial:
      'On a découvert que 20% de nos clients nous coûtaient de l\u2019argent. La marge a augmenté de 3 points.',
    author: 'Franck Le Bras',
    role: 'Directeur Commercial',
    metrics: [
      { label: 'Marge', value: '+3 pts', highlight: true },
      { label: 'Visibilité', value: '100%' },
      { label: 'ROI', value: '2 mois' },
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    relatedLinks: [
      { label: 'Tableaux de bord production', href: '/data' },
      { label: 'IA et automatisation', href: '/ia' },
    ],
  },
];
