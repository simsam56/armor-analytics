'use client';

import { useState } from 'react';
import { ArrowRight, Building2, Loader2, Mail, Shield } from 'lucide-react';
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

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; company?: string } = {};

    if (!email.trim()) {
      newErrors.email = 'Requis pour recevoir vos résultats';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Format d\u2019email invalide';
    }

    if (!company.trim()) {
      newErrors.company = 'Requis pour personnaliser vos recommandations';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(email.trim(), company.trim());
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-breton-navy sm:text-3xl">Vos résultats sont prêts</h2>
        <p className="mt-2 text-breton-slate">
          Indiquez votre entreprise et votre email pour recevoir votre analyse personnalisée.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="audit-company"
            className="text-breton-navy font-medium flex items-center gap-2"
          >
            <Building2 className="w-4 h-4 text-breton-granite" />
            Entreprise
          </Label>
          <Input
            id="audit-company"
            type="text"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              if (errors.company) setErrors((prev) => ({ ...prev, company: undefined }));
            }}
            placeholder="Nom de votre entreprise"
            className={`h-12 text-base ${errors.company ? 'border-red-400' : ''}`}
          />
          {errors.company && <p className="text-xs text-red-600">{errors.company}</p>}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="audit-email"
            className="text-breton-navy font-medium flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-breton-granite" />
            Email professionnel
          </Label>
          <Input
            id="audit-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            placeholder="prenom@entreprise.fr"
            className={`h-12 text-base ${errors.email ? 'border-red-400' : ''}`}
          />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>

        <Button type="submit" size="lg" disabled={isLoading} className="w-full h-13 text-base">
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

        <div className="flex items-center justify-center gap-2 text-xs text-breton-granite pt-1">
          <Shield className="h-3.5 w-3.5" />
          <span>Données confidentielles · Pas de spam · Pas de revente</span>
        </div>
      </form>
    </div>
  );
}
