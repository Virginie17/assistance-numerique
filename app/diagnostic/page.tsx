import DiagnosticNumerique from "@/components/DiagnosticNumerique";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export const metadata = {
  title: "Diagnostic numérique gratuit | Virginie Assistance Numérique",
  description:
    "Faites le point gratuitement sur votre situation numérique : seniors, aidants, particuliers, artisans et entrepreneurs à La Rochelle et alentours.",
};

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

          <div className="mt-12">
            <DiagnosticNumerique />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
