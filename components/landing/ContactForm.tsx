"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const clientTypes = [
  { value: "particulier", label: "Particulier" },
  { value: "senior", label: "Senior" },
  { value: "aidant", label: "Aidant familial" },
  { value: "professionnel", label: "Artisan, commerçant ou entrepreneur" },
  { value: "association", label: "Association, CCAS ou structure senior" },
];

const services = [
  { value: "accompagnement_informatique", label: "Smartphone, ordinateur ou tablette" },
  { value: "demarches_administratives", label: "Démarches en ligne" },
  { value: "cybersecurite", label: "Arnaques, mots de passe et sécurité" },
  { value: "creation_site", label: "Site internet ou visibilité Google" },
  { value: "visibilite", label: "Communication digitale et réseaux sociaux" },
  { value: "facturation_electronique", label: "Facturation électronique" },
  { value: "formation_outils", label: "Atelier ou accompagnement personnalisé" },
  { value: "autre", label: "Autre besoin" },
];

const preferences = [
  { value: "email", label: "Email" },
  { value: "telephone", label: "Téléphone" },
  { value: "sms", label: "SMS" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "instagram", label: "Instagram" },
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      client_type: String(formData.get("client_type") || "particulier"),
      service: String(formData.get("service") || "autre"),
      contact_preference: String(formData.get("contact_preference") || "email"),
      message: String(formData.get("message") || ""),
      rgpd_consent: formData.get("rgpd_consent") === "on",
      company_website: String(formData.get("company_website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Votre message n’a pas pu être envoyé.");
      }

      setState("success");
      setMessage("Merci, votre message a bien été envoyé. Je vous réponds rapidement.");
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-primary/15 bg-white p-5 shadow-2xl shadow-primary/10 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-bold text-foreground">
          Votre nom
          <input name="name" required className="h-12 w-full rounded-2xl border border-border bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Nom et prénom" />
        </label>

        <label className="space-y-2 text-sm font-bold text-foreground">
          Votre email
          <input name="email" type="email" required className="h-12 w-full rounded-2xl border border-border bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="votre@email.fr" />
        </label>

        <label className="space-y-2 text-sm font-bold text-foreground">
          Téléphone
          <input name="phone" className="h-12 w-full rounded-2xl border border-border bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Optionnel" />
        </label>

        <label className="space-y-2 text-sm font-bold text-foreground">
          Vous êtes
          <select name="client_type" className="h-12 w-full rounded-2xl border border-border bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
            {clientTypes.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>

        <label className="space-y-2 text-sm font-bold text-foreground sm:col-span-2">
          Votre besoin principal
          <select name="service" className="h-12 w-full rounded-2xl border border-border bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
            {services.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>

        <label className="space-y-2 text-sm font-bold text-foreground sm:col-span-2">
          Préférence de contact
          <select name="contact_preference" className="h-12 w-full rounded-2xl border border-border bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
            {preferences.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>

        <label className="hidden">
          Site web
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>

        <label className="space-y-2 text-sm font-bold text-foreground sm:col-span-2">
          Expliquez-moi votre situation
          <textarea name="message" required rows={5} className="w-full rounded-2xl border border-border bg-background px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Exemple : je viens de créer ma micro-entreprise et je ne sais pas par où commencer pour être visible sur Internet." />
        </label>
      </div>

      <label className="mt-4 flex gap-3 text-sm text-muted-foreground">
        <input name="rgpd_consent" type="checkbox" required className="mt-1 h-4 w-4 accent-primary" />
        <span>J’accepte que mes informations soient utilisées uniquement pour être recontacté(e) au sujet de ma demande.</span>
      </label>

      <button type="submit" disabled={state === "loading"} className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70">
        {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Envoyer ma demande
      </button>

      {message && (
        <p className={`mt-4 rounded-2xl px-4 py-3 text-sm ${state === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{message}</p>
      )}
    </form>
  );
}
