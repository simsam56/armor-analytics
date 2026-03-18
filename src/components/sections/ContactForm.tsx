'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Loader2, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  message: string;
  website: string;
}

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  title = 'Décrivez votre situation',
  subtitle = 'On vous recontacte sous 48h avec une première analyse gratuite.',
}: ContactFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    message: '',
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi du message.");
      }

      router.push('/merci');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Honeypot anti-spam — hidden from real users */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jean Dupont"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email professionnel *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jean.dupont@entreprise.fr"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="company">Entreprise *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Nom de votre entreprise"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="role">Votre fonction</Label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Sélectionner...</option>
              <option value="dirigeant">Dirigeant / Gérant</option>
              <option value="daf">DAF / Responsable financier</option>
              <option value="production">Responsable production</option>
              <option value="qualite">Responsable qualité / QHSE</option>
              <option value="logistique">Responsable logistique / Supply</option>
              <option value="it">Responsable IT / DSI</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 00 00 00 00"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message">Décrivez votre contexte *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Ex : On utilise Sage + Excel, 2 personnes passent 3h/jour à ressaisir les commandes, on aimerait automatiser et avoir un tableau de bord..."
          />
          {/* Aide contextuelle V2 */}
          <div className="bg-slate-50 rounded-lg p-3 mt-2">
            <p className="text-xs font-medium text-slate-700 mb-1.5">Pour nous aider à vous répondre :</p>
            <ul className="text-xs text-slate-500 space-y-0.5">
              <li>• Quels outils utilisez-vous ? (ERP, Excel, emails...)</li>
              <li>• Quel est votre irritant principal ?</li>
              <li>• Volume / fréquence concernés ?</li>
            </ul>
          </div>
        </div>

        {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}

        <Button type="submit" size="lg" className="w-full gap-2" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Envoyer ma demande
            </>
          )}
        </Button>

        {/* Réassurance et RGPD V2 */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              Réponse sous 48h
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3.5 w-3.5" />
              NDA possible dès le 1er échange
            </span>
          </div>
          <p className="text-xs text-slate-400 text-center">
            Vos données sont utilisées uniquement pour répondre à votre demande.
            Conformité RGPD. Pas de spam, pas de revente.
          </p>
        </div>
      </form>
    </div>
  );
}
