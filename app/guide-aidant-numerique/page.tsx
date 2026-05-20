import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, CheckCircle2, Download, Heart, Mail, ShieldCheck } from "lucide-react";

const guideItems = [
  "Repérer les signes qu’un senior est en difficulté numérique",
  "Comprendre les arnaques les plus fréquentes : SMS, mails, appels, WhatsApp",
  "Aider un proche sans créer de tension ou de conflit",
  "Mettre en place les bons réflexes de sécurité",
  "Savoir quand demander une aide extérieure bienveillante",
];

export default function GuideAidantNumeriquePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/70" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-light text-accent backdrop-blur-sm">
                <Download className="h-4 w-4" />
                Guide gratuit à télécharger
              </div>

              <p className="mb-2 font-script text-2xl text-primary">La sérénité numérique</p>

              <h1 className="font-serif text-4xl font-medium leading-tight tracking-wide text-foreground sm:text-5xl lg:text-6xl">
                Le Guide de l’Aidant Numérique 2026
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
                Un guide simple, humain et rassurant pour aider un parent ou un proche senior perdu avec son téléphone, ses mails, ses mots de passe, ses démarches en ligne ou les arnaques numériques.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#telechargement" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent">
                  Télécharger le guide gratuit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a href="/#contact" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white/50 px-8 py-4 text-base font-light text-accent transition-all hover:bg-primary/10">
                  Demander un accompagnement
                </a>
              </div>

              <p className="mt-5 text-sm font-light text-muted-foreground">
                Gratuit · Pensé pour les aidants familiaux · La Rochelle & accompagnement à distance
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
              <div className="relative rounded-[2rem] border border-primary/15 bg-white p-6 shadow-2xl shadow-primary/10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <img src="/logo.png" alt="Logo Virginie Assistance Numérique" className="h-7 w-7 object-contain" />
                  </div>
                  <div>
                    <p className="font-script text-2xl leading-none text-primary">Virginie</p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Assistance Numérique</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-primary/10 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">PDF Premium</p>
                  <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">
                    Aider un proche sans stress ni jargon
                  </h2>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    Mots de passe, SMS suspects, démarches en ligne, sécurité et autonomie numérique.
                  </p>
                </div>

                <div className="mt-6 space-y-3 text-sm font-light text-muted-foreground">
                  {guideItems.slice(0, 4).map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 font-script text-2xl text-primary">Pourquoi ce guide ?</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Parce que beaucoup d’aidants deviennent malgré eux le support numérique de toute la famille.
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
              Ce guide aide à comprendre les difficultés numériques des seniors, à éviter les pièges courants et à retrouver une relation plus sereine autour du téléphone, de l’ordinateur et des démarches en ligne.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-primary/15 bg-primary/10 p-6">
              <ShieldCheck className="mb-4 h-7 w-7 text-primary" />
              <h3 className="font-serif text-xl font-medium text-foreground">Sécurité</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                Identifier les SMS suspects, les faux mails et les appels frauduleux.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/15 bg-primary/10 p-6">
              <Heart className="mb-4 h-7 w-7 text-primary" />
              <h3 className="font-serif text-xl font-medium text-foreground">Patience</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                Aider sans brusquer, sans culpabiliser et sans créer de conflit.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/15 bg-primary/10 p-6">
              <Mail className="mb-4 h-7 w-7 text-primary" />
              <h3 className="font-serif text-xl font-medium text-foreground">Autonomie</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                Redonner confiance avec des explications simples et concrètes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="telechargement" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-white p-6 shadow-xl shadow-primary/10 sm:p-10">
            <div className="text-center">
              <p className="mb-2 font-script text-2xl text-primary">Téléchargement gratuit</p>
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Recevoir le guide par email
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
                Laissez vos coordonnées pour recevoir le guide. Vous pourrez ensuite me contacter si votre proche a besoin d’un accompagnement personnalisé.
              </p>
            </div>

            <form action="/api/guide-download" method="POST" className="mt-10 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-light text-foreground">Votre prénom et nom *</label>
                <input required name="name" maxLength={80} placeholder="Marie Dupont" className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-light text-foreground">Votre email *</label>
                <input required type="email" name="email" maxLength={120} placeholder="marie@email.com" className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-light text-foreground">Téléphone</label>
                <input name="phone" maxLength={30} placeholder="Facultatif" className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-light text-foreground">Votre situation</label>
                <select name="profile" className="h-12 w-full rounded-2xl border border-input bg-white px-4 text-sm outline-none transition focus:ring-2 focus:ring-ring">
                  <option value="aidant">Aidant familial</option>
                  <option value="senior">Senior</option>
                  <option value="particulier">Particulier</option>
                  <option value="professionnel">Professionnel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <label className="sm:col-span-2 flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/10 p-4 text-sm font-light leading-relaxed text-foreground">
                <input required type="checkbox" name="rgpd_consent" value="yes" className="mt-1 h-4 w-4 shrink-0 accent-primary" />
                <span>
                  J’accepte que les informations saisies soient utilisées uniquement pour recevoir le guide et être recontacté(e) concernant ma demande. Je peux demander leur suppression à tout moment.
                </span>
              </label>

              <button type="submit" className="sm:col-span-2 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 text-base font-light text-white shadow-lg shadow-primary/20 transition hover:bg-accent">
                <Download className="h-5 w-5" />
                Télécharger le guide gratuit
              </button>

              <p className="sm:col-span-2 text-center text-xs font-light leading-relaxed text-muted-foreground">
                Vos informations ne sont jamais revendues. Vous pouvez aussi me contacter directement via le formulaire principal du site.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
