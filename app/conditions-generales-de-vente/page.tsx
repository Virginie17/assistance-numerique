import Link from "next/link";
import { pageMetadata } from "@/lib/pageMetadata";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = pageMetadata(
  "Conditions générales de vente",
  "Conditions générales de vente des prestations proposées par Virginie Assistance à La Rochelle et à distance.",
  "/conditions-generales-de-vente",
);

export default function ConditionsGeneralesDeVentePage() {
  const mediatorName = process.env.CONSUMER_MEDIATOR_NAME;
  const mediatorAddress = process.env.CONSUMER_MEDIATOR_ADDRESS;
  const mediatorUrl = process.env.CONSUMER_MEDIATOR_URL;
  const validMediator =
    mediatorName &&
    mediatorAddress &&
    mediatorUrl &&
    /^https:\/\//.test(mediatorUrl);
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/60 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Virginie Assistance Numérique
          </p>
          <h1 className="font-serif text-4xl font-medium text-foreground sm:text-5xl">
            Conditions générales de vente
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Cadre général des prestations d’assistance numérique,
            d’accompagnement informatique et de services numériques
            professionnels.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-border bg-white p-6 shadow-xl shadow-primary/10 sm:p-10">
          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              1. Prestataire
            </h2>
            <div className="mt-4 space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>
                <strong className="font-medium text-foreground">
                  Nom commercial :
                </strong>{" "}
                Virginie Assistance Numérique
              </p>
              <p>
                <strong className="font-medium text-foreground">
                  Statut :
                </strong>{" "}
                Micro-entreprise
              </p>
              <p>
                <strong className="font-medium text-foreground">SIRET :</strong>{" "}
                933 304 800 00024
              </p>
              <p>
                <strong className="font-medium text-foreground">
                  Domiciliation :
                </strong>{" "}
                La Rochelle, France
              </p>
              <p>
                <strong className="font-medium text-foreground">Email :</strong>{" "}
                virginie.assistancenumerique@gmail.com
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              2. Prestations proposées
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Virginie Assistance Numérique propose des prestations d’aide à
              l’utilisation des outils numériques, d’accompagnement
              informatique, d’assistance administrative à domicile (courriers,
              dossiers, classement et suivi), d’aide aux démarches en ligne, de
              sensibilisation à la sécurité numérique, ainsi que des prestations
              destinées aux professionnels : facturation électronique,
              organisation numérique, création ou amélioration de site internet
              et visibilité en ligne.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              3. Tarifs et devis
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Les tarifs applicables sont ceux indiqués sur le site ou
              communiqués par devis personnalisé. Pour les particuliers et
              seniors, certaines prestations peuvent être proposées à l’heure.
              Pour les professionnels, les prestations sont établies sur devis
              selon le besoin, la complexité et le temps estimé.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              4. Modalités de paiement
            </h2>
            <div className="mt-4 space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>
                Pour les particuliers, les paiements peuvent être acceptés selon
                les modalités convenues : espèces, carte bancaire ou virement
                bancaire.
              </p>
              <p>
                Pour les professionnels, les prestations sont réalisées via la
                micro-entreprise, avec facture professionnelle et règlement par
                virement bancaire, sauf accord contraire écrit.
              </p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              5. Prise de rendez-vous, report et annulation
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Toute demande donne lieu à un échange préalable afin de préciser
              le besoin. En cas d’empêchement, le client est invité à prévenir
              le plus tôt possible afin de reporter le rendez-vous. En cas
              d’absence non signalée ou d’annulation tardive répétée, Virginie
              Assistance Numérique se réserve la possibilité de refuser une
              nouvelle intervention.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              6. Obligations du client
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Le client s’engage à fournir les informations nécessaires à la
              réalisation de la prestation et à disposer des accès, documents,
              appareils ou autorisations utiles. Le client reste responsable des
              informations transmises, de ses identifiants, de ses décisions
              administratives et des actions validées pendant l’accompagnement.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              7. Responsabilité
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Virginie Assistance Numérique intervient dans une démarche
              d’accompagnement, d’aide et de pédagogie. Les prestations ne
              remplacent pas les conseils d’un professionnel réglementé lorsque
              la situation l’exige, notamment en matière juridique, fiscale,
              comptable, médicale ou sociale.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              8. Données personnelles
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Pour l’assistance administrative, le temps inclus, le nombre de
              rendez-vous et la durée du suivi sont ceux de l’offre ou du devis
              accepté. Le client valide personnellement les déclarations et
              envois. Aucun délai de réponse ou accord d’un organisme n’est
              garanti. Les mots de passe ne sont pas conservés. Les documents
              restent chez le client ; toute copie nécessaire au suivi est
              convenue avec lui et supprimée à la fin du suivi, hors documents
              de facturation soumis aux obligations de conservation. Le partage
              avec un aidant nécessite l’accord du client. Les données
              collectées lors des échanges ou via le formulaire sont utilisées
              uniquement pour traiter les demandes, organiser les prestations et
              assurer le suivi client. Elles ne sont jamais revendues. Consultez
              notre{" "}
              <Link href="/confidentialite" className="text-accent underline">
                information détaillée sur la protection des données
              </Link>
              . Le client peut demander l’accès, la modification ou la
              suppression de ses données par email.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              9. Droit de rétractation
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Pour les contrats de services conclus à distance ou hors
              établissement auxquels ce droit s’applique, le consommateur
              dispose de 14 jours à compter de la conclusion du contrat pour se
              rétracter sans avoir à justifier sa décision. Il peut adresser une
              déclaration claire ou le formulaire ci-dessous par email à
              virginie.assistancenumerique@gmail.com. Si le client souhaite
              commencer avant la fin de ce délai, une demande expresse est
              recueillie sur un support durable. En cas de rétractation après le
              début demandé de la prestation, le montant dû est proportionnel au
              service fourni dans les conditions légales. La perte du droit pour
              une prestation entièrement exécutée suppose l’accord préalable
              exprès et la reconnaissance de cette perte ; elle ne résulte pas
              simplement de la prise de rendez-vous.
            </p>
          </article>

          <article className="rounded-2xl border border-border p-5">
            <h2 className="font-serif text-2xl">
              Formulaire de rétractation à copier
            </h2>
            <p className="mt-3 text-sm leading-7">
              À l’attention de Virginie Assistance Numérique —
              virginie.assistancenumerique@gmail.com. Je vous notifie ma
              rétractation du contrat portant sur la prestation suivante :
              [prestation]. Contrat conclu le : [date]. Nom du consommateur :
              [nom]. Adresse : [adresse]. Date : [date]. Signature uniquement en
              cas de notification sur papier.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              10. Médiation et litiges
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              En cas de difficulté, le client est invité à contacter Virginie
              Assistance Numérique afin de rechercher une solution amiable. À
              défaut d’accord, le consommateur peut recourir gratuitement au
              médiateur de la consommation dont relève le professionnel, après
              une réclamation écrite préalable. Les litiges entre professionnels
              ne relèvent pas de ce dispositif.
            </p>
            {validMediator && (
              <p className="mt-3 text-sm leading-7">
                Médiateur : {mediatorName}. Adresse : {mediatorAddress}. Site :{" "}
                <a href={mediatorUrl} className="text-accent underline">
                  {mediatorUrl}
                </a>
                .
              </p>
            )}
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
