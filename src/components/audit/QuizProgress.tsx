'use client';

import { CheckCircle } from 'lucide-react';

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}

export function QuizProgress({ currentStep, totalSteps, completedSteps }: QuizProgressProps) {
  const progressPercentage = (completedSteps.length / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="relative">
        <div className="h-2 bg-[#E2E8E5] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1B4D3E] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-between mt-4">
        <span className="text-sm font-medium text-[#1B4D3E]">
          Question {currentStep} sur {totalSteps}
        </span>
        <span className="text-sm text-[#64756C]">
          {Math.round(progressPercentage)}% complété
        </span>
      </div>

      {/* Step dots for desktop */}
      <div className="hidden md:flex justify-between mt-4 px-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCompleted = completedSteps.includes(step);
          const isCurrent = step === currentStep;

          return (
            <div
              key={step}
              className={`
                flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium
                transition-all duration-300
                ${isCompleted
                  ? 'bg-[#1B4D3E] text-white'
                  : isCurrent
                    ? 'bg-[#1B4D3E]/10 text-[#1B4D3E] ring-2 ring-[#1B4D3E]'
                    : 'bg-[#F1F5F3] text-[#64756C]'
                }
              `}
            >
              {isCompleted ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                step
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
