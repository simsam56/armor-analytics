import type { Metadata } from 'next';
import { Calendar, Mail, MapPin, Linkedin, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm, FAQ } from '@/components/sections';
import { FadeIn } from '@/components/ui/fade-in';
import { SITE_CONFIG } from '@/lib/constants';
import { getCalendlyUrl, siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact - Diagnostic IA gratuit | Balise IA Bretagne',
  description:
    "Demandez un diagnostic IA gratuit de 30 minutes. Premier échange sans engagement pour comprendre vos enjeux IA et automatisation. Basés à Lorient.",
  openGraph: {
    title: 'Contact - Diagnostic IA gratuit | Balise IA Bretagne',
    description:
      "Demandez un diagnostic IA gratuit de 30 minutes. Sans engagement.",
  },
  keywords: [
    'contact Balise IA',
    'diagnostic IA gratuit',
    'consultant IA Lorient',
    'consultant IA Bretagne',
    'contact automatisation PME',
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Contact</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Parlons de votre projet IA
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Diagnostic gratuit de 30 minutes. On analyse votre contexte et on identifie
                si l'IA ou l'automatisation peut vous aider. Sans engagement, sans jargon.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left side - Calendly + Info */}
            <div className="space-y-6">
              <FadeIn direction="up" delay={100}>
                <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-slate-200">
                  <h2 className="text-xl font-bold text-gray-900">Diagnostic IA gratuit</h2>
                  <p className="mt-2 text-gray-600">
                    30 minutes pour comprendre votre contexte, vos enjeux et identifier
                    les opportunités d'IA et d'automatisation pour votre PME.
                  </p>

                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Sans engagement
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Analyse de votre contexte
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Identification des quick wins
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Button size="lg" asChild className="w-full gap-2">
                      <a
                        href={getCalendlyUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="h-5 w-5" />
                        Réserver un créneau
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-slate-200">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Coordonnées</h2>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:border-blue-300 hover:bg-blue-50"
                    >
                      <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="font-medium text-gray-900 text-sm">{SITE_CONFIG.email}</p>
                      </div>
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:border-blue-300 hover:bg-blue-50"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">LinkedIn</p>
                        <p className="font-medium text-gray-900 text-sm">Balise IA</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                      <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">Localisation</p>
                        <p className="font-medium text-gray-900 text-sm">
                          {siteConfig.location.city}, {siteConfig.location.region}
                        </p>
                        <p className="text-xs text-gray-500">
                          Interventions sur site en Bretagne
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={300}>
                <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 text-sm">Confidentialité garantie</p>
                      <p className="text-xs text-slate-600 mt-1">
                        NDA systématique. Vos données restent en France.
                        On ne partage jamais vos informations.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right side - Form */}
            <FadeIn direction="up" delay={200}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
