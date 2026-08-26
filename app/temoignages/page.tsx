import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Heart, Quote, ShieldCheck, Star, Tags, UserRoundCheck } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Témoignages et résultats | Virginie Assistance Numérique",
  description: "Découvrez les situations concrètes dans lesquelles Virginie Assistance Numérique accompagne particuliers, seniors, artisans et créateurs de micro-entreprise à La Rochelle.",
  alternates: { canonical: "https://virginieassistance.fr/temoignages" },
};

const cases = [
  {
    title: "Retrouver confiance avec son smartphone",
    before: "La personne n’ose pas toucher aux réglages, ne retrouve plus ses photos et craint de faire une erreur.",
    after: "Elle sait retrouver ses applications essentielles, envoyer une photo et utiliser les bons réflexes de sécurité.",
  },
  {
    title: "Comprendre ses démarches en ligne",
    before: "Les espaces CAF, CPAM, retraite ou impôts sont source de stress et de confusion.",
    after: "Les accès sont organisés, les documents sont rangés et les étapes importantes sont expliquées simplement.",
  },
  {
    title: "Lancer une présence digitale professionnelle",
    before: "L’entrepreneur a créé son activité, mais ne sait pas quoi publier ni comment être trouvé sur Internet.",
    after: "Son message est clarifié, ses supports prioritaires sont définis et son plan d’action devient plus concret.",
  },
];

const trustPoints = [
  {
    icon: UserRoundCheck,
    title: "Un accompagnement humain",
    text: "Je m’adapte à votre niveau, à votre rythme et à votre besoin réel, sans jugement ni jargon.",
  },
  {
    icon: Tags,
    title: "Un tarif annoncé à l’avance",
    text: "Vous connaissez le prix et le contenu de l’intervention avant de vous engager.",
  },
  {
    icon: ShieldCheck,
    title: "Des limites clairement expliquées",
    text: "Vous gardez la maîtrise de vos comptes, de vos décisions et de vos validations personnelles.",
  },
];

export default function TemoignagesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-script text-4xl text-primary">Confiance & résultats</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">Des progrès concrets, à votre rythme</h1>
          <p className="mt-6 text-xl leading-9 text-muted-foreground">
            Découvrez les situations que je peux vous aider à débloquer et les engagements qui encadrent chaque accompagnement. Les avis publiés ici seront toujours des retours clients authentiques.
          </p>
          <Link href="/#contact" className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-primary/25 transition hover:bg-accent">
            Parler de mon besoin <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-primary/15 bg-white p-7 shadow-xl shadow-primary/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary"><Star className="h-7 w-7" /></div>
                <h2 className="mt-6 font-serif text-3xl font-semibold">{item.title}</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-background p-4"><p className="text-xs font-bold uppercase tracking-widest text-primary">Avant</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.before}</p></div>
                  <div className="rounded-2xl bg-secondary p-4"><p className="text-xs font-bold uppercase tracking-widest text-primary">Après</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.after}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="font-script text-3xl text-primary">Mes engagements</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Ce qui vous permet d’avancer en confiance</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[2rem] border border-primary/15 bg-white p-7 shadow-xl shadow-primary/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary"><Icon className="h-7 w-7" /></div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-8 shadow-xl shadow-primary/10 md:p-12">
          <div className="flex items-center gap-3 text-primary"><Quote className="h-7 w-7" /><span className="font-bold uppercase tracking-[0.2em]">Témoignages</span></div>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">Vous avez déjà été accompagné(e) ?</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Votre retour peut rassurer une personne qui rencontre aujourd’hui les mêmes difficultés. Quelques lignes suffisent pour expliquer ce qui vous bloquait, ce qui a été résolu et ce que vous avez gagné en autonomie, en temps ou en sérénité.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Votre prénom ou vos initiales",
              "Votre commune, si vous l’acceptez",
              "La difficulté rencontrée",
              "Le résultat obtenu",
            ].map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
          </ul>
          <a href="mailto:virginie.assistancenumerique@gmail.com?subject=Mon%20avis%20sur%20votre%20accompagnement" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-white transition hover:bg-accent">
            Envoyer mon témoignage <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <Heart className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">Vous voulez faire partie des premiers retours clients ?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Expliquez-moi votre blocage ou votre projet, et voyons ensemble comment le rendre plus simple.</p>
        <Link href="/#contact" className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-accent">
          Me contacter <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
