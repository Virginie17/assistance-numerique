import type { Metadata } from "next";
import { Heart, ShieldCheck, Smartphone } from "lucide-react";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: "Aide numérique senior à La Rochelle | Smartphone, ordinateur, démarches",
  description: "Accompagnement numérique à domicile à La Rochelle pour seniors et particuliers : smartphone, ordinateur, WhatsApp, démarches en ligne, sécurité Internet et prévention des arnaques.",
  alternates: { canonical: "https://virginieassistance.fr/seniors" },
};

export default function SeniorsPage() {
  return (
    <SeoPageLayout
      eyebrow="Particuliers & seniors"
      title="Aide numérique à domicile à La Rochelle"
      description="Vous avez besoin d’aide avec votre téléphone, votre ordinateur, vos mails ou vos démarches en ligne ? Je vous accompagne avec patience, à votre rythme, sans jargon compliqué."
      primaryCta="Demander de l’aide"
      cards={[
        { icon: Smartphone, title: "Comprendre son appareil", text: "Apprendre à utiliser son smartphone, sa tablette ou son ordinateur sans stress et sans peur de faire une erreur." },
        { icon: Heart, title: "Rester proche de sa famille", text: "Envoyer des photos, utiliser WhatsApp, faire des appels vidéo et recevoir des nouvelles plus facilement." },
        { icon: ShieldCheck, title: "Se protéger des arnaques", text: "Reconnaître les faux SMS, faux conseillers, faux sites administratifs et sécuriser ses mots de passe." },
      ]}
      offers={[
        { title: "Prise en main", items: ["Réglage du téléphone ou de l’ordinateur", "Explications simples", "Applications utiles", "Sauvegarde des photos"] },
        { title: "Démarches en ligne", items: ["CAF, CPAM, retraite, impôts", "Création ou récupération d’accès", "Envoi de pièces jointes", "Organisation des documents"] },
        { title: "Sécurité numérique", items: ["Mots de passe", "Arnaques Internet", "Protection du téléphone", "Bonnes pratiques au quotidien"] },
      ]}
      results={[
        "Retrouver confiance avec son téléphone ou son ordinateur.",
        "Pouvoir communiquer plus facilement avec ses proches.",
        "Faire ses démarches en ligne avec moins de stress.",
        "Savoir quoi faire en cas de message ou appel suspect.",
      ]}
      faq={[
        { question: "Est-ce que vous vous déplacez à domicile ?", answer: "Oui, je peux intervenir à domicile sur La Rochelle et alentours selon les disponibilités." },
        { question: "Je suis vraiment débutant(e), est-ce un problème ?", answer: "Non. L’accompagnement est justement fait pour avancer à votre rythme, sans jugement." },
        { question: "Pouvez-vous m’aider pour WhatsApp et les photos ?", answer: "Oui, c’est une demande très fréquente : envoyer, recevoir, retrouver et sauvegarder des photos." },
      ]}
    />
  );
}
