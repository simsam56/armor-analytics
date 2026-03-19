'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuizProgress } from './QuizProgress';
import { QuizQuestion } from './QuizQuestion';
import { EmailCapture } from './EmailCapture';
import { AuditResult } from './AuditResult';
import { AUDIT_QUESTIONS, TOTAL_QUESTIONS } from '@/data/audit-questions';
import { generateAuditResult } from '@/lib/audit-scoring';
import type { AuditResult as AuditResultType, QuizState } from '@/types/audit';

const STORAGE_KEY = 'balise_audit_state';

type QuizPhase = 'questions' | 'email' | 'results';

function loadSavedState(): QuizState | null {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved) as QuizState;
  } catch {
    return null;
  }
}

export function AuditQuiz() {
  const [phase, setPhase] = useState<QuizPhase>('questions');
  const [currentStep, setCurrentStep] = useState(() => loadSavedState()?.currentStep ?? 1);
  const [answers, setAnswers] = useState<Record<string, string>>(() => loadSavedState()?.answers ?? {});
  const [completedSteps, setCompletedSteps] = useState<number[]>(() => loadSavedState()?.completedSteps ?? []);
  const [company, setCompany] = useState('');
  const [result, setResult] = useState<AuditResultType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sauvegarder l'état dans localStorage
  useEffect(() => {
    if (phase === 'questions') {
      const state: QuizState = {
        currentStep,
        answers,
        email: '',
        company: '',
        startedAt: new Date().toISOString(),
        completedSteps,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [currentStep, answers, completedSteps, phase]);

  const currentQuestion = AUDIT_QUESTIONS[currentStep - 1];
  const currentAnswer = answers[currentQuestion?.id];

  const handleSelect = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));

    // Marquer comme complété si pas déjà fait
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps(prev => [...prev, currentStep]);
    }
  };

  const handleNext = () => {
    if (currentStep < TOTAL_QUESTIONS) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Toutes les questions répondues, passer à l'email
      setPhase('email');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleEmailSubmit = async (submittedEmail: string, submittedCompany: string) => {
    setIsSubmitting(true);
    setCompany(submittedCompany);

    // Calculer les résultats
    const auditResult = generateAuditResult(answers);
    setResult(auditResult);

    // Envoyer à l'API
    try {
      await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: submittedEmail,
          company: submittedCompany,
          answers,
          result: auditResult,
        }),
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      // On continue quand même pour afficher les résultats
    }

    // Nettoyer le localStorage
    localStorage.removeItem(STORAGE_KEY);

    setIsSubmitting(false);
    setPhase('results');
  };

  const handleRestart = () => {
    setPhase('questions');
    setCurrentStep(1);
    setAnswers({});
    setCompletedSteps([]);
    setCompany('');
    setResult(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Phase: Questions */}
      {phase === 'questions' && (
        <>
          <QuizProgress
            currentStep={currentStep}
            totalSteps={TOTAL_QUESTIONS}
            completedSteps={completedSteps}
          />

          <div className="mt-10">
            <QuizQuestion
              question={currentQuestion}
              selectedValue={currentAnswer}
              onSelect={handleSelect}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="border-[#E2E8E5] text-[#64756C] hover:bg-[#F1F5F3]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>

            <Button
              type="button"
              onClick={handleNext}
              disabled={!currentAnswer}
              className="bg-breton-emerald hover:bg-[#143D31] text-white"
            >
              {currentStep === TOTAL_QUESTIONS ? 'Voir mes résultats' : 'Suivant'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </>
      )}

      {/* Phase: Email capture */}
      {phase === 'email' && (
        <>
          <div className="mb-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setPhase('questions')}
              className="text-[#64756C] hover:text-[#1E2922]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Revenir aux questions
            </Button>
          </div>

          <EmailCapture onSubmit={handleEmailSubmit} isLoading={isSubmitting} />
        </>
      )}

      {/* Phase: Résultats */}
      {phase === 'results' && result && (
        <>
          <AuditResult result={result} company={company} />

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={handleRestart}
              className="text-sm text-[#64756C] hover:text-breton-emerald underline"
            >
              Refaire le quiz
            </button>
          </div>
        </>
      )}
    </div>
  );
}
