import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "Conditions générales de vente | Virginie Assistance Numérique",
  description:
    "Conditions générales de vente des prestations proposées par Virginie Assistance Numérique à La Rochelle et à distance.",
};

export default function ConditionsGeneralesDeVentePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/60 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">Virginie Assistance Numérique</p>
          <h1 className="font-serif text-4xl font-medium text-foreground sm:text-5xl">Conditions générales de vente</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Cadre général des prestations d’assistance numérique, d’accompagnement informatique et de services numériques professionnels.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8 rounded-[2rem] border border-border bg-white p-6 shadow-xl shadow-primary/10 sm:p-10">
          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">1. Prestataire</h2>
            <div className="mt-4 space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p><strong className="font-medium text-foreground">Nom commercial :</strong> Virginie Assistance Numérique</p>
              <p><strong className="font-medium text-foreground">Statut :</strong> Micro-entreprise</p>
              <p><strong className="font-medium text-foreground">SIRET :</strong> 933 304 800 00024</p>
              <p><strong className="font-medium text-foreground">Domiciliation :</strong> La Rochelle, France</p>
              <p><strong className="font-medium text-foreground">Email :</strong> virginie.assistancenumerique@gmail.com</p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">2. Prestations proposées</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Virginie Assistance Numérique propose des prestations d’aide à l’utilisation des outils numériques, d’accompagnement informatique, d’aide aux démarches en ligne, de sensibilisation à la sécurité numérique, ainsi que des prestations destinées aux professionnels : facturation électronique, organisation numérique, création ou amélioration de site internet et visibilité en ligne.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">3. Tarifs et devis</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Les tarifs applicables sont ceux indiqués sur le site ou communiqués par devis personnalisé. Pour les particuliers et seniors, certaines prestations peuvent être proposées à l’heure. Pour les professionnels, les prestations sont établies sur devis selon le besoin, la complexité et le temps estimé.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">4. Modalités de paiement</h2>
            <div className="mt-4 space-y-2 text-sm font-light leading-relaxed text-muted-foreground">
              <p>Pour les particuliers, les paiements peuvent être acceptés selon les modalités convenues : CESU, carte bancaire ou virement bancaire.</p>
              <p>Pour les professionnels, les prestations sont réalisées via la micro-entreprise, avec facture professionnelle et règlement par virement bancaire, sauf accord contraire écrit.</p>
            </div>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">5. Prise de rendez-vous, report et annulation</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Toute demande donne lieu à un échange préalable afin de préciser le besoin. En cas d’empêchement, le client est invité à prévenir le plus tôt possible afin de reporter le rendez-vous. En cas d’absence non signalée ou d’annulation tardive répétée, Virginie Assistance Numérique se réserve la possibilité de refuser une nouvelle intervention.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">6. Obligations du client</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Le client s’engage à fournir les informations nécessaires à la réalisation de la prestation et à disposer des accès, documents, appareils ou autorisations utiles. Le client reste responsable des informations transmises, de ses identifiants, de ses décisions administratives et des actions validées pendant l’accompagnement.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">7. Responsabilité</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Virginie Assistance Numérique intervient dans une démarche d’accompagnement, d’aide et de pédagogie. Les prestations ne remplacent pas les conseils d’un professionnel réglementé lorsque la situation l’exige, notamment en matière juridique, fiscale, comptable, médicale ou sociale.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">8. Données personnelles</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Les données collectées lors des échanges ou via le formulaire sont utilisées uniquement pour traiter les demandes, organiser les prestations et assurer le suivi client. Elles ne sont jamais revendues. Le client peut demander l’accès, la modification ou la suppression de ses données par email.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">9. Droit de rétractation</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              Lorsque la réglementation applicable prévoit un droit de rétractation, celui-ci s’exerce selon les conditions légales en vigueur. Si le client demande expressément l’exécution immédiate d’une prestation avant la fin du délai de rétractation, il reconnaît que la prestation commencée ou réalisée pourra être facturée selon l’avancement effectué.
            </p>
          </article>

          <article>
            <h2 className="font-serif text-2xl font-medium text-foreground">10. Médiation et litiges</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
              En cas de difficulté, le client est invité à contacter Virginie Assistance Numérique afin de rechercher une solution amiable. À défaut d’accord, les règles légales applicables aux litiges de consommation ou aux relations professionnelles s’appliqueront.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
