import type { Metadata } from "next";
import { BadgeCheck, Rocket, Target } from "lucide-react";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Créer sa micro-entreprise : communication digitale et premiers clients",
  description: "Accompagnement pour créateurs de micro-entreprise à La Rochelle : présence en ligne, communication digitale, fiche Google, réseaux sociaux, site simple et outils pour trouver ses premiers clients.",
  alternates: { canonical: "https://virginieassistance.fr/micro-entreprise" },
};

export default function MicroEntreprisePage() {
  return (
    <SeoPageLayout
      eyebrow="Starter Micro-Entreprise"
      title="Vous lancez votre micro-entreprise et vous ne savez pas par où commencer ?"
      description="Je vous aide à poser les bases de votre présence en ligne pour être crédible, visible et prêt(e) à attirer vos premiers clients, même si vous débutez complètement en communication digitale."
      primaryCta="Lancer ma visibilité"
      cards={[
        { icon: Rocket, title: "Démarrer avec clarté", text: "On clarifie votre offre, votre cible, votre message et les supports vraiment utiles pour commencer." },
        { icon: Target, title: "Attirer les bons clients", text: "Votre communication doit parler aux problèmes de vos futurs clients, pas seulement présenter votre activité." },
        { icon: BadgeCheck, title: "Paraître professionnel(le)", text: "Adresse e-mail, page Facebook, Instagram, fiche Google, site simple : tout doit inspirer confiance." },
      ]}
      offers={[
        { title: "Pack visibilité de départ", items: ["Clarification de votre offre", "Message commercial simple", "Bio réseaux sociaux", "Mini plan d’action 30 jours"] },
        { title: "Présence en ligne", items: ["Fiche Google", "Page Facebook ou Instagram", "Site vitrine simple", "Boutons de contact clairs"] },
        { title: "Communication pratique", items: ["Idées de publications", "Templates Canva", "Calendrier éditorial", "Méthode pour obtenir des contacts"] },
      ]}
      results={[
        "Savoir exactement quoi publier et pourquoi.",
        "Avoir une image plus professionnelle dès le départ.",
        "Être trouvable sur Internet par vos premiers clients.",
        "Arrêter de perdre du temps à tout faire au hasard.",
      ]}
      faq={[
        { question: "Je viens juste de créer ma micro-entreprise, est-ce trop tôt ?", answer: "Non, c’est même le meilleur moment. Plus les bases sont claires dès le départ, plus votre communication sera cohérente." },
        { question: "Je n’ai pas de budget pour une grosse agence, est-ce adapté ?", answer: "Oui. L’objectif est de construire une présence simple, efficace et progressive, adaptée à une petite activité locale." },
        { question: "Pouvez-vous m’aider à trouver mes premiers clients ?", answer: "Je peux vous aider à construire les supports, le message et les actions de prospection digitale. Les résultats dépendront ensuite de votre régularité et de votre marché." },
      ]}
    />
  );
}
