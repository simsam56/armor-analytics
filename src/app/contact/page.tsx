import type { Metadata } from 'next';
import { Calendar, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm, Hero } from '@/components/sections';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact - Demander un diagnostic',
  description:
    'Demandez un diagnostic ou réservez un appel découverte gratuit. Premier échange sans engagement pour comprendre vos enjeux et identifier les opportunités.',
  openGraph: {
    title: 'Contact - Demander un diagnostic | balise-ia',
    description:
      'Demandez un diagnostic ou réservez un appel découverte gratuit. Sans engagement.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Parlons de votre projet"
        subtitle="Premier échange gratuit et sans engagement. Nous analysons votre contexte et vous proposons une approche adaptée à vos enjeux et votre budget."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left side - Calendly + Info */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-bold text-slate-900">Appel découverte gratuit</h2>
                <p className="mt-2 text-slate-600">
                  30 minutes pour comprendre votre contexte et identifier les opportunités.
                  Sans engagement, sans jargon, on parle concret.
                </p>
                <div className="mt-6">
                  <Button size="lg" asChild className="w-full gap-2">
                    <a
                      href={`https://calendly.com/${SITE_CONFIG.calendly}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="h-5 w-5" />
                      Réserver un créneau
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Coordonnées</h2>
                <div className="space-y-3">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-[#1B4D3E]/30 hover:bg-slate-50"
                  >
                    <Mail className="h-5 w-5 text-[#1B4D3E]" />
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium text-slate-900">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-[#1B4D3E]/30 hover:bg-slate-50"
                  >
                    <Linkedin className="h-5 w-5 text-[#1B4D3E]" />
                    <div>
                      <p className="text-xs text-slate-500">LinkedIn</p>
                      <p className="font-medium text-slate-900">balise-ia</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                    <MapPin className="h-5 w-5 text-[#1B4D3E]" />
                    <div>
                      <p className="text-xs text-slate-500">Localisation</p>
                      <p className="font-medium text-slate-900">Lorient, Bretagne</p>
                      <p className="text-xs text-slate-500">Interventions sur site en Bretagne</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
