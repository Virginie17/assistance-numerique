import { Cormorant_Garamond, Inter, Parisienne } from 'next/font/google';
import Image from 'next/image';
import { Heart, MapPin, Menu } from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
});

const services = [
  {
    icon: '📱',
    title: 'Smartphone & tablette',
    text: "Prise en main, réglages, applications, photos, contacts, WhatsApp... Je vous accompagne pas à pas pour vous sentir à l'aise avec votre appareil.",
  },
  {
    icon: '📋',
    title: 'Démarches administratives en ligne',
    text: 'Impôts, CAF, Ameli, retraite, carte grise, permis de conduire... Je vous guide étape par étape pour toutes vos démarches numériques.',
  },
  {
    icon: '💻',
    title: 'Ordinateur & emails',
    text: "Configuration, utilisation, messagerie, photos, documents... On avance ensemble à votre rythme, sans pression.",
  },
  {
    icon: '🔐',
    title: 'Sécurité & arnaques',
    text: 'Reconnaissance des arnaques par email, téléphone ou SMS. Mots de passe sécurisés, bonnes pratiques pour naviguer sereinement.',
  },
  {
    icon: '🎓',
    title: 'Formation & autonomie',
    text: 'Mon objectif : vous rendre autonome ! Apprentissage des outils numériques du quotidien selon vos besoins, à votre rythme.',
  },
  {
    icon: '🏠',
    title: 'À domicile ou à distance',
    text: "Je me déplace chez vous à La Rochelle et dans un rayon de 20 km, ou j'interviens par écran partagé depuis votre canapé.",
  },
];

const faqs = [
  'Faut-il être « doué » en informatique pour faire appel à vous ?',
  'Venez-vous vraiment à domicile ?',
  'Combien ça coûte ?',
  'Que puis-je vous demander exactement ?',
  'Comment se passe une session à distance ?',
  'Puis-je vous appeler en urgence ?',
];

const FlowerSprig = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 120 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M62 210C62 165 56 140 46 120C35 97 24 80 18 60C13 43 17 28 31 20"
        stroke="#C75B6B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M38 68C24 62 14 52 8 40C20 41 32 45 44 54"
        stroke="#C75B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 98C33 96 20 88 10 76C23 75 38 78 54 86"
        stroke="#C75B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 132C41 134 26 129 14 118C27 113 43 112 60 116"
        stroke="#C75B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 116C86 116 100 110 112 98C98 94 82 94 66 98"
        stroke="#C75B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64 78C82 78 96 70 108 58C94 55 78 56 60 62"
        stroke="#C75B6B"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="84" cy="30" r="10" fill="#F8DFE1" stroke="#C75B6B" strokeWidth="4" />
      <circle cx="102" cy="46" r="8" fill="#F8DFE1" stroke="#C75B6B" strokeWidth="4" />
    </svg>
  );
};

