import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  contact_preference?: string;
  message?: string;
};

const serviceLabels: Record<string, string> = {
  accompagnement_informatique: "Ordinateur & emails",
  demarches_administratives: "Démarches en ligne",
  configuration_appareils: "Smartphone & tablette",
  cybersecurite: "Sécurité & arnaques",
  formation_outils: "Formation & autonomie",
  assistance_distance: "Assistance à distance",
  autre: "Autre besoin",
};

const preferenceLabels: Record<string, string> = {
  email: "Email",
  telephone: "Téléphone",
  sms: "SMS",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
};

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY manquant." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "Non renseigné";
    const service =
      serviceLabels[body.service || ""] || body.service || "Non précisé";
    const preference =
      preferenceLabels[body.contact_preference || ""] ||
      body.contact_preference ||
      "Non précisé";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont obligatoires." },
        { status: 400 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "virginie.assistancenumerique@gmail.com";

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Virginie Assistance Numérique <onboarding@resend.dev>";

    const subject = `Nouvelle demande de contact - ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #3b2a2f;">
        <h1 style="color: #b75f7a;">Nouvelle demande de contact</h1>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Besoin principal :</strong> ${service}</p>
        <p><strong>Préférence de contact :</strong> ${preference}</p>

        <hr style="border: none; border-top: 1px solid #eadde1; margin: 24px 0;" />

        <p><strong>Message :</strong></p>
        <p style="white-space: pre-line; line-height: 1.6;">${message}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l’envoi de l’email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur API contact:", error);

    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}