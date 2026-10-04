import { isRateLimited } from "@/lib/requestGuard";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  client_type?: string;
  service?: string;
  contact_preference?: string;
  message?: string;
  rgpd_consent?: boolean;
  company_website?: string;
};

const allowedClientTypes = new Set([
  "",
  "particulier",
  "senior",
  "aidant",
  "professionnel",
  "association",
]);

const allowedServices = new Set([
  "",
  "accompagnement_informatique",
  "demarches_administratives",
  "demarches_en_ligne",
  "configuration_appareils",
  "cybersecurite",
  "formation_outils",
  "assistance_distance",
  "facturation_electronique",
  "creation_site",
  "visibilite",
  "autre",
]);

const allowedPreferences = new Set([
  "",
  "email",
  "telephone",
  "sms",
  "whatsapp",
  "instagram",
]);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(request, "contact"))
      return NextResponse.json(
        { error: "Trop de demandes. Merci de réessayer dans dix minutes." },
        { status: 429 },
      );
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Le formulaire est momentanément indisponible. Vous pouvez me contacter par email.",
        },
        { status: 500 },
      );
    }

    if (Number(request.headers.get("content-length") || 0) > 16_384)
      return NextResponse.json(
        { error: "Demande trop volumineuse." },
        { status: 413 },
      );
    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      return NextResponse.json({ error: "Demande invalide." }, { status: 400 });
    }
    if (!raw || typeof raw !== "object" || Array.isArray(raw))
      return NextResponse.json({ error: "Demande invalide." }, { status: 400 });
    const body = raw as ContactPayload;
    const textFields = [
      "name",
      "email",
      "phone",
      "client_type",
      "service",
      "contact_preference",
      "message",
      "company_website",
    ] as const;
    if (
      textFields.some(
        (key) => body[key] !== undefined && typeof body[key] !== "string",
      )
    )
      return NextResponse.json(
        { error: "Format de champ invalide." },
        { status: 400 },
      );

    if (body.company_website?.trim()) {
      return NextResponse.json({ success: true });
    }

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const clientType = body.client_type || "";
    const service = body.service || "";
    const preference = body.contact_preference || "";
    const message = body.message?.trim() || "";

    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        {
          error: "Indiquez votre nom, un email ou téléphone, et votre besoin.",
        },
        { status: 400 },
      );
    }

    if (body.rgpd_consent !== true) {
      return NextResponse.json(
        {
          error:
            "Vous devez accepter l’utilisation de vos informations pour être recontacté(e).",
        },
        { status: 400 },
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    if (
      name.length > 80 ||
      email.length > 120 ||
      phone.length > 30 ||
      message.length > 1500
    ) {
      return NextResponse.json(
        { error: "Certains champs sont trop longs." },
        { status: 400 },
      );
    }

    if (!allowedClientTypes.has(clientType)) {
      return NextResponse.json(
        { error: "Type de client invalide." },
        { status: 400 },
      );
    }

    if (!allowedServices.has(service) || !allowedPreferences.has(preference)) {
      return NextResponse.json(
        { error: "Valeur de formulaire invalide." },
        { status: 400 },
      );
    }

    if (
      phone &&
      (!/^[+\d\s().-]{6,30}$/.test(phone) ||
        phone.replace(/\D/g, "").length < 6)
    )
      return NextResponse.json(
        { error: "Téléphone invalide." },
        { status: 400 },
      );
    if (["telephone", "sms", "whatsapp"].includes(preference) && !phone)
      return NextResponse.json(
        { error: "Indiquez un téléphone pour ce mode de contact." },
        { status: 400 },
      );
    const resend = new Resend(apiKey);

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "virginie.assistancenumerique@gmail.com";

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Virginie Assistance <onboarding@resend.dev>";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email || "Non renseigné");
    const safePhone = escapeHtml(phone || "Non renseigné");
    const safeClientType = escapeHtml(clientType || "Non précisé");
    const safeService = escapeHtml(service || "Non précisé");
    const safePreference = escapeHtml(preference || "Non précisé");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      ...(email ? { replyTo: email } : {}),
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <p><strong>Type de client :</strong> ${safeClientType}</p>
        <p><strong>Besoin :</strong> ${safeService}</p>
        <p><strong>Préférence :</strong> ${safePreference}</p>
        <p><strong>Consentement RGPD :</strong> accepté</p>
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Erreur lors de l’envoi de l’email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
