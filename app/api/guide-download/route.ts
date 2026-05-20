import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type GuidePayload = {
  name: string;
  email: string;
  phone: string;
  profile: string;
};

const allowedProfiles = new Set(["aidant", "senior", "particulier", "professionnel", "autre"]);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getBaseUrl(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_BASE_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, "");

  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const payload: GuidePayload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      profile: String(formData.get("profile") || "aidant").trim(),
    };

    const hasConsent = formData.get("rgpd_consent") === "yes";
    const baseUrl = getBaseUrl(request);

    if (!payload.name || !payload.email) {
      return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique?error=missing-fields#telechargement`, 303);
    }

    if (!hasConsent) {
      return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique?error=consent#telechargement`, 303);
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique?error=email#telechargement`, 303);
    }

    if (payload.name.length > 80 || payload.email.length > 120 || payload.phone.length > 30) {
      return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique?error=too-long#telechargement`, 303);
    }

    if (!allowedProfiles.has(payload.profile)) {
      return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique?error=profile#telechargement`, 303);
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique/merci`, 303);
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "virginie.assistancenumerique@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Virginie Assistance Numérique <onboarding@resend.dev>";
    const guideUrl = `${baseUrl}/guide-aidant-numerique.pdf`;

    const safeName = escapeHtml(payload.name);
    const safeEmail = escapeHtml(payload.email);
    const safePhone = escapeHtml(payload.phone || "Non renseigné");
    const safeProfile = escapeHtml(payload.profile || "Non précisé");

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: payload.email,
      subject: `Nouveau téléchargement du guide aidant - ${payload.name}`,
      html: `
        <h1>Nouveau prospect guide aidant numérique</h1>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <p><strong>Profil :</strong> ${safeProfile}</p>
        <p><strong>Consentement RGPD :</strong> accepté</p>
      `,
    });

    await resend.emails.send({
      from: fromEmail,
      to: payload.email,
      replyTo: toEmail,
      subject: "Votre guide gratuit - Aidant Numérique 2026",
      html: `
        <h1>Votre guide gratuit est prêt</h1>
        <p>Bonjour ${safeName},</p>
        <p>Merci pour votre demande. Vous pouvez télécharger le Guide de l’Aidant Numérique 2026 ici :</p>
        <p><a href="${guideUrl}">Télécharger le guide gratuit</a></p>
        <p>Si votre proche a besoin d’un accompagnement personnalisé, vous pouvez me contacter directement depuis le site.</p>
        <p>Virginie Assistance Numérique<br />Le numérique en toute sérénité</p>
      `,
    });

    return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique/merci`, 303);
  } catch {
    const baseUrl = getBaseUrl(request);
    return NextResponse.redirect(`${baseUrl}/guide-aidant-numerique?error=server#telechargement`, 303);
  }
}
