import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Merci | BALISE Data',
  description: 'Votre demande a bien été envoyée. Nous vous recontactons sous 48h.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[104px]" />

      <main id="main-content">
        <section className="min-h-[calc(100vh-10rem)] flex items-center section-padding bg-[#F8FAF9]">
          <div className="container-content">
            <div className="max-w-xl mx-auto text-center animate-fade-in-up">
              {/* Success icon */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1B4D3E]/10 animate-scale-in">
                <CheckCircle className="h-10 w-10 text-[#1B4D3E]" aria-hidden="true" />
              </div>

              {/* Title */}
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#1E2922] sm:text-4xl">
                Merci pour votre message
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg text-[#64756C] leading-relaxed">
                Votre demande a bien été envoyée. Nous analysons votre contexte et
                vous recontactons avec une première réponse personnalisée.
              </p>

              {/* Time indicator */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E2E8E5]">
                <Clock className="h-5 w-5 text-[#1B4D3E]" aria-hidden="true" />
                <span className="text-sm font-medium text-[#1E2922]">
                  Réponse sous 48h
                </span>
              </div>

              {/* CTA */}
              <div className="mt-12">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#E2E8E5] text-[#1E2922] hover:bg-white hover:border-[#1B4D3E] transition-base"
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                    Retour à l&apos;accueil
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
