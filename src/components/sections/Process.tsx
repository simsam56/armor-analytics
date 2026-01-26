import { PROCESS_STEPS } from '@/lib/constants';

export function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une méthode éprouvée en 4 étapes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Chaque projet suit une progression logique, du diagnostic au déploiement.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-8 left-0 right-0 hidden h-0.5 bg-blue-200 md:block" />

            <div className="grid gap-8 md:grid-cols-4">
              {PROCESS_STEPS.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  {/* Step number */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg">
                    {step.step}
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

                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
