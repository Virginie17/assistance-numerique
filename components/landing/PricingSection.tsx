import { Building2, CreditCard, Heart, Info, ReceiptText } from "lucide-react";

const individualFeatures = [
  "À domicile à La Rochelle et alentours",
  "Assistance possible à distance",
  "Explications simples, sans jargon",
  "Idéal pour smartphone, ordinateur, emails et démarches en ligne",
];

const professionalFeatures = [
  "Facturation électronique et outils numériques",
  "Création ou amélioration de site internet",
  "Organisation digitale et visibilité en ligne",
  "Facture professionnelle fournie après prestation",
];

export default function PricingSection() {
  return (
    <section id="tarifs" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">Mes tarifs</p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Des tarifs clairs,<br />
            <span className="italic text-accent">selon votre profil</span>
          </h2>

          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">
            Je distingue clairement les accompagnements pour particuliers et seniors des prestations professionnelles réalisées via ma micro-entreprise.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-8 shadow-xl shadow-primary/10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
              <Heart className="h-5 w-5" />
            </div>

            <p className="font-script text-2xl text-primary">Particuliers & seniors</p>
            <h3 className="mt-4 font-serif text-3xl font-medium text-foreground">Accompagnement numérique</h3>

            <div className="mt-5 flex items-end gap-2">
              <span className="font-serif text-6xl font-medium leading-none text-foreground">35€</span>
              <span className="pb-2 text-lg font-light text-muted-foreground">/ heure</span>
            </div>

            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Pour une aide ponctuelle ou régulière avec vos appareils, vos comptes, vos emails ou vos démarches administratives en ligne.
            </p>

            <ul className="mt-7 space-y-3 text-sm font-light text-foreground">
              {individualFeatures.map((feature) => (
                <li key={feature}>♡ {feature}</li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/10 p-5">
              <div className="flex gap-3">
                <CreditCard className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-light leading-relaxed text-foreground">
                  Paiement possible en CESU, carte bancaire ou virement bancaire.
                </p>
              </div>
            </div>

            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent">
              Demander une aide ♡
            </a>
          </article>

          <article className="rounded-3xl border border-accent/20 bg-white p-8 shadow-xl shadow-primary/5">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-accent/15 bg-accent/10 text-accent">
              <Building2 className="h-5 w-5" />
            </div>

            <p className="font-script text-2xl text-primary">Professionnels</p>
            <h3 className="mt-4 font-serif text-3xl font-medium text-foreground">Prestation micro-entreprise</h3>

            <div className="mt-5 flex items-end gap-2">
              <span className="font-serif text-5xl font-medium leading-none text-foreground">Sur devis</span>
            </div>

            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Pour les artisans, auto-entrepreneurs et petites entreprises qui veulent structurer leur numérique, leur facturation ou leur présence en ligne.
            </p>

            <ul className="mt-7 space-y-3 text-sm font-light text-foreground">
              {professionalFeatures.map((feature) => (
                <li key={feature}>♡ {feature}</li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-accent/15 bg-accent/10 p-5">
              <div className="flex gap-3">
                <ReceiptText className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm font-light leading-relaxed text-foreground">
                  Facture professionnelle via ma micro-entreprise. Paiement par virement bancaire.
                </p>
              </div>
            </div>

            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary">
              Demander un devis pro
            </a>
          </article>

          <article className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
              <Info className="h-5 w-5" />
            </div>

            <p className="font-script text-2xl text-primary">Premier échange</p>
            <h3 className="mt-4 font-serif text-3xl font-medium text-foreground">Devis gratuit</h3>

            <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
              Avant toute intervention, nous faisons le point sur votre besoin, votre situation et la solution la plus adaptée.
            </p>

            <ul className="mt-7 space-y-3 text-sm font-light text-foreground">
              <li>♡ Échange simple et sans engagement</li>
              <li>♡ Orientation vers la bonne formule</li>
              <li>♡ Estimation claire avant intervention</li>
              <li>♡ Réponse personnalisée selon votre profil</li>
            </ul>

            <div className="mt-7 rounded-2xl border border-primary/15 bg-primary/10 p-5">
              <p className="text-sm font-light leading-relaxed text-foreground">
                Le CESU et les prestations professionnelles sont deux cadres différents. Je vous indique clairement la solution adaptée à votre demande.
              </p>
            </div>

            <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-primary/30 px-7 py-4 text-base font-light text-primary transition-all hover:bg-primary/10">
              Poser ma question
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
