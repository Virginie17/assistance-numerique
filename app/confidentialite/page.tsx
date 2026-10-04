import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { pageMetadata } from "@/lib/pageMetadata";
export const metadata = pageMetadata(
  "Protection de vos données",
  "Utilisation et protection des données de contact et des documents administratifs confiés à Virginie Assistance.",
  "/confidentialite",
);
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-32">
        <h1 className="font-serif text-4xl">Protection de vos données</h1>
        <div className="mt-8 space-y-8 leading-7 text-muted-foreground">
          <article>
            <h2 className="font-serif text-2xl text-foreground">
              Qui traite vos informations ?
            </h2>
            <p>
              Virginie Assistance Numérique, micro-entreprise identifiée dans
              les{" "}
              <Link href="/mentions-legales" className="text-accent underline">
                mentions légales
              </Link>
              , est responsable des traitements liés aux demandes et aux
              prestations. Contact :{" "}
              <a
                href="mailto:virginie.assistancenumerique@gmail.com"
                className="text-accent underline"
              >
                virginie.assistancenumerique@gmail.com
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-foreground">
              Pourquoi et sur quelle base ?
            </h2>
            <p>
              Les coordonnées, le besoin décrit et les échanges servent à
              répondre à votre demande, préparer un devis et organiser une
              prestation : mesures précontractuelles à votre demande et
              exécution du contrat. Les documents de facturation sont conservés
              pour respecter les obligations légales. Les informations du
              formulaire de guide servent uniquement à vous fournir le guide
              demandé et à traiter cette demande ; elles ne vous inscrivent pas
              automatiquement à une newsletter.
            </p>
            <p>
              Votre nom, un moyen de contact et votre besoin sont nécessaires
              pour répondre. Les autres informations sont facultatives, sauf le
              numéro lorsque vous choisissez téléphone, SMS ou WhatsApp.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-foreground">
              Qui peut y accéder ?
            </h2>
            <p>
              Virginie et les prestataires techniques nécessaires : Vercel pour
              l’hébergement, Resend pour l’envoi des emails et le service de
              messagerie utilisé pour leur réception. Certains prestataires
              peuvent traiter des données hors de l’Union européenne ; les
              garanties et lieux de traitement doivent être suivis dans leurs
              conditions de protection des données. Les données ne sont pas
              revendues. Aucun partage de documents avec un aidant n’est
              automatique : le bénéficiaire doit donner son accord.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-foreground">
              Pendant combien de temps ?
            </h2>
            <p>
              Les demandes et échanges de prospection sont conservés au maximum
              trois ans après le dernier contact. Les échanges nécessaires à
              l’exécution d’une prestation sont conservés pendant la prestation
              puis, lorsqu’ils sont nécessaires pour établir ou défendre un
              droit, jusqu’à cinq ans après sa fin. Les pièces de facturation
              suivent les obligations de conservation applicables, généralement
              dix ans. Les copies de documents administratifs utilisées pour le
              suivi sont supprimées à sa fin, sauf obligation légale ou
              nécessité justifiée portée à votre connaissance.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-foreground">
              Vos documents et vos accès
            </h2>
            <p>
              Ne transmettez pas de mot de passe, numéro fiscal, numéro de
              sécurité sociale ou donnée de santé dans le formulaire. Vous
              saisissez vous-même vos accès et validez vos démarches. Les
              documents restent chez vous ; une copie éventuelle et son mode de
              traitement sont convenus avant utilisation. Les mots de passe ne
              sont pas conservés.
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-foreground">Vos droits</h2>
            <p>
              Selon la situation, vous pouvez demander l’accès, la
              rectification, l’effacement, la limitation ou la portabilité des
              données, ou vous opposer à certains traitements, en écrivant à
              l’adresse ci-dessus. Une suppression peut être limitée par une
              obligation de conservation ou la défense d’un droit. Vous pouvez
              déposer une réclamation auprès de la{" "}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                className="text-accent underline"
              >
                CNIL
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="font-serif text-2xl text-foreground">
              Mesure d’audience
            </h2>
            <p>
              Aucun outil publicitaire ou de mesure d’audience n’est ajouté par
              cette version du site. Les demandes reçues indiquent la catégorie
              et, lorsque vous la choisissez, l’offre demandée pour permettre
              leur suivi. Les journaux techniques de l’hébergeur peuvent être
              utilisés pour le fonctionnement et la sécurité du site.
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
