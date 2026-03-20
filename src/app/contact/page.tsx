import type { Metadata } from 'next';
import { Calendar, Mail, MapPin, Linkedin, CheckCircle, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm, Hero } from '@/components/sections';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact - Demander un diagnostic',
  description:
    'Demandez un diagnostic ou réservez un appel découverte gratuit. Premier échange sans engagement pour comprendre vos enjeux et identifier les opportunités.',
  openGraph: {
    title: 'Contact - Demander un diagnostic | balise-ia',
    description: 'Demandez un diagnostic ou réservez un appel découverte gratuit. Sans engagement.',
  },
  alternates: {
    canonical: 'https://balise-ia.fr/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Parlons de votre projet"
        subtitle="Premier échange gratuit et sans engagement. On analyse votre contexte et on vous propose une approche adaptée à vos enjeux."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left side - Calendly + Info */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="text-2xl font-bold text-slate-900">Appel découverte gratuit</h2>
                <p className="mt-2 text-slate-600">
                  30 minutes pour comprendre votre contexte, identifier les irritants et évaluer les
                  opportunités. On parle concret, pas jargon.
                </p>

                {/* Réassurance inline */}
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-breton-moss" />
                    Sans engagement
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-breton-moss" />
                    NDA possible
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-breton-moss" />
                    Réponse sous 48h
                  </span>
                </div>

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
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-breton-emerald/30 hover:bg-slate-50"
                  >
                    <Mail className="h-5 w-5 text-breton-emerald" />
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium text-slate-900">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-breton-emerald/30 hover:bg-slate-50"
                  >
                    <Linkedin className="h-5 w-5 text-breton-emerald" />
                    <div>
                      <p className="text-xs text-slate-500">LinkedIn</p>
                      <p className="font-medium text-slate-900">balise-ia</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                    <MapPin className="h-5 w-5 text-breton-emerald" />
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
            <div>
              <ContactForm
                title="Envoyez-nous un message"
                subtitle="Décrivez votre contexte en quelques lignes. On vous répond sous 48h avec une première analyse gratuite."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui se passe ensuite */}
      <section className="py-16 bg-breton-foam">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-breton-navy text-center mb-10">
            Ce qui se passe ensuite
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'On lit votre message',
                description:
                  'Votre demande est analysée par un expert data, pas par un commercial.',
              },
              {
                step: '2',
                title: 'Analyse gratuite sous 48h',
                description:
                  'On identifie vos irritants et on évalue les opportunités d\u2019automatisation.',
              },
              {
                step: '3',
                title: 'Proposition adaptée',
                description:
                  'Un diagnostic sur site ou un premier quick win — on s\u2019adapte à votre budget.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-breton-navy text-white font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-breton-navy mb-2">{item.title}</h3>
                <p className="text-sm text-breton-slate/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
