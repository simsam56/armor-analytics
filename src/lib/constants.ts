export const SITE_CONFIG = {
  name: 'Balise IA',
  tagline: 'Intelligence artificielle & automatisation pour PME bretonnes',
  description:
    'IA utile, pragmatique, orientée terrain et résultats mesurables. Automatisation, pilotage par la donnée et intelligence artificielle pour dirigeants de PME à Lorient, Rennes et en Bretagne.',
  url: 'https://balise-ia.fr',
  email: 'contact@balise-ia.fr',
  phone: '06 XX XX XX XX',
  location: {
    region: 'Bretagne',
    city: 'Lorient',
    secondaryCity: 'Rennes',
    department: 'Morbihan',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/balise-ia',
  },
  calendly: 'balise-ia/diagnostic',
};

// Chiffres clés V5
export const KEY_METRICS = {
  timesSaved: '4h',
  timesSavedContext: 'gagnées par semaine en moyenne',
  errorReduction: '80%',
  errorReductionContext: 'de ressaisies éliminées',
  projectsDelivered: '20+',
  projectsDeliveredContext: 'projets livrés en Bretagne',
  responseTime: '48h',
  responseTimeContext: 'pour une première réponse',
};

// Stack et outils maîtrisés
export const TECH_STACK = {
  erp: ['Sage', 'Cegid', 'EBP', 'Divalto', 'SAP Business One'],
  data: ['Excel', 'Google Sheets', 'CSV', 'bases SQL'],
  bi: ['Power BI', 'Metabase', 'Looker Studio'],
  automation: ['Python', 'Make (Integromat)', 'n8n', 'Power Automate'],
  ia: ['OpenAI', 'Claude', 'OCR', 'ML classique'],
  cloud: ['Azure', 'AWS', 'OVH', 'Scaleway'],
};

// Secteurs servis
export const SECTORS = [
  { name: 'Agroalimentaire', icon: 'Factory' },
  { name: 'Métallurgie', icon: 'Cog' },
  { name: 'Plasturgie', icon: 'Package' },
  { name: 'Logistique', icon: 'Truck' },
  { name: 'Distribution', icon: 'Store' },
];

// Les 3 offres V5 restructurées pour SEO
export const SERVICES_V5 = [
  {
    id: 'diagnostic-ia',
    step: 1,
    title: 'Diagnostic IA & données',
    shortTitle: 'Diagnostic IA',
    tagline: 'Identifier où l\'IA peut vous faire gagner du temps',
    description:
      'On cartographie vos process et identifie les cas d\'usage IA pertinents pour votre PME. Vous repartez avec une vision claire des priorités et du ROI attendu.',
    forWho: 'Pour les dirigeants qui veulent savoir si l\'IA est pertinente pour leur entreprise.',
    whatYouGet: [
      'Cartographie de vos flux de données',
      'Identification des cas d\'usage IA pertinents',
      'Estimation ROI par chantier',
      'Feuille de route priorisée',
    ],
    deliverables: [
      'Schéma des flux de données (PDF/Miro)',
      'Liste des cas d\'usage IA identifiés',
      'Document ROI chiffré',
      'Présentation de restitution (1h)',
    ],
    duration: '1 à 2 semaines',
    priceRange: '2 000 € – 5 000 € HT',
    icon: 'Search',
    cta: 'Demander un diagnostic IA',
    isEntryPoint: true,
  },
  {
    id: 'automatisation',
    step: 2,
    title: 'Automatisation & intégration',
    shortTitle: 'Automatisation',
    tagline: 'Supprimer les ressaisies, fiabiliser vos données',
    description:
      'On connecte vos outils existants (ERP, Excel, emails) et on automatise les tâches répétitives. Tableaux de bord fiables pour piloter votre activité.',
    forWho: 'Pour les PME qui veulent gagner du temps sans tout changer.',
    whatYouGet: [
      'Fin des ressaisies manuelles',
      'Données fiables et à jour',
      'Tableaux de bord temps réel',
      'Équipes formées et autonomes',
    ],
    deliverables: [
      'Pipelines de données automatisés',
      'Connecteurs ERP/Excel/API',
      'Tableaux de bord Power BI ou Metabase',
      'Documentation + formation',
    ],
    duration: '3 à 8 semaines',
    priceRange: '8 000 € – 25 000 € HT',
    icon: 'Zap',
    cta: 'Discuter automatisation',
    isEntryPoint: false,
  },
  {
    id: 'ia-appliquee',
    step: 3,
    title: 'IA appliquée',
    shortTitle: 'IA Métier',
    tagline: 'L\'IA uniquement quand elle fait mieux qu\'un process classique',
    description:
      'On déploie une solution IA ciblée : OCR intelligent, prévision, classification, recherche intelligente. Pas de gadgets, des résultats mesurables.',
    forWho: 'Pour les PME avec un cas d\'usage identifié où l\'IA apporte un vrai gain.',
    whatYouGet: [
      'Traitement automatique de documents',
      'Prévisions fiables (stocks, charge, volumes)',
      'Aide à la décision basée sur vos données',
      'Solution industrialisée, pas un POC jetable',
    ],
    deliverables: [
      'Modèle IA entraîné sur vos données',
      'Interface utilisateur métier',
      'Métriques de performance',
      'Documentation + maintenance',
    ],
    duration: '4 à 10 semaines',
    priceRange: '15 000 € – 40 000 € HT',
    icon: 'Brain',
    cta: 'Explorer les possibilités IA',
    isEntryPoint: false,
    note: 'Proposé uniquement après un diagnostic ou un projet d\'automatisation.',
  },
];

