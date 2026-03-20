export const SITE_CONFIG = {
  name: 'balise-ia',
  tagline: 'Data, automatisation et IA pour les PME bretonnes',
  description:
    'Consultant data et IA en Bretagne. Audit, pilotage data (Power BI, Metabase), automatisation et formation pour les PME industrielles et réseaux. Basés à Lorient, interventions sur site.',
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
    tagline: `Identifier les chantiers les plus rentables avant d'investir`,
    description: `Nous cartographions vos flux, vos outils et vos tâches manuelles pour établir un plan d'action clair, priorisé et chiffré.`,
    forWho: `Pour les dirigeants qui veulent y voir clair avant d'investir.`,
    benefits: [
      'Cartographie complète de vos flux de données',
      'Irritants prioritaires identifiés et classés',
      `Plan d'action avec ordre de mise en œuvre`,
    ],
    concreteDeliverables: [
      { item: 'Cartographie des flux de données', format: 'Schéma visuel (Miro / PDF)' },
      { item: 'Inventaire des outils et sources', format: 'Tableur commenté' },
      { item: 'Liste des irritants priorisés', format: 'Matrice impact / effort' },
      { item: 'Estimation ROI par chantier', format: 'Document chiffré (heures, €)' },
      { item: 'Restitution et recommandations', format: 'Présentation sur site (1h)' },
    ],
    deliverables: [
      'Cartographie des flux',
      'Irritants prioritaires',
      'Recommandations chiffrées',
      'Ordre de mise en œuvre',
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
    cta: 'Commencer par un audit',
    isEntryPoint: true,
    isTransversal: false,
  },
  {
    id: 'data',
    step: null as number | null,
    title: 'Pilotage data',
    shortTitle: 'Data',
    tagline: 'Centraliser les bonnes données et piloter en temps réel',
    description: `Nous connectons vos sources, structurons les données utiles et livrons des tableaux de bord simples à utiliser pour la direction, les opérations ou la production.`,
    forWho: `Pour les entreprises qui prennent des décisions sur des fichiers Excel vieux de 3 jours.`,
    benefits: [
      'Données centralisées, fiables et à jour',
      'Tableaux de bord métier accessibles en 2 clics',
      'Fin du reporting manuel',
    ],
    concreteDeliverables: [
      {
        item: 'Pipelines de collecte automatisés',
        format: 'Connecteurs ERP (Sage, Cegid, Dynamics 365), caisses, fichiers',
      },
      { item: 'Base de données centralisée', format: 'PostgreSQL / Microsoft Fabric / DuckDB' },
      { item: 'Transformation et nettoyage', format: 'Python / SQL / dbt (versionné Git)' },
      {
        item: 'Tableaux de bord métier',
        format: 'Power BI / Metabase (production, commercial, stocks)',
      },
      { item: 'Reporting automatisé', format: 'Envoi planifié par email ou Teams' },
      { item: 'Documentation technique', format: 'Dictionnaire de données + guide utilisateur' },
    ],
    deliverables: [
      'Pipeline de données structuré',
      'Modèle de données propre',
      'Dashboard métier opérationnel',
      'Documentation complète',
    ],
    priceFactors: [
      'Nombre et diversité des sources (ERP, caisses, machines, fichiers)',
      'Volume de données à centraliser',
      'Nombre de tableaux de bord / KPI souhaités',
      'Complexité des transformations',
      'Contraintes sécurité / hébergement',
    ],
    duration: '4 à 10 semaines',
    priceRange: 'Sur devis',
    prerequisites: [
      'Audit préalable réalisé (ou périmètre défini ensemble)',
      'Accès aux sources de données identifiées',
      'Un interlocuteur métier disponible côté client',
    ],
    icon: 'Database',
    cta: 'Structurer mon pilotage',
    isEntryPoint: false,
    isTransversal: false,
  },
  {
    id: 'ia',
    step: null as number | null,
    title: 'Automatisations & IA utiles',
    shortTitle: 'IA',
    tagline: `Supprimer les tâches chronophages sans ajouter de complexité`,
    description: `Extraction de documents, consolidation automatique, prévisions ciblées, détection d'anomalies : chaque automatisation doit produire un gain réel et compréhensible.`,
    forWho: `Pour les équipes qui passent des heures sur des tâches qu'un algorithme fait en 30 secondes.`,
    benefits: [
      'Workflow automatisé et opérationnel',
      'Règles métier configurées sur mesure',
      'Suivi des gains produits',
    ],
    concreteDeliverables: [
      { item: 'Modèle IA entraîné sur vos données', format: 'Python / API REST' },
      {
        item: 'Extraction automatique de documents',
        format: 'OCR configuré (factures, bons de commande, BL)',
      },
      { item: 'Prévision ou classification', format: 'Modèle statistique intégré à vos outils' },
      { item: 'Interface utilisateur métier', format: 'Application web ou intégration existante' },
      {
        item: 'Métriques de performance',
        format: 'Dashboard de suivi (précision, volumes traités)',
      },
      {
        item: 'Documentation et maintenance',
        format: 'Guide technique + procédure de réentraînement',
      },
    ],
    deliverables: [
      'Workflow automatisé',
      `Règles métier configurées`,
      `Interface simple d'utilisation`,
      'Suivi des gains produits',
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
    cta: 'Automatiser un processus',
    isEntryPoint: false,
    isTransversal: false,
  },
  {
    id: 'formation',
    step: null as number | null,
    title: 'Formation & Accompagnement',
    shortTitle: 'Formation',
    tagline: `Faire monter les équipes en compétence et éviter la boîte noire`,
    description: `Nous accompagnons la prise en main, les ajustements et la maintenabilité pour que les outils restent utiles dans le temps.`,
    forWho: `Pour les entreprises qui veulent un partenaire data disponible sans embaucher un CDI.`,
    benefits: [
      'Formation pratique sur vos outils',
      'Documentation complète et maintenable',
      `Feuille de route d'évolution`,
    ],
    concreteDeliverables: [
      {
        item: 'Sessions de formation',
        format: 'Sur site ou visio (2h par session, adaptées au niveau)',
      },
      { item: 'Guides utilisateur', format: 'Documentation pas-à-pas avec captures écran' },
      {
        item: 'Évolutions des tableaux de bord',
        format: 'Nouvelles vues, KPI, analyses à la demande',
      },
      { item: 'Maintenance des pipelines', format: 'Monitoring, alertes qualité, corrections' },
      { item: 'Bilan mensuel', format: `Rapport d'activité + recommandations d'évolution` },
    ],
    deliverables: [
      'Formation pratique',
      'Documentation utilisateur',
      'Support et assistance',
      `Feuille de route d'évolution`,
    ],
    priceFactors: [
      'Nombre de jours/mois (1 à 4)',
      'Périmètre technique (outils BI, pipelines, process)',
      'Nombre de personnes à former',
      'Niveau de réactivité attendu',
    ],
    duration: 'Selon besoin',
    priceRange: '800 € – 3 200 € HT / mois',
    prerequisites: [
      'Outils data en place (livrés par nos soins ou existants)',
      'Périmètre technique défini ensemble',
    ],
    icon: 'GraduationCap',
    cta: 'Former mes équipes',
    isEntryPoint: false,
    isTransversal: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Comprendre',
    subtitle: 'Écoute terrain',
    description:
      'On part des irritants réels, des outils en place et des contraintes opérationnelles.',
  },
  {
    step: 2,
    title: 'Prioriser',
    subtitle: 'Analyse et tri',
    description: `On identifie les chantiers à plus fort impact, en tenant compte du retour sur effort.`,
  },
  {
    step: 3,
    title: 'Déployer',
    subtitle: 'Mise en œuvre',
    description: `On conçoit des solutions simples, adaptées à votre niveau de maturité et à vos équipes.`,
  },
  {
    step: 4,
    title: 'Transmettre',
    subtitle: 'Autonomie',
    description: `On documente, on forme, et on vous laisse une solution exploitable sans dépendance excessive.`,
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
    category: 'Fonctionnement',
    question: 'Est-ce que vous travaillez uniquement avec des industriels ?',
    answer: `Nous intervenons surtout là où les données, les flux et les opérations ont un impact fort sur le quotidien : industrie, réseau, services structurés, distribution ou activités multi-outils.`,
  },
  {
    category: 'Prérequis',
    question: 'Faut-il déjà avoir des outils modernes en place ?',
    answer: `Non. Nous savons travailler avec des environnements hétérogènes, y compris des ERP anciens, des fichiers Excel, des exports manuels et des outils déjà en production.`,
  },
  {
    category: 'Déroulement',
    question: 'Que contient le diagnostic initial ?',
    answer: `Le diagnostic permet d'identifier les irritants prioritaires, les sources de données utiles, les gains attendus et les chantiers à lancer dans le bon ordre.`,
  },
  {
    category: 'Fonctionnement',
    question: 'Est-ce que vous intervenez sur site ?',
    answer: `Oui, selon le contexte. L'ancrage local fait partie de notre manière de travailler, notamment pour les phases de cadrage, de déploiement ou de formation.`,
  },
  {
    category: 'Fonctionnement',
    question: `Comment évitez-vous l'effet "boîte noire" ?`,
    answer: `Nous documentons les flux, expliquons les choix, formons les équipes et gardons une logique de simplicité d'exploitation.`,
  },
  {
    category: 'Résultats',
    question: 'Combien de temps faut-il pour voir un résultat ?',
    answer: `Cela dépend du sujet, mais certains gains apparaissent dès les premières semaines quand le périmètre est bien cadré.`,
  },
];

export const NAV_LINKS = [
  { href: '/services', label: 'Expertises' },
  { href: '/cas-clients', label: 'Réalisations' },
  { href: '/#methode', label: 'Méthode' },
  { href: '/a-propos', label: 'À propos' },
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
