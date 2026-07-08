import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

export const metadata: Metadata = {
  title: "Blog aide numérique à La Rochelle | Conseils seniors, artisans et micro-entrepreneurs",
  description: "Conseils pratiques pour utiliser le numérique sereinement : arnaques, smartphone, WhatsApp, fiche Google, communication digitale et création de micro-entreprise.",
  alternates: { canonical: "https://virginieassistance.fr/blog" },
};

const posts = [
  {
    title: "Les 5 arnaques qui touchent le plus les seniors",
    description: "Faux conseiller bancaire, faux colis, faux proche en difficulté : les signaux à connaître pour protéger ses proches.",
    href: "/blog/arnaques-seniors",
  },
  {
    title: "Comment créer une fiche Google quand on est artisan ?",
    description: "Les bases pour être visible localement et inspirer confiance aux personnes qui cherchent votre métier sur Google.",
    href: "/blog/fiche-google-artisan",
  },
  {
    title: "WhatsApp expliqué simplement aux seniors",
    description: "Envoyer une photo, faire un appel vidéo, reconnaître un message suspect et rester proche de sa famille.",
    href: "/blog/whatsapp-seniors",
  },
  {
    title: "Micro-entreprise : par où commencer sa communication digitale ?",
    description: "Les premières étapes pour être crédible, visible et prêt à attirer ses premiers clients.",
    href: "/blog/communication-digitale-micro-entreprise",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="px-4 pb-16 pt-28 text-center sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-script text-4xl text-primary">Conseils numériques</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-7xl">Des ressources utiles pour avancer sereinement</h1>
          <p className="mt-6 text-xl leading-9 text-muted-foreground">Des articles simples pour les particuliers, seniors, artisans et créateurs d’entreprise qui veulent mieux utiliser le numérique.</p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.href} className="rounded-[2rem] border border-primary/15 bg-white p-7 shadow-xl shadow-primary/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="mt-6 font-serif text-3xl font-semibold">{post.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{post.description}</p>
              <a href={post.href} className="mt-7 inline-flex items-center gap-2 font-bold text-accent">Lire l’article <ArrowRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
