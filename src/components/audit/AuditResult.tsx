'use client';

import type { AuditResult as AuditResultType } from '@/types/audit';
import {
  CheckCircle,
  TrendingUp,
  Clock,
  Lightbulb,
  Target,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getCalendlyUrl } from '@/lib/constants';

interface AuditResultProps {
  result: AuditResultType;
  company: string;
}

export function AuditResult({ result, company }: AuditResultProps) {
  const getScoreColor = (score: number) => {
    if (score <= 40) return 'text-orange-600';
    if (score <= 70) return 'text-breton-emerald';
    return 'text-emerald-600';
  };

  const getScoreBg = (score: number) => {
    if (score <= 40) return 'bg-orange-50 border-orange-200';
    if (score <= 70) return 'bg-breton-emerald/5 border-breton-emerald/20';
    return 'bg-emerald-50 border-emerald-200';
  };

  return (
    <div>
      {/* Score */}
      <div className="text-center mb-10">
        <p className="text-sm text-slate-500 mb-1">Résultats pour</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{company}</h2>

        <div
          className={`inline-flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 ${getScoreBg(result.score)}`}
        >
          <span className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
            {result.score}
          </span>
          <span className="text-sm text-slate-500">/ 100</span>
        </div>

        <div className="mt-5">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${getScoreBg(result.score)} ${getScoreColor(result.score)}`}
          >
            {result.maturityLabel}
          </span>
          <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm leading-relaxed">
            {result.maturityDescription}
          </p>
        </div>
      </div>

      {/* Points forts & améliorations */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {result.strengths.length > 0 && (
          <div className="rounded-xl bg-emerald-50 p-5 border border-emerald-100">
            <h3 className="flex items-center gap-2 font-semibold text-emerald-800 mb-3">
              <CheckCircle className="w-4 h-4" />
              Points forts
            </h3>
            <ul className="space-y-1.5">
              {result.strengths.map((s, i) => (
                <li key={i} className="text-sm text-emerald-700 flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.improvements.length > 0 && (
          <div className="rounded-xl bg-amber-50 p-5 border border-amber-100">
            <h3 className="flex items-center gap-2 font-semibold text-amber-800 mb-3">
              <Lightbulb className="w-4 h-4" />À améliorer
            </h3>
            <ul className="space-y-1.5">
              {result.improvements.map((imp, i) => (
                <li key={i} className="text-sm text-amber-700 flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Recommandations */}
      <div className="mb-10">
        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-5">
          <Target className="w-5 h-5 text-breton-emerald" />3 projets recommandés pour {company}
        </h3>

        <div className="space-y-4">
          {result.recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-breton-emerald text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 mb-1">{rec.title}</h4>
                  <p className="text-sm text-slate-600 mb-3">{rec.description}</p>

                  <ul className="space-y-1 mb-3">
                    {rec.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-breton-moss flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-breton-emerald" />
                      ROI : <strong className="text-slate-700">{rec.roiEstimate}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-breton-emerald" />
                      <strong className="text-slate-700">{rec.duration}</strong>
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-medium
                        ${rec.complexity === 'simple' ? 'bg-emerald-100 text-emerald-700' : ''}
                        ${rec.complexity === 'moyen' ? 'bg-amber-100 text-amber-700' : ''}
                        ${rec.complexity === 'complexe' ? 'bg-orange-100 text-orange-700' : ''}
                      `}
                    >
                      {rec.complexity === 'simple' && 'Quick win'}
                      {rec.complexity === 'moyen' && 'Projet moyen'}
                      {rec.complexity === 'complexe' && 'Projet structurant'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — double option : Calendly (primaire) + Contact (secondaire) */}
      <div className="rounded-2xl bg-breton-navy p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">On en discute ?</h3>
        <p className="text-white/70 mb-6 max-w-md mx-auto text-sm">
          30 minutes pour analyser vos résultats ensemble et définir un premier projet concret.
          Gratuit, sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-breton-emerald hover:bg-white/90 h-13 px-8 text-base font-semibold gap-2"
          >
            <a href={getCalendlyUrl()} target="_blank" rel="noopener noreferrer">
              <Calendar className="h-5 w-5" />
              Réserver un créneau
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 h-13 px-8 text-base gap-2"
          >
            <Link href="/contact">
              Envoyer un message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-xs text-white/40">contact@balise-ia.fr · Réponse sous 48h</p>
      </div>
    </div>
  );
}
