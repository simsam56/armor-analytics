import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function FormationMerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-breton-foam px-4">
      <div className="max-w-md text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-breton-emerald mb-6" />
        <h1 className="text-2xl font-bold text-breton-navy mb-4">
          Vérifiez votre boîte email
        </h1>
        <p className="text-breton-slate mb-8">
          Votre ressource vous a été envoyée par email. Si vous ne la voyez pas, vérifiez vos
          spams.
        </p>
        <Button asChild>
          <Link href="/audit-ia">Faire le diagnostic →</Link>
        </Button>
      </div>
    </main>
  );
}
