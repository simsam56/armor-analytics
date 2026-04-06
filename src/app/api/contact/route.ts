import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Zod schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères.').max(100),
  email: z.string().email('Adresse email invalide.'),
  company: z.string().min(1, "Le nom de l'entreprise est requis.").max(200),
  role: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères.').max(5000),
  // Honeypot field — must be empty
  website: z.string().max(0, 'Champ invalide.').optional(),
});

// Simple in-memory rate limiter (per IP, 5 requests per 15 minutes)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de demandes. Veuillez réessayer dans quelques minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check — if filled, silently succeed (bot trap)
    if (body.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Zod validation
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message || 'Données invalides.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Initialize Resend at runtime
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Configuration email manquante. Veuillez nous contacter directement.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'contact@balise-ia.fr',
      replyTo: data.email,
      subject: `[balise-ia] Nouvelle demande de ${data.company}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Entreprise :</strong> ${escapeHtml(data.company)}</p>
        ${data.role ? `<p><strong>Fonction :</strong> ${escapeHtml(data.role)}</p>` : ''}
        ${data.phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(data.phone)}</p>` : ''}
        <hr />
        <h3>Message</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, '<br />')}</p>
      `,
      text: `
Nouvelle demande de contact

Nom : ${data.name}
Email : ${data.email}
Entreprise : ${data.company}
${data.role ? `Fonction : ${data.role}` : ''}
${data.phone ? `Téléphone : ${data.phone}` : ''}

Message :
${data.message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: "Une erreur est survenue lors de l'envoi du message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors du traitement de la demande.' },
      { status: 500 }
    );
  }
}
