import Resend from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ from = 'Naya Harmonie <noreply@nayaharmonie.com>', to, subject, html }) {
  try {
    const response = await resend.emails.send({
      from,
      to,
      subject,
      html
    });

    console.log(`✅ Email envoyé: ${subject}`);
    return response;
  } catch (error) {
    console.error('❌ Erreur lors de l\'envoi d\'email:', error);
    throw error;
  }
}