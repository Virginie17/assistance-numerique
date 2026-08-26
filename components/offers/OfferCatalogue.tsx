import { ArrowRight, Check, ChevronDown, CircleX, MapPin } from "lucide-react";
import type { CommercialOffer } from "@/lib/commercialOffers";

function contactHref(offer: CommercialOffer) {
  const params = new URLSearchParams({ offre: offer.title, service: offer.service });
  return `/?${params.toString()}#contact`;
}

export function OfferCard({ offer }: { offer: CommercialOffer }) {
  return (
    <article id={offer.slug} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-primary/15 bg-white shadow-xl shadow-primary/5">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-serif text-3xl font-semibold leading-tight text-foreground">{offer.title}</h3>
            <p className="mt-3 max-w-2xl font-light leading-7 text-muted-foreground">{offer.summary}</p>
          </div>
          <div className="shrink-0 rounded-2xl bg-primary/10 px-5 py-4 sm:text-right">
            <p className="font-serif text-3xl font-semibold text-accent">{offer.price}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{offer.duration}</p>
          </div>
        </div>

        <details className="group mt-6 border-t border-border pt-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-accent marker:hidden">
            Voir le détail de l’offre
            <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground">Cette offre est idéale pour</h4>
              <p className="mt-2 font-light leading-7 text-muted-foreground">{offer.idealFor}</p>
              <h4 className="mt-6 font-serif text-xl font-semibold text-foreground">Ce qui est inclus</h4>
              <ul className="mt-3 space-y-3">
                {offer.included.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
            </div>
            <div>
              <div className="rounded-2xl bg-secondary/70 p-5">
                <h4 className="font-serif text-xl font-semibold text-foreground">Résultat attendu</h4>
                <p className="mt-2 font-light leading-7 text-muted-foreground">{offer.result}</p>
              </div>
              <h4 className="mt-6 font-serif text-xl font-semibold text-foreground">Modalités</h4>
              <p className="mt-2 font-light leading-7 text-muted-foreground">{offer.terms}</p>
              <h4 className="mt-6 font-serif text-xl font-semibold text-foreground">Ce qui n’est pas inclus</h4>
              <ul className="mt-3 space-y-3">
                {offer.excluded.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CircleX className="mt-1 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
            </div>
          </div>
        </details>

        <a href={contactHref(offer)} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent sm:w-auto">
          Choisir cette offre <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export function CatalogueIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(199,91,107,0.20),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(248,223,225,0.9),transparent_35%)]" />
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-script text-4xl text-primary">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-muted-foreground sm:text-xl">{description}</p>
        <div className="mt-7 flex items-center justify-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> Lagord, La Rochelle et alentours • À distance partout en France</div>
      </div>
    </section>
  );
}

export function CatalogueHelp({ audience }: { audience: "particulier" | "professionnel" }) {
  const label = audience === "particulier" ? "Être conseillé(e) gratuitement" : "Demander un devis gratuit";
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[hsl(340_15%_20%)] p-8 text-center text-white md:p-12">
        <p className="font-script text-4xl text-primary">Vous hésitez entre plusieurs offres ?</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl font-semibold">Expliquez-moi simplement votre situation. Je vous orienterai vers la formule la plus adaptée.</h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`/?offre=Conseil+sur+le+choix+d%27une+offre&service=autre#contact`} className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-white transition hover:bg-accent">{label}<ArrowRight className="h-4 w-4" /></a>
          <a href={`/?offre=Demande+du+catalogue+d%C3%A9taill%C3%A9&service=autre#contact`} className="inline-flex h-14 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-bold text-white transition hover:bg-white/10">Recevoir le catalogue détaillé</a>
        </div>
      </div>
    </section>
  );
}
