export const SITE_CONFIG = {
  name: 'balise-ia',
  tagline: 'Votre équipe data externalisée',
  description:
    'Collectif data basé à Lorient. Nous accompagnons les PME et réseaux bretons sur toute la chaîne data : ingestion, transformation, visualisation et pilotage continu. Interventions sur site en Bretagne.',
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

// Variateurs de prix pour les offres
export const PRICE_FACTORS = {
  audit: [
    'Nombre de process à analyser (1 à 5+)',
    'Nombre de sources de données',
    'Complexité organisationnelle',
    `Besoin d'entretiens sur plusieurs sites`,
  ],
  data: [
    'Nombre et diversité des sources (ERP, caisses, machines, fichiers)',
    'Volume de données à centraliser',
    'Nombre de tableaux de bord / KPI souhaités',
    'Complexité des transformations',
    'Contraintes sécurité / hébergement',
  ],
  ia: [
    'Type de solution (OCR, prévision, classification, automatisation)',
    `Volume de données d'entraînement`,
    'Précision cible et validation métier',
    'Intégration avec les outils existants',
    'Maintenance et réentraînement',
  ],
  formation: [
    'Nombre de jours/mois (1 à 4)',
    `Périmètre technique (outils BI, pipelines, process)`,
    'Nombre de personnes à former',
    'Niveau de réactivité attendu',
  ],
};

// 4 expertises modulables
export const SERVICES = [
  {
    id: 'audit',
    step: null as number | null,
    title: 'Audit & Diagnostic',
    shortTitle: 'Audit',
    tagline: `Savoir exactement où vous perdez du temps et de l'argent`,
    description:
      `On cartographie vos flux de données, vos outils et vos process. Vous repartez avec un plan d'action chiffré : quoi automatiser, dans quel ordre, pour quel retour sur investissement.`,
    forWho: `Pour les dirigeants qui veulent y voir clair avant d'investir un euro.`,
    benefits: [
      'Cartographie complète de vos flux de données',
      'Identification des tâches manuelles supprimables',
      `Plan d'action chiffré avec ROI estimé par chantier`,
    ],
    concreteDeliverables: [
      { item: 'Cartographie des flux de données', format: 'Schéma visuel (Miro / PDF)' },
      { item: 'Inventaire des outils et sources', format: 'Tableur commenté' },
      { item: 'Liste des irritants priorisés', format: 'Matrice impact / effort' },
      { item: 'Estimation ROI par chantier', format: 'Document chiffré (heures, €)' },
      { item: 'Restitution et recommandations', format: 'Présentation sur site (1h)' },
    ],
    deliverables: [
      'Cartographie complète des flux',
      'Liste des irritants priorisés',
      'Recommandations avec estimation ROI',
      'Présentation de restitution',
    ],
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
    isTransversal: false,
  },
  {
    id: 'data',
    step: null as number | null,
    title: 'Data',
    shortTitle: 'Data',
    tagline: 'Une source de vérité unique pour piloter votre activité',
    description:
      `On connecte vos outils (caisse, ERP, machines, fichiers), on nettoie et on structure vos données, et on livre des tableaux de bord Power BI ou Metabase prêts à l'emploi. Pipeline complet ou juste la dataviz — à la carte.`,
    forWho: `Pour les entreprises qui prennent des décisions sur des fichiers Excel vieux de 3 jours.`,
    benefits: [
      'Toutes vos données centralisées, fiables, à jour',
      'Tableaux de bord métier accessibles en 2 clics',
      'Fin du reporting manuel du vendredi',
    ],
    concreteDeliverables: [
      { item: 'Pipelines de collecte automatisés', format: 'Connecteurs ERP (Sage, Cegid, Dynamics 365), caisses, fichiers' },
      { item: 'Base de données centralisée', format: 'PostgreSQL / Microsoft Fabric / DuckDB' },
      { item: 'Transformation et nettoyage', format: 'Python / SQL / dbt (versionné Git)' },
      { item: 'Tableaux de bord métier', format: 'Power BI / Metabase (production, commercial, stocks)' },
      { item: 'Reporting automatisé', format: 'Envoi planifié par email ou Teams' },
      { item: 'Documentation technique', format: 'Dictionnaire de données + guide utilisateur' },
    ],
    deliverables: [
      'Pipelines de collecte automatisés',
      'Base de données centralisée',
      'Tableaux de bord opérationnels',
      'Documentation + formation',
    ],
    priceFactors: [
      'Nombre et diversité des sources (ERP, caisses, machines, fichiers)',
      'Volume de données à centraliser',
      'Nombre de tableaux de bord / KPI souhaités',
      'Complexité des transformations',
      'Contraintes sécurité / hébergement',
    ],
    duration: '4 à 12 semaines',
    priceRange: 'Sur devis',
    prerequisites: [
      'Audit préalable réalisé (ou périmètre défini ensemble)',
      'Accès aux sources de données identifiées',
      'Un interlocuteur métier disponible côté client',
    ],
    icon: 'Database',
    cta: 'Discuter de mes données',
    isEntryPoint: false,
    isTransversal: false,
  },
  {
    id: 'ia',
    step: null as number | null,
    title: 'IA',
    shortTitle: 'IA',
    tagline: 'Supprimer les tâches chronophages sans recruter',
    description:
      `OCR pour extraire vos documents automatiquement, prévision statistique pour anticiper vos stocks, classification pour trier vos emails ou tickets. On installe l'IA uniquement là où elle fait gagner du temps mesurable.`,
    forWho: `Pour les équipes qui passent des heures sur des tâches qu'un algorithme fait en 30 secondes.`,
    benefits: [
      'Extraction automatique de documents (factures, commandes, BL)',
      'Prévisions fiables (volumes, stocks, charge de travail)',
      `Détection d'anomalies avant qu'elles ne coûtent cher`,
    ],
    concreteDeliverables: [
      { item: 'Modèle IA entraîné sur vos données', format: 'Python / API REST' },
      { item: 'Extraction automatique de documents', format: 'OCR configuré (factures, bons de commande, BL)' },
      { item: 'Prévision ou classification', format: 'Modèle statistique intégré à vos outils' },
      { item: 'Interface utilisateur métier', format: 'Application web ou intégration existante' },
      { item: 'Métriques de performance', format: 'Dashboard de suivi (précision, volumes traités)' },
      { item: 'Documentation et maintenance', format: 'Guide technique + procédure de réentraînement' },
    ],
    deliverables: [
      `Modèle IA entraîné sur vos données`,
      'Interface utilisateur adaptée au métier',
      'Mesure des performances et ROI',
      'Documentation + maintenance',
    ],
    priceFactors: [
      'Type de solution (OCR, prévision, classification, automatisation)',
      `Volume de données d'entraînement`,
      'Précision cible et validation métier',
      'Intégration avec les outils existants',
      'Maintenance et réentraînement',
    ],
    duration: '4 à 10 semaines',
    priceRange: '5 000 € – 20 000 € HT',
    prerequisites: [
      `Cas d'usage identifié (idéalement lors d'un audit)`,
      'Données accessibles et en volume suffisant',
    ],
    icon: 'Brain',
    cta: 'Explorer les possibilités IA',
    isEntryPoint: false,
    isTransversal: false,
  },
  {
    id: 'formation',
    step: null as number | null,
    title: 'Formation & Accompagnement',
    shortTitle: 'Formation',
    tagline: 'Vos équipes autonomes, notre expertise à portée de main',
    description:
      `On forme vos équipes sur les outils livrés, on reste disponible pour les évolutions, et on se déplace en Bretagne quand il faut. Pas de boîte noire technique — vous gardez la main.`,
    forWho: `Pour les entreprises qui veulent un partenaire data disponible sans embaucher un CDI.`,
    benefits: [
      'Formation pratique sur vos outils (Power BI, Metabase, pipelines)',
      'Maintenance et évolutions continues (forfait mensuel)',
      `Interlocuteur sur site en Bretagne — pas un chatbot à Paris`,
    ],
    concreteDeliverables: [
      { item: 'Sessions de formation', format: 'Sur site ou visio (2h par session, adaptées au niveau)' },
      { item: 'Guides utilisateur', format: 'Documentation pas-à-pas avec captures écran' },
      { item: 'Évolutions des tableaux de bord', format: 'Nouvelles vues, KPI, analyses à la demande' },
      { item: 'Maintenance des pipelines', format: 'Monitoring, alertes qualité, corrections' },
      { item: 'Bilan mensuel', format: `Rapport d'activité + recommandations d'évolution` },
    ],
    deliverables: [
      'Sessions de formation sur site',
      'Documentation utilisateur complète',
      'Évolutions continues',
      'Bilans mensuels',
    ],
    priceFactors: [
      'Nombre de jours/mois (1 à 4)',
      'Périmètre technique (outils BI, pipelines, process)',
      'Nombre de personnes à former',
      'Niveau de réactivité attendu',
    ],
    duration: 'Forfait mensuel — engagement 3 mois',
    priceRange: '800 € – 3 200 € HT / mois',
    prerequisites: [
      'Outils data en place (livrés par nos soins ou existants)',
      'Périmètre technique défini ensemble',
    ],
    icon: 'GraduationCap',
    cta: `Discuter d'un accompagnement`,
    isEntryPoint: false,
    isTransversal: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'On écoute',
    subtitle: 'Appel découverte',
    description: '30 minutes pour comprendre votre contexte. Gratuit, sans engagement.',
  },
  {
    step: 2,
    title: 'On diagnostique',
    subtitle: 'Audit terrain',
    description: 'On identifie où vous perdez du temps et on chiffre les gains possibles.',
  },
  {
    step: 3,
    title: 'On livre',
    subtitle: 'Mise en place',
    description: `On déploie la solution adaptée : data, IA, ou les deux.`,
  },
  {
    step: 4,
    title: 'On reste',
    subtitle: 'Accompagnement',
    description: 'Formation, maintenance, évolutions. On ne disparaît pas après la livraison.',
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
    title: 'Comment un métallurgiste pilote sa production en temps réel',
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
  {
    id: 'pilotage-reseau-franchises',
    title: 'Comment un réseau de 150 franchises a unifié ses données en un seul écran',
    sector: 'Réseau de franchises',
    location: 'Loire-Atlantique',
    companySize: '150 points de vente',
    existingTools: 'ERP Dynamics 365, logiciels de caisse (2 éditeurs), Excel',
    context:
      `Ce réseau national de franchises spécialisé dans le commerce de détail avait ses données éclatées entre deux logiciels de caisse différents, un ERP central et des fichiers Excel par magasin. Aucune vision consolidée du CA, des marges ou des comportements clients.`,
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
    techNote:
      `Data platform Microsoft Fabric avec architecture Medallion. Ingestion via API GraphQL (caisse principale) + connecteur ERP Dynamics 365. Vues SQL Gold alimentant Power BI. Pas d'IA sur ce projet, uniquement de la structuration et de la visualisation.`,
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
    question: 'Combien coûte un projet data ou IA ?',
    answer:
      `Ça dépend du périmètre. Un projet IA ciblé (OCR, prévision) démarre à 5 000 € HT. Un socle data complet (pipelines + tableaux de bord) est sur devis car il dépend du nombre de sources et de la complexité. On définit le périmètre ensemble lors du diagnostic pour coller à votre budget.`,
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
  {
    category: 'Tarifs',
    question: `Combien coûte l'accompagnement mensuel ?`,
    answer:
      `Entre 800 € et 3 200 € HT/mois selon le forfait (1 à 4 jours/mois). À titre de comparaison, un data analyst en CDI coûte 40 à 50 k€/an charges comprises. Notre formule vous donne accès à 3 profils complémentaires (data engineer, analyste, data scientist) pour une fraction de ce coût.`,
  },
  {
    category: 'Fonctionnement',
    question: 'Vous travaillez aussi avec des réseaux de franchises ?',
    answer:
      `Oui. Les réseaux multi-sites ont exactement les mêmes problématiques que les industriels : données éclatées entre plusieurs systèmes, aucune vision consolidée, reporting manuel. On a l'expérience des architectures data multi-sources (ERP, caisses, API) et des dashboards de pilotage réseau.`,
  },
  {
    category: 'Fonctionnement',
    question: `L'IA est-elle toujours nécessaire ?`,
    answer:
      `Non, et c'est un point important. La majorité de nos projets n'utilisent pas d'IA. On la propose uniquement quand elle apporte un gain mesurable : OCR pour accélérer la saisie, prévision pour anticiper les stocks, classification pour trier automatiquement. Si votre problème se résout avec de la bonne plomberie data, on ne vous vendra pas de l'IA.`,
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
