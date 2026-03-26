export const SITE_CONFIG = {
  name: 'balise-ia',
  tagline: 'Data, automatisation et IA pour les PME bretonnes',
  description:
    'Consultant data et IA en Bretagne. Audit, pilotage data (Power BI, Metabase), automatisation et formation pour les PME industrielles et réseaux. Basés à Lorient, interventions sur site.',
  url: 'https://www.balise-ia.fr',
  email: 'contact@balise-ia.fr',
  phone: '06 63 85 77 39',
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
  erp: ['Sage', 'Cegid', 'EBP', 'Divalto', 'SAP Business One', 'Dynamics 365 Business Central'],
  data: ['Excel', 'Google Sheets', 'CSV', 'bases SQL', 'Microsoft Fabric', 'DuckDB', 'dbt'],
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
  { name: 'Réseaux & Franchises', icon: 'Store' },
  { name: 'Retail & Commerce', icon: 'ShoppingBag' },
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

// Variateurs de prix (conservé pour référence interne, non affiché sur le site)
export const PRICE_FACTORS = {
  reperage: [
    'Nombre de process à cartographier',
    'Nombre de sites à visiter',
    'Complexité organisationnelle',
    'Nombre de sources de données',
  ],
  cap: [
    'Périmètre des solutions à déployer',
    'Nombre et diversité des sources (ERP, caisses, machines)',
    'Complexité des automatisations',
    'Intégrations avec les outils existants',
  ],
  equipage: [
    'Nombre de sessions / modules',
    'Nombre de personnes à former',
    'Outils couverts (Claude Code, n8n, prompting, etc.)',
    'Niveau de réactivité attendu',
  ],
};

// 3 offres — Le Repérage, Le Cap, L'Équipage
export const SERVICES = [
  {
    id: 'reperage',
    step: null as number | null,
    title: 'Le Repérage',
    shortTitle: 'Repérage',
    tagline: `Le diagnostic qui fait la lumière sur vos process et vos opportunités IA`,
    description: `On cartographie vos process réels — pas ceux du manuel qualité, ceux que vos équipes suivent vraiment. On identifie les irritants, les pertes de temps, et on construit une roadmap priorisée avec les quick wins et les chantiers structurants.`,
    forWho: `Pour les dirigeants qui veulent y voir clair avant d'investir dans l'IA ou l'automatisation.`,
    benefits: [
      'Cartographie des process réels et des irritants',
      'Évaluation de votre maturité data et IA',
      'Roadmap priorisée : quick wins → projets structurants',
      `Draft de charte d'usage IA pour vos équipes`,
    ],
    concreteDeliverables: [
      { item: 'Cartographie des process réels', format: 'Schéma visuel (Miro / PDF)' },
      { item: 'Matrice des irritants priorisés', format: 'Impact / effort / faisabilité' },
      { item: 'Évaluation maturité data & IA', format: 'Grille de scoring commentée' },
      { item: 'Roadmap priorisée', format: 'Quick wins + chantiers structurants' },
      { item: `Draft de charte d'usage IA`, format: 'Document pratique, prêt à adapter' },
      { item: 'Restitution et recommandations', format: 'Présentation sur site (1h)' },
    ],
    deliverables: [
      'Cartographie des process réels',
      'Irritants priorisés',
      'Roadmap quick wins → structurants',
      `Charte d'usage IA (draft)`,
    ],
    priceFactors: [],
    duration: '2 à 4 semaines',
    priceRange: '',
    prerequisites: [
      'Accès aux outils existants (ERP, Excel, emails)',
      '2 à 3 entretiens avec les équipes métier',
      `Disponibilité d'un sponsor côté direction`,
    ],
    icon: 'Search',
    cta: 'Démarrer un Repérage',
    isEntryPoint: true,
    isTransversal: false,
  },
  {
    id: 'cap',
    step: null as number | null,
    title: 'Le Cap',
    shortTitle: 'Cap',
    tagline: `On déploie ce qui marche, on mesure, on itère`,
    description: `On met en place les solutions identifiées dans le Repérage : dashboards, automatisations, portail IA, intégrations ERP. On documente les process, on anime l'équipe pilote interne, et on itère chaque mois pour ajuster le cap.`,
    forWho: `Pour les entreprises qui ont identifié leurs chantiers et veulent passer à l'action avec un copilote.`,
    benefits: [
      'Solutions déployées et opérationnelles',
      'Documentation vivante des process',
      'Équipe pilote interne accompagnée',
      'Itérations mensuelles : on mesure, on ajuste',
    ],
    concreteDeliverables: [
      { item: 'Dashboards métier', format: 'Power BI / Metabase (production, commercial, stocks)' },
      { item: 'Automatisations configurées', format: 'OCR, extraction, workflows n8n / Python' },
      { item: 'Intégrations ERP', format: 'Connecteurs Sage, Cegid, Dynamics 365' },
      { item: 'Documentation des process', format: 'Process réels documentés et versionnés' },
      { item: 'Animation équipe pilote', format: 'Ateliers mensuels, suivi des usages' },
      { item: 'Bilan mensuel', format: `Rapport d'avancement + métriques de gains` },
    ],
    deliverables: [
      'Dashboards et automatisations',
      'Intégrations ERP opérationnelles',
      'Process documentés',
      'Suivi des gains mensuels',
    ],
    priceFactors: [],
    duration: '3 mois minimum, reconduction',
    priceRange: '',
    prerequisites: [
      'Repérage réalisé (ou périmètre défini ensemble)',
      'Un sponsor et une équipe pilote identifiés',
      'Accès aux outils et données concernés',
    ],
    icon: 'Compass',
    cta: 'Mettre le Cap',
    isEntryPoint: false,
    isTransversal: false,
  },
  {
    id: 'equipage',
    step: null as number | null,
    title: `L'Équipage`,
    shortTitle: 'Équipage',
    tagline: `Devenez autonome : formations pratiques pour intégrer l'IA vous-même`,
    description: `Pas de cours magistraux. Des ateliers pratiques, adaptés à chaque métier, pour que vos équipes sachent utiliser l'IA au quotidien. Claude Code, n8n, prompting métier, outils no-code — on forme sur ce qui vous sert vraiment.`,
    forWho: `Pour les entreprises qui veulent que leurs équipes maîtrisent l'IA sans dépendre d'un prestataire.`,
    benefits: [
      'Formations IA par la pratique, pas la théorie',
      'Modules adaptés à chaque métier',
      `Montée en compétence de l'équipe pilote`,
      'Autonomie progressive sur les outils IA',
    ],
    concreteDeliverables: [
      { item: 'Ateliers IA pratiques', format: 'Sur site ou visio (2-3h, petits groupes)' },
      { item: 'Module Claude Code', format: 'Prise en main, cas métier, bonnes pratiques' },
      { item: 'Module n8n / automatisation', format: 'Workflows no-code, intégrations, triggers' },
      { item: 'Module prompting métier', format: `Prompts sur mesure pour vos cas d'usage` },
      { item: 'Guides et ressources', format: 'Documentation pas-à-pas, vidéos, templates' },
      { item: 'Suivi de montée en compétence', format: 'Bilan par participant, recommandations' },
    ],
    deliverables: [
      'Ateliers pratiques par métier',
      'Guides et templates IA',
      'Accompagnement équipe pilote',
      'Autonomie sur les outils',
    ],
    priceFactors: [],
    duration: 'Selon besoins',
    priceRange: '',
    prerequisites: [
      `Volonté de la direction d'intégrer l'IA`,
      'Équipe pilote identifiée (ou à constituer ensemble)',
    ],
    icon: 'Users',
    cta: `Former l'Équipage`,
    isEntryPoint: false,
    isTransversal: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Repérer',
    subtitle: 'Écoute terrain',
    description:
      'On observe vos process réels, on écoute les irritants de vos équipes, on cartographie ce qui freine.',
  },
  {
    step: 2,
    title: 'Tracer la route',
    subtitle: 'Roadmap priorisée',
    description: `On identifie les quick wins et les chantiers structurants, on construit une roadmap avec vous.`,
  },
  {
    step: 3,
    title: 'Mettre le cap',
    subtitle: 'Déploiement itératif',
    description: `On déploie les solutions, on mesure les gains, on ajuste chaque mois. Pas de tunnel de 6 mois.`,
  },
  {
    step: 4,
    title: `Former l'équipage`,
    subtitle: 'Autonomie',
    description: `On forme vos équipes à l'IA et aux outils, pour que la dynamique continue sans nous.`,
  },
];

// Projets clients réels, anonymisés
export const PROJECTS = [
  {
    id: 'commandes-agroalimentaire',
    title: `Comment une PME agroalimentaire a éliminé 80% de ses ressaisies`,
    sector: 'Agroalimentaire',
    location: 'Morbihan',
    companySize: '35 salariés',
    existingTools: 'ERP Sage, Excel, emails',
    context: `Cette PME agroalimentaire recevait ses commandes par email, fax et téléphone. Deux personnes passaient leur journée à ressaisir les commandes dans l'ERP. Erreurs fréquentes, retards de traitement.`,
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
    techNote:
      'OCR : extraction de texte structuré via modèle entraîné sur formats de commandes clients (PDF, emails). Pas de deep learning complexe, solution légère et maintenable.',
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
    title: 'Comment un métallurgiste pilote sa production en temps réel',
    sector: 'Métallurgie',
    location: 'Finistère',
    companySize: '45 salariés',
    existingTools: 'ERP GPAO, Excel, fiches papier',
    context: `Les données de production étaient dispersées entre l'ERP, des fichiers Excel et des fiches papier. Le responsable production passait son vendredi après-midi à consolider les chiffres de la semaine.`,
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
      quote: `Le vendredi après-midi, je pilote au lieu de compiler des tableaux. Et je vois les problèmes avant qu'ils n'explosent.`,
      author: 'Responsable production',
    },
  },
  {
    id: 'dechets-plasturgie',
    title: `Comment un plasturgiste a réduit ses coûts déchets de 25%`,
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
    techNote:
      'Prévision statistique : modèle de régression sur données historiques (18 mois). Pas de deep learning, mais des séries temporelles classiques avec saisonnalité.',
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
      quote: `On anticipe au lieu de subir. Et on a divisé notre budget déchets par quatre sur l'année.`,
      author: 'Responsable QHSE',
    },
  },
  {
    id: 'pilotage-reseau-franchises',
    title: 'Comment un réseau de 150 franchises a unifié ses données en un seul écran',
    sector: 'Réseau de franchises',
    location: 'Loire-Atlantique',
    companySize: '150 points de vente',
    existingTools: 'ERP Dynamics 365, logiciels de caisse (2 éditeurs), Excel',
    context: `Ce réseau national de franchises spécialisé dans le commerce de détail avait ses données éclatées entre deux logiciels de caisse différents, un ERP central et des fichiers Excel par magasin. Aucune vision consolidée du CA, des marges ou des comportements clients.`,
    pain: 'Données éclatées entre 3 systèmes, zéro vision client, reporting manuel à J+7',
    beforeAfter: {
      before: [
        { metric: 'Temps de reporting', value: 'J+7 (manuel)' },
        { metric: 'Vision client', value: 'Inexistante' },
        { metric: 'Couverture données', value: '60% des magasins' },
      ],
      after: [
        { metric: 'Temps de reporting', value: 'Temps réel' },
        { metric: 'Vision client', value: 'Segmentation RFM complète' },
        { metric: 'Couverture données', value: '100% des magasins' },
      ],
    },
    approach: [
      'Diagnostic des flux entre ERP, caisses et fichiers (2 semaines)',
      `Construction d'une data platform centralisée (Microsoft Fabric, architecture Medallion)`,
      'Dashboards Power BI : pilotage commercial B2B et B2C, analyse clients',
      `Mini CRM analytique avec segmentation RFM pour l'équipe marketing`,
    ],
    deliverables: [
      'Data platform centralisée (Bronze → Silver → Gold)',
      'Connecteurs automatisés ERP + 2 logiciels de caisse',
      '3 dashboards Power BI (commercial B2B, B2C, clients)',
      'Segmentation client RFM avec scoring',
      'Documentation et formation équipes siège',
    ],
    techNote: `Data platform Microsoft Fabric avec architecture Medallion. Ingestion via API GraphQL (caisse principale) + connecteur ERP Dynamics 365. Vues SQL Gold alimentant Power BI. Pas d'IA sur ce projet, uniquement de la structuration et de la visualisation.`,
    results: {
      main: 'Vision temps réel sur 150 points de vente',
      secondary: [
        `Première segmentation client de l'histoire du réseau`,
        'Reporting automatisé pour la direction commerciale',
        'Identification des magasins sous-performants en 2 clics',
      ],
    },
    duration: '10 semaines + pilotage continu',
    tags: ['Data Platform', 'Power BI', 'Réseau franchises', 'Microsoft Fabric'],
    testimonial: {
      quote:
        'Pour la première fois, on voit nos 150 magasins dans un seul écran. Et on sait enfin qui sont nos clients.',
      author: 'Directeur commercial',
    },
  },
];

