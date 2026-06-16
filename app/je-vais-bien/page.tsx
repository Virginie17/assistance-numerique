import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Heart, Phone, Smartphone, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

const appUrl = "https://lien-serain-quotidien.base44.app";

export const metadata = {
  title: "Je vais bien | Application senior - Virginie Assistance Numérique",
  description:
    "Je vais bien est une application simple pour permettre aux seniors de rassurer leurs proches et d'appeler facilement leur famille.",
};

export default function JeVaisBienPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
              <Heart className="h-4 w-4 text-primary" />
              Application pensée pour les seniors et leurs proches
            </div>

            <h1 className="max-w-3xl text-4xl font-light tracking-tight text-accent sm:text-5xl lg:text-6xl">
              Je vais bien
            </h1>
            <p className="mt-5 max-w-2xl text-2xl font-light leading-relaxed text-primary sm:text-3xl">
              Je vais bien, tout va bien, je rassure les miens.
            </p>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted-foreground">
              Une application très simple pour aider les grands-parents et les seniors à rassurer leur famille en un clic, et à appeler facilement un proche grâce à de grandes photos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-white shadow-sm transition hover:bg-accent">
                Ouvrir l'application
              </a>
              <a href="#installation" className="inline-flex min-h-14 items-center justify-center rounded-full border border-primary/30 bg-card px-8 text-base font-medium text-accent transition hover:bg-primary/10">
                Comment l'installer ?
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary/15 bg-card p-5 shadow-xl">
            <div className="rounded-[1.5rem] bg-background p-5">
              <div className="mb-4 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Écran senior</p>
                <h2 className="mt-2 text-2xl font-light text-accent">Bonjour</h2>
              </div>
              <div className="space-y-4">
                <div className="flex min-h-24 items-center justify-center rounded-3xl bg-primary px-6 text-center text-2xl font-medium text-white shadow-sm">
                  Je vais bien
                </div>
                <div className="flex min-h-24 items-center justify-center rounded-3xl border border-primary/25 bg-primary/10 px-6 text-center text-2xl font-medium text-accent">
                  Appeler un proche
                </div>
              </div>
              <p className="mt-5 text-center text-sm text-muted-foreground">
                Deux actions seulement pour éviter toute confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-accent sm:text-4xl">Comment ça marche ?</h2>
            <p className="mt-4 text-lg font-light leading-8 text-muted-foreground">
              L'application est conçue pour rester claire, rassurante et utilisable même par une personne peu à l'aise avec le numérique.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "1. Le senior clique", text: "Il appuie sur le bouton Je vais bien pour rassurer sa famille." },
              { icon: CheckCircle2, title: "2. Les proches sont rassurés", text: "L'application enregistre le signal et affiche un message positif." },
              { icon: Phone, title: "3. Il peut appeler", text: "Depuis Mes proches, il touche une photo puis confirme l'appel." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-primary/15 bg-card p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-accent">{item.title}</h3>
                <p className="mt-3 font-light leading-7 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-8 shadow-sm">
            <Users className="mb-5 h-9 w-9 text-primary" />
            <h2 className="text-3xl font-light text-accent">Pour les seniors</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li>• Un écran très simple avec de gros boutons.</li>
              <li>• Des mots courts et faciles à comprendre.</li>
              <li>• Des proches affichés avec leur photo.</li>
              <li>• Une confirmation avant de lancer un appel.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-sm">
            <ShieldCheck className="mb-5 h-9 w-9 text-primary" />
            <h2 className="text-3xl font-light text-accent">Pour les aidants</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li>• Un moyen doux de rester rassuré.</li>
              <li>• Une solution qui respecte l'autonomie du senior.</li>
              <li>• Des contacts familiaux faciles à configurer.</li>
              <li>• Un accompagnement possible avec Virginie Assistance Numérique.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="installation" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Smartphone className="mx-auto mb-5 h-10 w-10 text-primary" />
            <h2 className="text-3xl font-light text-accent sm:text-4xl">Installer l'application sur le téléphone</h2>
            <p className="mt-4 text-lg font-light leading-8 text-muted-foreground">
              L'application peut être ajoutée sur l'écran d'accueil du téléphone, comme une vraie application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-primary/15 bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-light text-accent">Sur Android</h3>
              <ol className="mt-6 space-y-4 font-light leading-7 text-muted-foreground">
                <li>1. Ouvrez l'application dans Chrome.</li>
                <li>2. Appuyez sur les trois petits points du navigateur.</li>
                <li>3. Choisissez Ajouter à l'écran d'accueil.</li>
                <li>4. L'icône Je vais bien apparaît sur le téléphone.</li>
              </ol>
            </div>

            <div className="rounded-3xl border border-primary/15 bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-light text-accent">Sur iPhone</h3>
              <ol className="mt-6 space-y-4 font-light leading-7 text-muted-foreground">
                <li>1. Ouvrez l'application avec Safari.</li>
                <li>2. Appuyez sur le bouton de partage.</li>
                <li>3. Choisissez Sur l'écran d'accueil.</li>
                <li>4. Appuyez sur Ajouter.</li>
              </ol>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-primary/10 p-8 text-center">
            <h3 className="text-2xl font-light text-accent">Besoin d'aide pour l'installation ?</h3>
            <p className="mx-auto mt-3 max-w-2xl font-light leading-7 text-muted-foreground">
              Virginie Assistance Numérique peut vous accompagner pour installer l'application, ajouter les proches, configurer les contacts et expliquer son utilisation pas à pas.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={appUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 text-white transition hover:bg-accent">
                Ouvrir l'application
              </a>
              <a href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary/30 bg-card px-7 text-accent transition hover:bg-primary/10">
                Demander un accompagnement
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
