'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const CONSENT_KEY = 'balise-ia-cookie-consent';

type ConsentValue = 'accepted' | 'refused';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Delay to avoid layout shift on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    // If already accepted, enable GA
    if (consent === 'accepted') {
      enableAnalytics();
    }
  }, []);

  function enableAnalytics() {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = window as unknown as {
        gtag: (...args: unknown[]) => void;
      };
      gtag.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  }

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    enableAnalytics();
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-xl p-5 sm:p-6">
        <p className="text-sm text-slate-700 leading-relaxed">
          Nous utilisons des cookies d&apos;analyse (Google Analytics) pour comprendre comment vous
          utilisez notre site et l&apos;améliorer. Aucune donnée personnelle n&apos;est revendue.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleAccept}
            size="sm"
            className="bg-breton-navy hover:bg-breton-slate"
          >
            Accepter
          </Button>
          <Button onClick={handleRefuse} size="sm" variant="outline" className="border-slate-300">
            Refuser
          </Button>
          <a
            href="/mentions-legales"
            className="text-xs text-slate-400 hover:text-slate-600 self-center transition-colors"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
