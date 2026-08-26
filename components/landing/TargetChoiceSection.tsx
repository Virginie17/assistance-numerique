import {
  ArrowRight,
  Building2,
  CreditCard,
  FileText,
  Heart,
  Home,
  Landmark,
  Laptop,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

const particuliersServices = [
  { icon: Smartphone, text: "Smartphone, tablette et ordinateur" },
  { icon: FileText, text: "CAF, Ameli, impôts, retraite, démarches en ligne" },
  { icon: ShieldCheck, text: "Sécurité, mots de passe et prévention des arnaques" },
  { icon: Home, text: "Aide à domicile autour de La Rochelle ou à distance" },
];

const professionnelsServices = [
  { icon: ReceiptText, text: "Facturation électronique et outils de gestion" },
  { icon: Laptop, text: "Création ou amélioration de site internet" },
  { icon: Building2, text: "Organisation numérique pour artisans et auto-entrepreneurs" },
  { icon: Landmark, text: "Facture professionnelle et paiement par virement bancaire" },
];

export default function TargetChoiceSection() {
  return (
    <section id="accompagnements" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">Deux accompagnements adaptés</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Une aide numérique claire,<br />
            <span className="italic text-accent">selon votre situation</span>
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-muted-foreground">
            Que vous soyez un particulier, un senior, un aidant ou un professionnel, je vous accompagne avec la même approche : patience, clarté, pédagogie et solutions simples.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article id="particuliers" className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card p-8 shadow-xl shadow-primary/10 lg:p-10">
            <div className="absolute right-6 top-6 text-6xl text-primary/10">♡</div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary">
              <Users className="h-7 w-7" />
            </div>
            <p className="font-script text-3xl text-primary">Particuliers & seniors</p>
            <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">Pour retrouver de la sérénité avec le numérique</h3>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Vous vous sentez perdu avec votre téléphone, votre ordinateur, vos emails ou vos démarches administratives en ligne ? Je vous accompagne à votre rythme, sans jugement, à domicile ou à distance.
            </p>
            <div className="mt-7 space-y-3">
              {particuliersServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.text} className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-light leading-relaxed text-foreground">{service.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/10 p-5">
              <div className="flex items-start gap-3">
                <CreditCard className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-serif text-xl font-medium text-foreground">Paiements acceptés</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">Espèces, carte bancaire ou virement bancaire selon votre préférence.</p>
                </div>
              </div>
            </div>
            <a href="/particuliers-seniors" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent">
              Découvrir les offres particuliers <Heart className="h-4 w-4" />
            </a>
          </article>

          <article id="professionnels" className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-white p-8 shadow-xl shadow-primary/5 lg:p-10">
            <div className="absolute right-6 top-6 text-6xl text-primary/10">✦</div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent">
              <Building2 className="h-7 w-7" />
            </div>
            <p className="font-script text-3xl text-primary">Professionnels</p>
            <h3 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground">Pour gagner du temps et structurer votre activité</h3>
            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Vous êtes artisan, auto-entrepreneur ou dirigeant d’une petite entreprise ? Je vous aide à gérer vos outils numériques, votre facturation électronique, votre site internet et votre visibilité en ligne.
            </p>
            <div className="mt-7 space-y-3">
              {professionnelsServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.text} className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-light leading-relaxed text-foreground">{service.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-7 rounded-2xl border border-accent/15 bg-accent/10 p-5">
              <div className="flex items-start gap-3">
                <ReceiptText className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-serif text-xl font-medium text-foreground">Paiement professionnel</p>
                  <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">Prestation réalisée via ma micro-entreprise, avec facture professionnelle et règlement par virement bancaire.</p>
                </div>
              </div>
            </div>
            <a href="/professionnels" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary">
              Découvrir les offres professionnelles <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
