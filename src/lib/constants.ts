export const SITE_CONFIG = {
  name: 'Armor Analytics',
  tagline: 'Data & IA pour PME industrielles bretonnes',
  description:
    "Armor Analytics accompagne les PME industrielles bretonnes dans la structuration de leurs données et l'intégration de l'IA. Audit, automatisation, POC IA métier.",
  url: 'https://armor-analytics.fr',
  email: 'contact@armor-analytics.fr',
  location: {
    region: 'Bretagne',
    city: 'Lorient',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/armor-analytics',
  },
  calendly: 'CALENDLY_URL', // Remplacer par l'URL Calendly réelle
};

export const SERVICES = [
  {
    id: 'audit',
    title: 'Audit & Diagnostic',
    shortTitle: 'Audit',
    description:
      "Cartographie de vos process et données pour identifier les points de friction et opportunités d'optimisation.",
    benefits: [
      'Vision claire de vos flux de données actuels',
      'Identification des inefficacités et doublons',
      'Priorisation des chantiers à forte valeur ajoutée',
      'Recommandations concrètes et actionnables',
    ],
    deliverables: [
      'Cartographie des flux de données',
      "Rapport d'audit avec scoring de maturité",
      'Feuille de route priorisée',
      'Présentation aux équipes',
    ],
    duration: '2 à 4 semaines',
    prerequisites: [
      'Accès aux outils existants (ERP, Excel, etc.)',
      'Disponibilité des équipes métier pour les entretiens',
    ],
    icon: 'Search',
  },
  {
    id: 'structuration',
    title: 'Structuration & Automatisation',
    shortTitle: 'Structuration',
    description:
      'Mise en place de pipelines de données robustes pour centraliser, nettoyer et automatiser vos flux.',
    benefits: [
      'Données fiables et accessibles en temps réel',
      'Réduction drastique des tâches manuelles',
      'Reporting automatisé et tableaux de bord',
      'Base solide pour les projets IA futurs',
    ],
    deliverables: [
      'Architecture de données documentée',
      'Pipelines ETL opérationnels',
      'Tableaux de bord de suivi',
      'Documentation et formation',
    ],
    duration: '4 à 8 semaines',
    prerequisites: ['Audit préalable réalisé ou équivalent', 'Définition des KPIs prioritaires'],
    icon: 'Database',
  },
  {
    id: 'poc-ia',
    title: 'POC IA Métier',
    shortTitle: 'POC IA',
    description:
      "Prototype rapide d'une solution IA sur un cas d'usage précis pour valider le potentiel avant investissement.",
    benefits: [
      'Validation concrète de la valeur IA',
      'Risque financier limité',
      'Apprentissage et montée en compétence des équipes',
      'Base pour un déploiement à plus grande échelle',
    ],
    deliverables: [
      'Prototype fonctionnel sur données réelles',
      'Mesure des performances et ROI potentiel',
      'Documentation technique',
      "Recommandations pour le passage à l'échelle",
    ],
    duration: '4 à 6 semaines',
    prerequisites: ['Données structurées et accessibles', "Cas d'usage défini et sponsorisé"],
    icon: 'Sparkles',
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Audit',
    description: 'Comprendre vos process, données et enjeux métier.',
  },
  {
    step: 2,
    title: 'Structuration',
    description: 'Centraliser et fiabiliser vos données.',
  },
  {
    step: 3,
    title: 'POC',
    description: "Valider la valeur sur un cas d'usage concret.",
  },
  {
    step: 4,
    title: 'Déploiement',
    description: 'Industrialiser et accompagner dans la durée.',
  },
];

