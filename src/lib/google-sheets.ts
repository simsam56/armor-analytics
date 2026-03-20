import { google } from 'googleapis';
import type { AuditSubmission } from '@/types/audit';

// Configuration Google Sheets
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

/**
 * Obtient un client authentifié pour Google Sheets
 */
async function getAuthClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error('Google Sheets credentials not configured');
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: SCOPES,
  });

  return auth;
}

/**
 * Ajoute une ligne au Google Sheet avec les données de l'audit
 */
export async function appendAuditToSheet(submission: AuditSubmission): Promise<boolean> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    console.warn('GOOGLE_SHEET_ID not configured, skipping Google Sheets');
    return false;
  }

  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    // Préparer les données pour la ligne
    const row = [
      submission.submittedAt, // Date
      submission.email, // Email
      submission.company, // Entreprise
      submission.answers['sector'] || '', // Secteur
      submission.answers['company_size'] || '', // Taille
      submission.result.score.toString(), // Score
      submission.result.maturityLevel, // Niveau maturité
      submission.result.recommendations.map((r) => r.title).join(', '), // Recommandations
      JSON.stringify(submission.answers), // Réponses complètes (JSON)
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Leads!A:I', // Feuille "Leads", colonnes A à I
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return true;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    return false;
  }
}

/**
 * Crée les en-têtes du sheet si nécessaire (à appeler manuellement une fois)
 */
export async function initializeSheetHeaders(): Promise<boolean> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    return false;
  }

  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    const headers = [
      'Date',
      'Email',
      'Entreprise',
      'Secteur',
      'Taille',
      'Score',
      'Niveau Maturité',
      'Recommandations',
      'Réponses (JSON)',
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Leads!A1:I1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers],
      },
    });

    return true;
  } catch (error) {
    console.error('Error initializing headers:', error);
    return false;
  }
}
