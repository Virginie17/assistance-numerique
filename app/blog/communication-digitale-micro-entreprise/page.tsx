import { blogMetadata } from "@/components/BlogPostLayout";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata = blogMetadata(
  "Micro-entreprise : par où commencer sa communication digitale ?",
  "Les premières étapes pour créer une présence en ligne claire quand on lance sa micro-entreprise : message, réseaux sociaux, fiche Google et premiers clients.",
  "/blog/communication-digitale-micro-entreprise"
);

export default function CommunicationDigitaleMicroEntreprisePage() {
  return (
    <BlogPostLayout
      title="Micro-entreprise : par où commencer sa communication digitale ?"
      description="Quand on lance son activité, on peut vite se sentir perdu : logo, réseaux sociaux, site internet, Google, publications… L’objectif est de commencer simplement, mais correctement."
      readingTime="5 min de lecture"
      checklist={[
        "Clarifier ce que vous vendez et à qui.",
        "Créer une présence en ligne simple mais cohérente.",
        "Publier pour attirer des contacts, pas seulement pour être joli.",
      ]}
    >
      <h2>1. Clarifier votre offre</h2>
      <p>Avant de publier, il faut savoir expliquer votre activité en une phrase simple. Vos futurs clients doivent comprendre rapidement ce que vous faites et pourquoi ils devraient vous contacter.</p>

      <h2>2. Identifier vos clients prioritaires</h2>
      <p>On ne communique pas de la même façon pour des seniors, des artisans, des familles ou des professionnels. Plus votre cible est claire, plus votre message devient efficace.</p>

      <h2>3. Choisir les bons canaux</h2>
      <p>Inutile d’être partout. Une fiche Google, une page Facebook locale, un compte Instagram ou un site vitrine simple peuvent suffire au départ selon votre activité.</p>

      <h2>4. Créer des contenus utiles</h2>
      <p>Les publications qui fonctionnent le mieux ne sont pas toujours les plus jolies. Ce sont celles qui répondent à une vraie question, rassurent ou montrent un résultat concret.</p>

      <h2>5. Mettre un appel à l’action clair</h2>
      <p>Chaque support doit indiquer quoi faire ensuite : envoyer un message, demander un devis, réserver un échange ou poser une question.</p>
    </BlogPostLayout>
  );
}
