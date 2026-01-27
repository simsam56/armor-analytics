import type { Metadata } from 'next';
import { Calendar, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/sections';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact - Demander un diagnostic | Balise Data',
  description:
    'Demandez un diagnostic gratuit. Premier échange sans engagement pour comprendre vos enjeux data et automatisation.',
  openGraph: {
    title: 'Contact - Demander un diagnostic | Balise Data',
    description:
      'Demandez un diagnostic gratuit. Premier échange sans engagement.',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Parlons de votre projet
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Premier échange gratuit et sans engagement. Nous analysons votre contexte et vous
              proposons une approche adaptée à vos enjeux et votre budget.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left side - Calendly + Info */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Appel découverte gratuit</h2>
                <p className="mt-2 text-gray-600">
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

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Coordonnées</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium text-gray-900">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-300 hover:bg-blue-50"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <p className="font-medium text-gray-900">Balise Data</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 p-4">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Localisation</p>
                      <p className="font-medium text-gray-900">Lorient, Bretagne</p>
                      <p className="text-sm text-gray-500">Interventions sur site en Bretagne</p>
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
