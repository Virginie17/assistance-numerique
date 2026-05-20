import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Download, Heart } from "lucide-react";

export default function GuideMerciPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/70" />
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-lg shadow-primary/10">
            <Heart className="h-8 w-8" />
          </div>

          <p className="mb-2 font-script text-3xl text-primary">Merci</p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Votre demande de guide a bien été prise en compte.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            Vous allez recevoir le Guide de l’Aidant Numérique 2026 par email. Vous pouvez aussi le télécharger directement depuis cette page.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/guide-aidant-numerique.pdf" download className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent">
              <Download className="mr-2 h-5 w-5" />
              Télécharger le PDF
            </a>

            <a href="/#contact" className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white/50 px-8 py-4 text-base font-light text-accent transition-all hover:bg-primary/10">
              Demander un accompagnement
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 text-sm font-light text-muted-foreground">
            Si le téléchargement ne fonctionne pas encore, ajoutez le fichier PDF dans le dossier <strong>public</strong> avec le nom <strong>guide-aidant-numerique.pdf</strong>.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
