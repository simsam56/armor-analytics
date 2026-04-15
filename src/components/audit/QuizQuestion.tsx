'use client';

import type { QuizQuestion as QuizQuestionType } from '@/types/audit';
import { CheckCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
}

export function QuizQuestion({ question, selectedValue, onSelect }: QuizQuestionProps) {
  return (
    <div className="animate-fade-in-up">
      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-breton-navy mb-3">{question.question}</h2>
        {question.description && <p className="text-breton-slate text-lg">{question.description}</p>}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={`
                w-full text-left p-5 rounded-xl border-2 transition-all duration-200
                hover:border-breton-emerald hover:bg-breton-emerald/5
                focus:outline-none focus:ring-2 focus:ring-breton-emerald focus:ring-offset-2
                ${
                  isSelected
                    ? 'border-breton-emerald bg-breton-emerald/10'
                    : 'border-breton-sand bg-white'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-lg ${isSelected ? 'text-breton-emerald font-medium' : 'text-breton-navy'}`}
                >
                  {option.label}
                </span>
                {isSelected && (
                  <CheckCircle className="w-6 h-6 text-breton-emerald flex-shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
