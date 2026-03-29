export const SITE_CONFIG = {
  name: 'balise-ia',
  tagline: 'Data, automatisation et IA pour les PME bretonnes',
  description:
    'Automatisation, tableaux de bord et IA pour les PME bretonnes. Diagnostic gratuit, dashboards temps réel, élimination des tâches manuelles. Basés à Lorient, interventions sur site en Bretagne.',
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

// Problèmes que l'on résout — approche par irritants (pas par secteur)
export const PAIN_POINTS = [
  {
    id: 'ressaisies',
    title: 'Ressaisies et doubles saisies',
    description: 'Vos équipes recopient des données d\u2019un outil à l\u2019autre. Ça prend du temps, ça génère des erreurs.',
    pillar: 'ia' as const,
  },
  {
    id: 'reporting',
    title: 'Reporting manuel',
    description: 'Votre reporting, c\u2019est un Excel que quelqu\u2019un met à jour le vendredi. Vous décidez sur des données périmées.',
    pillar: 'data' as const,
  },
  {
    id: 'donnees-dispersees',
    title: 'Données dispersées',
    description: 'ERP, Excel, emails, papier : vos données sont partout sauf au même endroit.',
    pillar: 'data' as const,
  },
  {
    id: 'pilotage',
    title: 'Pilotage à l\u2019instinct',
    description: 'Vous n\u2019avez pas les bons chiffres au bon moment. Les décisions se prennent au feeling.',
    pillar: 'data' as const,
  },
  {
    id: 'prevision',
    title: 'Prévision de demande et stocks',
    description: 'Vous commandez trop ou pas assez. Vos stocks sont un pari permanent.',
    pillar: 'ia' as const,
  },
  {
    id: 'qualite',
    title: 'Suivi qualité réactif',
    description: 'Vous détectez les problèmes après coup, jamais avant. Les alertes arrivent trop tard.',
    pillar: 'data' as const,
  },
  {
    id: 'documents',
    title: 'Gestion documentaire chaotique',
    description: 'Devis, BL, factures : un enfer à retrouver. Les documents sont classés dans la tête de quelqu\u2019un.',
    pillar: 'ia' as const,
  },
  {
    id: 'conformite',
    title: 'Conformité et traçabilité',
    description: 'L\u2019audit arrive, vous paniquez pour compiler les données. Le reporting réglementaire est un cauchemar.',
    pillar: 'data' as const,
  },
];

// Secteurs servis (conservé pour référence, approche par problème privilégiée)
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

// 3 piliers d'offre — reformulés par problème client
export const SERVICES = [
  {
    id: 'ia',
    title: 'Éliminer les tâches manuelles',
    navLabel: 'Automatisation',
    tagline: 'Vos équipes méritent mieux que de la ressaisie',
    description:
      'Agents IA, extraction de documents, workflows automatisés, intégrations ERP. On élimine les tâches répétitives et on mesure les gains.',
    href: '/ia',
    icon: 'Bot',
    tools: ['n8n', 'Make', 'Python', 'Claude', 'LangChain'],
    useCases: [
      'OCR & extraction de données',
      'Agents IA conversationnels',
      'Automatisation de workflows',
      'Génération de contenus métier',
      'Vision & analyse d\u2019images',
      'Prévision de demande & stocks',
      'Intégration ERP',
    ],
  },
  {
    id: 'data',
    title: 'Piloter avec des données fiables',
    navLabel: 'Data',
    tagline: 'Décidez sur des faits, pas sur des impressions',
    description:
      'Dashboards temps réel, data engineering, centralisation des sources. Vos données enfin exploitables.',
    href: '/data',
    icon: 'BarChart3',
    tools: ['Power BI', 'Metabase', 'Microsoft Fabric', 'DuckDB', 'dbt'],
    useCases: [
      'Dashboards temps réel',
      'Data warehouse & centralisation',
      'Data quality & nettoyage',
      'Suivi qualité & alertes',
      'CRM analytique & segmentation',
      'Conformité & reporting réglementaire',
      'Reporting automatisé',
    ],
  },
  {
    id: 'formation',
    title: 'Rendre vos équipes autonomes',
    navLabel: 'Formation',
    tagline: 'L\u2019IA et la data ne servent à rien si personne ne les utilise',
    description:
      'Formations sur site, accompagnement mensuel, transfert de compétences. Vos équipes prennent la main.',
    href: '/formation',
    icon: 'GraduationCap',
    tools: ['Claude', 'Power BI', 'n8n', 'Prompting IA'],
    useCases: [
      'Formation IA & prompting',
      'Formation Power BI & dashboards',
      'Accompagnement mensuel',
      'Transfert de compétences post-projet',
    ],
  },
];

export type FreeResource = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'ia' | 'data' | 'general';
  format: 'pdf';
  duration: string;
  tags: string[];
  pdfKey: string; // chemin Vercel Blob : formations/gratuit/{slug}.pdf
};