// Cas d'usage IA V5 (remplace PROJECTS)
export const USE_CASES = [
  {
    id: 'automatisation-adv',
    title: 'Automatisation ADV / commandes',
    problem: 'Ressaisie manuelle des commandes reçues par email, fax ou téléphone. Erreurs fréquentes, retards de traitement.',
    solution: 'OCR intelligent pour extraire les données des commandes. Injection automatique dans l\'ERP. Interface de vérification pour les cas ambigus.',
    result: '80% du temps de traitement éliminé. Erreurs quasi nulles.',
    duration: '4-6 semaines',
    sectors: ['Agroalimentaire', 'Distribution', 'Industrie'],
    tags: ['OCR', 'Automatisation', 'ERP'],
  },
  {
    id: 'pilotage-production',
    title: 'Pilotage production temps réel',
    problem: 'Données dispersées entre ERP, Excel et fiches papier. Reporting manuel chronophage. Aucune visibilité temps réel.',
    solution: 'Centralisation des données dans un entrepôt unifié. Tableaux de bord temps réel. Alertes automatiques sur les dérives.',
    result: '4h/semaine gagnées. Visibilité temps réel sur les encours.',
    duration: '4-8 semaines',
    sectors: ['Métallurgie', 'Plasturgie', 'Mécanique'],
    tags: ['Reporting', 'Production', 'Data'],
  },
  {
    id: 'reporting-direction',
    title: 'Reporting direction automatisé',
    problem: 'Le DAF ou le dirigeant passe des heures à consolider des tableaux Excel pour les réunions.',
    solution: 'Tableaux de bord automatisés connectés aux sources. Génération automatique des rapports mensuels.',
    result: 'Reporting en temps réel au lieu de J+5. Zéro temps de compilation.',
    duration: '3-5 semaines',
    sectors: ['Tous secteurs'],
    tags: ['Reporting', 'Direction', 'KPI'],
  },
  {
    id: 'optimisation-couts',
    title: 'Optimisation des coûts par la donnée',
    problem: 'Coûts non maîtrisés (déchets, énergie, logistique). Décisions basées sur l\'intuition plutôt que les données.',
    solution: 'Analyse des données historiques. Modèle de prévision. Outil d\'aide à la décision.',
    result: '15-25% de réduction des coûts ciblés.',
    duration: '6-10 semaines',
    sectors: ['Industrie', 'Logistique'],
    tags: ['Prévision', 'Optimisation', 'Coûts'],
  },
  {
    id: 'gestion-documents',
    title: 'Gestion intelligente des documents',
    problem: 'Documents éparpillés, difficiles à retrouver. Classification manuelle chronophage.',
    solution: 'OCR et classification automatique des documents. Recherche intelligente par contenu.',
    result: 'Documents retrouvés en secondes au lieu de minutes. Classification automatique.',
    duration: '4-8 semaines',
    sectors: ['Tous secteurs'],
    tags: ['OCR', 'Classification', 'Documents'],
  },
];