export default function VirginieAssistancePage() {
  return (
    <main className={`${cormorant.variable} ${inter.variable} ${parisienne.variable} min-h-screen bg-[#faf5f6] text-[#39292f]`}>
      <header className="sticky top-0 z-50 bg-white/96 border-b border-[#eadde1] shadow-[0_2px_10px_rgba(76,45,55,0.06)]">
        <div className="mx-auto flex h-[92px] max-w-[430px] items-center justify-between px-[30px]">
          <div className="flex items-center gap-[18px]">
            <div className="relative h-[52px] w-[52px] overflow-hidden rounded-full border border-[#e4c9d2] bg-white shadow-sm">
              <Image src="/logo.png" alt="Logo Virginie Assistance Numérique" fill className="object-contain p-1" priority />
            </div>
            <div className="leading-none">
              <div className="font-[var(--font-script)] text-[31px] leading-[0.85] text-[#b75f7a]">Virginie</div>
              <div className="mt-[8px] font-[var(--font-inter)] text-[13px] font-light uppercase tracking-[0.24em] text-[#77666b]">
                Assistance Numérique
              </div>
            </div>
          </div>
          <button aria-label="Menu" className="text-[#422e35]">
            <Menu size={34} strokeWidth={2.3} />
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-[430px] overflow-hidden bg-[#fbf6f7]">
        <div className="relative px-[30px] pb-[44px] pt-[38px]">
          <div className="pointer-events-none absolute left-1/2 top-[82px] h-[490px] w-[490px] -translate-x-1/2 rounded-full border border-[#ead2da]/70" />
          <div className="pointer-events-none absolute left-1/2 top-[112px] h-[430px] w-[430px] -translate-x-1/2 rounded-full border border-[#ead2da]/50" />
          <div className="pointer-events-none absolute left-1/2 top-[142px] h-[370px] w-[370px] -translate-x-1/2 rounded-full border border-[#ead2da]/40" />

          <div className="relative mx-auto mt-[48px] h-[315px] w-[315px] overflow-hidden rounded-full border-[7px] border-white bg-[#eadde1] shadow-[0_16px_42px_rgba(72,45,55,0.12)]">
            <Image
              src="/virginie.webp"
              alt="Virginie assistante numérique"
              fill
              sizes="315px"
              className="object-cover"
              priority
            />
            <FlowerSprig className="pointer-events-none absolute -right-[46px] bottom-[12px] h-[170px] w-[92px] text-[#C75B6B] opacity-90" />
          </div>

          <div className="relative z-10 mx-auto -mt-[24px] w-[318px] rounded-[20px] border border-[#eadde1] bg-white px-4 py-[17px] text-center shadow-[0_12px_22px_rgba(75,49,58,0.13)]">
            <div className="font-[var(--font-script)] text-[28px] leading-none text-[#b75f7a]">Virginie</div>
            <div className="mt-[8px] font-[var(--font-inter)] text-[12px] font-light uppercase tracking-[0.22em] text-[#9a8c91]">
              Assistance Numérique · La Rochelle
            </div>
          </div>

          <div className="mt-[42px] inline-flex items-center gap-[14px] rounded-full border border-[#e3cbd3] bg-[#fbf7f8] px-[22px] py-[14px] font-[var(--font-inter)] text-[18px] font-light text-[#b4637e] shadow-sm">
            <MapPin size={23} strokeWidth={1.9} />
            <span>La Rochelle & alentours (20 km)</span>
          </div>

          <div className="mt-[64px] font-[var(--font-script)] text-[34px] leading-none text-[#c17a94]">La sérénité numérique</div>
          <h1 className="mt-[26px] font-[var(--font-cormorant)] text-[52px] font-medium leading-[1.08] tracking-[-0.02em] text-[#37272e]">
            Un accompagnement <span className="block italic text-[#b65675]">doux et patient</span>
            <span className="block">pour votre quotidien</span>
            <span className="block">numérique</span>
          </h1>

          <p className="mt-[34px] font-[var(--font-inter)] text-[22px] font-light leading-[1.75] text-[#8f8186]">
            Seniors, particuliers, personnes en difficulté numérique — je viens à votre domicile ou je vous accompagne à distance, à votre rythme, sans jargon et sans jugement.
          </p>

          <div className="mt-[46px] space-y-[18px]">
            <button className="flex h-[58px] w-full items-center justify-center gap-[18px] rounded-full bg-[#c47b96] font-[var(--font-inter)] text-[19px] font-light text-white shadow-[0_12px_22px_rgba(176,95,122,0.22)]">
              <Heart size={25} strokeWidth={1.8} />
              Demander un accompagnement
            </button>
            <button className="flex h-[58px] w-full items-center justify-center gap-[18px] rounded-full border border-[#e2ccd3] bg-white/70 font-[var(--font-inter)] text-[19px] font-light text-[#ad5f79] shadow-sm">
              <Heart size={28} strokeWidth={1.8} />
              Découvrir mes services
            </button>
          </div>

          <div className="mt-[50px] grid grid-cols-2 gap-x-5 gap-y-[24px] font-[var(--font-inter)] text-[16px] font-light text-[#ad9ca2]">
            <div>♡ Patience & écoute</div>
            <div>·</div>
            <div>♡ À domicile ou à distance</div>
            <div>♡ Devis gratuit</div>
          </div>
        </div>

        <section id="services" className="px-[30px] py-[70px]">
          <div className="text-center font-[var(--font-script)] text-[34px] text-[#c17a94]">Ce que je propose</div>
          <h2 className="mx-auto mt-[18px] max-w-[340px] text-center font-[var(--font-cormorant)] text-[45px] font-medium leading-[1.08] text-[#37272e]">
            Un accompagnement complet, <span className="italic text-[#b65675]">adapté à vos besoins</span>
          </h2>
          <p className="mt-[28px] text-center font-[var(--font-inter)] text-[21px] font-light leading-[1.65] text-[#8f8186]">
            Du smartphone aux démarches en ligne, je suis là pour simplifier votre quotidien numérique, avec douceur et patience.
          </p>

          <div className="mt-[58px] space-y-[28px]">
            {services.map((service) => (
              <article key={service.title} className="rounded-[28px] border border-[#e5d7dc] bg-white px-[36px] py-[38px] shadow-sm">
                <div className="mb-[34px] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#f7eef2] text-[25px]">
                  {service.icon}
                </div>
                <h3 className="font-[var(--font-cormorant)] text-[27px] font-semibold leading-snug text-[#37272e]">{service.title}</h3>
                <p className="mt-[18px] font-[var(--font-inter)] text-[18px] font-light leading-[1.7] text-[#8f8186]">{service.text}</p>
                <p className="mt-[24px] font-[var(--font-inter)] text-[16px] font-light text-[#c17a94]">♡ je vous accompagne personnellement</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-[30px] py-[70px]">
          <div className="font-[var(--font-script)] text-[34px] text-[#c17a94]">À propos de moi</div>
          <h2 className="mt-[20px] font-[var(--font-cormorant)] text-[45px] font-medium leading-[1.12] text-[#37272e]">
            Bonjour, je suis <span className="italic text-[#b65675]">Virginie</span>
          </h2>
          <p className="mt-[28px] font-[var(--font-inter)] text-[21px] font-light leading-[1.75] text-[#8f8186]">
            Passionnée par le numérique et convaincue qu'il doit être accessible à tous, j'accompagne les seniors et les personnes en difficulté numérique à La Rochelle et ses alentours.
          </p>
        </section>

        <section className="px-[30px] py-[70px]">
          <div className="text-center font-[var(--font-script)] text-[34px] text-[#c17a94]">Vous avez des questions ?</div>
          <h2 className="mx-auto mt-[18px] max-w-[340px] text-center font-[var(--font-cormorant)] text-[45px] font-medium leading-[1.1] text-[#37272e]">
            Les réponses à vos <span className="italic text-[#b65675]">interrogations</span>
          </h2>
          <div className="mt-[54px] space-y-[16px]">
            {faqs.map((faq) => (
              <details key={faq} className="group rounded-[24px] border border-[#e5d7dc] bg-white px-[28px] py-[24px] shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-[var(--font-cormorant)] text-[23px] font-medium leading-snug text-[#37272e]">
                  {faq}
                  <span className="font-[var(--font-inter)] text-[#8f8186] transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-4 font-[var(--font-inter)] text-[16px] font-light leading-[1.7] text-[#8f8186]">
                  Je vous réponds simplement, avec bienveillance, selon votre situation.
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-[30px] py-[70px]">
          <div className="font-[var(--font-script)] text-[34px] text-[#c17a94]">Contactez-moi</div>
          <h2 className="mt-[20px] font-[var(--font-cormorant)] text-[45px] font-medium leading-[1.12] text-[#37272e]">
            Parlons de votre <span className="italic text-[#b65675]">besoin</span>
          </h2>
          <p className="mt-[26px] font-[var(--font-inter)] text-[21px] font-light leading-[1.7] text-[#8f8186]">
            Décrivez-moi votre situation et je vous répondrai personnellement, avec bienveillance.
          </p>

          <form className="mt-[44px] rounded-[28px] border border-[#e5d7dc] bg-white px-[28px] py-[34px] shadow-sm">
            <label className="block font-[var(--font-inter)] text-[18px] font-light text-[#65575c]">Votre prénom et nom *</label>
            <input className="mt-3 h-[54px] w-full rounded-[16px] border border-[#e5d7dc] px-5 font-[var(--font-inter)] text-[18px] outline-none" placeholder="Marie Dupont" />
            <label className="mt-7 block font-[var(--font-inter)] text-[18px] font-light text-[#65575c]">Votre email *</label>
            <input className="mt-3 h-[54px] w-full rounded-[16px] border border-[#e5d7dc] px-5 font-[var(--font-inter)] text-[18px] outline-none" placeholder="marie@email.com" />
            <label className="mt-7 block font-[var(--font-inter)] text-[18px] font-light text-[#65575c]">Téléphone</label>
            <input className="mt-3 h-[54px] w-full rounded-[16px] border border-[#e5d7dc] px-5 font-[var(--font-inter)] text-[18px] outline-none" placeholder="06 12 34 56 78" />
            <button type="button" className="mt-9 flex h-[64px] w-full items-center justify-center gap-4 rounded-full bg-[#c47b96] font-[var(--font-inter)] text-[19px] font-light text-white shadow-[0_12px_22px_rgba(176,95,122,0.22)]">
              <Heart size={25} strokeWidth={1.8} /> Envoyer ma demande
            </button>
          </form>
        </section>

        <footer className="bg-[#3b272e] px-[30px] py-[58px] text-[#d6c3ca]">
          <div className="flex items-center gap-[18px]">
            <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full border border-[#8c5266] bg-white shadow-sm">
              <Image src="/logo.png" alt="Logo Virginie Assistance Numérique" fill className="object-contain p-1" />
            </div>
            <div>
              <div className="font-[var(--font-script)] text-[31px] leading-none text-white">Virginie</div>
              <div className="mt-[8px] font-[var(--font-inter)] text-[12px] uppercase tracking-[0.24em] text-[#bea9b1]">Assistance Numérique</div>
            </div>
          </div>
          <p className="mt-[30px] font-[var(--font-script)] text-[27px] text-[#c17a94]">La sérénité numérique</p>
          <p className="mt-[22px] font-[var(--font-inter)] text-[18px] font-light leading-[1.8] text-[#bdaab1]">
            J'accompagne seniors et particuliers à La Rochelle et alentours, avec douceur et patience, à domicile ou à distance.
          </p>
          <div className="mt-[44px] border-t border-white/30 pt-[28px] font-[var(--font-inter)] text-[14px] font-light text-[#a89199]">
            © 2026 Virginie Assistance Numérique · Sérénité Numérique La Rochelle
          </div>
        </footer>
      </section>
    </main>
  );
}
