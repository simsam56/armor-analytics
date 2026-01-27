'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Send,
  Loader2,
  Shield,
  Clock,
  CheckCircle,
  FileText,
  Link as LinkIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getBrandName } from '@/lib/site-config';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  message: string;
  documentUrl: string;
  checklist: string[];
}

const CHECKLIST_OPTIONS = [
  { id: 'erp', label: 'ERP / logiciel de gestion' },
  { id: 'excel', label: 'Fichiers Excel nombreux' },
  { id: 'ressaisies', label: 'Ressaisies manuelles' },
  { id: 'reporting', label: 'Reporting chronophage' },
  { id: 'integration', label: 'Outils non connectés' },
];

interface ContactFormV3Props {
  title?: string;
  subtitle?: string;
}

export function ContactFormV3({
  title = 'Demander un diagnostic gratuit',
  subtitle = 'On analyse votre contexte et on vous recontacte sous 48h avec une première proposition.',
}: ContactFormV3Props) {
  const router = useRouter();
  const brandName = getBrandName();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    message: '',
    documentUrl: '',
    checklist: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleChecklistChange = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      checklist: prev.checklist.includes(id)
        ? prev.checklist.filter((item) => item !== id)
        : [...prev.checklist, id],
    }));
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
    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl ring-1 ring-slate-200/50">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{subtitle}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Row 1: Name & Email */}
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
              className="h-11"
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
              className="h-11"
            />
          </div>
        </div>

        {/* Row 2: Company & Role */}
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
              className="h-11"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="role">Votre fonction</Label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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

        {/* Phone */}
        <div className="space-y-1.5">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 00 00 00 00"
            className="h-11"
          />
        </div>

        {/* Checklist */}
        <div className="space-y-2">
          <Label>Quels sont vos irritants ? (cochez ce qui s'applique)</Label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {CHECKLIST_OPTIONS.map((option) => (
              <label
                key={option.id}
                className={`flex items-center gap-2 rounded-lg border p-3 cursor-pointer transition-colors ${
                  formData.checklist.includes(option.id)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.checklist.includes(option.id)}
                  onChange={() => handleChecklistChange(option.id)}
                  className="sr-only"
                />
                <CheckCircle
                  className={`h-4 w-4 ${
                    formData.checklist.includes(option.id) ? 'text-blue-600' : 'text-slate-300'
                  }`}
                />
                <span className="text-sm font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label htmlFor="message">Décrivez votre contexte *</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Ex : On utilise Sage + Excel, 2 personnes passent 3h/jour à ressaisir les commandes, on aimerait automatiser et avoir un tableau de bord..."
            className="resize-none"
          />
        </div>

        {/* Document URL */}
        <div className="space-y-1.5">
          <Label htmlFor="documentUrl" className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            Lien vers un document (optionnel)
          </Label>
          <Input
            id="documentUrl"
            name="documentUrl"
            type="url"
            value={formData.documentUrl}
            onChange={handleChange}
            placeholder="https://drive.google.com/... ou https://dropbox.com/..."
            className="h-11"
          />
          <p className="text-xs text-slate-500">
            Vous pouvez partager un lien Google Drive, Dropbox ou autre pour nous montrer un
            exemple.
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700 ring-1 ring-red-100">
            {error}
          </div>
        )}

        <Button type="submit" size="lg" className="w-full gap-2 h-12" disabled={isLoading}>
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

        {/* Trust signals */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-600" />
              Réponse sous 48h
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-green-600" />
              NDA possible dès le 1er échange
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-blue-600" />
              Diagnostic gratuit
            </span>
          </div>
          <p className="text-xs text-slate-400 text-center">
            Vos données sont utilisées uniquement pour répondre à votre demande. Conformité RGPD.
            Pas de spam, pas de revente.
          </p>
        </div>
      </form>
    </div>
  );
}