// FAQ — questions fréquentes (homepage)
export const FAQ_ITEMS = [
  {
    category: 'Approche',
    question: `Pourquoi commencer par un Repérage et pas directement par un projet IA ?`,
    answer: `Parce que l'IA marche quand l'entreprise se connaît. Sans cartographie des process réels, des irritants et de la maturité data, on déploie des outils que personne n'utilise. Le Repérage évite de brûler du budget sur un POC déconnecté du terrain.`,
  },
  {
    category: 'Fonctionnement',
    question: 'Est-ce que vous travaillez uniquement avec des industriels ?',
    answer: `Nous intervenons surtout là où les données, les flux et les opérations ont un impact fort sur le quotidien : industrie, réseau, services structurés, distribution ou activités multi-outils.`,
  },
  {
    category: 'Prérequis',
    question: 'Faut-il déjà avoir des outils modernes en place ?',
    answer: `Non. On sait travailler avec des environnements hétérogènes : ERP anciens, fichiers Excel, exports manuels, outils déjà en production. Le Repérage sert justement à comprendre ce qui existe avant de proposer quoi que ce soit.`,
  },
  {
    category: 'Déroulement',
    question: `Quelle est la différence entre Le Cap et L'Équipage ?`,
    answer: `Le Cap, c'est nous qui déployons les solutions avec vous : dashboards, automatisations, intégrations. L'Équipage, c'est vos équipes qui apprennent à intégrer l'IA elles-mêmes. Les deux peuvent se combiner ou se prendre séparément.`,
  },
  {
    category: 'Fonctionnement',
    question: 'Est-ce que vous intervenez sur site ?',
    answer: `Oui, selon le contexte. L'ancrage local fait partie de notre manière de travailler, notamment pour les phases de cadrage, de déploiement ou de formation. On est basés à Lorient et on se déplace en Bretagne.`,
  },
  {
    category: 'Résultats',
    question: 'Combien de temps faut-il pour voir un résultat ?',
    answer: `Le Repérage livre une roadmap exploitable en 2 à 4 semaines. Ensuite, les premiers quick wins du Cap produisent des gains mesurables dès le premier mois de déploiement.`,
  },
];

export const NAV_LINKS = [
  { href: '/services', label: 'Expertises' },
  { href: '/cas-clients', label: 'Réalisations' },
  { href: '/#methode', label: 'Méthode' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/blog', label: 'Blog' },
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
