import {
  FileText,
  GraduationCap,
  Headphones,
  Monitor,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Smartphone & tablette",
    description:
      "Prise en main, réglages, applications, photos, contacts, WhatsApp… Je vous accompagne pas à pas pour vous sentir à l'aise avec votre appareil.",
  },
  {
    icon: FileText,
    emoji: "📋",
    title: "Démarches administratives en ligne",
    description:
      "Impôts, CAF, Ameli, retraite, carte grise, permis de conduire… Je vous guide étape par étape pour toutes vos démarches numériques.",
  },
  {
    icon: Monitor,
    emoji: "💻",
    title: "Ordinateur & emails",
    description:
      "Configuration, utilisation, messagerie, photos, documents… On avance ensemble à votre rythme, sans pression.",
  },
  {
    icon: ShieldCheck,
    emoji: "🔐",
    title: "Sécurité & arnaques",
    description:
      "Reconnaissance des arnaques par email, téléphone ou SMS. Mots de passe sécurisés, bonnes pratiques pour naviguer sereinement.",
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    title: "Formation & autonomie",
    description:
      "Mon objectif : vous rendre autonome ! Apprentissage des outils numériques du quotidien selon vos besoins, à votre rythme.",
  },
  {
    icon: Headphones,
    emoji: "🏠",
    title: "À domicile ou à distance",
    description:
      "Je me déplace chez vous à La Rochelle et dans un rayon de 20 km, ou j'interviens par écran partagé depuis votre canapé.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Ce que je propose
          </p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Un accompagnement complet,
            <br />
            <span className="italic text-accent">
              adapté à vos besoins
            </span>
          </h2>

          <p className="mt-4 text-lg font-light text-muted-foreground">
            Du smartphone aux démarches en ligne, je suis là pour simplifier
            votre quotidien numérique, avec douceur et patience. Mon objectif :
            vous rendre autonome et serein·e.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="mb-4 text-3xl">{service.emoji}</div>

                <h3 className="mb-3 font-serif text-2xl font-medium leading-tight text-foreground">
                  {service.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-6 text-sm font-light text-primary">
                  ♡ je vous accompagne personnellement
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}