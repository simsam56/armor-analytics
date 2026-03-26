'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LeadMagnetProps {
  variant?: 'inline' | 'card';
}

export function LeadMagnet({ variant = 'card' }: LeadMagnetProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Veuillez saisir votre adresse email.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue.');
        return;
      }

      setSuccess(true);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div
        className={cn(
          variant === 'card' && 'rounded-2xl border border-breton-sand p-8 bg-breton-foam'
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-breton-emerald/10">
            <svg
              className="h-5 w-5 text-breton-emerald"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="text-sm font-medium text-breton-emerald">
            Checklist envoy&eacute;e ! V&eacute;rifiez votre bo&icirc;te mail.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        variant === 'card' && 'rounded-2xl border border-breton-sand p-8 bg-breton-foam'
      )}
    >
      <p className="text-lg font-bold text-slate-900">
        Checklist : 10 automatisations rapides pour PME industrielles
      </p>
      <p className="mt-1 text-sm text-slate-600">
        Recevez gratuitement notre checklist par email.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <label htmlFor="lead-magnet-email" className="sr-only">
            Adresse email
          </label>
          <input
            id="lead-magnet-email"
            type="email"
            required
            placeholder="votre@email.fr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 w-full rounded-lg border border-breton-sand bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-breton-emerald focus:outline-none focus:ring-2 focus:ring-breton-emerald/20"
            disabled={loading}
          />
          {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-breton-navy px-5 text-sm font-medium text-white transition-colors hover:bg-breton-slate disabled:opacity-50"
        >
          {loading ? 'Envoi\u2026' : 'Recevoir la checklist'}
        </button>
      </form>
    </div>
  );
}
