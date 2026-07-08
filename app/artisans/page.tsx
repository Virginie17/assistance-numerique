import type { Metadata } from "next";
import { BriefcaseBusiness, Globe2, Star } from "lucide-react";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Visibilité Internet pour artisan à La Rochelle | Site, Google, réseaux sociaux",
  description: "Accompagnement digital pour artisans et commerçants à La Rochelle : site internet, fiche Google, avis clients, réseaux sociaux, e-mails professionnels et organisation numérique.",
  alternates: { canonical: "https://virginieassistance.fr/artisans" },
};

export default function ArtisansPage() {
  return (
    <SeoPageLayout
      eyebrow="Artisans & commerçants"
      title="Soyez visible quand vos clients vous cherchent"
      description="Vous êtes sur vos chantiers, avec vos clients ou dans votre atelier. Je vous aide à structurer votre présence sur Internet pour gagner du temps et recevoir plus de demandes qualifiées."
      primaryCta="Améliorer ma visibilité"
      cards={[
        { icon: Globe2, title: "Être trouvé sur Internet", text: "Site vitrine clair, fiche Google optimisée et informations professionnelles cohérentes." },
        { icon: Star, title: "Inspirer confiance", text: "Mise en valeur de votre savoir-faire, de vos photos, de vos avis clients et de vos réalisations." },
        { icon: BriefcaseBusiness, title: "Gagner du temps", text: "E-mails, outils, demandes de devis et organisation numérique plus simples à gérer au quotidien." },
      ]}
      offers={[
        { title: "Site vitrine", items: ["Présentation de votre activité", "Services et zone d’intervention", "Boutons de contact visibles", "Version mobile"] },
        { title: "Fiche Google", items: ["Création ou optimisation", "Photos et description", "Catégories adaptées", "Aide pour récolter des avis"] },
        { title: "Communication simple", items: ["Idées de publications", "Canva", "Page Facebook ou Instagram", "Plan de contenu facile à tenir"] },
      ]}
      results={[
        "Une activité plus claire et plus rassurante en ligne.",
        "Des clients qui comprennent rapidement ce que vous proposez.",
        "Une présence Google plus professionnelle.",
        "Moins de temps perdu à improviser votre communication.",
      ]}
      faq={[
        { question: "Je n’ai pas encore de site, par quoi commencer ?", answer: "On commence par clarifier votre activité, vos services, votre zone géographique et vos moyens de contact. Ensuite seulement, on construit le support adapté." },
        { question: "Est-ce utile si j’ai déjà une page Facebook ?", answer: "Oui, car une page Facebook seule ne suffit pas toujours. Il faut aussi une présence Google, des informations cohérentes et un parcours clair pour demander un devis." },
        { question: "Pouvez-vous m’aider à publier ?", answer: "Oui, je peux vous aider à créer des visuels, trouver des idées de posts et structurer une communication simple à tenir." },
      ]}
    />
  );
}
