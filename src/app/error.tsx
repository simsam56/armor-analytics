'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4 max-w-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 mb-6">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Une erreur est survenue
        </h2>
        <p className="mt-4 text-slate-600">
          Nous nous excusons pour la gêne. Vous pouvez réessayer ou revenir à l&apos;accueil.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} variant="outline">
            Réessayer
          </Button>
          <Button asChild className="bg-breton-navy hover:bg-breton-slate">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
