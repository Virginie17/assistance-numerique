import DiagnosticNumerique from "@/components/DiagnosticNumerique";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { CheckCircle2, Clock, Gift, HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Diagnostic numérique gratuit | Virginie Assistance Numérique",
  description:
    "Faites le point gratuitement sur votre situation numérique : seniors, aidants, particuliers, artisans et entrepreneurs à La Rochelle et alentours.",
};

const trustItems = [
  { label: "Gratuit", icon: Gift },
  { label: "Sans engagement", icon: ShieldCheck },
  { label: "Résultat immédiat", icon: Clock },
  { label: "Premier échange offert", icon: HeartHandshake },
];

export default function DiagnosticPage() {
  return (
    <main className="min-h-screen bg-[#fbf6f4] text-[#2f2f38]">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-16 md:py-24">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
        <div className="absolute bottom-10 right-[-8rem] h-72 w-72 rounded-full bg-[#c9797f]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#c9797f]">
              Diagnostic gratuit
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight md:text-6xl">
              Faites le point sur votre situation numérique
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#6f6268] md:text-xl">
              En moins de 3 minutes, identifiez vos besoins prioritaires et découvrez
              comment je peux vous accompagner avec simplicité, patience et sérénité.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/80 px-4 py-3 shadow-sm shadow-rose-100/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7e8e9] text-[#c9797f]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-[#4f4449]">{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-rose-100 bg-white/85 p-6 shadow-lg shadow-rose-100/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e8e9] text-[#c9797f]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-[#2f2f38]">
                Pourquoi faire ce diagnostic ?
              </h2>
              <p className="mt-4 leading-relaxed text-[#6f6268]">
                Ce diagnostic vous aide à comprendre ce qui vous fait perdre du temps,
                vous stresse ou vous empêche d'être autonome avec le numérique.
              </p>
              <ul className="mt-5 space-y-3 text-[#5f5358]">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c9797f]" />Identifier vos blocages prioritaires.</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c9797f]" />Obtenir un résultat clair immédiatement.</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c9797f]" />Savoir par où commencer, sans pression.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-rose-100 bg-[#2f2f38] p-6 text-white shadow-lg shadow-rose-100/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-rose-200">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-semibold">
                Un accompagnement local et humain
              </h2>
              <p className="mt-4 leading-relaxed text-rose-50/90">
                J'accompagne les seniors, aidants, particuliers, artisans et entrepreneurs
                à La Rochelle et alentours, à domicile ou à distance.
              </p>
              <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-rose-50/90">
                Vous êtes artisan ou entrepreneur ? Ce diagnostic peut vous aider à
                comprendre pourquoi votre visibilité en ligne ne vous apporte pas assez
                d'appels, de devis ou de clients.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DiagnosticNumerique />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