export const PROJECTS = [
  {
    id: 'commandes-ocr',
    title: 'Automatisation du traitement des commandes',
    sector: 'Industrie agroalimentaire',
    context:
      'Une PME agroalimentaire recevait ses commandes par email, fax et téléphone. La ressaisie manuelle générait des erreurs et mobilisait 2 ETP.',
    approach: [
      'Audit des flux de commandes entrants',
      "Mise en place d'une solution OCR pour extraction automatique",
      "Pipeline de validation et injection dans l'ERP",
      'Interface de vérification pour les cas ambigus',
    ],
    deliverables: [
      'Solution OCR configurée et entraînée',
      "Pipeline d'intégration ERP",
      'Dashboard de suivi des commandes',
      'Documentation et formation',
    ],
    value: 'Réduction de 80% du temps de traitement, quasi-élimination des erreurs de saisie.',
    tags: ['OCR', 'Automatisation', 'ERP'],
  },
  {
    id: 'pilotage-production',
    title: 'Centralisation et pilotage des données de production',
    sector: 'Industrie métallurgique',
    context:
      "Les données de production étaient dispersées entre Excel, l'ERP et des fichiers papier. Aucune vision consolidée n'existait.",
    approach: [
      'Cartographie des sources de données',
      "Conception d'un entrepôt de données unifié",
      'Automatisation de la collecte depuis les différentes sources',
      'Création de tableaux de bord temps réel',
    ],
    deliverables: [
      'Data warehouse opérationnel',
      'Connecteurs vers ERP et fichiers',
      'Tableaux de bord Power BI / Metabase',
      'Alertes automatisées',
    ],
    value:
      'Visibilité temps réel sur la production, détection précoce des dérives, gain de 4h/semaine pour le responsable production.',
    tags: ['Data Engineering', 'Reporting', 'ERP'],
  },
  {
    id: 'optimisation-dechets',
    title: 'Optimisation des flux de déchets et logistique',
    sector: 'Industrie plastique',
    context:
      'La gestion des déchets de production manquait de visibilité. Les tournées de collecte étaient fixes, générant surcoûts et inefficacités.',
    approach: [
      'Analyse des données historiques de production de déchets',
      'Modèle de classification et prédiction des volumes',
      "Outil d'aide à la décision pour planification des tournées",
      'Intégration avec le planning de production',
    ],
    deliverables: [
      'Modèle prédictif des volumes de déchets',
      'Application de planification des tournées',
      'Reporting environnemental automatisé',
      'Documentation et formation',
    ],
    value:
      'Réduction de 25% des coûts de collecte, meilleure valorisation des matières, conformité réglementaire facilitée.',
    tags: ['IA', 'Optimisation', 'Logistique'],
  },
];

export const FAQ_ITEMS = [
  {
    question: "Quelle est la taille d'entreprise visée par vos services ?",
    answer:
      'Nous accompagnons principalement les PME industrielles de 10 à 50 salariés en Bretagne. Notre approche est adaptée aux contraintes et budgets de ces structures : pragmatisme, résultats rapides, et investissement progressif.',
  },
  {
    question: 'Comment fonctionne votre modèle de collectif ?',
    answer:
      "Armor Analytics est un réseau de spécialistes indépendants (data engineering, data science, automatisation, IA) que nous mobilisons selon les besoins de chaque projet. Vous bénéficiez d'expertises pointues sans les coûts fixes d'une équipe permanente.",
  },
  {
    question: 'Quels sont les prérequis pour démarrer un projet ?',
    answer:
      "Le minimum : des données (même dans Excel), un sponsor interne, et la volonté d'avancer. Nous commençons toujours par un audit pour évaluer la faisabilité et prioriser les actions.",
  },
  {
    question: 'Combien coûte un projet type ?',
    answer:
      "Chaque projet est dimensionné selon vos besoins et contraintes. Nous proposons des missions courtes (audit de quelques jours) jusqu'à des accompagnements de plusieurs mois. Contactez-nous pour un devis personnalisé.",
  },
  {
    question: 'Quelle différence avec une ESN classique ?',
    answer:
      'Nous sommes un collectif agile, pas une ESN. Pas de commerciaux, pas de marges pyramidales. Vous travaillez directement avec les experts qui réalisent le projet. Plus de réactivité, plus de valeur.',
  },
  {
    question: "Comment mesurez-vous le succès d'un projet ?",
    answer:
      "Nous définissons ensemble des indicateurs concrets dès le départ : temps gagné, erreurs évitées, coûts réduits, décisions améliorées. Chaque projet fait l'objet d'un bilan chiffré.",
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/projets', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
];
