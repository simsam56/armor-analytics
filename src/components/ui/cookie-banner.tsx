'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/Analytics';

const CONSENT_KEY = 'balise-ia-cookie-consent';

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

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const acceptBtnRef = useRef<HTMLButtonElement>(null);

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

  // Focus the accept button when banner becomes visible
  useEffect(() => {
    if (visible) {
      acceptBtnRef.current?.focus();
    }
  }, [visible]);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    enableAnalytics();
    trackEvent('cookie_consent', { action: 'accepted' });
    setVisible(false);
  }, []);

  const handleRefuse = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setVisible(false);
  }, []);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleRefuse();
        return;
      }

      // Focus trap within banner
      if (e.key === 'Tab' && bannerRef.current) {
        const focusable = bannerRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible, handleRefuse]);

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="true"
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-xl p-5 sm:p-6">
        <p className="text-sm text-slate-700 leading-relaxed">
          Nous utilisons des cookies d&apos;analyse pour comprendre comment vous
          utilisez notre site et l&apos;améliorer. Aucune donnée personnelle n&apos;est revendue.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <Button
            ref={acceptBtnRef}
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
            href="/politique-confidentialite"
            className="text-xs text-slate-400 hover:text-slate-600 self-center transition-colors"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
