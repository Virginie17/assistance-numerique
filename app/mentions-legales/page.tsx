import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "Mentions légales | Virginie Assistance Numérique",
  description:
    "Mentions légales du site Virginie Assistance Numérique, assistance numérique à La Rochelle et à distance.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/60 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">Virginie Assistance Numérique</p>
          <h1 className="font-serif text-4xl font-medium text-foreground sm:text-5xl">Mentions légales</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Informations légales relatives au site et à l’activité de Virginie Assistance Numérique.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-border bg-white p-6 shadow-xl shadow-primary/10 sm:p-10">
          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Éditeur du site</h2>
            <div className="mt-4 space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p><strong className="font-medium text-foreground">Nom commercial :</strong> Virginie Assistance Numérique</p>
              <p><strong className="font-medium text-foreground">Statut :</strong> Micro-entreprise</p>
              <p><strong className="font-medium text-foreground">SIRET :</strong> 933 304 800 00024</p>
              <p><strong className="font-medium text-foreground">Zone d’intervention :</strong> La Rochelle et alentours, Charente-Maritime (17), avec possibilité d’accompagnement à distance.</p>
              <p><strong className="font-medium text-foreground">Email :</strong> virginie.assistancenumerique@gmail.com</p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Responsable de la publication</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              La responsable de la publication est la représentante de Virginie Assistance Numérique.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Activité</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Virginie Assistance Numérique propose des prestations d’assistance numérique, d’accompagnement informatique, d’aide aux démarches en ligne, de sensibilisation à la sécurité numérique, ainsi que des services numériques destinés aux professionnels, artisans, auto-entrepreneurs et petites entreprises.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Hébergement</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Le site est hébergé par le prestataire utilisé pour le déploiement du site. Les informations peuvent être complétées selon l’hébergeur effectivement utilisé en production.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Données personnelles</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Les informations transmises via le formulaire de contact sont utilisées uniquement pour répondre aux demandes reçues. Elles ne sont pas revendues à des tiers. Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à l’adresse email indiquée ci-dessus.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Propriété intellectuelle</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Les textes, visuels, éléments graphiques et contenus présents sur ce site sont protégés. Toute reproduction ou utilisation sans autorisation préalable est interdite.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">Contact</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Pour toute question concernant le site ou les mentions légales, vous pouvez écrire à : virginie.assistancenumerique@gmail.com
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
