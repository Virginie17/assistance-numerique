import { ArrowRight, Building2, Heart, Info } from "lucide-react";
import { individualOffers, professionalOffers } from "@/lib/commercialOffers";

function PriceList({ offers, href, label }: { offers: typeof individualOffers; href: string; label: string }) {
  return (
    <div className="mt-7 space-y-2">
      {offers.map((offer) => (
        <a key={offer.slug} href={`${href}#${offer.slug}`} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-4 py-3 transition hover:border-primary/30 hover:bg-secondary/70">
          <span className="text-sm font-light text-foreground">{offer.title}</span>
          <span className="shrink-0 text-sm font-bold text-accent">{offer.price}</span>
        </a>
      ))}
      <a href={href} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent">{label}<ArrowRight className="h-4 w-4" /></a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="tarifs" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">Mes tarifs</p>
          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">Des offres claires,<br /><span className="italic text-accent">selon votre besoin</span></h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">Consultez les tarifs en un coup d’œil, puis ouvrez la fiche détaillée de l’accompagnement qui vous correspond.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/10 sm:p-8">
            <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Heart className="h-5 w-5" /></div><div><p className="font-script text-2xl text-primary">Particuliers & seniors</p><h3 className="font-serif text-2xl font-medium">5 accompagnements</h3></div></div>
            <PriceList offers={individualOffers} href="/particuliers-seniors" label="Voir les offres particuliers" />
          </article>

          <article className="rounded-3xl border border-accent/20 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8">
            <div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent"><Building2 className="h-5 w-5" /></div><div><p className="font-script text-2xl text-primary">Professionnels</p><h3 className="font-serif text-2xl font-medium">10 solutions</h3></div></div>
            <PriceList offers={professionalOffers} href="/professionnels" label="Voir les offres professionnelles" />
          </article>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl gap-4 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm font-light leading-7 text-muted-foreground"><strong className="text-foreground">Déplacements :</strong> inclus jusqu’à 10 km autour de Lagord. Participation forfaitaire de 5 € entre 10 et 20 km. Au-delà, intervention à distance ou devis personnalisé. Le montant total est toujours confirmé avant le rendez-vous.</p>
        </div>
      </div>
    </section>
  );
}
