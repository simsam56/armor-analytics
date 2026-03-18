'use client';

import type { AuditResult as AuditResultType } from '@/types/audit';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AuditResultProps {
  result: AuditResultType;
  company: string;
}

export function AuditResult({ result, company }: AuditResultProps) {
  // Déterminer la couleur du score
  const getScoreColor = (score: number) => {
    if (score <= 40) return 'text-orange-600';
    if (score <= 70) return 'text-[#1B4D3E]';
    return 'text-emerald-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score <= 40) return 'bg-orange-50 border-orange-200';
    if (score <= 70) return 'bg-[#1B4D3E]/5 border-[#1B4D3E]/20';
    return 'bg-emerald-50 border-emerald-200';
  };

  return (
    <div className="animate-fade-in-up">
      {/* Header avec score */}
      <div className="text-center mb-10">
        <p className="text-[#64756C] mb-2">Résultats pour</p>
        <h2 className="text-2xl font-bold text-[#1E2922] mb-6">{company}</h2>

        {/* Score circle */}
        <div className={`inline-flex flex-col items-center justify-center w-40 h-40 rounded-full border-4 ${getScoreBgColor(result.score)}`}>
          <span className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
            {result.score}
          </span>
          <span className="text-sm text-[#64756C]">/ 100</span>
        </div>

        <div className="mt-6">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getScoreBgColor(result.score)} ${getScoreColor(result.score)}`}>
            {result.maturityLabel}
          </span>
          <p className="mt-3 text-[#64756C] max-w-lg mx-auto">
            {result.maturityDescription}
          </p>
        </div>
      </div>

      {/* Points forts et améliorations */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Points forts */}
        {result.strengths.length > 0 && (
          <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-800 mb-4">
              <CheckCircle className="w-5 h-5" />
              Vos points forts
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, i) => (
                <li key={i} className="flex items-start gap-2 text-emerald-700">
                  <span className="text-emerald-500 mt-1">•</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Axes d'amélioration */}
        {result.improvements.length > 0 && (
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-amber-800 mb-4">
              <Lightbulb className="w-5 h-5" />
              Axes d&apos;amélioration
            </h3>
            <ul className="space-y-2">
              {result.improvements.map((improvement, i) => (
                <li key={i} className="flex items-start gap-2 text-amber-700">
                  <span className="text-amber-500 mt-1">•</span>
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Recommandations de projets */}
      <div className="mb-10">
        <h3 className="flex items-center gap-2 text-xl font-bold text-[#1E2922] mb-6">
          <Target className="w-6 h-6 text-[#1B4D3E]" />
          Nos 3 recommandations pour vous
        </h3>

        <div className="space-y-4">
          {result.recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="bg-white rounded-xl border border-[#E2E8E5] p-6 hover:border-[#1B4D3E]/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1B4D3E] text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#1E2922] mb-2">
                    {rec.title}
                  </h4>
                  <p className="text-[#64756C] mb-4">
                    {rec.description}
                  </p>

                  {/* Bénéfices */}
                  <ul className="space-y-1 mb-4">
                    {rec.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#1E2922]">
                        <CheckCircle className="w-4 h-4 text-[#1B4D3E] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* Métriques */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-[#64756C]">
                      <TrendingUp className="w-4 h-4 text-[#1B4D3E]" />
                      <span>ROI : <strong className="text-[#1E2922]">{rec.roiEstimate}</strong></span>
                    </div>
                    <div className="flex items-center gap-1 text-[#64756C]">
                      <Clock className="w-4 h-4 text-[#1B4D3E]" />
                      <span>Durée : <strong className="text-[#1E2922]">{rec.duration}</strong></span>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium
                      ${rec.complexity === 'simple' ? 'bg-green-100 text-green-700' : ''}
                      ${rec.complexity === 'moyen' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${rec.complexity === 'complexe' ? 'bg-orange-100 text-orange-700' : ''}
                    `}>
                      {rec.complexity === 'simple' && 'Quick win'}
                      {rec.complexity === 'moyen' && 'Projet moyen'}
                      {rec.complexity === 'complexe' && 'Projet avancé'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-[#1B4D3E] rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">
          Passons à l&apos;action ?
        </h3>
        <p className="text-white/80 mb-6 max-w-lg mx-auto">
          Discutons de vos résultats et définissons ensemble la meilleure approche pour votre entreprise. Premier échange gratuit et sans engagement.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-[#1B4D3E] hover:bg-[#F1F5F3] h-14 px-8 text-base rounded-xl"
        >
          <Link href="/contact">
            Échanger avec un expert
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <p className="mt-4 text-sm text-white/60">
          balisedata@gmail.com — Réponse sous 48h
        </p>
      </div>
    </div>
  );
}
