'use client';

import { useState } from 'react';
import { ArrowRight, Mail, Building2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EmailCaptureProps {
  onSubmit: (email: string, company: string) => void;
  isLoading?: boolean;
}

export function EmailCapture({ onSubmit, isLoading = false }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errors, setErrors] = useState<{ email?: string; company?: string }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; company?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email invalide';
    }

    if (!company.trim()) {
      newErrors.company = 'Le nom de l\'entreprise est requis';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(email.trim(), company.trim());
  };

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B4D3E]/10 rounded-full mb-4">
          <Mail className="w-8 h-8 text-[#1B4D3E]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1E2922] mb-3">
          Dernière étape !
        </h2>
        <p className="text-[#64756C] text-lg max-w-md mx-auto">
          Entrez vos coordonnées pour recevoir votre analyse personnalisée et vos recommandations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-[#1E2922] font-medium flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Nom de votre entreprise
          </Label>
          <Input
            id="company"
            type="text"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              if (errors.company) setErrors(prev => ({ ...prev, company: undefined }));
            }}
            placeholder="Ex: Armor Plastiques"
            className={`h-12 text-base ${errors.company ? 'border-red-500' : 'border-[#E2E8E5]'} focus:border-[#1B4D3E] focus:ring-[#1B4D3E]`}
          />
          {errors.company && (
            <p className="text-sm text-red-600">{errors.company}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1E2922] font-medium flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Votre email professionnel
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
            }}
            placeholder="prenom.nom@entreprise.fr"
            className={`h-12 text-base ${errors.email ? 'border-red-500' : 'border-[#E2E8E5]'} focus:border-[#1B4D3E] focus:ring-[#1B4D3E]`}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full bg-[#1B4D3E] hover:bg-[#143D31] text-white h-14 text-base rounded-xl"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyse en cours...
            </>
          ) : (
            <>
              Voir mes résultats
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        <p className="text-center text-sm text-[#94A39B]">
          Vos données restent confidentielles et ne seront jamais partagées.
        </p>
      </form>
    </div>
  );
}
