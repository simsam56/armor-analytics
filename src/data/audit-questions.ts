import type { QuizQuestion } from '@/types/audit';

export const AUDIT_QUESTIONS: QuizQuestion[] = [
  // Question 1: Taille entreprise
  {
    id: 'company_size',
    category: 'company',
    question: 'Combien de salariés compte votre entreprise ?',
    description: 'Cela nous aide à calibrer les solutions adaptées à votre structure.',
    weight: 0.05,
    options: [
      { value: '1-10', label: '1 à 10 salariés', score: 40, tags: ['tpe', 'small'] },
      { value: '11-50', label: '11 à 50 salariés', score: 60, tags: ['pme', 'medium'] },
      { value: '51-250', label: '51 à 250 salariés', score: 80, tags: ['eti', 'large'] },
      {
        value: '250+',
        label: 'Plus de 250 salariés',
        score: 100,
        tags: ['grande-entreprise', 'enterprise'],
      },
    ],
  },

  // Question 2: Secteur d'activité
  {
    id: 'sector',
    category: 'company',
    question: "Quel est votre secteur d'activité principal ?",
    weight: 0.05,
    options: [
      {
        value: 'agroalimentaire',
        label: 'Agroalimentaire',
        score: 70,
        tags: ['agro', 'production', 'tracabilite'],
      },
      {
        value: 'metallurgie',
        label: 'Métallurgie / Mécanique',
        score: 70,
        tags: ['metal', 'production', 'qualite'],
      },
      {
        value: 'plasturgie',
        label: 'Plasturgie / Composites',
        score: 70,
        tags: ['plastique', 'production'],
      },
      {
        value: 'logistique',
        label: 'Logistique / Transport',
        score: 70,
        tags: ['supply-chain', 'flux'],
      },
      { value: 'negoce', label: 'Négoce / Distribution', score: 60, tags: ['commerce', 'stocks'] },
      { value: 'autre', label: 'Autre industrie', score: 60, tags: ['autre'] },
    ],
  },

  // Question 3: Outils de gestion
  {
    id: 'tools_management',
    category: 'tools',
    question: 'Quels outils utilisez-vous pour la gestion (commandes, stocks, facturation) ?',
    weight: 0.1,
    options: [
      {
        value: 'erp',
        label: 'ERP intégré (SAP, Sage, Cegid...)',
        score: 90,
        tags: ['erp', 'integre'],
      },
      {
        value: 'logiciel-metier',
        label: 'Logiciel métier spécialisé',
        score: 70,
        tags: ['specialise'],
      },
      { value: 'excel', label: 'Principalement Excel', score: 40, tags: ['excel', 'manuel'] },
      {
        value: 'mixte',
        label: 'Mix de plusieurs outils non connectés',
        score: 50,
        tags: ['silos', 'fragmente'],
      },
      {
        value: 'papier',
        label: "Peu d'outils informatiques",
        score: 20,
        tags: ['papier', 'manuel'],
      },
    ],
  },

  // Question 4: Outils de production
  {
    id: 'tools_production',
    category: 'tools',
    question: 'Comment suivez-vous votre production / activité terrain ?',
    weight: 0.1,
    options: [
      {
        value: 'mes-gpao',
        label: 'MES ou GPAO connecté',
        score: 90,
        tags: ['mes', 'gpao', 'automatise'],
      },
      {
        value: 'logiciel',
        label: "Logiciel dédié (non connecté à l'ERP)",
        score: 60,
        tags: ['deconnecte'],
      },
      { value: 'excel-tableur', label: 'Tableurs Excel', score: 40, tags: ['excel', 'manuel'] },
      {
        value: 'papier',
        label: 'Fiches papier / Tableaux blancs',
        score: 20,
        tags: ['papier', 'manuel'],
      },
      { value: 'na', label: 'Non applicable', score: 50, tags: ['na'] },
    ],
  },

  // Question 5: Maturité digitale
  {
    id: 'digital_maturity',
    category: 'maturity',
    question: 'Comment évaluez-vous la maturité digitale de votre entreprise ?',
    description: "Soyez honnête, il n'y a pas de mauvaise réponse.",
    weight: 0.15,
    options: [
      {
        value: '1',
        label: 'Débutant - Beaucoup de processus papier/manuels',
        score: 20,
        tags: ['debutant'],
      },
      {
        value: '2',
        label: 'En transition - Outils basiques, peu connectés',
        score: 40,
        tags: ['transition'],
      },
      {
        value: '3',
        label: 'Intermédiaire - Outils en place, quelques automatisations',
        score: 60,
        tags: ['intermediaire'],
      },
      {
        value: '4',
        label: 'Avancé - Systèmes connectés, tableaux de bord',
        score: 80,
        tags: ['avance'],
      },
      {
        value: '5',
        label: 'Mature - Data-driven, automatisation poussée',
        score: 100,
        tags: ['mature', 'data-driven'],
      },
    ],
  },

  // Question 6: Compétences data
  {
    id: 'data_skills',
    category: 'skills',
    question: 'Quelles compétences data/informatiques avez-vous en interne ?',
    weight: 0.1,
    options: [
      { value: 'aucune', label: 'Aucune compétence dédiée', score: 30, tags: ['no-skills'] },
      {
        value: 'excel-basique',
        label: "Usage basique d'Excel",
        score: 40,
        tags: ['excel-basique'],
      },
      {
        value: 'excel-avance',
        label: 'Excel avancé (TCD, formules complexes)',
        score: 60,
        tags: ['excel-avance'],
      },
      {
        value: 'bi',
        label: 'Outils BI (Power BI, Tableau...)',
        score: 80,
        tags: ['bi', 'analytique'],
      },
      {
        value: 'dev-data',
        label: 'Développeur ou Data Analyst en interne',
        score: 100,
        tags: ['dev', 'data-analyst'],
      },
    ],
  },

  // Question 7: Défi prioritaire #1
  {
    id: 'challenge_1',
    category: 'challenges',
    question: "Quel est votre principal défi opérationnel aujourd'hui ?",
    weight: 0.1,
    options: [
      {
        value: 'saisie',
        label: 'Trop de saisie manuelle / double saisie',
        score: 60,
        tags: ['saisie', 'automatisation'],
      },
      {
        value: 'reporting',
        label: 'Reporting fastidieux, données éparpillées',
        score: 60,
        tags: ['reporting', 'centralisation'],
      },
      {
        value: 'qualite',
        label: 'Erreurs de données, manque de fiabilité',
        score: 60,
        tags: ['qualite', 'fiabilite'],
      },
      {
        value: 'visibilite',
        label: 'Manque de visibilité temps réel',
        score: 60,
        tags: ['visibilite', 'temps-reel'],
      },
      {
        value: 'decision',
        label: 'Difficultés à prendre des décisions éclairées',
        score: 60,
        tags: ['decision', 'pilotage'],
      },
    ],
  },

  // Question 8: Défi prioritaire #2
  {
    id: 'challenge_2',
    category: 'challenges',
    question: 'Quel autre défi aimeriez-vous résoudre ?',
    weight: 0.05,
    options: [
      {
        value: 'integration',
        label: 'Intégration entre mes outils',
        score: 60,
        tags: ['integration', 'api'],
      },
      {
        value: 'alertes',
        label: 'Être alerté des problèmes plus tôt',
        score: 60,
        tags: ['alertes', 'proactif'],
      },
      {
        value: 'dashboard',
        label: 'Avoir des tableaux de bord efficaces',
        score: 60,
        tags: ['dashboard', 'kpi'],
      },
      {
        value: 'automatisation',
        label: 'Automatiser des tâches répétitives',
        score: 60,
        tags: ['automatisation', 'rpa'],
      },
      {
        value: 'prediction',
        label: 'Anticiper (stocks, demande, pannes...)',
        score: 70,
        tags: ['prediction', 'ia-avancee'],
      },
    ],
  },

  // Question 9: Objectif principal
  {
    id: 'main_objective',
    category: 'objectives',
    question: "Quel serait l'objectif principal d'un projet data/IA pour vous ?",
    weight: 0.1,
    options: [
      {
        value: 'temps',
        label: 'Gagner du temps (moins de tâches manuelles)',
        score: 70,
        tags: ['temps', 'productivite'],
      },
      {
        value: 'fiabilite',
        label: 'Améliorer la fiabilité des données',
        score: 70,
        tags: ['fiabilite', 'qualite'],
      },
      {
        value: 'pilotage',
        label: 'Mieux piloter mon activité',
        score: 70,
        tags: ['pilotage', 'kpi'],
      },
      {
        value: 'conformite',
        label: 'Répondre à des exigences (qualité, traçabilité)',
        score: 70,
        tags: ['conformite', 'tracabilite'],
      },
      {
        value: 'croissance',
        label: 'Accompagner ma croissance',
        score: 80,
        tags: ['croissance', 'scalabilite'],
      },
    ],
  },

  // Question 10: Budget
  {
    id: 'budget',
    category: 'budget',
    question: 'Quel budget envisagez-vous pour un premier projet ?',
    description: 'Cela nous aide à proposer des solutions adaptées.',
    weight: 0.1,
    options: [
      { value: 'moins-5k', label: 'Moins de 5 000 €', score: 40, tags: ['budget-faible'] },
      { value: '5-15k', label: '5 000 € à 15 000 €', score: 60, tags: ['budget-moyen'] },
      { value: '15-30k', label: '15 000 € à 30 000 €', score: 80, tags: ['budget-confortable'] },
      { value: 'plus-30k', label: 'Plus de 30 000 €', score: 100, tags: ['budget-important'] },
      { value: 'nsp', label: 'Je ne sais pas encore', score: 50, tags: ['budget-nsp'] },
    ],
  },

  // Question 11: Timeline
  {
    id: 'timeline',
    category: 'budget',
    question: 'Dans quel délai souhaitez-vous voir des premiers résultats ?',
    weight: 0.05,
    options: [
      { value: 'urgent', label: "Urgent : moins d'1 mois", score: 60, tags: ['urgent'] },
      { value: 'court', label: 'Court terme : 1 à 3 mois', score: 80, tags: ['court-terme'] },
      { value: 'moyen', label: 'Moyen terme : 3 à 6 mois', score: 70, tags: ['moyen-terme'] },
      { value: 'long', label: 'Pas de pression : 6 mois ou plus', score: 60, tags: ['long-terme'] },
    ],
  },

  // Question 12: Processus de décision
  {
    id: 'decision_process',
    category: 'decision',
    question: "Comment se prennent les décisions d'investissement chez vous ?",
    weight: 0.05,
    options: [
      { value: 'seul', label: 'Je suis seul décideur', score: 80, tags: ['decideur-unique'] },
      {
        value: 'direction',
        label: 'Validation par la direction',
        score: 70,
        tags: ['validation-direction'],
      },
      {
        value: 'comite',
        label: 'Comité de décision / plusieurs parties prenantes',
        score: 60,
        tags: ['comite'],
      },
      { value: 'ao', label: "Appel d'offres formel", score: 50, tags: ['appel-offres'] },
    ],
  },
];

export const TOTAL_QUESTIONS = AUDIT_QUESTIONS.length;