// FAQ V5 avec focus IA Bretagne
export const FAQ_ITEMS = [
  {
    category: 'Intelligence artificielle',
    question: 'L\'IA est-elle vraiment utile pour une PME ?',
    answer:
      'Oui, mais pas n\'importe comment. L\'IA est pertinente quand elle répond à un problème concret : automatiser des tâches répétitives, exploiter des données inexploitées, aider à la décision. On ne propose jamais d\'IA gadget. On commence toujours par un diagnostic pour identifier si l\'IA est la bonne réponse à votre problème.',
  },
  {
    category: 'Intelligence artificielle',
    question: 'Quels types d\'IA proposez-vous ?',
    answer:
      'On déploie des solutions IA pragmatiques : OCR intelligent (extraction de données depuis documents), prévision statistique (stocks, charge, volumes), classification automatique, recherche intelligente. Pas de deep learning inutilement complexe : des solutions légères, maintenables, avec un ROI démontrable.',
  },
  {
    category: 'Fonctionnement',
    question: 'Comment fonctionne Balise IA ?',
    answer:
      'Balise IA est un collectif de spécialistes en intelligence artificielle et automatisation, basé à Lorient. Vous avez un interlocuteur unique, et on mobilise les compétences nécessaires selon votre projet. On intervient sur site en Bretagne (Lorient, Rennes, Morbihan, Finistère, Côtes-d\'Armor) et à distance.',
  },
  {
    category: 'Fonctionnement',
    question: 'Quelle différence avec une ESN ou un cabinet de conseil ?',
    answer:
      'Pas de commerciaux, pas de juniors. Vous travaillez directement avec les experts qui réalisent le projet. On est spécialisés PME : on connaît vos contraintes (budget, temps, ressources IT limitées). Et on reste joignables après la livraison.',
  },
  {
    category: 'Tarifs',
    question: 'Combien coûte un diagnostic IA ?',
    answer:
      'Un diagnostic IA coûte entre 2 000 € et 5 000 € HT selon la complexité. Durée : 1 à 2 semaines. C\'est l\'investissement minimum pour savoir si l\'IA est pertinente pour vous et quoi prioriser.',
  },
  {
    category: 'Tarifs',
    question: 'Combien coûte un projet d\'automatisation ou d\'IA ?',
    answer:
      'Automatisation : 8 000 € à 25 000 € HT. Projets IA : 15 000 € à 40 000 € HT. On définit le périmètre ensemble pour coller à votre budget. Pas de surprise : devis détaillé avant de démarrer.',
  },
  {
    category: 'Prérequis',
    question: 'Quels sont les prérequis pour démarrer ?',
    answer:
      'Des données (même dans Excel), un sponsor interne, et 2-3 heures de disponibilité pour les entretiens. On ne demande pas de cahier des charges. On part de votre réalité terrain.',
  },
  {
    category: 'Prérequis',
    question: 'On n\'a pas de service IT, c\'est un problème ?',
    answer:
      'Non. La majorité de nos clients n\'ont pas de DSI. On s\'adapte : hébergement cloud simple, documentation claire, formation de vos équipes. L\'objectif est que vous soyez autonomes.',
  },
  {
    category: 'Localisation',
    question: 'Vous intervenez où en Bretagne ?',
    answer:
      'On est basés à Lorient (Morbihan). On intervient sur site dans toute la Bretagne : Rennes, Vannes, Quimper, Brest, Saint-Brieuc... Le reste se fait à distance pour optimiser les coûts.',
  },
  {
    category: 'Résultats',
    question: 'Comment mesurez-vous le succès d\'un projet ?',
    answer:
      'On définit ensemble des indicateurs concrets avant de démarrer : heures gagnées, erreurs évitées, coûts réduits. Chaque projet fait l\'objet d\'un bilan chiffré. Pas de "ça va mieux" subjectif : des résultats mesurables.',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/offres', label: 'Offres' },
  { href: '/cas-usage', label: 'Cas d\'usage' },
  { href: '/contact', label: 'Contact' },
];

// Éléments de réassurance V5
export const TRUST_SIGNALS = [
  {
    icon: 'Brain',
    title: 'IA pragmatique',
    description: 'Pas de gadgets, des solutions qui marchent',
  },
  {
    icon: 'MapPin',
    title: 'Basés à Lorient',
    description: 'Interventions sur site en Bretagne',
  },
  {
    icon: 'Clock',
    title: 'Réponse sous 48h',
    description: 'Premier contact rapide et concret',
  },
  {
    icon: 'Shield',
    title: 'Confidentialité',
    description: 'NDA systématique, données en France',
  },
];

// Legacy exports for compatibility
export const SERVICES = SERVICES_V5;
export const PROJECTS = USE_CASES.map((uc) => ({
  id: uc.id,
  title: uc.title,
  sector: uc.sectors[0],
  location: 'Bretagne',
  companySize: 'PME',
  existingTools: '',
  context: uc.problem,
  pain: uc.problem,
  approach: [uc.solution],
  deliverables: [] as string[],
  results: { main: uc.result, secondary: [] as string[] },
  duration: uc.duration,
  tags: uc.tags,
  beforeAfter: null as null | { before: { metric: string; value: string }[]; after: { metric: string; value: string }[] },
  testimonial: null as null | { quote: string; author: string; role: string },
  techNote: null as null | string,
}));

// Legacy process steps for backward compatibility
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Diagnostic',
    subtitle: 'Comprendre vos enjeux',
    description: 'Analyse de vos process et identification des opportunités IA.',
  },
  {
    step: 2,
    title: 'Automatisation',
    subtitle: 'Supprimer le travail manuel',
    description: 'Mise en place des automatisations et tableaux de bord.',
  },
  {
    step: 3,
    title: 'IA Ciblée',
    subtitle: 'Optimiser si pertinent',
    description: "IA uniquement là où elle apporte un gain mesurable.",
  },
];

// Legacy methodology for backward compatibility
export const METHODOLOGY = {
  title: 'Comment on mesure le succès',
  subtitle: 'Des indicateurs concrets, pas de promesses vagues',
  metrics: [
    {
      name: 'Temps de traitement',
      description: 'Réduction du temps passé sur les tâches répétitives',
      example: '4h/semaine gagnées',
    },
    {
      name: "Taux d'erreur",
      description: 'Diminution des erreurs de saisie et de process',
      example: '80% de ressaisies éliminées',
    },
    {
      name: 'Délai de disponibilité',
      description: 'Accès plus rapide aux données et aux rapports',
      example: 'Reporting J+0 vs J+5',
    },
    {
      name: 'Coût évité',
      description: 'Économies réalisées grâce à l\'automatisation',
      example: '15-25% de réduction',
    },
  ],
};
