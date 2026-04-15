'use client';

import type { AuditResult as AuditResultType } from '@/types/audit';
import {
  CheckCircle,
  TrendingUp,
  Clock,
  Lightbulb,
  Target,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AuditResultProps {
  result: AuditResultType;
  company: string;
}

export function AuditResult({ result, company }: AuditResultProps) {
  const getScoreColor = (score: number) => {
    if (score <= 40) return 'text-breton-copper';
    if (score <= 70) return 'text-breton-emerald';
    return 'text-breton-emerald';
  };

  const getScoreBg = (score: number) => {
    if (score <= 40) return 'bg-breton-sand border-breton-sand';
    if (score <= 70) return 'bg-breton-emerald/5 border-breton-emerald/20';
    return 'bg-breton-foam border-breton-emerald/20';
  };

  return (
    <div>
      {/* Score */}
      <div className="text-center mb-10">
        <p className="text-sm text-breton-granite mb-1">Résultats pour</p>
        <h2 className="text-2xl font-bold text-breton-navy mb-6">{company}</h2>

        <div
          className={`inline-flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 ${getScoreBg(result.score)}`}
        >
          <span className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
            {result.score}
          </span>
          <span className="text-sm text-breton-granite">/ 100</span>
        </div>

        <div className="mt-5">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${getScoreBg(result.score)} ${getScoreColor(result.score)}`}
          >
            {result.maturityLabel}
          </span>
          <p className="mt-3 text-breton-slate max-w-lg mx-auto text-sm leading-relaxed">
            {result.maturityDescription}
          </p>
        </div>
      </div>

      {/* Points forts & améliorations */}
      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        {result.strengths.length > 0 && (
          <div className="rounded-2xl bg-breton-foam p-5 border border-breton-sand">
            <h3 className="flex items-center gap-2 font-semibold text-breton-emerald mb-3">
              <CheckCircle className="w-4 h-4" />
              Points forts
            </h3>
            <ul className="space-y-1.5">
              {result.strengths.map((s, i) => (
                <li key={i} className="text-sm text-breton-slate flex items-start gap-2">
                  <span className="text-breton-emerald mt-1">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.improvements.length > 0 && (
          <div className="rounded-2xl bg-breton-sand p-5 border border-breton-sand">
            <h3 className="flex items-center gap-2 font-semibold text-breton-copper mb-3">
              <Lightbulb className="w-4 h-4" />À améliorer
            </h3>
            <ul className="space-y-1.5">
              {result.improvements.map((imp, i) => (
                <li key={i} className="text-sm text-breton-slate flex items-start gap-2">
                  <span className="text-breton-copper mt-1">•</span>
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Recommandations */}
      <div className="mb-10">
        <h3 className="flex items-center gap-2 text-xl font-bold text-breton-navy mb-5">
          <Target className="w-5 h-5 text-breton-emerald" />3 projets recommandés pour {company}
        </h3>

        <div className="space-y-4">
          {result.recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="rounded-2xl border border-breton-sand p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 bg-breton-emerald text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-breton-navy mb-1">{rec.title}</h4>
                  <p className="text-sm text-breton-slate mb-3">{rec.description}</p>

                  <ul className="space-y-1 mb-3">
                    {rec.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-breton-slate">
                        <CheckCircle className="w-3.5 h-3.5 text-breton-moss flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 text-xs text-breton-granite">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-breton-emerald" />
                      ROI : <strong className="text-breton-navy">{rec.roiEstimate}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-breton-emerald" />
                      <strong className="text-breton-navy">{rec.duration}</strong>
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-lg font-medium
                        ${rec.complexity === 'simple' ? 'bg-breton-emerald/10 text-breton-emerald' : ''}
                        ${rec.complexity === 'moyen' ? 'bg-breton-sand text-breton-copper' : ''}
                        ${rec.complexity === 'complexe' ? 'bg-breton-sand text-breton-slate' : ''}
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

      {/* CTA — Discutons de vos résultats → /contact */}
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
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
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
        <p className="mt-4 text-xs text-white/50">contact@balise-ia.fr · Réponse sous 48h</p>
      </div>
    </div>
  );
}
