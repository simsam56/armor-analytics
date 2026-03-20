import type { Metadata } from 'next';
import { AuditQuiz } from '@/components/audit';
import { Clock, Target, Lightbulb, ChevronDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCalendlyUrl } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Audit gratuit | Identifiez vos quick wins data en 3 min | balise-ia',
  description:
    'Quiz en 3 minutes pour identifier les automatisations à fort impact dans votre PME industrielle. Score personnalisé, irritants identifiés et 3 projets recommandés. Gratuit et sans engagement.',
  keywords: [
    'audit automatisation PME',
    'diagnostic data gratuit',
    'automatisation PME industrielle',
    'tableau de bord industriel',
    'reporting automatisé Bretagne',
  ],
  openGraph: {
    title: 'Identifiez vos quick wins data en 3 minutes',
    description:
      'Quiz gratuit pour PME industrielles. Score personnalisé et 3 projets recommandés.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://balise-ia.fr/audit-ia',
  },
};

const BENEFITS = [
  {
    icon: Clock,
    title: '3 minutes',
    description: '12 questions concrètes',
  },
  {
    icon: Target,
    title: 'Vos irritants identifiés',
    description: 'Là où vous perdez du temps',
  },
  {
    icon: Lightbulb,
    title: '3 projets recommandés',
    description: 'Avec estimation de ROI',
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Hero — promesse concrète */}
      <section className="bg-breton-navy py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-breton-moss text-sm font-medium rounded-full mb-4">
              Gratuit · Sans engagement · 3 minutes
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Où perdez-vous du temps sur vos données ?
            </h1>
            <p className="mt-4 text-lg text-white/70">
              12 questions pour identifier vos irritants, évaluer votre potentiel
              d&apos;automatisation et recevoir 3 projets concrets adaptés à votre PME.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <benefit.icon className="w-5 h-5 text-breton-moss mx-auto mb-1.5" />
                  <p className="text-sm font-medium text-white">{benefit.title}</p>
                  <p className="text-xs text-white/50">{benefit.description}</p>
                </div>
              ))}
            </div>

            <a
              href="#quiz"
              className="mt-8 inline-flex items-center gap-2 bg-white text-breton-emerald font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-colors text-base"
            >
              Commencer le quiz
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Quiz — zone focus */}
      <section id="quiz" className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AuditQuiz />
        </div>
      </section>

      {/* Réassurance légère sous le quiz */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: '3 min', label: 'Temps moyen' },
              { value: '12', label: 'Questions' },
              { value: '100%', label: 'Gratuit' },
              { value: '0', label: 'Spam' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-breton-emerald">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez — concret */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-breton-moss">
              Résultats immédiats
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Ce que vous obtenez à la fin du quiz
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Votre score',
                description:
                  'Un score sur 100 qui positionne votre PME par rapport aux entreprises similaires.',
              },
              {
                step: '2',
                title: 'Vos irritants',
                description:
                  'Les points précis où vous perdez du temps : ressaisies, reporting, données dispersées.',
              },
              {
                step: '3',
                title: '3 projets recommandés',
                description:
                  'Des projets concrets avec estimation de ROI, durée et complexité. Pas de promesses vagues.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-breton-emerald text-white font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Et après ? — lien clair vers diagnostic */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Et après le quiz ?</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Si vos résultats vous parlent, on peut en discuter en 30 minutes. On analyse vos
            réponses ensemble, on affine le diagnostic, et on définit un premier projet concret.
            Gratuit, sans engagement.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quiz"
              className="inline-flex items-center justify-center gap-2 bg-breton-emerald text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#143D31] transition-colors text-base"
            >
              Commencer le quiz
              <ChevronDown className="w-4 h-4" />
            </a>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-300 h-12 px-8 text-base gap-2"
            >
              <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4" />
                Ou réserver directement un appel
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ réduite — 5 questions les plus utiles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Mes données sont-elles protégées ?',
                a: 'Vos réponses servent uniquement à générer vos recommandations. On ne partage rien avec des tiers. Seul votre email (optionnel) nous permet de vous recontacter si vous le souhaitez.',
              },
              {
                q: 'Combien coûte un projet typique ?',
                a: 'Un diagnostic coûte 2 000 – 5 000 € HT. Un projet d\u2019automatisation 8 000 – 25 000 € HT. On propose toujours un premier quick win à moins de 10 000 € pour valider la valeur.',
              },
              {
                q: 'Faut-il des compétences techniques en interne ?',
                a: 'Non. On conçoit des solutions que vos équipes utilisent et maintiennent sans compétences techniques. Formation incluse.',
              },
              {
                q: 'Vous travaillez avec quels outils ?',
                a: 'Vos outils existants : Sage, Cegid, EBP, Excel, API. Pour les tableaux de bord : Metabase, Power BI. On ne remplace rien, on connecte.',
              },
              {
                q: 'Comment démarrer concrètement ?',
                a: 'Faites le quiz (3 min), découvrez vos recommandations. Si ça vous parle, on échange 30 min gratuitement pour affiner le diagnostic.',
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <h3 className="font-medium text-slate-900 pr-4">{item.q}</h3>
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
