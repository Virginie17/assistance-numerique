import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Clock, Share2 } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

export function blogMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `https://virginieassistance.fr${path}` },
    openGraph: {
      title,
      description,
      url: `https://virginieassistance.fr${path}`,
      type: "article",
    },
  };
}

export default function BlogPostLayout({
  title,
  description,
  readingTime,
  children,
  checklist,
}: {
  title: string;
  description: string;
  readingTime: string;
  checklist?: string[];
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-3xl">
          <a href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-accent"><ArrowLeft className="h-4 w-4" /> Retour au blog</a>
          <p className="mt-8 flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-primary"><Clock className="h-4 w-4" /> {readingTime}</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 text-xl leading-9 text-muted-foreground">{description}</p>

          {checklist && (
            <div className="mt-8 rounded-[2rem] border border-primary/15 bg-white p-6 shadow-xl shadow-primary/5">
              <p className="font-bold">À retenir :</p>
              <ul className="mt-4 space-y-3">
                {checklist.map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
              </ul>
            </div>
          )}

          <div className="prose prose-lg mt-10 max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:leading-8 prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
            {children}
          </div>

          <div className="mt-12 rounded-[2.5rem] bg-[#102A4C] p-8 text-white">
            <div className="flex items-center gap-3 text-primary"><Share2 className="h-5 w-5" /><span className="font-bold uppercase tracking-[0.2em]">Besoin d’aide ?</span></div>
            <h2 className="mt-4 font-serif text-4xl font-semibold">Je peux vous accompagner simplement.</h2>
            <p className="mt-4 text-white/75">À domicile sur La Rochelle et alentours, ou à distance selon votre besoin.</p>
            <a href="/#contact" className="mt-7 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white transition hover:bg-accent">
              Me contacter <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
