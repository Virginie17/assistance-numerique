import { ArrowRight, FileText, Laptop, Building2 } from "lucide-react";
const paths = [
  {
    title: "Assistance administrative",
    text: "Un courrier incompris, un dossier en attente ou des papiers à classer ? Nous avançons ensemble, de la préparation au suivi.",
    href: "/assistance-administrative-la-rochelle",
    icon: FileText,
  },
  {
    title: "Assistance numérique",
    text: "Smartphone, ordinateur, emails, photos ou sécurité : une aide patiente pour comprendre et retrouver votre autonomie.",
    href: "/particuliers-seniors",
    icon: Laptop,
  },
  {
    title: "Professionnels",
    text: "Facturation électronique, outils de gestion, site internet et visibilité : des solutions adaptées à votre activité.",
    href: "/professionnels",
    icon: Building2,
  },
];
export default function TargetChoiceSection() {
  return (
    <section id="accompagnements" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-script text-2xl text-primary">
            Une aide adaptée à votre besoin
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Comment puis-je vous simplifier la vie ?
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {paths.map(({ title, text, href, icon: Icon }) => (
            <article
              key={href}
              className="flex flex-col rounded-3xl border border-primary/15 bg-card p-8 shadow-lg shadow-primary/5"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                {text}
              </p>
              <a
                href={href}
                className="mt-7 inline-flex items-center gap-2 font-bold text-accent"
              >
                Découvrir l’accompagnement{" "}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
