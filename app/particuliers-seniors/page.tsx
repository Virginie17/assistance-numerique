import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CatalogueHelp, CatalogueIntro, OfferCard } from "@/components/offers/OfferCatalogue";
import { individualOffers } from "@/lib/commercialOffers";

export const metadata: Metadata = {
  title: "Offres d’aide numérique pour particuliers et seniors à La Rochelle",
  description: "Découvrez les accompagnements de Virginie Assistance Numérique : téléphone, ordinateur, démarches en ligne, sécurité et parcours autonomie à Lagord et La Rochelle.",
  alternates: { canonical: "https://virginieassistance.fr/particuliers-seniors" },
};

export default function ParticuliersSeniorsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CatalogueIntro eyebrow="Particuliers & seniors" title="Une aide numérique adaptée à votre situation" description="Téléphone, ordinateur, démarches administratives, sécurité ou apprentissage : choisissez l’accompagnement qui correspond à votre besoin. Je vous accompagne avec patience et sans jargon." />
      <section className="bg-white/55 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {individualOffers.map((offer) => <OfferCard key={offer.slug} offer={offer} />)}
        </div>
      </section>
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/15 bg-primary/10 p-6 text-center text-sm leading-7 text-muted-foreground">
          Déplacement inclus jusqu’à 10 km autour de Lagord. Participation forfaitaire de 5 € entre 10 et 20 km. Au-delà : intervention à distance ou devis personnalisé.
        </div>
      </section>
      <CatalogueHelp audience="particulier" />
      <Footer />
    </main>
  );
}
