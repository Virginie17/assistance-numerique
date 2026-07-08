import { blogMetadata } from "@/components/BlogPostLayout";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata = blogMetadata(
  "Les 5 arnaques qui touchent le plus les seniors",
  "Faux conseiller bancaire, faux colis, faux proche en difficulté, faux sites administratifs et faux dépanneurs : les arnaques à connaître pour protéger ses proches.",
  "/blog/arnaques-seniors"
);

export default function ArnaquesSeniorsPage() {
  return (
    <BlogPostLayout
      title="Les 5 arnaques qui touchent le plus les seniors"
      description="Les arnaques numériques sont de plus en plus crédibles. Le plus important est de savoir repérer les signaux d’alerte avant de cliquer, répondre ou payer."
      readingTime="5 min de lecture"
      checklist={[
        "Ne jamais donner un code reçu par SMS.",
        "Ne jamais cliquer dans la panique.",
        "Toujours vérifier auprès d’un proche ou d’un professionnel de confiance.",
      ]}
    >
      <h2>1. Le faux conseiller bancaire</h2>
      <p>Une personne appelle en se présentant comme votre banque. Elle explique qu’une opération suspecte est en cours et vous demande de confirmer un code, un identifiant ou une validation sur votre application bancaire.</p>
      <p><strong>Bon réflexe :</strong> raccrocher, puis rappeler soi-même le numéro officiel de la banque.</p>

      <h2>2. Le faux colis</h2>
      <p>Vous recevez un SMS indiquant qu’un colis est bloqué ou qu’il faut payer quelques euros pour finaliser une livraison. Le lien mène souvent vers un faux site qui récupère vos coordonnées bancaires.</p>
      <p><strong>Bon réflexe :</strong> ne pas cliquer sur le lien. Aller directement sur le site officiel du transporteur.</p>

      <h2>3. Le faux proche en difficulté</h2>
      <p>Un message commence par : “Maman, j’ai changé de numéro” ou “Papy, mon téléphone est cassé”. Ensuite, la personne demande de l’argent en urgence.</p>
      <p><strong>Bon réflexe :</strong> appeler le proche sur son ancien numéro avant toute action.</p>

      <h2>4. Les faux sites administratifs</h2>
      <p>Certains sites imitent la CAF, la CPAM, FranceConnect, les impôts ou la retraite. Ils peuvent demander des documents, des coordonnées bancaires ou des frais inutiles.</p>
      <p><strong>Bon réflexe :</strong> vérifier l’adresse du site et passer par les sites officiels.</p>

      <h2>5. Les faux dépanneurs informatiques</h2>
      <p>Un message apparaît sur l’écran : “Votre ordinateur est infecté”. Un numéro de téléphone est affiché. L’objectif est de prendre le contrôle de l’ordinateur ou de faire payer une fausse intervention.</p>
      <p><strong>Bon réflexe :</strong> ne pas appeler le numéro affiché et demander conseil.</p>
    </BlogPostLayout>
  );
}
