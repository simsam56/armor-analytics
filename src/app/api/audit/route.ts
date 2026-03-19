import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import type { AuditResult } from '@/types/audit';
import { AUDIT_QUESTIONS } from '@/data/audit-questions';

interface AuditRequestBody {
  email: string;
  company: string;
  answers: Record<string, string>;
  result: AuditResult;
}

// Fonction pour obtenir le label d'une réponse
function getAnswerLabel(questionId: string, answerValue: string): string {
  const question = AUDIT_QUESTIONS.find(q => q.id === questionId);
  if (!question) return answerValue;
  const option = question.options.find(o => o.value === answerValue);
  return option?.label || answerValue;
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

    // Préparer les données
    const { email, company, answers, result } = body;
    const submittedAt = new Date().toLocaleString('fr-FR', {
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // Construire la liste des réponses formatées
    const answersFormatted = AUDIT_QUESTIONS.map(q => {
      const answer = answers[q.id];
      if (!answer) return null;
      return `• ${q.question}\n  → ${getAnswerLabel(q.id, answer)}`;
    }).filter(Boolean).join('\n\n');

    // Construire les recommandations
    const recommendationsFormatted = result.recommendations.map((rec, i) =>
      `${i + 1}. ${rec.title}\n   ROI: ${rec.roiEstimate} | Durée: ${rec.duration}\n   ${rec.description}`
    ).join('\n\n');

    // Envoyer l'email via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY not configured, skipping email notification');
      return NextResponse.json({
        success: true,
        message: 'Audit recorded (email notification skipped - no API key)',
        emailSent: false,
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'hello@balise-ia.fr',
      replyTo: email,
      subject: `🎯 Nouveau lead Audit IA - ${company} (Score: ${result.score}/100)`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1B4D3E; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎯 Nouveau lead Audit IA</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">${submittedAt}</p>
          </div>

          <div style="background: #f8faf9; padding: 20px; border: 1px solid #e2e8e5;">
            <h2 style="color: #1B4D3E; margin-top: 0;">Contact</h2>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Entreprise :</strong> ${company}</p>
          </div>

          <div style="background: white; padding: 20px; border: 1px solid #e2e8e5; border-top: none;">
            <h2 style="color: #1B4D3E; margin-top: 0;">Score de maturité</h2>
            <div style="display: flex; align-items: center; gap: 15px;">
              <div style="background: ${result.score <= 40 ? '#f97316' : result.score <= 70 ? '#1B4D3E' : '#10b981'}; color: white; width: 80px; height: 80px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <span style="font-size: 28px; font-weight: bold;">${result.score}</span>
                <span style="font-size: 12px; opacity: 0.8;">/100</span>
              </div>
              <div>
                <p style="margin: 0; font-weight: bold; font-size: 18px;">${result.maturityLabel}</p>
                <p style="margin: 5px 0 0; color: #64756c;">${result.maturityDescription}</p>
              </div>
            </div>
          </div>

          ${result.strengths.length > 0 ? `
          <div style="background: #ecfdf5; padding: 20px; border: 1px solid #d1fae5; border-top: none;">
            <h3 style="color: #065f46; margin-top: 0;">✓ Points forts</h3>
            <ul style="margin: 0; padding-left: 20px; color: #047857;">
              ${result.strengths.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          ` : ''}

          ${result.improvements.length > 0 ? `
          <div style="background: #fffbeb; padding: 20px; border: 1px solid #fef3c7; border-top: none;">
            <h3 style="color: #92400e; margin-top: 0;">💡 Axes d'amélioration</h3>
            <ul style="margin: 0; padding-left: 20px; color: #b45309;">
              ${result.improvements.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
          ` : ''}

          <div style="background: white; padding: 20px; border: 1px solid #e2e8e5; border-top: none;">
            <h2 style="color: #1B4D3E; margin-top: 0;">📋 3 Recommandations</h2>
            ${result.recommendations.map((rec, i) => `
              <div style="background: #f8faf9; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                <h4 style="margin: 0 0 5px; color: #1B4D3E;">${i + 1}. ${rec.title}</h4>
                <p style="margin: 0 0 10px; color: #64756c; font-size: 14px;">${rec.description}</p>
                <p style="margin: 0; font-size: 13px;">
                  <span style="background: #1B4D3E; color: white; padding: 2px 8px; border-radius: 4px;">ROI: ${rec.roiEstimate}</span>
                  <span style="margin-left: 10px; color: #64756c;">Durée: ${rec.duration}</span>
                </p>
              </div>
            `).join('')}
          </div>

          <div style="background: #f8faf9; padding: 20px; border: 1px solid #e2e8e5; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1B4D3E; margin-top: 0;">📝 Réponses détaillées</h2>
            <div style="font-size: 14px; color: #334139; white-space: pre-wrap;">${answersFormatted}</div>
          </div>

          <div style="text-align: center; padding: 20px; color: #94a39b; font-size: 12px;">
            <p>Email généré automatiquement par le quiz Audit IA de balise-ia</p>
          </div>
        </div>
      `,
      text: `
🎯 NOUVEAU LEAD AUDIT IA
${submittedAt}

━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━
Email: ${email}
Entreprise: ${company}

━━━━━━━━━━━━━━━━━━━━━━━━
SCORE DE MATURITÉ
━━━━━━━━━━━━━━━━━━━━━━━━
Score: ${result.score}/100
Niveau: ${result.maturityLabel}
${result.maturityDescription}

${result.strengths.length > 0 ? `
✓ Points forts:
${result.strengths.map(s => `  • ${s}`).join('\n')}
` : ''}

${result.improvements.length > 0 ? `
💡 Axes d'amélioration:
${result.improvements.map(i => `  • ${i}`).join('\n')}
` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━
3 RECOMMANDATIONS
━━━━━━━━━━━━━━━━━━━━━━━━

${recommendationsFormatted}

━━━━━━━━━━━━━━━━━━━━━━━━
RÉPONSES DÉTAILLÉES
━━━━━━━━━━━━━━━━━━━━━━━━

${answersFormatted}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      // On ne fait pas échouer la requête, les résultats sont quand même affichés
      return NextResponse.json({
        success: true,
        message: 'Audit recorded (email notification failed)',
        emailSent: false,
        error: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Audit recorded and email sent',
      emailSent: true,
    });
  } catch (error) {
    console.error('Error processing audit submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
