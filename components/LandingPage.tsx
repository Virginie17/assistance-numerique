import React from 'react';
import Image from 'next/image';
import { Mail, MapPin, Smartphone, FileText, ShieldCheck, CalendarCheck, CheckCircle, Video } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.37 2.63 4 4 0 0 1 7.37-2.63" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
};

const ServiceCard = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-principal text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-bleu-marine">{title}</h3>
      <p className="text-foreground/80">{text}</p>
    </div>
  );
};

const Benefit = ({ text, light = false }: { text: string; light?: boolean }) => {
  return (
    <div className={`flex items-start gap-3 ${light ? 'text-white/80' : 'text-foreground/80'}`}>
      <CheckCircle className={`w-5 h-5 ${light ? 'text-white' : 'text-rose-principal'} flex-shrink-0 mt-0.5`} />
      <span className={light ? 'text-white' : 'text-foreground/80'}>{text}</span>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFF8F4]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FFF8F4] px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <Image
              src="/logo.png"
              alt="Logo Virginie Assistance Numérique"
              width={220}
              height={220}
              className="mb-6"
              priority
            />

            <p className="mb-4 inline-flex rounded-full bg-[#F8DFE1] px-4 py-2 text-sm font-semibold text-[#C75B6B]">
              Assistance numérique à La Rochelle &amp; à distance
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#102A4C] md:text-6xl">
              Besoin d’aide avec le{' '}
              <span className="text-[#C75B6B]">numérique ?</span>
            </h1>

            <p className="mt-4 text-xl font-medium text-[#C75B6B]">Le numérique en toute sérénité</p>

            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              J’accompagne les seniors et les personnes en difficulté avec le numérique pour les aider dans leurs démarches administratives, leurs outils du quotidien et leur autonomie.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:virginie.assistancenumerique@gmail.com"
                className="rounded-full bg-[#C75B6B] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-[#A84A58]"
              >
                Me contacter
              </a>

              <a
                href="https://instagram.com/virginie_assistance_numerique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#102A4C] px-8 py-4 text-center font-semibold text-[#102A4C] transition hover:bg-[#F8DFE1]"
              >
                <InstagramIcon className="h-5 w-5" />
                Voir mon Instagram
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#C75B6B]" />
                <span>La Rochelle et alentours — à domicile ou à distance</span>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="h-4 w-4 text-[#C75B6B]" />
                <span>@virginie_assistance_numerique</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#C75B6B]" />
                <span>virginie.assistancenumerique@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white p-4 shadow-2xl">
              <Image
                src="/virginie.webp"
                alt="Virginie assistante numérique à La Rochelle"
                width={600}
                height={700}
                className="rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-bleu-marine mb-4">
            Mes Services
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Je vous accompagne avec patience et bienveillance dans toutes vos démarches numériques
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              icon={<FileText />}
              title="Démarches administratives"
              text="CAF, Impôts, Ameli, Retraite, France Travail, documents en ligne"
            />
            <ServiceCard
              icon={<Smartphone />}
              title="Smartphone & tablette"
              text="Prise en main, réglages, applications, sécurité et utilisation quotidienne"
            />
            <ServiceCard
              icon={<Mail />}
              title="Mails & courriers"
              text="Création d&apos;adresse mail, gestion des messages, pièces jointes"
            />
            <ServiceCard
              icon={<MapPin />}
              title="Ordinateur & internet"
              text="Navigation, recherches, Wi-Fi, sécurité, utilisation simple"
            />
            <ServiceCard
              icon={<CalendarCheck />}
              title="Rendez-vous en ligne"
              text="Prise de rendez-vous, téléconsultations, visioconférences"
            />
            <ServiceCard
              icon={<ShieldCheck />}
              title="Sécurité & conseils"
              text="Arnaques, mots de passe, confidentialité et bonnes pratiques"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-rose-clair px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/virginie.webp"
                alt="Portrait de Virginie"
                width={500}
                height={500}
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-bleu-marine mb-4">
                À votre écoute, avec patience et bienveillance
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Je m&apos;appelle Virginie. Passionnée par le numérique et le contact humain, j&apos;aime ce service pour aider les personnes qui se sentent perdues face aux outils numériques ou aux démarches en ligne.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Mon objectif est simple : vous accompagner pas à pas, sans stress, pour vous aider à devenir plus autonome dans votre quotidien.
              </p>
              <div className="space-y-3">
                <Benefit text="Accompagnement personnalisé" />
                <Benefit text="Explications simples et claires" />
                <Benefit text="À domicile ou à distance" />
                <Benefit text="Confidentialité et respect" />
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#C75B6B] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#A84A58]"
              >
                Discutons ensemble
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-white px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-bleu-marine mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
            Une première séance pour faire connaissance et évaluer vos besoins
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-gradient-to-br from-rose-clair to-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-bleu-marine mb-4">
                Séance découverte
              </h3>
              <div className="text-5xl font-bold text-rose-principal mb-4">35€</div>
              <p className="text-foreground/80 mb-6">
                1h30 d&apos;accompagnement pour faire le point sur vos besoins
              </p>
              <ul className="space-y-3 text-left">
                <Benefit text="Diagnostic complet" />
                <Benefit text="Première aide concrète" />
                <Benefit text="Plan d&apos;action" />
                <Benefit text="Suivi personnalisé" />
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#C75B6B] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#A84A58]"
              >
                Réserver ma séance
              </a>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-bleu-marine to-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pack autonomie
              </h3>
              <div className="text-5xl font-bold text-rose-principal mb-4">120€</div>
              <p className="text-white/80 mb-6">
                4 séances d&apos;accompagnement pour gagner en autonomie
              </p>
              <ul className="space-y-3 text-left">
                <Benefit text="Accompagnement complet" light />
                <Benefit text="Idéal pour les seniors" light />
                <Benefit text="Support continu" light />
                <Benefit text="Documents personnalisés" light />
                <Benefit text="Progressif régulier" light />
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#102A4C] shadow-lg transition hover:bg-white/90"
              >
                Choisir le pack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="bg-rose-clair px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-bleu-marine mb-4">
            Ma zone d&apos;intervention
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">
            La Rochelle et les alentours dans un rayon de 20 km
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-rose-principal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-bleu-marine">À domicile</h3>
              <p className="text-foreground/80">
                Je me déplace à votre domicile pour vous aider en personne
              </p>
            </div>
            <div className="text-center">
              <Video className="w-12 h-12 text-rose-principal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-bleu-marine">À distance</h3>
              <p className="text-foreground/80">
                Accompagnement par visioconférence partout en France
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#102A4C] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/logo.png"
            alt="Logo Virginie Assistance Numérique"
            width={160}
            height={160}
            className="mx-auto mb-6"
          />

          <h2 className="text-3xl font-bold md:text-4xl">
            Le numérique n’est pas toujours simple, mais vous n’êtes pas seul(e).
          </h2>

          <p className="mt-4 text-lg text-white/90">Avec patience, bienveillance et simplicité, je vous accompagne pas à pas.</p>

          <p className="mt-3 text-xl font-semibold text-[#F8DFE1]">Le numérique en toute sérénité</p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:virginie.assistancenumerique@gmail.com"
              className="rounded-full bg-[#C75B6B] px-8 py-4 font-semibold text-white transition hover:bg-[#A84A58]"
            >
              Envoyer un mail
            </a>

            <a
              href="https://instagram.com/virginie_assistance_numerique"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              @virginie_assistance_numerique
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#102A4C] px-6 pb-10 text-white">
        <div className="mx-auto max-w-6xl border-t border-white/15 pt-10">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
              <Image
                src="/logo.png"
                alt="Logo Virginie Assistance Numérique"
                width={72}
                height={72}
                className="h-auto w-16"
              />
              <div>
                <p className="text-lg font-semibold">
                  <span className="font-script text-2xl font-normal">Virginie</span> Assistance Numérique
                </p>
                <p className="text-sm text-white/80">Le numérique en toute sérénité</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-white/90">
              <a
                href="mailto:virginie.assistancenumerique@gmail.com"
                className="inline-flex items-center justify-center gap-2 underline-offset-4 hover:underline md:justify-start"
              >
                <Mail className="h-4 w-4" />
                <span>virginie.assistancenumerique@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/virginie_assistance_numerique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 underline-offset-4 hover:underline md:justify-start"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>@virginie_assistance_numerique</span>
              </a>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-white/60">
            {new Date().getFullYear()} Virginie Assistance Numérique. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
