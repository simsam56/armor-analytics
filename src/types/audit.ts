// Types pour le Quiz Audit IA

export interface QuizOption {
  value: string;
  label: string;
  score: number;
  tags?: string[]; // Pour le matching des recommandations
}

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  question: string;
  description?: string;
  options: QuizOption[];
  weight: number; // Pondération dans le score final (0-1)
}

export type QuizCategory =
  | 'company' // Taille, secteur
  | 'tools' // Outils actuels
  | 'maturity' // Maturité digitale
  | 'skills' // Compétences équipe
  | 'challenges' // Défis prioritaires
  | 'objectives' // Objectifs
  | 'budget' // Budget et timeline
  | 'decision'; // Processus décision

export interface QuizState {
  currentStep: number;
  answers: Record<string, string>;
  email: string;
  company: string;
  startedAt: string;
  completedSteps: number[];
}

export type MaturityLevel = 'debutant' | 'intermediaire' | 'avance';

export interface ProjectRecommendation {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  roiEstimate: string;
  duration: string;
  complexity: 'simple' | 'moyen' | 'complexe';
  matchingTags: string[]; // Tags qui déclenchent cette recommandation
  priority: number; // 1 = haute priorité
}

export interface AuditResult {
  score: number;
  maturityLevel: MaturityLevel;
  maturityLabel: string;
  maturityDescription: string;
  recommendations: ProjectRecommendation[];
  strengths: string[];
  improvements: string[];
}

export interface AuditSubmission {
  email: string;
  company: string;
  answers: Record<string, string>;
  result: AuditResult;
  submittedAt: string;
}

// Labels pour les niveaux de maturité
export const MATURITY_LABELS: Record<MaturityLevel, { label: string; description: string }> = {
  debutant: {
    label: 'Premiers pas',
    description:
      "Votre entreprise a un fort potentiel d'automatisation. Des quick wins sont possibles rapidement.",
  },
  intermediaire: {
    label: 'Base solide',
    description:
      "Vous avez déjà des fondations. L'IA peut vous aider à passer au niveau supérieur.",
  },
  avance: {
    label: "Prêt pour l'IA",
    description:
      "Votre maturité digitale permet d'envisager des projets IA ambitieux avec ROI rapide.",
  },
};
