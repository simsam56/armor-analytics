'use client';

import { Component, type ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-[50vh] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Une erreur est survenue
            </h2>
            <p className="text-slate-600 mb-6">
              Nous nous excusons pour la g&ecirc;ne occasionn&eacute;e. Veuillez r&eacute;essayer
              ou revenir &agrave; l&apos;accueil.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                variant="outline"
              >
                R&eacute;essayer
              </Button>
              <Button asChild className="bg-breton-navy hover:bg-breton-slate">
                <Link href="/">Retour &agrave; l&apos;accueil</Link>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
