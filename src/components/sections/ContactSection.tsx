import { Calendar, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from './ContactForm';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            On en parle ?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Appel découverte gratuit de 30 min. Sans engagement, sans jargon, on parle concret.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Calendly + Info */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-[#1B4D3E]/5 p-8">
              <h3 className="text-2xl font-bold text-slate-900">Appel découverte gratuit</h3>
              <p className="mt-2 text-slate-600">
                30 minutes pour comprendre votre contexte et identifier les opportunités.
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

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-900">Autres moyens de contact</h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:border-[#1B4D3E]/30 hover:bg-[#1B4D3E]/5"
                >
                  <Mail className="h-5 w-5 text-[#1B4D3E]" />
                  <span className="text-slate-700">{SITE_CONFIG.email}</span>
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:border-[#1B4D3E]/30 hover:bg-[#1B4D3E]/5"
                >
                  <Linkedin className="h-5 w-5 text-[#1B4D3E]" />
                  <span className="text-slate-700">LinkedIn</span>
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                  <MapPin className="h-5 w-5 text-[#1B4D3E]" />
                  <span className="text-slate-700">Lorient, Bretagne – Interventions sur site</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