export const FREE_RESOURCES: FreeResource[] = [];
// Les ressources PDF seront ajoutées ici quand le contenu sera prêt

// Projets clients réels, anonymisés
export const PROJECTS = [
  {
    id: 'agent-ia-logistique',
    title: 'Comment un transporteur a automatisé 90% de ses réponses clients',
    sector: 'Logistique',
    location: 'Morbihan',
    companySize: '60 salariés',
    existingTools: 'TMS maison, Outlook, téléphone',
    context: `Ce transporteur breton recevait 80 à 120 appels et emails par jour pour des demandes de suivi de livraison. Deux personnes à temps plein étaient mobilisées pour répondre aux mêmes questions : "Où est mon colis ?", "Quand sera-t-il livré ?". Le TMS contenait toutes les réponses, mais personne ne pouvait y accéder directement.`,
    pain: '2 ETP mobilisés sur des réponses répétitives, temps de réponse > 4h',
    beforeAfter: {
      before: [
        { metric: 'Demandes traitées/jour', value: '80-120 (manuel)' },
        { metric: 'Temps de réponse moyen', value: '4h' },
        { metric: 'ETP mobilisés', value: '2' },
      ],
      after: [
        { metric: 'Demandes traitées/jour', value: '90% automatisées' },
        { metric: 'Temps de réponse moyen', value: '< 30 sec' },
        { metric: 'ETP mobilisés', value: '0.3 (supervision)' },
      ],
    },
    approach: [
      'Analyse des flux email et téléphone (1 semaine)',
      'Connexion au TMS via API pour récupérer les statuts en temps réel',
      'Déploiement d\u2019un agent IA (email + formulaire web) entraîné sur les FAQ',
      'Interface de supervision pour les cas complexes',
    ],
    deliverables: [
      'Agent IA connecté au TMS (réponses automatiques par email)',
      'Formulaire web de suivi en temps réel',
      'Dashboard de supervision des demandes non résolues',
      'Formation de l\u2019équipe ADV (2h)',
    ],
    techNote: 'Agent IA basé sur Claude avec RAG sur la base de connaissances interne + API TMS. Réponses en langage naturel, pas de chatbot scriptée.',
    results: {
      main: '90% des demandes de suivi traitées automatiquement',
      secondary: [
        'Temps de réponse passé de 4h à 30 secondes',
        '1.7 ETP réaffectés au service commercial',
        'Satisfaction client en hausse (NPS +12 points)',
      ],
    },
    duration: '5 semaines',
    tags: ['Agent IA', 'Automatisation', 'Service client'],
    testimonial: {
      quote: 'Nos clients ont la réponse avant même d\u2019avoir raccroché. Et mes équipes peuvent enfin se concentrer sur les vrais problèmes.',
      author: 'Directeur logistique',
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
    id: 'commandes-agroalimentaire',
    title: `Comment une entreprise agroalimentaire a éliminé 80% de ses ressaisies`,
    sector: 'Agroalimentaire',
    location: 'Morbihan',
    companySize: '35 salariés',
    existingTools: 'ERP Sage, Excel, emails',
    context: `Cette entreprise agroalimentaire recevait ses commandes par email, fax et téléphone. Deux personnes passaient leur journée à ressaisir les commandes dans l'ERP. Erreurs fréquentes, retards de traitement.`,
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
    id: 'conformite-agroalimentaire',
    title: 'Comment un IAA a automatisé son reporting réglementaire',
    sector: 'Agroalimentaire',
    location: 'Finistère',
    companySize: '85 salariés',
    existingTools: 'ERP Sage X3, LIMS, Excel, classeurs papier',
    context: `Cette entreprise agroalimentaire passait chaque trimestre par une course contre la montre pour compiler ses données de traçabilité et de conformité. Trois personnes mobilisées pendant deux semaines pour rassembler les lots, les résultats d'analyses, les non-conformités, et les mettre en forme pour les audits.`,
    pain: 'Compilation manuelle des données de traçabilité, stress des audits',
    beforeAfter: {
      before: [
        { metric: 'Temps de préparation audit', value: '2 semaines (3 pers.)' },
        { metric: 'Risque de non-conformité', value: 'Élevé (données manquantes)' },
        { metric: 'Traçabilité lot', value: 'Manuelle (classeurs)' },
      ],
      after: [
        { metric: 'Temps de préparation audit', value: '2 heures (1 pers.)' },
        { metric: 'Risque de non-conformité', value: 'Quasi nul' },
        { metric: 'Traçabilité lot', value: 'Automatisée (temps réel)' },
      ],
    },
    approach: [
      'Cartographie des flux de traçabilité (ERP, LIMS, fiches terrain)',
      'Centralisation des données dans un entrepôt structuré',
      'Génération automatique des rapports de conformité',
      'Alertes en temps réel sur les écarts et non-conformités',
    ],
    deliverables: [
      'Pipeline de centralisation ERP + LIMS',
      'Rapports de conformité générés automatiquement',
      'Dashboard traçabilité avec recherche par lot',
      'Alertes sur non-conformités en temps réel',
      'Formation QHSE (demi-journée)',
    ],
    techNote: 'ETL Python + PostgreSQL pour la centralisation. Rapports auto via Metabase avec export PDF programmé. Alertes Slack/email sur seuils critiques.',
    results: {
      main: 'Préparation d\u2019audit passée de 2 semaines à 2 heures',
      secondary: [
        'Traçabilité lot accessible en 3 clics',
        'Zéro non-conformité détectée lors du dernier audit',
        'Équipe QHSE libérée pour de la prévention',
      ],
    },
    duration: '8 semaines',
    tags: ['Conformité', 'Traçabilité', 'Data Engineering'],
    testimonial: {
      quote: 'L\u2019auditeur a été bluffé. Pour la première fois, on avait tout, structuré, à jour, en 2 clics.',
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
];

// FAQ — questions fréquentes (homepage)
export const FAQ_ITEMS = [
  {
    category: 'Approche',
    question: `Par où commencer quand on n'a jamais fait de projet IA ?`,
    answer: `Par un diagnostic. En 5 minutes (quiz en ligne) ou 30 minutes (appel découverte), on identifie vos irritants concrets et les 2-3 projets les plus rentables. On part de votre réalité terrain, pas d'une feuille blanche.`,
  },
  {
    category: 'Prérequis',
    question: 'Faut-il déjà avoir des outils modernes en place ?',
    answer: `Non. On travaille avec ce qui existe : ERP anciens, fichiers Excel, exports manuels. Le diagnostic sert justement à comprendre votre environnement avant de proposer quoi que ce soit.`,
  },
  {
    category: 'Résultats',
    question: 'Combien de temps pour voir un résultat ?',
    answer: `Les premiers gains sont mesurables dès le premier mois de déploiement. On mesure systématiquement l'avant et l'après.`,
  },
  {
    category: 'Sécurité',
    question: 'Mes données sont-elles en sécurité ?',
    answer: `NDA systématique, données hébergées en France, conformité RGPD. Vos données restent les vôtres.`,
  },
  {
    category: 'Engagement',
    question: 'Et si le diagnostic ne débouche sur rien ?',
    answer: `Vous repartez avec votre feuille de route, sans engagement. Le diagnostic a de la valeur en soi — il vous donne une vision claire de vos priorités, que vous travailliez avec nous ou non.`,
  },
];

export const NAV_LINKS = [
  { href: '/ia', label: 'Intelligences artificielles' },
  { href: '/data', label: 'Data' },
  { href: '/formation', label: 'Formations' },
  { href: '/cas-clients', label: 'Réalisations' },
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
// getCalendlyUrl() supprimé — remplacé par /audit-ia (quiz) et /contact

export function getContactEmail(): string {
  return SITE_CONFIG.email;
}

export function getBrandName(): string {
  return SITE_CONFIG.name;
}
