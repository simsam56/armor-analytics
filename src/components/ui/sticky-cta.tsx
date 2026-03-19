'use client';

import { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { getCalendlyUrl } from '@/lib/constants';

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      // Apparaît après avoir scrollé passé le hero (~600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          initial={prefersReducedMotion ? { opacity: 1 } : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-breton-navy/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
            <a
              href={getCalendlyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-breton-navy font-semibold px-4 py-2.5 rounded-lg text-sm"
            >
              <Calendar className="h-4 w-4" />
              Diagnostic gratuit — 30 min
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="text-white/50 hover:text-white p-1.5"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
