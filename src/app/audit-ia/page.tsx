import type { Metadata } from 'next';
import { AuditQuiz } from '@/components/audit';
import { Lightbulb, Clock, Target, BarChart3, Cog, Users, TrendingUp, Shield, ChevronDown, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Audit IA Gratuit | Évaluez votre maturité data | BALISE Data',
  description: 'Quiz en 3 minutes pour évaluer la maturité data de votre PME industrielle. Score personnalisé, points forts identifiés et 3 projets IA recommandés avec estimation de ROI. Gratuit et sans engagement.',
  keywords: [
    'audit IA PME',
    'maturité digitale entreprise',
    'maturité data PME',
    'diagnostic data gratuit',
    'évaluation automatisation',
    'ROI intelligence artificielle',
    'PME Bretagne data',
    'tableau de bord industriel',
    'automatisation données PME',
    'reporting industriel',
  ],
  openGraph: {
    title: 'Audit IA Gratuit | Évaluez votre maturité data',
    description: 'Quiz en 3 minutes pour évaluer la maturité data de votre PME industrielle. Score personnalisé et recommandations concrètes.',
    type: 'website',
  },
};

const BENEFITS = [
  {
    icon: Clock,
    title: '3 minutes',
    description: '12 questions simples',
  },
  {
    icon: Target,
    title: 'Score personnalisé',
    description: 'Évaluation sur 100 points',
  },
  {
    icon: Lightbulb,
    title: '3 recommandations',
    description: 'Projets adaptés avec ROI',
  },
];

// Les 5 dimensions évaluées par le quiz
const DIMENSIONS = [
  {
    icon: Cog,
    title: 'Outils & Infrastructure',
    description: 'Quels logiciels utilisez-vous ? Sont-ils connectés entre eux ? Avez-vous un ERP, un CRM, des fichiers Excel dispersés ?',
  },
  {
    icon: BarChart3,
    title: 'Qualité des données',
    description: 'Vos données sont-elles fiables ? À jour ? Combien de temps perdez-vous à les corriger ou les ressaisir ?',
  },
  {
    icon: Users,
    title: 'Compétences internes',
    description: 'Votre équipe maîtrise-t-elle les outils actuels ? Y a-t-il des personnes formées à l\'analyse de données ?',
  },
  {
    icon: TrendingUp,
    title: 'Pilotage & Décision',
    description: 'Avez-vous des tableaux de bord ? Sont-ils consultés régulièrement ? Les décisions sont-elles basées sur des données ?',
  },
  {
    icon: Shield,
    title: 'Maturité organisationnelle',
    description: 'La direction est-elle impliquée ? Y a-t-il une volonté de transformation ? Un budget identifié ?',
  },
];

// Exemples de projets par niveau de maturité
const PROJECTS_BY_LEVEL = [
  {
    level: 'Débutant',
    score: '0-40',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    projects: [
      'Centralisation des données dans un outil unique',
      'Automatisation des saisies répétitives',
      'Mise en place d\'un premier tableau de bord',
    ],
  },
  {
    level: 'Intermédiaire',
    score: '41-70',
    color: 'bg-[#1B4D3E]/10 text-[#1B4D3E] border-[#1B4D3E]/20',
    projects: [
      'Connexion entre ERP et outils métiers',
      'Tableaux de bord temps réel par service',
      'Alertes automatiques sur anomalies',
    ],
  },
  {
    level: 'Avancé',
    score: '71-100',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    projects: [
      'Analyse prédictive (maintenance, stocks)',
      'Automatisation des processus métiers complexes',
      'IA générative pour la documentation',
    ],
  },
];

