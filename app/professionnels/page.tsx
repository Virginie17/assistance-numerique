import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CatalogueHelp, CatalogueIntro, OfferCard } from "@/components/offers/OfferCatalogue";
import { professionalGroups } from "@/lib/commercialOffers";

export const metadata: Metadata = {
  title: "Accompagnement numérique pour artisans et indépendants à La Rochelle",
  description: "Facturation électronique, organisation numérique, fiche Google, site internet et services digitaux pour artisans, indépendants et petites entreprises.",
  alternates: { canonical: "https://virginieassistance.fr/professionnels" },
};

export default function ProfessionnelsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CatalogueIntro eyebrow="Artisans, indépendants & petites entreprises" title="Des solutions numériques concrètes pour votre activité" description="Je vous aide à mettre en place vos outils, préparer votre facturation électronique et améliorer votre visibilité, simplement et sans jargon." />
      <div className="bg-white/55 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-20">
          {professionalGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-8 text-center">
                <p className="font-script text-3xl text-primary">Offres professionnelles</p>
                <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">{group.title}</h2>
                <p className="mx-auto mt-4 max-w-2xl font-light leading-7 text-muted-foreground">{group.description}</p>
              </div>
              <div className="space-y-6">{group.offers.map((offer) => <OfferCard key={offer.slug} offer={offer} />)}</div>
            </section>
          ))}
        </div>
      </div>
      <CatalogueHelp audience="professionnel" />
      <Footer />
    </main>
  );
}
