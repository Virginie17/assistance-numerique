import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { CatalogueIntro, OfferCard } from "@/components/offers/OfferCatalogue";
import { administrativeOffers } from "@/lib/commercialOffers";
export const metadata: Metadata = {
  title: "Assistance administrative à domicile à La Rochelle",
  description:
    "Courriers, dossiers, démarches CAF, Ameli, retraite et classement : Virginie vous accompagne personnellement à domicile à La Rochelle et autour de Lagord.",
  alternates: {
    canonical:
      "https://virginieassistance.fr/assistance-administrative-la-rochelle",
  },
};
const situations = [
  [
    "Courriers et formulaires",
    "Comprendre une demande, préparer une réponse et réunir les justificatifs.",
  ],
  [
    "Dossiers et démarches en ligne",
    "CAF, Ameli, retraite, impôts ou France Titres : organiser les pièces et avancer avec vous.",
  ],
  [
    "Classement et suivi",
    "Retrouver vos documents, noter les étapes réalisées et préparer les suites.",
  ],
  [
    "Aidants et changements de situation",
    "Accompagner un proche avec son accord, préparer un déménagement ou une démarche liée à la retraite.",
  ],
];
export default function AdministrativePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <CatalogueIntro
        eyebrow="Vos démarches, plus simplement"
        title="Assistance administrative à domicile à La Rochelle"
        description="Un courrier que vous ne comprenez pas ? Un dossier à constituer ? Je vous aide à organiser vos documents, préparer vos démarches et avancer étape par étape, tout en vous laissant la maîtrise de vos décisions et validations."
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="font-serif text-3xl">
          Dans quelles situations puis-je vous aider ?
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {situations.map(([title, text]) => (
            <article
              key={title}
              className="rounded-3xl border border-primary/15 bg-white p-6"
            >
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-secondary/40 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 font-serif text-3xl">
            Un accompagnement au périmètre clair
          </h2>
          <div className="space-y-6">
            {administrativeOffers.map((offer) => (
              <OfferCard key={offer.slug} offer={offer} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-muted-foreground">
            Déplacement inclus jusqu’à 10 km autour de Lagord ; participation de
            5 € entre 10 et 20 km. Le montant total est confirmé avant
            intervention.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="font-serif text-3xl">
          Comment se déroule l’accompagnement ?
        </h2>
        <ol className="mt-6 list-decimal space-y-4 pl-5 leading-7 text-muted-foreground">
          <li>
            Vous décrivez votre besoin, sans transmettre de données
            confidentielles.
          </li>
          <li>
            Nous convenons du périmètre, du temps et du tarif avant le
            rendez-vous.
          </li>
          <li>
            Nous préparons les documents ensemble ; vous saisissez vos accès et
            validez les démarches.
          </li>
          <li>
            Vous repartez avec la liste des actions réalisées et des prochaines
            étapes.
          </li>
        </ol>
        <div className="mt-8 rounded-3xl border border-primary/20 bg-white p-6">
          <h3 className="font-serif text-2xl">Confiance et confidentialité</h3>
          <p className="mt-3 leading-7 text-muted-foreground">
            Vos mots de passe ne sont pas conservés. Les documents restent chez
            vous ; toute copie nécessaire au suivi est convenue avec vous et
            supprimée à la fin du suivi. Un aidant reçoit des informations
            uniquement avec votre accord. Cet accompagnement ne remplace pas un
            conseil juridique, fiscal, comptable, médical ou social spécialisé
            et ne garantit pas l’acceptation d’un dossier.
          </p>
        </div>
        <Link
          href="/?service=demarches_administratives#contact"
          className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 font-bold text-white hover:bg-accent"
        >
          Parlons de votre besoin
        </Link>
      </section>
      <Footer />
    </main>
  );
}
