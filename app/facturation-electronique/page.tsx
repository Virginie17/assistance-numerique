import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  HelpCircle,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Facturation électronique pour auto-entrepreneurs et artisans",
  description:
    "Accompagnement à la facturation électronique pour auto-entrepreneurs, artisans et petites entreprises à La Rochelle et à distance : choix d'outil, configuration, prise en main et sérénité numérique.",
  keywords: [
    "facturation électronique La Rochelle",
    "aide facturation électronique auto entrepreneur",
    "facturation électronique artisan",
    "accompagnement logiciel facturation",
    "assistance numérique professionnel La Rochelle",
    "création site internet artisan La Rochelle",
  ],
  alternates: {
    canonical: "/facturation-electronique",
  },
};

const steps = [
  {
    title: "On fait le point",
    text: "Je regarde votre situation, votre activité et votre façon actuelle de gérer vos factures.",
  },
  {
    title: "On choisit le bon outil",
    text: "Je vous aide à sélectionner une solution simple, adaptée à votre niveau et à votre besoin réel.",
  },
  {
    title: "On configure ensemble",
    text: "Paramétrage, informations utiles, premiers réglages : vous n'êtes pas seul(e) devant l'écran.",
  },
  {
    title: "Vous devenez autonome",
    text: "Je vous explique pas à pas comment utiliser votre outil pour vos premières factures.",
  },
];

const packs = [
  {
    name: "Pack Essentiel",
    price: "97€",
    subtitle: "Pour comprendre et démarrer",
    features: [
      "Audit rapide de votre situation",
      "Explication simple des obligations",
      "Recommandation d'un outil adapté",
      "Conseils personnalisés",
    ],
  },
  {
    name: "Pack Sérénité",
    price: "197€",
    subtitle: "Le plus adapté pour être accompagné(e)",
    highlighted: true,
    features: [
      "Audit complet",
      "Choix de la solution adaptée",
      "Création et configuration de l'outil",
      "Paramétrage initial",
      "Formation simple à la prise en main",
    ],
  },
  {
    name: "Pack Tranquillité Totale",
    price: "297€",
    subtitle: "Pour zéro stress",
    features: [
      "Tout le Pack Sérénité",
      "Assistance pendant 7 jours",
      "Aide sur vos premières factures",
      "Support questions pendant 7 jours",
    ],
  },
];

const extraServices = [
  {
    icon: Globe2,
    title: "Création de site internet",
    text: "Un site clair, moderne et rassurant pour présenter votre activité et attirer vos premiers clients.",
  },
  {
    icon: Sparkles,
    title: "Visibilité en ligne",
    text: "Aide pour votre présence Google, vos réseaux sociaux et vos supports de communication.",
  },
  {
    icon: Wrench,
    title: "Demandes à étudier",
    text: "Organisation numérique, documents, outils métier, automatisations simples : on regarde ensemble.",
  },
];

const faqs = [
  {
    question: "Est-ce réservé aux experts en informatique ?",
    answer:
      "Non, justement. Mon accompagnement est pensé pour les personnes qui veulent quelque chose de simple, clair et rassurant.",
  },
  {
    question: "Est-ce que vous choisissez l'outil à ma place ?",
    answer:
      "Je vous conseille selon votre activité, votre niveau et votre budget. La décision finale reste toujours la vôtre.",
  },
  {
    question: "Intervenez-vous uniquement à La Rochelle ?",
    answer:
      "Je peux intervenir autour de La Rochelle, mais aussi à distance grâce au partage d'écran.",
  },
];

