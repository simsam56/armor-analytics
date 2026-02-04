import type { AuditResult, MaturityLevel, ProjectRecommendation } from '@/types/audit';
import { AUDIT_QUESTIONS } from '@/data/audit-questions';
import { PROJECT_RECOMMENDATIONS } from '@/data/project-recommendations';
import { MATURITY_LABELS } from '@/types/audit';

/**
 * Calcule le score global basé sur les réponses au quiz
 */
export function calculateScore(answers: Record<string, string>): number {
  let weightedScore = 0;
  let totalWeight = 0;

  for (const question of AUDIT_QUESTIONS) {
    const answer = answers[question.id];
    if (!answer) continue;

    const selectedOption = question.options.find(opt => opt.value === answer);
    if (selectedOption) {
      weightedScore += selectedOption.score * question.weight;
      totalWeight += question.weight;
    }
  }

  // Normaliser si le total des poids ne fait pas 1
  if (totalWeight > 0 && totalWeight !== 1) {
    weightedScore = weightedScore / totalWeight;
  }

  return Math.round(weightedScore);
}

/**
 * Détermine le niveau de maturité basé sur le score
 */
export function getMaturityLevel(score: number): MaturityLevel {
  if (score <= 40) return 'debutant';
  if (score <= 70) return 'intermediaire';
  return 'avance';
}

/**
 * Collecte tous les tags des réponses sélectionnées
 */
export function collectAnswerTags(answers: Record<string, string>): string[] {
  const tags: string[] = [];

  for (const question of AUDIT_QUESTIONS) {
    const answer = answers[question.id];
    if (!answer) continue;

    const selectedOption = question.options.find(opt => opt.value === answer);
    if (selectedOption?.tags) {
      tags.push(...selectedOption.tags);
    }
  }

  return tags;
}

/**
 * Sélectionne les 3 meilleures recommandations basées sur les réponses
 */
export function getRecommendations(
  answers: Record<string, string>,
  score: number
): ProjectRecommendation[] {
  const answerTags = collectAnswerTags(answers);
  const maturityLevel = getMaturityLevel(score);

  // Calculer un score de pertinence pour chaque recommandation
  const scoredRecommendations = PROJECT_RECOMMENDATIONS.map(rec => {
    let relevanceScore = 0;

    // Points pour chaque tag qui matche
    for (const tag of rec.matchingTags) {
      if (answerTags.includes(tag)) {
        relevanceScore += 10;
      }
    }

    // Bonus/malus selon le niveau de maturité et la complexité
    if (maturityLevel === 'debutant') {
      if (rec.complexity === 'simple') relevanceScore += 15;
      if (rec.complexity === 'complexe') relevanceScore -= 10;
    } else if (maturityLevel === 'avance') {
      if (rec.complexity === 'complexe') relevanceScore += 10;
      if (rec.complexity === 'simple') relevanceScore -= 5;
    }

    // Priorité de base
    relevanceScore += (4 - rec.priority) * 5;

    return { recommendation: rec, relevanceScore };
  });

  // Trier par score de pertinence et prendre les 3 premiers
  return scoredRecommendations
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3)
    .map(item => item.recommendation);
}

/**
 * Identifie les points forts basés sur les réponses
 */
export function getStrengths(answers: Record<string, string>): string[] {
  const strengths: string[] = [];
  const tags = collectAnswerTags(answers);

  if (tags.includes('erp') || tags.includes('integre')) {
    strengths.push('Système de gestion structuré en place');
  }
  if (tags.includes('mes') || tags.includes('gpao')) {
    strengths.push('Suivi de production informatisé');
  }
  if (tags.includes('bi') || tags.includes('data-analyst')) {
    strengths.push('Compétences data en interne');
  }
  if (tags.includes('avance') || tags.includes('mature')) {
    strengths.push('Bonne maturité digitale');
  }
  if (tags.includes('decideur-unique')) {
    strengths.push('Circuit de décision court');
  }
  if (tags.includes('budget-confortable') || tags.includes('budget-important')) {
    strengths.push('Budget adapté pour un projet structurant');
  }

  return strengths.slice(0, 3); // Maximum 3 points forts
}

/**
 * Identifie les axes d'amélioration basés sur les réponses
 */
export function getImprovements(answers: Record<string, string>): string[] {
  const improvements: string[] = [];
  const tags = collectAnswerTags(answers);

  if (tags.includes('excel') || tags.includes('manuel')) {
    improvements.push('Réduire la dépendance aux processus manuels');
  }
  if (tags.includes('silos') || tags.includes('fragmente')) {
    improvements.push('Connecter les outils entre eux');
  }
  if (tags.includes('papier')) {
    improvements.push('Digitaliser les processus papier');
  }
  if (tags.includes('no-skills') || tags.includes('excel-basique')) {
    improvements.push('Renforcer les compétences data');
  }
  if (tags.includes('debutant') || tags.includes('transition')) {
    improvements.push('Structurer la collecte de données');
  }
  if (tags.includes('saisie')) {
    improvements.push('Automatiser les saisies répétitives');
  }
  if (tags.includes('reporting')) {
    improvements.push('Centraliser et automatiser le reporting');
  }

  return improvements.slice(0, 3); // Maximum 3 axes d'amélioration
}

/**
 * Génère le résultat complet de l'audit
 */
export function generateAuditResult(answers: Record<string, string>): AuditResult {
  const score = calculateScore(answers);
  const maturityLevel = getMaturityLevel(score);
  const maturityInfo = MATURITY_LABELS[maturityLevel];

  return {
    score,
    maturityLevel,
    maturityLabel: maturityInfo.label,
    maturityDescription: maturityInfo.description,
    recommendations: getRecommendations(answers, score),
    strengths: getStrengths(answers),
    improvements: getImprovements(answers),
  };
}
