import { ArrowRight, BadgeEuro, HeartHandshake, ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    icon: HeartHandshake,
    title: "Un accompagnement humain",
    text: "Je m’adapte à votre niveau et à votre rythme, avec patience, écoute et des explications sans jargon.",
  },
  {
    icon: BadgeEuro,
    title: "Un tarif clair avant de commencer",
    text: "Le prix, le contenu et les limites de l’intervention sont annoncés avant votre engagement, sans mauvaise surprise.",
  },
  {
    icon: ShieldCheck,
    title: "Vous gardez toujours le contrôle",
    text: "Je vous guide pas à pas : vous restez maître de vos comptes, de vos informations et de vos validations personnelles.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Une relation de confiance
          </p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Mes engagements pour un accompagnement{" "}
            <span className="italic text-accent">
              serein
            </span>
          </h2>
          <p className="mt-4 font-light leading-relaxed text-muted-foreground">
            Des engagements concrets et transparents pour vous aider à avancer en confiance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trustPoints.map((item) => {
            const Icon = item.icon;

            return (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 font-light leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/temoignages"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            Découvrir les résultats recherchés
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