export default function FacturationElectroniquePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm font-light text-primary shadow-sm">
              <Building2 className="h-4 w-4" />
              Auto-entrepreneurs • artisans • petites entreprises
            </div>

            <p className="mb-3 font-script text-3xl text-primary">
              Le numérique en toute sérénité
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Facturation électronique :
              <br />
              <span className="italic text-accent">je vous simplifie tout</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              Vous êtes indépendant(e), artisan ou dirigeant(e) d'une petite entreprise ?
              Je vous accompagne pour comprendre, choisir, paramétrer et utiliser votre solution
              de facturation électronique, sans stress ni jargon technique.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-light text-white transition-colors hover:bg-accent"
              >
                Demander un accompagnement
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#packs"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-card px-7 py-3 text-sm font-light text-primary transition-colors hover:bg-primary/10"
              >
                Voir les packs
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/15 bg-card p-7 shadow-2xl shadow-primary/10 lg:p-9">
            <ReceiptText className="mb-6 h-12 w-12 text-primary" />

            <h2 className="font-serif text-3xl font-medium text-foreground">
              Pack Sérénité Facturation
            </h2>

            <p className="mt-4 font-light leading-relaxed text-muted-foreground">
              L'accompagnement idéal pour être guidé(e) de A à Z et gagner du temps.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Audit de votre situation",
                "Choix d'une solution adaptée",
                "Configuration pas à pas",
                "Formation simple à l'utilisation",
                "Aide à la prise en main",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-light text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-secondary p-6">
              <p className="text-sm font-light text-muted-foreground">Accompagnement à partir de</p>
              <p className="mt-1 font-serif text-5xl font-medium text-accent">97€</p>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                Selon votre besoin et votre niveau d'accompagnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-2 font-script text-2xl text-primary">Une méthode simple</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              On avance ensemble,
              <br />
              <span className="italic text-accent">étape par étape</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 font-serif text-2xl text-primary">
                  {index + 1}
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packs" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-2 font-script text-2xl text-primary">Mes offres</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Choisissez le niveau
              <br />
              <span className="italic text-accent">d'accompagnement qui vous convient</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packs.map((pack) => (
              <article
                key={pack.name}
                className={`rounded-[2rem] border p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  pack.highlighted
                    ? "border-primary bg-primary text-white shadow-primary/20"
                    : "border-border bg-card"
                }`}
              >
                {pack.highlighted && (
                  <div className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-light uppercase tracking-widest text-white">
                    Recommandé
                  </div>
                )}

                <h3 className={`font-serif text-3xl font-medium ${pack.highlighted ? "text-white" : "text-foreground"}`}>
                  {pack.name}
                </h3>
                <p className={`mt-2 text-sm font-light ${pack.highlighted ? "text-white/75" : "text-muted-foreground"}`}>
                  {pack.subtitle}
                </p>
                <p className={`mt-6 font-serif text-5xl font-medium ${pack.highlighted ? "text-white" : "text-accent"}`}>
                  {pack.price}
                </p>

                <ul className="mt-7 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-light leading-relaxed">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${pack.highlighted ? "text-white" : "text-primary"}`} />
                      <span className={pack.highlighted ? "text-white/85" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-2 font-script text-2xl text-primary">Et aussi</p>
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Votre activité mérite
                <br />
                <span className="italic text-accent">une présence en ligne claire</span>
              </h2>
              <p className="mt-5 font-light leading-relaxed text-muted-foreground">
                En plus de la facturation électronique, je peux vous accompagner sur d'autres besoins numériques pour développer ou simplifier votre activité.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {extraServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <Icon className="mb-4 h-8 w-8 text-primary" />
                    <h3 className="font-serif text-xl font-medium text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-primary p-8 text-center text-white shadow-2xl shadow-primary/20 lg:p-12">
            <ShieldCheck className="mx-auto mb-5 h-12 w-12" />
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Vous n'avez pas besoin de tout comprendre seul(e).
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-light leading-relaxed text-white/85">
              Mon rôle est de rendre le numérique plus simple, plus clair et plus humain pour que vous puissiez vous concentrer sur votre métier.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-light text-primary transition-colors hover:bg-white/90"
            >
              Je veux être accompagné(e)
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-script text-2xl text-primary">Questions fréquentes</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Avant de commencer
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-border bg-background p-6">
                <div className="flex gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-serif text-xl font-medium text-foreground">{faq.question}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-2 font-script text-2xl text-primary">Parlons de votre besoin</p>
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Prêt(e) à avancer simplement ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-light leading-relaxed text-muted-foreground">
            Envoyez-moi un message et expliquez-moi votre situation. Je vous dirai quel accompagnement est le plus adapté.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:virginie.assistancenumerique@gmail.com?subject=Demande%20d'accompagnement%20facturation%20%C3%A9lectronique"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-light text-white transition-colors hover:bg-accent"
            >
              Envoyer un email
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3 text-sm font-light text-primary transition-colors hover:bg-primary/10"
            >
              Retour au formulaire de contact
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
