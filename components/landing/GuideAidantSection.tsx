import { ArrowRight, Download, Heart, ShieldCheck } from "lucide-react";

export default function GuideAidantSection() {
  return (
    <section id="guide-aidant" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-light text-accent">
              <Heart className="h-4 w-4" />
              Guide gratuit pour les aidants familiaux
            </div>

            <p className="mb-2 font-script text-2xl text-primary">Le guide à offrir à votre proche</p>

            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Votre parent est perdu avec <span className="italic text-accent">le numérique</span> ?
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              Téléchargez gratuitement le Guide de l’Aidant Numérique 2026 : mots de passe oubliés, SMS suspects, démarches en ligne, arnaques fréquentes… un guide simple pour aider un proche sans stress ni conflit.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-light text-muted-foreground sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/15 bg-primary/10 p-4">
                <ShieldCheck className="mb-2 h-5 w-5 text-primary" />
                Prévention des arnaques
              </div>
              <div className="rounded-2xl border border-primary/15 bg-primary/10 p-4">
                <Heart className="mb-2 h-5 w-5 text-primary" />
                Conseils sans conflit
              </div>
              <div className="rounded-2xl border border-primary/15 bg-primary/10 p-4">
                <Download className="mb-2 h-5 w-5 text-primary" />
                PDF gratuit
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="/guide-aidant-numerique" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent">
                Télécharger le guide gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a href="/#contact" className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-4 text-base font-light text-accent transition-all hover:bg-primary/10">
                Me contacter
              </a>
            </div>

            <p className="mt-5 text-sm font-light text-muted-foreground">
              Gratuit · Simple · Pensé pour les aidants familiaux · La Rochelle & accompagnement à distance
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
            <div className="relative rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-white to-secondary/70 p-6 shadow-2xl shadow-primary/10">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <img src="/logo.png" alt="Logo Virginie Assistance Numérique" className="h-6 w-6 object-contain" />
                  </div>
                  <div>
                    <p className="font-script text-2xl leading-none text-primary">Virginie</p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Assistance Numérique</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-primary/10 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">Guide 2026</p>
                  <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">
                    Le Guide de l’Aidant Numérique
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                    Aider un proche senior avec son téléphone, ses mails, ses démarches et sa sécurité numérique.
                  </p>
                </div>

                <div className="mt-5 space-y-3 text-sm font-light text-muted-foreground">
                  <p>✓ Les signes d’alerte</p>
                  <p>✓ Les arnaques fréquentes</p>
                  <p>✓ Les bons réflexes de sécurité</p>
                  <p>✓ Comment aider avec patience</p>
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-primary/30 p-4 text-center">
                  <p className="font-script text-2xl text-primary">La sérénité numérique</p>
                  <p className="mt-1 text-xs font-light text-muted-foreground">virginieassistance.fr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
