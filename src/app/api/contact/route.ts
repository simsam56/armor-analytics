import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }

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
      to: process.env.CONTACT_EMAIL || 'contact@armor-analytics.fr',
      replyTo: body.email,
      subject: `[Armor Analytics] Nouvelle demande de ${body.company}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${body.name}</p>
        <p><strong>Email :</strong> ${body.email}</p>
        <p><strong>Entreprise :</strong> ${body.company}</p>
        ${body.phone ? `<p><strong>Téléphone :</strong> ${body.phone}</p>` : ''}
        <hr />
        <h3>Message</h3>
        <p>${body.message.replace(/\n/g, '<br />')}</p>
      `,
      text: `
Nouvelle demande de contact

Nom : ${body.name}
Email : ${body.email}
Entreprise : ${body.company}
${body.phone ? `Téléphone : ${body.phone}` : ''}

Message :
${body.message}
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
