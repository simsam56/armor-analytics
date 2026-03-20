import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-7xl font-bold text-breton-navy/10">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">Page introuvable</h1>
        <p className="mt-4 text-slate-600 max-w-md mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou
          contactez-nous.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
