import type { Metadata } from "next";
import { ArrowRight, Check, Heart, Quote, Star } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

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

export default function TemoignagesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-script text-4xl text-primary">Preuves & résultats</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">Ce que l’accompagnement peut changer concrètement</h1>
          <p className="mt-6 text-xl leading-9 text-muted-foreground">
            Je ne publie pas de faux avis. Cette page présente les résultats concrets recherchés et sera enrichie avec de vrais témoignages clients au fil des accompagnements.
          </p>
          <a href="/#contact" className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-primary/25 transition hover:bg-accent">
            Parler de mon besoin <ArrowRight className="h-4 w-4" />
          </a>
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
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-8 shadow-xl shadow-primary/10 md:p-12">
          <div className="flex items-center gap-3 text-primary"><Quote className="h-7 w-7" /><span className="font-bold uppercase tracking-[0.2em]">Témoignages</span></div>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-5xl">La prochaine étape : recueillir de vrais avis</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Après chaque accompagnement, un court retour client pourra être ajouté ici : ce qui bloquait, ce qui a été résolu et ce que la personne a gagné en autonomie, en temps ou en visibilité.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Avis Google",
              "Mini histoire avant / après",
              "Capture anonymisée avec accord",
              "Retour écrit de la personne accompagnée",
            ].map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <Heart className="mx-auto h-10 w-10 text-primary" />
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold md:text-5xl">Vous voulez faire partie des premiers retours clients ?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Expliquez-moi votre blocage ou votre projet, et voyons ensemble comment le rendre plus simple.</p>
        <a href="/#contact" className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-accent">
          Me contacter <ArrowRight className="h-4 w-4" />
        </a>
      </section>
    </main>
  );
}
