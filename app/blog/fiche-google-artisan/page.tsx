import { blogMetadata } from "@/components/BlogPostLayout";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata = blogMetadata(
  "Comment créer une fiche Google quand on est artisan ?",
  "Guide simple pour aider les artisans à être visibles localement grâce à une fiche Google claire, complète et rassurante.",
  "/blog/fiche-google-artisan"
);

export default function FicheGoogleArtisanPage() {
  return (
    <BlogPostLayout
      title="Comment créer une fiche Google quand on est artisan ?"
      description="Quand un client cherche un plombier, un peintre, un paysagiste ou une couturière près de chez lui, Google est souvent son premier réflexe. Votre fiche doit donc inspirer confiance rapidement."
      readingTime="4 min de lecture"
      checklist={[
        "Utiliser le vrai nom de l’activité.",
        "Ajouter des photos récentes et professionnelles.",
        "Demander des avis clients régulièrement.",
      ]}
    >
      <h2>1. Clarifier votre activité</h2>
      <p>Votre fiche doit expliquer en quelques secondes ce que vous faites, pour qui, et dans quelle zone géographique vous intervenez.</p>

      <h2>2. Choisir les bonnes catégories</h2>
      <p>Les catégories aident Google à comprendre votre métier. Une catégorie mal choisie peut limiter votre visibilité auprès des bons clients.</p>

      <h2>3. Ajouter des photos</h2>
      <p>Les photos rassurent énormément : chantiers terminés, atelier, réalisations, véhicule professionnel, avant / après. Elles montrent que votre activité est réelle.</p>

      <h2>4. Remplir les informations pratiques</h2>
      <p>Horaires, téléphone, site internet, zone d’intervention, services, description : plus votre fiche est complète, plus elle est utile pour vos futurs clients.</p>

      <h2>5. Demander des avis</h2>
      <p>Les avis clients sont un déclencheur de confiance. Après une mission réussie, envoyez simplement le lien de votre fiche à votre client.</p>
    </BlogPostLayout>
  );
}
