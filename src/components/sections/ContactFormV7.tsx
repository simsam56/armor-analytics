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
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactFormV7() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    honeypot: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FormErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setError(null);
  };

  const validate = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Veuillez indiquer votre nom.';
    if (!formData.company.trim()) errors.company = 'Veuillez indiquer votre entreprise.';
    if (!formData.email.trim()) {
      errors.email = 'Veuillez indiquer votre email.';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Format d\'email invalide.';
    }
    if (!formData.message.trim()) errors.message = 'Veuillez décrire votre situation.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (bots fill hidden fields)
    if (formData.honeypot) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { name, email, company, phone, message } = formData;
      const payload = { name, email, company, phone, message };
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
      {/* Honeypot anti-spam (invisible) */}
      <div className="hidden" aria-hidden="true">
        <input
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={handleChange}
        />
      </div>

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
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-white h-12 text-base ${fieldErrors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E]'}`}
            aria-required="true"
            aria-describedby={fieldErrors.name ? 'name-error' : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-xs text-red-600" role="alert">{fieldErrors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-[#1E2922] font-medium">
            Entreprise <span className="text-red-500" aria-hidden="true">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className={`bg-white h-12 text-base ${fieldErrors.company ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E]'}`}
            aria-required="true"
            aria-describedby={fieldErrors.company ? 'company-error' : undefined}
          />
          {fieldErrors.company && (
            <p id="company-error" className="text-xs text-red-600" role="alert">{fieldErrors.company}</p>
          )}
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
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={`bg-white h-12 text-base ${fieldErrors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E]'}`}
            aria-required="true"
            aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-xs text-red-600" role="alert">{fieldErrors.email}</p>
          )}
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
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Quels sont vos outils actuels ? Qu'est-ce qui vous prend du temps ? Quels résultats attendez-vous ?"
          className={`bg-white resize-none text-base ${fieldErrors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-[#E2E8E5] focus:border-[#1B4D3E] focus:ring-[#1B4D3E]'}`}
          aria-required="true"
          aria-describedby={fieldErrors.message ? 'message-error' : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="text-xs text-red-600" role="alert">{fieldErrors.message}</p>
        )}
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
