import { NextResponse } from 'next/server';
import { appendAuditToSheet } from '@/lib/google-sheets';
import type { AuditSubmission, AuditResult } from '@/types/audit';

interface AuditRequestBody {
  email: string;
  company: string;
  answers: Record<string, string>;
  result: AuditResult;
}

export async function POST(request: Request) {
  try {
    const body: AuditRequestBody = await request.json();

    // Validation basique
    if (!body.email || !body.company || !body.answers || !body.result) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Préparer la soumission
    const submission: AuditSubmission = {
      email: body.email,
      company: body.company,
      answers: body.answers,
      result: body.result,
      submittedAt: new Date().toISOString(),
    };

    // Envoyer à Google Sheets
    const sheetSuccess = await appendAuditToSheet(submission);

    if (!sheetSuccess) {
      // Si Google Sheets échoue, on log mais on ne fait pas échouer la requête
      // Les résultats sont quand même affichés côté client
      console.warn('Failed to append to Google Sheets, but continuing...');
    }

    // Optionnel : Envoyer un email de notification
    // (tu peux réutiliser Resend comme pour le formulaire de contact)

    return NextResponse.json({
      success: true,
      message: 'Audit submission recorded',
      sheetRecorded: sheetSuccess,
    });
  } catch (error) {
    console.error('Error processing audit submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
