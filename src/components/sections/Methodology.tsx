import { PROCESS_STEPS } from '@/lib/constants';

export function Methodology() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#40916C]">
            Méthode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comment on mesure les gains
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pas de promesses vagues : des indicateurs concrets, mesurés avant et après.
          </p>
        </div>

        {/* 3 steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-slate-200 -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-2xl border border-slate-200 p-8 text-center">
                {/* Step number */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4D3E] text-white text-lg font-bold">
                  {step.step}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#40916C]">{step.subtitle}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics examples */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Saisie commande', before: '8 min', after: '30 sec' },
            { label: 'Taux d\u2019erreur', before: '5%', after: '0.2%' },
            { label: 'Reporting', before: 'J+5', after: 'Temps réel' },
            { label: 'Économie annuelle', before: '', after: '8 280 €' },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-white border border-slate-200 p-5"
            >
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                {metric.label}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                {metric.before && (
                  <>
                    <span className="text-sm text-slate-400 line-through">{metric.before}</span>
                    <span className="text-slate-300">→</span>
                  </>
                )}
                <span className="text-lg font-bold text-[#1B4D3E]">{metric.after}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Chaque projet fait l&apos;objet d&apos;un bilan chiffré avant/après.{' '}
          <span className="font-medium text-slate-700">NDA possible dès le premier échange.</span>
        </p>
      </div>
    </section>
  );
}
