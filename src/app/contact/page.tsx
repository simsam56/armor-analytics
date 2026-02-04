import type { Metadata } from 'next';
import { Mail, MapPin, Clock, Shield } from 'lucide-react';
import { ContactFormV7 } from '@/components/sections/ContactFormV7';

export const metadata: Metadata = {
  title: 'Contact | Audit IA & données gratuit PME Bretagne — BALISE Data',
  description:
    'Demandez un diagnostic gratuit IA et automatisation pour votre PME en Bretagne. Réponse sous 48h avec une première analyse personnalisée. Lorient, Rennes, Morbihan.',
  keywords: 'audit données PME Bretagne, diagnostic IA gratuit Lorient, contact consultant automatisation Rennes, conseil data PME Morbihan',
  openGraph: {
    title: 'Contact | Audit IA & données gratuit PME Bretagne',
    description: 'Demandez un diagnostic gratuit. Réponse sous 48h.',
    type: 'website',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://balisedata.fr/contact',
  },
};

const EMAIL = 'balisedata@gmail.com';

const TRUST_POINTS = [
  {
    icon: Clock,
    title: 'Réponse sous 48h',
    description: 'Une première analyse personnalisée',
  },
  {
    icon: Shield,
    title: 'Sans engagement',
    description: 'Échange libre et confidentiel',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Spacer for fixed header */}
      <div className="h-[72px] sm:h-[104px]" />

      <main id="main-content">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-[#F8FAF9] to-[#E2E8E5]" aria-labelledby="contact-title">
          <div className="container-content">
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
              <h1
                id="contact-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2922]"
              >
                Décrivez votre situation
              </h1>
              <p className="mt-4 text-lg text-[#64756C]">
                On vous répond sous 48h avec une première analyse personnalisée.
              </p>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {TRUST_POINTS.map((point, index) => (
                <div key={point.title} className={`flex items-center gap-3 animate-fade-in-up delay-${(index + 1) * 100}`}>
                  <div className="h-10 w-10 rounded-full bg-[#1B4D3E]/10 flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-[#1B4D3E]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E2922]">{point.title}</p>
                    <p className="text-sm text-[#64756C]">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="section-padding bg-white" aria-labelledby="form-section">
          <div className="container-content">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <div className="bg-[#F8FAF9] rounded-lg p-6 sm:p-8 lg:p-10 border border-[#E2E8E5]">
                  <h2 id="form-section" className="sr-only">
                    Formulaire de contact
                  </h2>
                  <ContactFormV7 />
                </div>
              </div>

              {/* Contact info sidebar */}
              <aside className="lg:col-span-5">
                <div className="lg:sticky lg:top-32 space-y-8">
                  {/* Direct contact */}
                  <div>
                    <h2 className="text-sm font-semibold text-[#1B4D3E] uppercase tracking-wide mb-4">
                      Contact direct
                    </h2>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="group flex items-center gap-3 text-[#1E2922] hover:text-[#1B4D3E] transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-[#F1F5F3] group-hover:bg-[#1B4D3E]/10 flex items-center justify-center transition-colors">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-medium">{EMAIL}</span>
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h2 className="text-sm font-semibold text-[#1B4D3E] uppercase tracking-wide mb-4">
                      Localisation
                    </h2>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#F1F5F3] flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-[#1E2922]" aria-hidden="true" />
                      </div>
                      <address className="not-italic">
                        <p className="font-medium text-[#1E2922]">Lorient, Morbihan</p>
                        <p className="text-[#64756C]">Bretagne, France</p>
                        <p className="mt-2 text-sm text-[#64756C]">
                          Interventions sur site dans toute la Bretagne
                        </p>
                      </address>
                    </div>
                  </div>

                  {/* Privacy note */}
                  <div className="pt-6 border-t border-[#E2E8E5]">
                    <p className="text-sm text-[#64756C] leading-relaxed">
                      Vos informations sont confidentielles et ne seront utilisées que
                      pour répondre à votre demande. Nous ne partageons jamais vos
                      données avec des tiers.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
