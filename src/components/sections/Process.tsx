import { PROCESS_STEPS } from '@/lib/constants';
import { Search, Zap, Brain } from 'lucide-react';

const iconMap = [Search, Zap, Brain];

export function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre approche en 3 temps
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pas de big bang. On avance étape par étape, chaque phase apporte de la valeur. Vous
            décidez quand passer à la suivante.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 hidden h-0.5 bg-blue-200 md:block" />

            <div className="grid gap-8 md:grid-cols-3">
              {PROCESS_STEPS.map((step, index) => {
                const Icon = iconMap[index];
                return (
                  <div key={step.step} className="relative text-center">
                    {/* Step circle with icon */}
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-blue-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Icon className="h-8 w-8" />
                      </div>
                      {/* Step number badge */}
                      <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold ring-2 ring-white">
                        {step.step}
                      </span>
                    </div>

                    {/* Arrow on mobile */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <div className="my-4 flex justify-center md:hidden">
                        <svg
                          className="h-6 w-6 text-blue-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    )}

                    <h3 className="mt-6 text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm font-medium text-blue-600">{step.subtitle}</p>
                    <p className="mt-3 text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
