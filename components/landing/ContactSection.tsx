"use client";

import { useEffect, useState } from "react";
import { Heart, Mail, MapPin } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/virginie_assistance_numerique";

const clientTypeOptions = [
  { value: "particulier", label: "Particulier" },
  { value: "senior", label: "Senior" },
  { value: "aidant", label: "Aidant familial" },
  {
    value: "professionnel",
    label: "Professionnel / artisan / auto-entrepreneur",
  },
  { value: "association", label: "Association ou structure" },
];

const serviceOptions = [
  { value: "accompagnement_informatique", label: "Ordinateur & emails" },
  { value: "demarches_en_ligne", label: "Aide à une démarche en ligne" },
  {
    value: "demarches_administratives",
    label: "Assistance administrative / dossier",
  },
  { value: "configuration_appareils", label: "Smartphone & tablette" },
  { value: "cybersecurite", label: "Sécurité & arnaques" },
  { value: "formation_outils", label: "Formation & autonomie" },
  { value: "assistance_distance", label: "Assistance à distance" },
  { value: "facturation_electronique", label: "Facturation électronique" },
  { value: "creation_site", label: "Création de site internet" },
  { value: "visibilite", label: "Visibilité en ligne" },
  { value: "autre", label: "Autre besoin" },
];

const contactPreferenceOptions = [
  { value: "email", label: "Email" },
  { value: "telephone", label: "Téléphone" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "instagram", label: "Instagram" },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  client_type: string;
  service: string;
  contact_preference: string;
  message: string;
  rgpd_consent: boolean;
  company_website: string;
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  client_type: "",
  service: "",
  contact_preference: "",
  message: "",
  rgpd_consent: false,
  company_website: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedOffer = params.get("offre")?.trim();
    const selectedService = params.get("service")?.trim();

    if (!selectedOffer && !selectedService) return;

    const allowedService = serviceOptions.some(
      (option) => option.value === selectedService,
    )
      ? selectedService || "autre"
      : "autre";

    const frame = window.requestAnimationFrame(() => {
      setForm((current) => ({
        ...current,
        service: allowedService,
        message:
          current.message ||
          (selectedOffer
            ? `Bonjour Virginie, je souhaite obtenir des informations sur l’offre « ${selectedOffer} ».`
            : ""),
      }));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.email.trim() && !form.phone.trim()) {
      setErrorMessage(
        "Indiquez un email ou un téléphone pour que je puisse vous répondre.",
      );
      return;
    }
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error || "Erreur lors de l’envoi de votre demande.",
        );
      }

      setSuccessMessage(
        "Merci, votre demande a bien été envoyée. Je vous répondrai rapidement.",
      );
      setForm(initialForm);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Merci de réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 font-script text-2xl text-primary">
              Contactez-moi
            </p>
            <h2 className="mb-5 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Parlons de votre{" "}
              <span className="italic text-accent">besoin</span>
            </h2>
            <p className="mb-8 text-lg font-light leading-relaxed text-muted-foreground">
              Décrivez-moi votre situation et je vous répondrai personnellement,
              avec bienveillance. Je vous propose un devis gratuit, sans
              engagement, et je reviens vers vous sous 24h.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-foreground">
                    Email
                  </p>
                  <p className="text-sm font-light text-muted-foreground">
                    virginie.assistancenumerique@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-foreground">
                    Zone d’intervention
                  </p>
                  <p className="text-sm font-light text-muted-foreground">
                    La Rochelle & alentours (20 km)
                    <br />
                    Charente-Maritime (17)
                  </p>
                </div>
              </div>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 text-foreground no-underline"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-foreground">
                    Instagram
                  </p>
                  <p className="text-sm font-light text-muted-foreground">
                    @virginie_assistance_numerique
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/10 p-6">
              <p className="font-script text-2xl text-primary">Ma promesse</p>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                Patience, bienveillance et clarté. Je prends le temps qu’il faut
                — à votre rythme — pour que vous vous sentiez à l’aise et
                autonome.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-white p-6 shadow-xl shadow-primary/10 sm:p-8"
          >
            {successMessage && (
              <div
                role="status"
                className="mb-6 rounded-2xl border border-primary/15 bg-primary/10 p-4 text-sm font-light leading-relaxed text-foreground"
              >
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div
                role="alert"
                className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-light leading-relaxed text-red-700"
              >
                {errorMessage}
              </div>
            )}

            <div className="hidden" aria-hidden="true">
              <label>
                Site web de l’entreprise
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company_website}
                  onChange={(event) =>
                    handleChange("company_website", event.target.value)
                  }
                />
              </label>
            </div>

            <p className="mb-5 text-sm text-muted-foreground">
              Un email ou un téléphone suffit pour être recontacté(e). Les
              champs marqués * sont obligatoires.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Votre prénom et nom *
                </label>
                <input
                  id="contact-name"
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Marie Dupont"
                  className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Votre email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  maxLength={120}
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  placeholder="marie@email.com"
                  className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Téléphone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  required={["telephone", "sms", "whatsapp"].includes(
                    form.contact_preference,
                  )}
                  maxLength={30}
                  value={form.phone}
                  onChange={(event) =>
                    handleChange("phone", event.target.value)
                  }
                  placeholder="06 12 34 56 78"
                  className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-type"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Vous êtes (facultatif)
                </label>
                <select
                  id="contact-type"
                  value={form.client_type}
                  onChange={(event) =>
                    handleChange("client_type", event.target.value)
                  }
                  className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choisir...</option>
                  {clientTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Besoin principal
                </label>
                <select
                  id="contact-service"
                  value={form.service}
                  onChange={(event) =>
                    handleChange("service", event.target.value)
                  }
                  className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choisir...</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-preference"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Contact préféré
                </label>
                <select
                  id="contact-preference"
                  value={form.contact_preference}
                  onChange={(event) =>
                    handleChange("contact_preference", event.target.value)
                  }
                  className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                >
                  <option value="">Votre préférence...</option>
                  {contactPreferenceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-light text-foreground"
                >
                  Décrivez votre besoin *
                </label>
                <textarea
                  id="contact-message"
                  required
                  maxLength={1500}
                  value={form.message}
                  onChange={(event) =>
                    handleChange("message", event.target.value)
                  }
                  aria-describedby="message-confidentialite"
                  placeholder="Décrivez uniquement votre besoin, sans information confidentielle."
                  className="min-h-32 w-full rounded-2xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
                />
                <p
                  id="message-confidentialite"
                  className="mt-2 text-xs leading-6 text-muted-foreground"
                >
                  Pour votre sécurité, ne transmettez aucun mot de passe, numéro
                  de sécurité sociale, numéro fiscal ou document confidentiel.
                  Nous verrons ensemble les pièces nécessaires lors de
                  l’échange.
                </p>
              </div>

              <label className="sm:col-span-2 flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/10 p-4 text-sm font-light leading-relaxed text-foreground">
                <input
                  required
                  type="checkbox"
                  checked={form.rgpd_consent}
                  onChange={(event) =>
                    handleChange("rgpd_consent", event.target.checked)
                  }
                  className="mt-1 h-4 w-4 shrink-0 accent-primary"
                />
                <span>
                  J’accepte que les informations saisies soient utilisées
                  uniquement pour répondre à ma demande. Je peux demander leur
                  accès, modification ou suppression à tout moment.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-accent px-6 text-base font-light text-white shadow-lg shadow-primary/20 transition hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Heart className="h-5 w-5" />
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>

            <p className="mt-5 text-center text-xs font-light leading-relaxed text-muted-foreground">
              Devis gratuit et sans engagement · Réponse sous 24h
              <br />
              Les informations transmises via ce formulaire sont utilisées
              uniquement pour répondre à votre demande. Elles ne sont jamais
              revendues.
              <br />
              <a
                href="/confidentialite"
                className="text-accent underline underline-offset-4"
              >
                Protection de vos données
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
