import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Merci pour votre message',
  description: 'Votre demande a bien été envoyée. Nous vous recontactons sous 48h.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Merci pour votre message
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Votre demande a bien été envoyée. Nous analysons votre contexte et vous recontactons sous
          48h avec une première réponse.
        </p>

        <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900">En attendant...</h2>
          <p className="mt-4 text-gray-600">
            Vous pouvez aussi réserver directement un créneau de 30 minutes pour un premier échange.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild className="gap-2">
              <a
                href={`https://calendly.com/${SITE_CONFIG.calendly}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                Prendre rendez-vous
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <Button variant="outline" asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              Retour à l&apos;accueil
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
