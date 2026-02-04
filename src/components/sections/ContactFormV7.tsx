'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export function ContactFormV7() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name & Company - 2 columns on desktop */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#1E2922] font-medium">
            Nom <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E] h-12 text-base"
            aria-required="true"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-[#1E2922] font-medium">
            Entreprise <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className="bg-white border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E] h-12 text-base"
            aria-required="true"
          />
        </div>
      </div>

      {/* Email & Phone - 2 columns on desktop */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1E2922] font-medium">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E] h-12 text-base"
            aria-required="true"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#1E2922] font-medium">
            Téléphone <span className="text-[#64756C]">(optionnel)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-white border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E] h-12 text-base"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#1E2922] font-medium">
          Décrivez votre situation <span className="text-red-500" aria-hidden="true">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Quels sont vos outils actuels ? Qu'est-ce qui vous prend du temps ? Quels résultats attendez-vous ?"
          className="bg-white border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E] resize-none text-base"
          aria-required="true"
        />
      </div>

      {/* Error message */}
      {error && (
        <div
          className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700"
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#1B4D3E] hover:bg-[#143D31] text-white h-14 text-base rounded-lg transition-base"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer ma demande
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </>
        )}
      </Button>

      {/* Trust indicators */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-sm text-[#64756C]">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-[#1B4D3E]" aria-hidden="true" />
          <span>Réponse sous 48h</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-[#1B4D3E]" aria-hidden="true" />
          <span>Sans engagement</span>
        </div>
      </div>
    </form>
  );
}