// FAQ étendue - 10 questions
const FAQ_ITEMS = [
  {
    question: 'Que mesure exactement ce quiz ?',
    answer: 'Le quiz évalue votre maturité digitale sur 5 dimensions : les outils en place, la qualité de vos données, les compétences de votre équipe, votre capacité de pilotage et la maturité organisationnelle. Le score final (sur 100) vous donne une vision claire de votre positionnement par rapport aux PME de votre secteur.',
  },
  {
    question: 'Les recommandations sont-elles vraiment adaptées à ma situation ?',
    answer: 'Oui. Les projets recommandés sont basés sur notre expérience de 7 ans avec des PME industrielles. L\'algorithme croise vos réponses avec une base de cas réels pour proposer les projets qui ont le meilleur rapport impact/effort pour des entreprises similaires à la vôtre.',
  },
  {
    question: 'Mes données sont-elles protégées ?',
    answer: 'Absolument. Vos réponses sont utilisées uniquement pour générer vos recommandations personnalisées. Nous ne partageons jamais vos informations avec des tiers. Seul votre email (optionnel) nous permet de vous recontacter si vous le souhaitez.',
  },
  {
    question: 'Que se passe-t-il après le quiz ?',
    answer: 'Vous recevez immédiatement vos résultats : score, points forts, axes d\'amélioration et 3 projets recommandés avec estimation de ROI. Si vous laissez votre email, nous vous recontactons sous 48h pour un échange gratuit et approfondir votre diagnostic.',
  },
  {
    question: 'Combien coûte un projet IA ou data typique ?',
    answer: 'Les projets varient de 5 000€ à 50 000€ selon la complexité. Un tableau de bord simple coûte 5-10K€. Une automatisation de flux données entre ERP et outils métiers coûte 10-20K€. Un projet IA complet (prédictif, etc.) coûte 20-50K€. Nous proposons toujours un premier quick win à moins de 10K€ pour valider la valeur avant d\'aller plus loin.',
  },
  {
    question: 'Quelle est la durée d\'un projet ?',
    answer: 'Un projet typique dure 4 à 12 semaines. Nous commençons toujours par un quick win (2-4 semaines) pour montrer des résultats rapides. Ensuite, les projets plus structurants s\'étalent sur 2-3 mois avec des livrables intermédiaires toutes les 2 semaines.',
  },
  {
    question: 'Faut-il des compétences techniques en interne ?',
    answer: 'Non. Nous concevons des solutions que vos équipes peuvent utiliser et maintenir sans compétences techniques. Formation incluse. Notre objectif : vous rendre autonomes, pas dépendants de nous.',
  },
  {
    question: 'Quels outils et technologies utilisez-vous ?',
    answer: 'Nous travaillons avec vos outils existants (ERP, Excel, CRM). Pour les tableaux de bord : Metabase, PowerBI ou solutions sur mesure. Pour l\'automatisation : Python, n8n, Make. Pour les pipelines de données : dbt, Airbyte. Nous privilégions les solutions open source quand c\'est pertinent pour réduire vos coûts.',
  },
  {
    question: 'Travaillez-vous à distance ou sur site ?',
    answer: 'Les deux. Le diagnostic initial et les ateliers clés se font sur site en Bretagne (Lorient, Rennes, Vannes, Quimper, Brest, Nantes). Le développement et le suivi peuvent se faire à distance. Nous nous adaptons à vos contraintes.',
  },
  {
    question: 'Comment démarrer concrètement ?',
    answer: 'Faites le quiz (3 min), découvrez votre score et vos recommandations. Si ça vous parle, laissez votre email et on vous rappelle sous 48h pour un premier échange gratuit de 30 minutes. Pas d\'engagement, pas de commercial agressif. Juste une discussion technique pour voir si on peut vous aider.',
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[104px]" />

      <main id="main-content">
        {/* Hero section - Compact */}
        <section className="bg-gradient-to-b from-[#1B4D3E] to-[#143D31] py-8 md:py-12">
          <div className="container-content">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-[#74C69D] text-sm font-medium rounded-full mb-4">
                Gratuit et sans engagement
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Évaluez la maturité data de votre entreprise
              </h1>
              <p className="text-lg text-white/80 mb-6">
                12 questions • 3 minutes • Résultats immédiats
              </p>

              {/* Benefits - Inline */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="flex items-center gap-2 text-white/90">
                    <benefit.icon className="w-5 h-5 text-[#74C69D]" />
                    <span className="text-sm font-medium">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quiz section - PRIORITÉ : visible immédiatement */}
        <section id="quiz" className="py-10 md:py-16 bg-white">
          <div className="container-content">
            <AuditQuiz />
          </div>
        </section>

        {/* Section pédagogique : Pourquoi évaluer sa maturité data ? */}
        <section className="py-12 md:py-16 bg-[#F8FAF9] border-t border-[#E2E8E5]">
          <div className="container-content">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E2922] text-center mb-6">
                Pourquoi évaluer sa <span className="text-[#1B4D3E]">maturité data</span> ?
              </h2>

              <div className="prose prose-lg max-w-none text-[#64756C] space-y-4">
                <p>
                  La <strong className="text-[#1E2922]">maturité data</strong> mesure la capacité de votre entreprise
                  à exploiter ses données pour prendre de meilleures décisions. Ce n&apos;est pas une question de
                  technologie, mais de <strong className="text-[#1E2922]">maturité organisationnelle</strong>.
                </p>
                <p>
                  Une PME industrielle avec un score de maturité data élevé sait où sont ses données, comment
                  les fiabiliser et les utiliser pour piloter son activité au quotidien. Elle gagne du temps,
                  réduit ses erreurs et prend des décisions plus rapidement.
                </p>
                <p>
                  Ce quiz vous permet de vous situer et d&apos;identifier les <strong className="text-[#1E2922]">projets
                  à plus fort impact</strong> pour votre situation actuelle. Pas de recommandations génériques :
                  des projets concrets basés sur notre expérience avec des PME similaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Les 5 dimensions évaluées */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-content">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E2922] text-center mb-4">
                Les 5 dimensions évaluées
              </h2>
              <p className="text-center text-[#64756C] mb-10 max-w-2xl mx-auto">
                Notre algorithme analyse votre situation sur 5 axes pour vous donner un score
                précis et des recommandations personnalisées.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {DIMENSIONS.map((dimension) => (
                  <div
                    key={dimension.title}
                    className="bg-[#F8FAF9] rounded-xl p-6 border border-[#E2E8E5] hover:border-[#1B4D3E]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#1B4D3E]/10 rounded-lg flex items-center justify-center">
                        <dimension.icon className="w-5 h-5 text-[#1B4D3E]" />
                      </div>
                      <h3 className="font-semibold text-[#1E2922]">{dimension.title}</h3>
                    </div>
                    <p className="text-sm text-[#64756C]">{dimension.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section : Exemples de projets par niveau */}
        <section className="py-12 md:py-16 bg-[#F8FAF9]">
          <div className="container-content">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E2922] text-center mb-4">
                Exemples de projets par niveau de maturité
              </h2>
              <p className="text-center text-[#64756C] mb-10 max-w-2xl mx-auto">
                Selon votre score, nous vous recommandons des projets adaptés à votre niveau
                actuel. Voici quelques exemples typiques.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {PROJECTS_BY_LEVEL.map((level) => (
                  <div
                    key={level.level}
                    className={`rounded-xl p-6 border ${level.color}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-lg">{level.level}</h3>
                      <span className="text-sm font-medium opacity-75">{level.score}/100</span>
                    </div>
                    <ul className="space-y-3">
                      {level.projects.map((project, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section - 10 questions */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-content">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E2922] text-center mb-4">
                Questions fréquentes
              </h2>
              <p className="text-center text-[#64756C] mb-10">
                Tout ce que vous devez savoir sur le quiz et nos accompagnements.
              </p>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                  <details
                    key={index}
                    className="group bg-[#F8FAF9] rounded-xl border border-[#E2E8E5] overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#F1F5F3] transition-colors">
                      <h3 className="font-semibold text-[#1E2922] pr-4">{item.question}</h3>
                      <ChevronDown className="w-5 h-5 text-[#64756C] shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-[#64756C] leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 md:py-16 bg-[#1B4D3E]">
          <div className="container-content">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prêt à découvrir votre score ?
              </h2>
              <p className="text-white/80 mb-8">
                3 minutes pour évaluer votre potentiel IA et recevoir des recommandations
                personnalisées. Gratuit et sans engagement.
              </p>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 bg-white text-[#1B4D3E] font-semibold px-8 py-4 rounded-lg hover:bg-[#F1F5F3] transition-colors"
              >
                Commencer le quiz
                <ChevronDown className="w-5 h-5 rotate-180" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
