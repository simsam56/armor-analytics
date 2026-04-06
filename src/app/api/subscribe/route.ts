import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE_CONFIG } from '@/lib/constants';
import { isRateLimited } from '@/lib/rate-limit';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (await isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de demandes. Veuillez réessayer dans quelques minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }

    const sanitizedEmail = email.trim().toLowerCase();

    // Initialize Resend at runtime
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Configuration email manquante. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const contactEmail = process.env.CONTACT_EMAIL || SITE_CONFIG.email;

    // Send notification to balise-ia
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `[balise-ia] Nouveau lead magnet — ${sanitizedEmail}`,
      html: `
        <h2>Nouveau t&eacute;l&eacute;chargement checklist</h2>
        <p><strong>Email :</strong> ${sanitizedEmail}</p>
        <p><strong>Ressource :</strong> Checklist — 10 automatisations rapides pour PME industrielles</p>
        <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</p>
      `,
      text: `Nouveau téléchargement checklist\n\nEmail : ${sanitizedEmail}\nRessource : Checklist — 10 automatisations rapides pour PME industrielles\nDate : ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}`,
    });

    // Send confirmation to subscriber
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: sanitizedEmail,
      replyTo: contactEmail,
      subject: 'Votre checklist automatisation PME — balise-ia',
      html: `
        <h2>Merci pour votre int&eacute;r&ecirc;t !</h2>
        <p>Voici votre checklist <strong>&laquo; 10 automatisations rapides pour PME industrielles &raquo;</strong>.</p>
        <p>Nous pr&eacute;parons actuellement ce guide. Vous recevrez le document complet tr&egrave;s prochainement &agrave; cette adresse.</p>
        <p>En attendant, n&rsquo;h&eacute;sitez pas &agrave; <a href="${SITE_CONFIG.url}/contact">prendre contact</a> pour &eacute;changer sur vos enjeux data et automatisation.</p>
        <br />
        <p>&Agrave; bient&ocirc;t,</p>
        <p><strong>${SITE_CONFIG.name}</strong><br />
        ${SITE_CONFIG.tagline}</p>
      `,
      text: `Merci pour votre intérêt !

Voici votre checklist « 10 automatisations rapides pour PME industrielles ».

Nous préparons actuellement ce guide. Vous recevrez le document complet très prochainement à cette adresse.

En attendant, n'hésitez pas à prendre contact sur ${SITE_CONFIG.url}/contact pour échanger sur vos enjeux data et automatisation.

À bientôt,
${SITE_CONFIG.name}
${SITE_CONFIG.tagline}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: "Une erreur est survenue lors de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
