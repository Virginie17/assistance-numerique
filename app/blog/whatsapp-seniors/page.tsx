import { blogMetadata } from "@/components/BlogPostLayout";
import BlogPostLayout from "@/components/BlogPostLayout";

export const metadata = blogMetadata(
  "WhatsApp expliqué simplement aux seniors",
  "Apprendre à utiliser WhatsApp simplement : envoyer des photos, faire des appels vidéo, reconnaître les messages suspects et rester proche de sa famille.",
  "/blog/whatsapp-seniors"
);

export default function WhatsappSeniorsPage() {
  return (
    <BlogPostLayout
      title="WhatsApp expliqué simplement aux seniors"
      description="WhatsApp peut devenir un formidable outil pour rester proche de sa famille, recevoir des photos et faire des appels vidéo, à condition de connaître les bases."
      readingTime="4 min de lecture"
      checklist={[
        "Vérifier le nom et la photo du contact avant de répondre.",
        "Ne jamais envoyer d’argent après un simple message.",
        "Apprendre à retrouver les photos reçues.",
      ]}
    >
      <h2>1. Envoyer un message</h2>
      <p>Ouvrez la conversation de la personne, écrivez votre message puis appuyez sur la flèche d’envoi. Le plus important est de bien vérifier à qui vous écrivez.</p>

      <h2>2. Envoyer une photo</h2>
      <p>Dans une conversation, le bouton en forme de trombone ou d’appareil photo permet d’envoyer une image. Il faut ensuite choisir la photo et confirmer l’envoi.</p>

      <h2>3. Faire un appel vidéo</h2>
      <p>L’icône caméra permet de lancer un appel vidéo. C’est très pratique pour voir ses enfants ou petits-enfants même à distance.</p>

      <h2>4. Se protéger des faux messages</h2>
      <p>Si un proche écrit qu’il a changé de numéro et demande de l’argent, il faut toujours vérifier en appelant son ancien numéro ou un autre membre de la famille.</p>

      <h2>5. Avancer à son rythme</h2>
      <p>Il n’est pas nécessaire de tout apprendre d’un coup. Quelques gestes simples suffisent déjà à se sentir plus autonome.</p>
    </BlogPostLayout>
  );
}
