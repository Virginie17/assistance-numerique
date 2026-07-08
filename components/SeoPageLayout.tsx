import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Mail, MapPin, Star } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

export type SeoCard = {
  title: string;
  text: string;
  icon?: LucideIcon;
};

export type SeoOffer = {
  title: string;
  items: string[];
};

export default function SeoPageLayout({
  eyebrow,
  title,
  description,
  primaryCta = "Me contacter",
  secondaryCta = "Voir les offres",
  cards,
  offers,
  results,
  faq,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
  cards: SeoCard[];
  offers: SeoOffer[];
  results: string[];
  faq: { question: string; answer: string }[];
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(199,91,107,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(248,223,225,0.9),transparent_35%)]" />
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-4xl text-primary">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-muted-foreground">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/#contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-primary/25 transition hover:bg-accent">
              {primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/#offres" className="inline-flex h-14 items-center justify-center rounded-full border border-primary/25 bg-white px-8 text-sm font-bold uppercase tracking-[0.22em] text-accent transition hover:bg-secondary">
              {secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon || Star;
            return (
              <article key={card.title} className="rounded-[2rem] border border-primary/15 bg-white p-7 shadow-xl shadow-primary/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary"><Icon className="h-7 w-7" /></div>
                <h2 className="mt-6 font-serif text-3xl font-semibold">{card.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white/55 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-script text-3xl text-primary">Accompagnement</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">Ce que je peux mettre en place avec vous</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="rounded-[2rem] border border-primary/15 bg-background p-7 shadow-xl shadow-primary/5">
                <h3 className="font-serif text-3xl font-semibold">{offer.title}</h3>
                <ul className="mt-6 space-y-3">
                  {offer.items.map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-script text-3xl text-primary">Résultats concrets</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">L’objectif n’est pas seulement d’utiliser un outil</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">L’objectif est de vous faire gagner en autonomie, en visibilité, en temps ou en sérénité selon votre situation.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {results.map((result) => (
              <div key={result} className="rounded-[1.75rem] border border-primary/15 bg-white p-6 text-lg font-bold leading-7 shadow-lg shadow-primary/5">
                <Check className="mb-4 h-5 w-5 text-primary" />{result}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-script text-3xl text-primary">Questions fréquentes</p>
          <h2 className="mt-2 text-center font-serif text-4xl font-semibold md:text-5xl">Avant de me contacter</h2>
          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold">{item.question}</summary>
                <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#102A4C] p-8 text-center text-white md:p-12">
          <p className="font-script text-4xl">Prête à vous aider</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Expliquez-moi votre besoin, je vous réponds simplement.</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/#contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-accent">
              Demander un échange <ArrowRight className="h-4 w-4" />
            </a>
            <a href="mailto:virginie.assistancenumerique@gmail.com" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 px-8 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white/10">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/75"><MapPin className="h-4 w-4" /> La Rochelle et alentours</p>
        </div>
      </section>
    </main>
  );
}
