import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  contact_preference?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY manquant sur le serveur." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "Non renseigné";
    const service = body.service || "Non précisé";
    const preference = body.contact_preference || "Non précisé";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nom, email et message sont obligatoires." },
        { status: 400 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "btovdeveloppement@gmail.com";

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Virginie Assistance Numérique <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Besoin :</strong> ${service}</p>
        <p><strong>Préférence :</strong> ${preference}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Erreur lors de l’envoi de l’email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}