import { ArrowRight, Building2, CheckCircle2, Globe2, ReceiptText, Sparkles, Wrench } from "lucide-react";

const proBenefits = [
  "Comprendre les obligations sans jargon",
  "Choisir un outil adapté à votre activité",
  "Configurer votre solution pas à pas",
  "Être autonome pour vos premières factures",
];

const extraServices = [
  {
    icon: Globe2,
    title: "Création de site internet",
    description: "Un site clair, rassurant et adapté à votre activité pour être trouvé en ligne.",
  },
  {
    icon: Sparkles,
    title: "Visibilité en ligne",
    description: "Aide pour Google, réseaux sociaux et communication digitale simple.",
  },
  {
    icon: Wrench,
    title: "Demandes sur mesure",
    description: "Organisation numérique, logiciels, documents, outils métier : à étudier ensemble.",
  },
];

export default function ProfessionalSection() {
  return (
    <section id="professionnels" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-primary/15 bg-card p-8 shadow-xl shadow-primary/5 lg:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-light text-primary">
              <Building2 className="h-4 w-4" />
              Nouveau service pour les professionnels
            </div>

            <p className="mb-3 font-script text-3xl text-primary">
              Auto-entrepreneurs, artisans & petites entreprises
            </p>

            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Facturation électronique :
              <br />
              <span className="italic text-accent">je vous simplifie tout</span>
            </h2>

            <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
              La facturation électronique arrive et vous ne savez pas par où commencer ?
              Je vous accompagne pour comprendre, mettre en place et utiliser les bons outils,
              simplement et sans stress.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {proBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-background p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-light leading-relaxed text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/facturation-electronique"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-light text-white transition-colors hover:bg-accent"
              >
                Découvrir l'accompagnement
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3 text-sm font-light text-primary transition-colors hover:bg-primary/10"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] bg-primary p-8 text-white shadow-xl shadow-primary/20">
              <ReceiptText className="mb-5 h-10 w-10" />
              <h3 className="font-serif text-3xl font-medium">
                Pack Sérénité Facturation
              </h3>
              <p className="mt-4 font-light leading-relaxed text-white/85">
                Un accompagnement humain pour être prêt(e), gagner du temps et éviter les erreurs.
              </p>
              <div className="mt-6 rounded-2xl bg-white/15 p-5">
                <p className="text-sm font-light text-white/70">À partir de</p>
                <p className="font-serif text-5xl font-medium">97€</p>
                <p className="mt-1 text-sm font-light text-white/70">
                  selon votre niveau de besoin
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {extraServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article key={service.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <Icon className="mb-4 h-7 w-7 text-primary" />
                    <h3 className="font-serif text-xl font-medium text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
