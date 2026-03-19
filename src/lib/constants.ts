export const SITE_CONFIG = {
  name: 'balise-ia',
  tagline: 'Data & automatisation pour PME industrielles',
  description:
    'Collectif data & automatisation basé à Lorient. Nous aidons les PME industrielles bretonnes à gagner du temps, fiabiliser leurs données et piloter leur activité. Interventions sur site en Bretagne.',
  url: 'https://balise-ia.fr',
  email: 'contact@balise-ia.fr',
  // phone: à ajouter quand disponible
  location: {
    region: 'Bretagne',
    city: 'Lorient',
    department: 'Morbihan',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/balise-ia',
  },
  calendly: 'balise-ia/diagnostic',
};

// Chiffres clés pour la crédibilité
export const KEY_METRICS = {
  timesSaved: '4h',
  timesSavedContext: 'gagnées par semaine en moyenne',
  errorReduction: '80%',
  errorReductionContext: 'de ressaisies manuelles éliminées',
  projectsDelivered: '12+',
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

// Méthode de calcul des gains
export const METHODOLOGY = {
  title: 'Comment on mesure les gains',
  subtitle: 'Pas de promesses vagues : des indicateurs concrets, mesurés avant et après.',
  metrics: [
    {
      name: 'Temps de traitement',
      description: 'Chronométrage des tâches avant/après automatisation',
      example: 'Saisie commande : 8 min → 30 sec',
    },
    {
      name: `Taux d'erreur`,
      description: 'Comptage des erreurs sur un échantillon représentatif',
      example: 'Erreurs de saisie : 5% → 0.2%',
    },
    {
      name: 'Délai de disponibilité',
      description: 'Temps entre la donnée source et sa disponibilité pour décision',
      example: 'Reporting : J+5 → temps réel',
    },
    {
      name: 'Coût évité',
      description: 'Valorisation du temps gagné au coût horaire chargé',
      example: '4h/sem × 45€/h × 46 sem = 8 280€/an',
    },
  ],
};

// Variateurs de prix pour les offres
export const PRICE_FACTORS = {
  diagnostic: [
    'Nombre de process à analyser (1 à 5+)',
    'Nombre de sources de données',
    'Complexité organisationnelle',
    `Besoin d'entretiens sur plusieurs sites`,
  ],
  automatisation: [
    'Nombre et complexité des sources (ERP, Excel, API)',
    'Volume de données à traiter',
    'Nombre de tableaux de bord / KPI',
    'Contraintes sécurité / hébergement',
    'Niveau de formation requis',
  ],
  ia: [
    'Type de modèle (OCR, prévision, classification)',
    `Volume de données d'entraînement`,
    'Précision cible et validation métier',
    'Intégration avec les outils existants',
    'Maintenance et réentraînement',
  ],
};

// Les 3 offres business restructurées
export const SERVICES = [
  {
    id: 'diagnostic',
    step: 1,
    title: 'Diagnostic & Priorisation',
    shortTitle: 'Diagnostic',
    tagline: `Comprendre où vous perdez du temps et de l'argent`,
    description:
      'On analyse vos process métier et vos flux de données pour identifier les points de friction. Vous repartez avec une vision claire des chantiers prioritaires et des gains potentiels.',
    forWho: `Pour les dirigeants qui veulent y voir clair avant d'investir.`,
    benefits: [
      'Vision claire de vos flux de données actuels',
      'Identification des tâches manuelles évitables',
      'Estimation chiffrée des gains potentiels',
      'Feuille de route priorisée (quick wins + projets structurants)',
    ],
    // V2 : livrables concrets
    concreteDeliverables: [
      { item: 'Schéma des flux de données', format: 'PDF/Miro' },
      { item: 'Liste des irritants priorisés', format: 'Tableur' },
      { item: 'Estimation ROI par chantier', format: 'Document chiffré' },
      { item: 'Restitution avec recommandations', format: 'Présentation 1h' },
    ],
    deliverables: [
      'Cartographie des flux de données',
      'Liste des irritants et points de friction',
      'Recommandations concrètes avec estimation ROI',
      'Présentation de restitution',
    ],
    // V2 : variateurs de prix
    priceFactors: [
      'Nombre de process à analyser (1 à 5+)',
      'Nombre de sources de données',
      'Complexité organisationnelle',
      `Besoin d'entretiens sur plusieurs sites`,
    ],
    duration: '1 à 2 semaines',
    priceRange: '2 000 € – 5 000 € HT',
    prerequisites: [
      'Accès aux outils existants (ERP, Excel, emails)',
      '2 à 3 entretiens avec les équipes métier',
    ],
    icon: 'Search',
    cta: 'Demander un diagnostic',
    isEntryPoint: true,
  },
  {
    id: 'projet-data',
    step: 2,
    title: 'Projet Data & Automatisation',
    shortTitle: 'Automatisation',
    tagline: 'Supprimer le travail manuel, fiabiliser vos données',
    description:
      'On met en place les automatisations et tableaux de bord qui vous font gagner du temps au quotidien. Pas de gadgets : des outils concrets, documentés, que vos équipes savent utiliser.',
    forWho: `Pour les PME prêtes à passer à l'action après un diagnostic.`,
    benefits: [
      'Fin des ressaisies et copier-coller entre outils',
      'Données fiables, à jour, accessibles',
      `Tableaux de bord pour piloter l'activité`,
      'Équipes formées et autonomes',
    ],
    // V2 : livrables concrets
    concreteDeliverables: [
      { item: 'Pipeline de données automatisé', format: 'Code versionné (Git)' },
      { item: 'Connecteurs ERP/Excel/API', format: 'Scripts documentés' },
      { item: 'Tableaux de bord', format: 'Power BI / Metabase' },
      { item: 'Dictionnaire de données', format: 'Documentation technique' },
      { item: 'Formation utilisateurs', format: 'Session 2h + support vidéo' },
    ],
    deliverables: [
      'Pipelines de données automatisés',
      'Connecteurs ERP / Excel / outils métiers',
      'Tableaux de bord opérationnels',
      'Documentation + formation des équipes',
    ],
    // V2 : variateurs de prix
    priceFactors: [
      'Nombre et complexité des sources (ERP, Excel, API)',
      'Volume de données à traiter',
      'Nombre de tableaux de bord / KPI',
      'Contraintes sécurité / hébergement',
      'Niveau de formation requis',
    ],
    duration: '3 à 8 semaines',
    priceRange: '8 000 € – 25 000 € HT',
    prerequisites: [
      'Diagnostic préalable réalisé',
      'Sponsor interne identifié',
      'Disponibilité pour les points de suivi',
    ],
    icon: 'Zap',
    cta: 'Discuter de mon projet',
    isEntryPoint: false,
  },
  {
    id: 'solution-ia',
    step: 3,
    title: 'Solution IA Ciblée',
    shortTitle: 'IA Métier',
    tagline: `L'IA uniquement là où elle apporte un gain mesurable`,
    description:
      `On déploie une solution IA sur un cas d'usage précis : OCR intelligent, prévision statistique, classification. Pas de promesses vagues : un périmètre clair, des résultats mesurables.`,
    forWho: `Pour les PME avec des données structurées et un cas d'usage identifié.`,
    benefits: [
      'Traitement automatique de documents (OCR)',
      'Prévisions fiables (volumes, charge, stocks)',
      'Aide à la décision basée sur vos données',
      'Solution industrialisable, pas un POC jetable',
    ],
    // V2 : livrables concrets avec précision technique
    concreteDeliverables: [
      { item: 'Modèle entraîné sur vos données', format: 'Python / API REST' },
      { item: 'Interface utilisateur métier', format: 'Application web dédiée' },
      { item: 'Métriques de performance', format: 'Dashboard de suivi' },
      { item: 'Documentation technique', format: 'Guide maintenance' },
      { item: 'Procédure de réentraînement', format: 'Runbook documenté' },
    ],
    deliverables: [
      'Modèle IA entraîné sur vos données',
      'Interface utilisateur adaptée au métier',
      'Mesure des performances et ROI',
      'Documentation + maintenance',
    ],
    // V2 : variateurs de prix
    priceFactors: [
      'Type de modèle (OCR, prévision statistique, classification)',
      `Volume de données d'entraînement`,
      'Précision cible et validation métier',
      'Intégration avec les outils existants',
      'Maintenance et réentraînement inclus',
    ],
    // V2 : précisions techniques sur l'IA
    techDetails: {
      ocr: 'Extraction de texte structuré (factures, bons de commande)',
      prediction: 'Modèles statistiques (régression, séries temporelles)',
      classification: 'Catégorisation automatique de documents ou données',
    },
    duration: '4 à 10 semaines',
    priceRange: '15 000 € – 40 000 € HT',
    prerequisites: [
      'Données structurées et accessibles',
      `Cas d'usage validé lors du diagnostic`,
      `Volume de données suffisant pour l'entraînement`,
    ],
    icon: 'Brain',
    cta: 'Explorer les possibilités',
    isEntryPoint: false,
    note: `Cette offre n'est proposée qu'après un diagnostic ou un projet data, jamais en standalone.`,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'On comprend',
    subtitle: 'Diagnostic',
    description: 'Vos process, vos données, vos irritants. On identifie où vous perdez du temps.',
  },
  {
    step: 2,
    title: 'On améliore',
    subtitle: 'Automatisation',
    description: 'On supprime le travail manuel et on fiabilise vos données.',
  },
  {
    step: 3,
    title: 'On optimise',
    subtitle: 'IA (si pertinent)',
    description: `On déploie l'IA uniquement là où elle apporte un gain réel.`,
  },
];

// Projets clients réels, anonymisés
export const PROJECTS = [
  {
    id: 'commandes-agroalimentaire',
    title: 'Automatisation du traitement des commandes',
    sector: 'Agroalimentaire',
    location: 'Morbihan',
    companySize: '35 salariés',
    existingTools: 'ERP Sage, Excel, emails',
    context:
      `Cette PME agroalimentaire recevait ses commandes par email, fax et téléphone. Deux personnes passaient leur journée à ressaisir les commandes dans l'ERP. Erreurs fréquentes, retards de traitement.`,
    pain: 'Ressaisie manuelle = 2 ETP mobilisés + erreurs récurrentes',
    // V2 : métriques avant/après
    beforeAfter: {
      before: [
        { metric: 'Temps de saisie/commande', value: '8 min' },
        { metric: `Taux d'erreur`, value: '5%' },
        { metric: 'Délai de traitement', value: '24-48h' },
      ],
      after: [
        { metric: 'Temps de saisie/commande', value: '30 sec (vérification)' },
        { metric: `Taux d'erreur`, value: '< 0.5%' },
        { metric: 'Délai de traitement', value: '< 2h' },
      ],
    },
    approach: [
      'Diagnostic des flux de commandes (1 semaine)',
      `Mise en place d'une solution OCR pour extraction automatique`,
      'Pipeline de validation et injection dans Sage',
      'Interface de vérification pour les cas ambigus',
    ],
    deliverables: [
      'Solution OCR configurée et entraînée',
      `Pipeline d'intégration ERP automatisé`,
      'Dashboard de suivi des commandes',
      'Formation des équipes (2h)',
    ],
    // V2 : précision technique sur l'IA utilisée
    techNote: 'OCR : extraction de texte structuré via modèle entraîné sur formats de commandes clients (PDF, emails). Pas de deep learning complexe, solution légère et maintenable.',
    results: {
      main: '80% du temps de traitement éliminé',
      secondary: [
        'Erreurs de saisie quasi nulles',
        '1 ETP réaffecté à des tâches à valeur ajoutée',
        'Délai de traitement divisé par 3',
      ],
    },
    duration: '6 semaines',
    tags: ['OCR', 'Automatisation', 'ERP'],
    testimonial: {
      quote:
        'On ne revient pas en arrière. Les filles qui faisaient la saisie peuvent enfin se concentrer sur le relationnel client.',
      author: 'Responsable ADV',
    },
  },
  {
    id: 'pilotage-metallurgie',
    title: 'Centralisation et pilotage de la production',
    sector: 'Métallurgie',
    location: 'Finistère',
    companySize: '45 salariés',
    existingTools: 'ERP GPAO, Excel, fiches papier',
    context:
      `Les données de production étaient dispersées entre l'ERP, des fichiers Excel et des fiches papier. Le responsable production passait son vendredi après-midi à consolider les chiffres de la semaine.`,
    pain: 'Aucune visibilité temps réel, 4h/semaine de reporting manuel',
    // V2 : métriques avant/après
    beforeAfter: {
      before: [
        { metric: 'Temps de reporting/semaine', value: '4h' },
        { metric: 'Fraîcheur des données', value: 'J+5' },
        { metric: 'Détection anomalies', value: 'Rétrospective' },
      ],
      after: [
        { metric: 'Temps de reporting/semaine', value: '0 (automatisé)' },
        { metric: 'Fraîcheur des données', value: 'Temps réel' },
        { metric: 'Détection anomalies', value: 'Alertes automatiques' },
      ],
    },
    approach: [
      'Cartographie des sources de données',
      `Conception d'un entrepôt de données unifié`,
      'Automatisation de la collecte (ERP + Excel + saisies terrain)',
      'Création de tableaux de bord temps réel',
    ],
    deliverables: [
      'Base de données centralisée',
      'Connecteurs automatiques vers ERP et fichiers',
      'Tableaux de bord Metabase (production, qualité, stocks)',
      'Alertes automatisées sur les dérives',
    ],
    techNote: `Data engineering classique : ETL Python, base PostgreSQL, dashboards Metabase. Pas d'IA, juste de la bonne plomberie data.`,
    results: {
      main: '4h/semaine gagnées pour le responsable production',
      secondary: [
        'Visibilité temps réel sur les encours',
        'Détection précoce des dérives qualité',
        'Reporting mensuel généré automatiquement',
      ],
    },
    duration: '5 semaines',
    tags: ['Data Engineering', 'Reporting', 'Production'],
    testimonial: {
      quote:
        `Le vendredi après-midi, je pilote au lieu de compiler des tableaux. Et je vois les problèmes avant qu'ils n'explosent.`,
      author: 'Responsable production',
    },
  },
  {
    id: 'dechets-plasturgie',
    title: 'Optimisation de la gestion des déchets',
    sector: 'Plasturgie',
    location: `Côtes-d'Armor`,
    companySize: '28 salariés',
    existingTools: 'ERP, Excel, prestataire déchets',
    context:
      'Les tournées de collecte des déchets étaient fixes, sans lien avec la production réelle. Résultat : des bennes parfois vides, parfois débordantes. Surcoûts et pénalités environnementales.',
    pain: 'Coûts de collecte non maîtrisés, risque de non-conformité',
    // V2 : métriques avant/après
    beforeAfter: {
      before: [
        { metric: 'Coût collecte/mois', value: '2 400€' },
        { metric: 'Pénalités/an', value: '~1 500€' },
        { metric: 'Planification', value: 'Fixe (non optimisée)' },
      ],
      after: [
        { metric: 'Coût collecte/mois', value: '1 800€ (-25%)' },
        { metric: 'Pénalités/an', value: '0€' },
        { metric: 'Planification', value: 'Dynamique (prévision)' },
      ],
    },
    approach: [
      'Analyse des données historiques de production de déchets',
      'Modèle de prévision des volumes par type de déchet',
      `Outil d'aide à la décision pour planifier les collectes`,
      'Intégration avec le planning de production',
    ],
    deliverables: [
      'Modèle prédictif des volumes de déchets',
      'Interface de planification des tournées',
      'Reporting environnemental automatisé (pour audit)',
      'Formation du responsable QHSE',
    ],
    techNote: 'Prévision statistique : modèle de régression sur données historiques (18 mois). Pas de deep learning, mais des séries temporelles classiques avec saisonnalité.',
    results: {
      main: '25% de réduction des coûts de collecte',
      secondary: [
        'Fin des pénalités pour débordement',
        'Meilleure valorisation des matières',
        'Conformité réglementaire facilitée',
      ],
    },
    duration: '8 semaines',
    tags: ['Prévision statistique', 'Optimisation', 'Environnement'],
    testimonial: {
      quote:
        `On anticipe au lieu de subir. Et on a divisé notre budget déchets par quatre sur l'année.`,
      author: 'Responsable QHSE',
    },
  },
];

// FAQ complète et transparente
export const FAQ_ITEMS = [
  {
    category: 'Fonctionnement',
    question: 'Comment fonctionne le collectif balise-ia ?',
    answer:
      `balise-ia est un collectif de spécialistes data, automatisation et IA. Vous avez un interlocuteur unique (votre chef de projet), et nous mobilisons les compétences nécessaires selon votre projet : data engineer, développeur, data scientist. Pas d'usine à gaz : une équipe resserrée, senior, réactive.`,
  },
  {
    category: 'Fonctionnement',
    question: 'Quelle différence avec une ESN ou un cabinet de conseil ?',
    answer:
      'Pas de commerciaux, pas de juniors envoyés sur le terrain, pas de marges pyramidales. Vous travaillez directement avec les experts qui réalisent le projet. On est basés à Lorient, on intervient sur site en Bretagne, et on reste joignables après la livraison.',
  },
  {
    category: 'Tarifs',
    question: 'Combien coûte un diagnostic ?',
    answer:
      `Un diagnostic complet coûte entre 2 000 € et 5 000 € HT selon la complexité de votre organisation et le nombre de process à analyser. Durée : 1 à 2 semaines. C'est l'investissement minimum pour savoir où vous en êtes et quoi prioriser.`,
  },
  {
    category: 'Tarifs',
    question: `Combien coûte un projet d'automatisation ?`,
    answer:
      `Entre 8 000 € et 25 000 € HT pour un projet standard (pipelines de données, tableaux de bord, automatisations). Les projets incluant de l'IA sont généralement entre 15 000 € et 40 000 € HT. On définit le périmètre ensemble pour coller à votre budget.`,
  },
  {
    category: 'Prérequis',
    question: 'Quels sont les prérequis pour démarrer ?',
    answer:
      'Le strict minimum : des données (même dans Excel), un sponsor interne qui porte le projet, et 2 à 3 heures de disponibilité pour les entretiens. On ne demande pas de cahier des charges de 50 pages. On part de votre réalité terrain.',
  },
  {
    category: 'Prérequis',
    question: `On n'a pas de service IT, c'est un problème ?`,
    answer:
      `Non. La majorité de nos clients n'ont pas de DSI. On s'adapte à votre contexte : hébergement cloud simple, outils no-code quand c'est pertinent, documentation pour que vos équipes soient autonomes. Et on reste disponibles après la livraison.`,
  },
  {
    category: 'Confidentialité',
    question: 'Comment garantissez-vous la confidentialité de nos données ?',
    answer:
      'NDA systématique avant tout accès aux données. Hébergement en France (ou sur vos serveurs si vous préférez). Suppression des données de test après livraison. Conformité RGPD. On travaille avec des industriels : on connaît les enjeux de confidentialité.',
  },
  {
    category: 'Déroulement',
    question: 'Comment se passe un projet concrètement ?',
    answer:
      '1) Appel découverte (30 min, gratuit) pour comprendre votre contexte. 2) Proposition commerciale sous 48h. 3) Diagnostic ou projet selon vos besoins. 4) Points de suivi réguliers (hebdo). 5) Livraison avec documentation et formation. 6) Support post-livraison inclus.',
  },
  {
    category: 'Déroulement',
    question: 'Vous intervenez sur site ?',
    answer:
      'Oui. On est basés à Lorient et on se déplace en Bretagne pour les phases qui le nécessitent : entretiens métier, ateliers, formation. Le reste se fait à distance pour optimiser les coûts. Mix présentiel/distanciel adapté à chaque projet.',
  },
  {
    category: 'Résultats',
    question: `Comment mesurez-vous le succès d'un projet ?`,
    answer:
      `On définit ensemble des indicateurs concrets avant de démarrer : heures gagnées, erreurs évitées, délais réduits, coûts supprimés. Chaque projet fait l'objet d'un bilan chiffré. Pas de "ça va mieux" subjectif : des résultats mesurables.`,
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Offres' },
  { href: '/projets', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
];

// Éléments de réassurance
export const TRUST_SIGNALS = [
  {
    icon: 'UserCheck',
    title: 'Interlocuteur unique',
    description: 'Un chef de projet dédié du début à la fin',
  },
  {
    icon: 'Clock',
    title: 'Réponse sous 48h',
    description: `Proposition commerciale en 48h après l'appel`,
  },
  {
    icon: 'Shield',
    title: 'Confidentialité garantie',
    description: 'NDA systématique, données hébergées en France',
  },
  {
    icon: 'MapPin',
    title: 'Interventions sur site',
    description: 'Basés à Lorient, on se déplace en Bretagne',
  },
];

// Helper functions (ex site-config.ts)
export function getCalendlyUrl(): string {
  return `https://calendly.com/${SITE_CONFIG.calendly}`;
}

export function getContactEmail(): string {
  return SITE_CONFIG.email;
}

export function getBrandName(): string {
  return SITE_CONFIG.name;
}
