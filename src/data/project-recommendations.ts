import type { ProjectRecommendation } from '@/types/audit';

export const PROJECT_RECOMMENDATIONS: ProjectRecommendation[] = [
  // Projets simples - Quick wins
  {
    id: 'automatisation-saisie',
    title: 'Automatisation des saisies',
    description:
      'Éliminer les doubles saisies entre vos outils (Excel → ERP, emails → base de données). Gain de temps immédiat et réduction des erreurs.',
    benefits: [
      "Jusqu'à 80% de temps gagné sur la saisie",
      'Zéro erreur de retranscription',
      'Données à jour en temps réel',
    ],
    roiEstimate: '3 à 6 mois',
    duration: '2 à 4 semaines',
    complexity: 'simple',
    matchingTags: ['saisie', 'automatisation', 'excel', 'manuel', 'erp'],
    priority: 1,
  },
  {
    id: 'dashboard-kpi',
    title: 'Tableau de bord KPI',
    description:
      'Centraliser vos indicateurs clés dans un dashboard unique et actualisé automatiquement. Fini les reportings Excel hebdomadaires.',
    benefits: [
      'Vision temps réel de votre activité',
      'Reporting automatique',
      'Alertes sur seuils critiques',
    ],
    roiEstimate: '2 à 4 mois',
    duration: '3 à 6 semaines',
    complexity: 'simple',
    matchingTags: ['reporting', 'dashboard', 'kpi', 'visibilite', 'temps-reel', 'pilotage'],
    priority: 1,
  },
  {
    id: 'centralisation-donnees',
    title: 'Centralisation des données',
    description:
      'Connecter vos différentes sources de données (ERP, Excel, logiciels métier) dans une base unifiée. La fondation pour tout projet data.',
    benefits: [
      'Source de vérité unique',
      'Fin des silos de données',
      'Base pour analyses avancées',
    ],
    roiEstimate: '4 à 8 mois',
    duration: '4 à 8 semaines',
    complexity: 'moyen',
    matchingTags: ['silos', 'fragmente', 'integration', 'centralisation', 'api'],
    priority: 2,
  },

  // Projets moyens
  {
    id: 'alertes-intelligentes',
    title: "Système d'alertes intelligentes",
    description:
      "Être prévenu automatiquement des anomalies, ruptures de stock, retards, ou dépassements de seuils. Passez d'un mode réactif à proactif.",
    benefits: [
      'Détection précoce des problèmes',
      'Réduction des urgences',
      'Meilleure réactivité équipe',
    ],
    roiEstimate: '3 à 6 mois',
    duration: '3 à 5 semaines',
    complexity: 'moyen',
    matchingTags: ['alertes', 'proactif', 'qualite', 'fiabilite'],
    priority: 2,
  },
  {
    id: 'suivi-production',
    title: 'Suivi de production digitalisé',
    description:
      'Remplacer les fiches papier par une saisie terrain simple (tablette/mobile). Traçabilité complète et données exploitables.',
    benefits: [
      'Traçabilité temps réel',
      'Données exploitables immédiatement',
      'Conformité facilitée (ISO, audits)',
    ],
    roiEstimate: '4 à 8 mois',
    duration: '6 à 10 semaines',
    complexity: 'moyen',
    matchingTags: ['papier', 'production', 'tracabilite', 'conformite', 'qualite'],
    priority: 2,
  },
  {
    id: 'automatisation-reporting',
    title: 'Reporting automatisé',
    description:
      'Générer automatiquement vos rapports hebdo/mensuels et les envoyer aux bonnes personnes. Plus jamais de vendredi après-midi passé sur Excel.',
    benefits: ['Rapports générés sans effort', 'Format standardisé', 'Distribution automatique'],
    roiEstimate: '2 à 4 mois',
    duration: '2 à 4 semaines',
    complexity: 'simple',
    matchingTags: ['reporting', 'excel', 'temps', 'productivite'],
    priority: 1,
  },

  // Projets avancés
  {
    id: 'prediction-stocks',
    title: 'Prévision des stocks',
    description:
      "Utiliser l'historique pour anticiper les besoins en stock. Réduire les ruptures et le surstockage grâce au machine learning.",
    benefits: [
      'Réduction des ruptures de 30-50%',
      'Optimisation du BFR',
      'Commandes automatiques suggérées',
    ],
    roiEstimate: '6 à 12 mois',
    duration: '8 à 12 semaines',
    complexity: 'complexe',
    matchingTags: ['prediction', 'ia-avancee', 'stocks', 'supply-chain', 'data-driven'],
    priority: 3,
  },
  {
    id: 'maintenance-predictive',
    title: 'Maintenance prédictive',
    description:
      "Anticiper les pannes machines grâce à l'analyse des données capteurs et historiques. Passer d'une maintenance curative à prédictive.",
    benefits: [
      'Réduction des arrêts non planifiés',
      'Optimisation des interventions',
      'Allongement durée de vie équipements',
    ],
    roiEstimate: '8 à 18 mois',
    duration: '10 à 16 semaines',
    complexity: 'complexe',
    matchingTags: ['prediction', 'ia-avancee', 'production', 'mes', 'gpao', 'mature'],
    priority: 3,
  },
  {
    id: 'optimisation-planning',
    title: 'Optimisation du planning',
    description:
      "Améliorer l'ordonnancement de production ou la planification des tournées grâce à des algorithmes d'optimisation.",
    benefits: [
      "Meilleur taux d'utilisation ressources",
      'Réduction des temps morts',
      'Respect des délais amélioré',
    ],
    roiEstimate: '6 à 12 mois',
    duration: '8 à 14 semaines',
    complexity: 'complexe',
    matchingTags: ['production', 'logistique', 'supply-chain', 'croissance', 'scalabilite'],
    priority: 3,
  },

  // Projets transverses
  {
    id: 'formation-equipe',
    title: 'Formation data pour vos équipes',
    description:
      'Monter en compétence vos collaborateurs sur Excel avancé, Power BI ou les fondamentaux de la data. Autonomie durable.',
    benefits: [
      'Équipe autonome sur les outils',
      'Meilleure adoption des solutions',
      'Culture data renforcée',
    ],
    roiEstimate: '3 à 6 mois',
    duration: '1 à 2 jours + suivi',
    complexity: 'simple',
    matchingTags: ['no-skills', 'excel-basique', 'formation'],
    priority: 2,
  },
  {
    id: 'audit-data',
    title: 'Audit complet de vos données',
    description:
      'Cartographier vos flux de données, identifier les points de friction et définir une roadmap data claire sur 12-24 mois.',
    benefits: ["Vision claire de l'existant", 'Priorisation des chantiers', 'Roadmap actionnable'],
    roiEstimate: 'Immédiat (clarté)',
    duration: '1 à 2 semaines',
    complexity: 'simple',
    matchingTags: ['nsp', 'budget-nsp', 'debutant', 'transition'],
    priority: 1,
  },
];
