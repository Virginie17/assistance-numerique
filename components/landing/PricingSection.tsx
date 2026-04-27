import { CreditCard, Heart, Info } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="tarifs" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Mes tarifs
          </p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Un tarif clair,{" "}
            <span className="italic text-accent">simple et accessible</span>
          </h2>

          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
            Je vous propose un accompagnement personnalisé, à domicile ou à
            distance, avec un devis gratuit avant toute intervention.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
              <Heart className="h-5 w-5" />
            </div>

            <p className="font-script text-2xl text-primary">
              Accompagnement numérique
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="font-serif text-6xl font-medium leading-none text-foreground">
                35€
              </span>
              <span className="pb-2 text-lg font-light text-muted-foreground">
                / heure
              </span>
            </div>

            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Idéal pour une aide ponctuelle : smartphone, ordinateur, emails,
              démarches administratives en ligne, sécurité internet ou
              accompagnement à distance.
            </p>

            <ul className="mt-7 space-y-3 text-sm font-light text-foreground">
              <li>♡ Devis gratuit avant intervention</li>
              <li>♡ À domicile à La Rochelle et alentours</li>
              <li>♡ Assistance possible à distance</li>
              <li>♡ Explications simples, sans jargon</li>
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent"
            >
              Demander un accompagnement ♡
            </a>
          </article>

          <article className="rounded-3xl border border-border bg-white p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
              <CreditCard className="h-5 w-5" />
            </div>

            <p className="font-script text-2xl text-primary">
              Paiement possible en CESU
            </p>

            <h3 className="mt-4 font-serif text-3xl font-medium text-foreground">
              Simple pour vous, déclaré correctement
            </h3>

            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Le CESU permet de déclarer et rémunérer simplement une aide à
              domicile. Le CESU déclaratif simplifie les démarches du
              particulier employeur : l’Urssaf calcule les cotisations et édite
              le bulletin de salaire. Le CESU préfinancé peut aussi servir de
              moyen de paiement selon votre situation.
            </p>

            <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/10 p-5">
              <div className="flex gap-3">
                <Info className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-light leading-relaxed text-foreground">
                  Le recours aux services à la personne peut ouvrir droit à un
                  crédit d’impôt de 50% selon les conditions en vigueur. Les
                  modalités exactes dépendent de votre situation personnelle.
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs font-light leading-relaxed text-muted-foreground">
              Informations générales : le CESU déclaratif et le CESU préfinancé
              sont deux dispositifs différents. Le CESU déclaratif sert à
              déclarer un salarié à domicile ; le CESU préfinancé est un titre
              de paiement pouvant couvrir tout ou partie de la prestation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}