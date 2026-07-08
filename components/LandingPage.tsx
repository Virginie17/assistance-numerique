import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Clock,
  Globe2,
  Heart,
  Mail,
  MapPin,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import ContactForm from "@/components/landing/ContactForm";

const contactEmail = "virginie.assistancenumerique@gmail.com";

type Audience = {
  id: string;
  title: string;
  subtitle: string;
  points: string[];
  cta: string;
  icon: LucideIcon;
};

const audiences: Audience[] = [
  {
    id: "particuliers",
    title: "Particuliers & seniors",
    subtitle: "Retrouver de l’autonomie sans stress.",
    points: ["Smartphone, ordinateur, tablette", "Démarches en ligne", "WhatsApp, photos, appels vidéo", "Sécurité et arnaques"],
    cta: "Je veux être aidé(e)",
    icon: UsersRound,
  },
  {
    id: "artisans",
    title: "Artisans & commerçants",
    subtitle: "Être visible et recevoir plus de demandes.",
    points: ["Site vitrine", "Fiche Google", "E-mails professionnels", "Avis clients et réseaux sociaux"],
    cta: "Je veux plus de visibilité",
    icon: BriefcaseBusiness,
  },
  {
    id: "entrepreneurs",
    title: "Créateurs de micro-entreprise",
    subtitle: "Partir avec les bons outils dès le début.",
    points: ["Présence en ligne", "Communication digitale", "Canva et réseaux sociaux", "Organisation numérique"],
    cta: "Je lance mon activité",
    icon: Target,
  },
];

const offers = [
  {
    name: "Sérénité Numérique",
    forWho: "Particuliers, seniors et aidants",
    promise: "Comprendre, utiliser et sécuriser vos outils du quotidien.",
    items: ["Prise en main smartphone ou ordinateur", "Démarches administratives", "E-mails, photos et WhatsApp", "Mots de passe et anti-arnaques"],
  },
  {
    name: "Visibilité Artisan",
    forWho: "Artisans, commerçants et indépendants",
    promise: "Être trouvé plus facilement et transformer votre savoir-faire en demandes de contact.",
    items: ["Site internet vitrine", "Fiche Google optimisée", "Réseaux sociaux", "Organisation des demandes clients"],
  },
  {
    name: "Starter Micro-Entreprise",
    forWho: "Nouveaux entrepreneurs",
    promise: "Savoir par où commencer pour communiquer et attirer vos premiers clients.",
    items: ["Identité numérique claire", "Pages Facebook / Instagram", "Plan de communication simple", "Outils pratiques pour gagner du temps"],
  },
];

const proofCards = [
  ["Avant", "Je ne sais pas envoyer une photo ou une pièce jointe."],
  ["Après", "Je communique plus facilement avec mes proches."],
  ["Avant", "Je viens de créer mon entreprise, mais personne ne me trouve."],
  ["Après", "J’ai une présence en ligne claire et rassurante."],
];

const values: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Patience" },
  { icon: ShieldCheck, label: "Sécurité" },
  { icon: Sparkles, label: "Simplicité" },
];

const blogIdeas = [
  "Les arnaques qui touchent les seniors",
  "Créer sa fiche Google quand on est artisan",
  "WhatsApp expliqué simplement",
  "Lancer sa micro-entreprise sans se perdre dans le numérique",
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-script text-3xl text-primary">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-muted-foreground">{text}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm text-muted-foreground shadow-sm">{children}</span>;
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative isolate px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(199,91,107,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(248,223,225,0.9),transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex flex-wrap gap-3">
              <Pill>La Rochelle et alentours</Pill>
              <Pill>À domicile ou à distance</Pill>
              <Pill>Particuliers • Seniors • Pros</Pill>
            </div>

            <h1 className="mt-8 font-serif text-5xl font-semibold leading-[0.95] text-foreground md:text-7xl">
              Vous êtes perdu avec le numérique ?
              <span className="mt-3 block font-script text-5xl text-primary md:text-7xl">Je vous accompagne simplement.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-muted-foreground">
              J’aide les particuliers, seniors, artisans et créateurs de micro-entreprise à utiliser le numérique avec plus de sérénité, de clarté et de résultats concrets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-xl shadow-primary/25 transition hover:bg-accent">
                Prendre contact <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#parcours" className="inline-flex h-14 items-center justify-center rounded-full border border-primary/25 bg-white px-8 text-sm font-bold uppercase tracking-[0.22em] text-accent transition hover:bg-secondary">
                Choisir mon besoin
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {["Explications simples", "Accompagnement humain", "Solutions adaptées"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                  <Check className="h-4 w-4 text-primary" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/70 p-5 shadow-2xl shadow-primary/15 backdrop-blur">
              <img src="/virginie.webp" alt="Virginie, assistance numérique à La Rochelle" className="h-[500px] w-full rounded-[2rem] object-cover object-top" />
              <div className="absolute bottom-9 left-9 right-9 rounded-[1.75rem] bg-white/92 p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <img src="/logo.png" alt="Logo Virginie Assistance Numérique" className="h-16 w-16 rounded-full object-contain" />
                  <div>
                    <p className="font-script text-3xl text-primary">Virginie Assistance Numérique</p>
                    <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Le numérique en toute sérénité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="parcours" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Un site plus clair" title="Trois parcours pour comprendre immédiatement ce que je peux faire pour vous" text="Chaque public a un besoin différent. L’accueil oriente rapidement les visiteurs vers la bonne solution." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article key={audience.id} id={audience.id} className="rounded-[2rem] border border-primary/15 bg-white p-7 shadow-xl shadow-primary/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary"><Icon className="h-7 w-7" /></div>
                  <h3 className="mt-6 font-serif text-3xl font-semibold">{audience.title}</h3>
                  <p className="mt-2 text-muted-foreground">{audience.subtitle}</p>
                  <ul className="mt-6 space-y-3">
                    {audience.points.map((point) => <li key={point} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{point}</li>)}
                  </ul>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-2 font-bold text-accent">{audience.cta}<ArrowRight className="h-4 w-4" /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="offres" className="bg-white/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Des offres lisibles" title="Je ne vends pas seulement du dépannage : je vends du temps, de la confiance et de la visibilité" text="Ces offres rendent l’activité plus compréhensible et plus commerciale, sans perdre le côté humain et rassurant." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <article key={offer.name} className="relative rounded-[2rem] border border-primary/15 bg-background p-7 shadow-xl shadow-primary/5">
                {index === 2 && <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Fort potentiel</span>}
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">{offer.forWho}</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold">{offer.name}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{offer.promise}</p>
                <ul className="mt-6 space-y-3">
                  {offer.items.map((item) => <li key={item} className="flex gap-3 text-sm"><BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultats" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-script text-3xl text-primary">La vraie différence</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold leading-tight md:text-5xl">Parler davantage des résultats que des outils</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Le visiteur doit se reconnaître immédiatement : moins de stress, plus d’autonomie, plus de visibilité, plus de demandes de contact.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill>Plus de confiance</Pill><Pill>Moins de blocages</Pill><Pill>Plus de clients</Pill><Pill>Gain de temps</Pill>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofCards.map(([label, text]) => (
              <div key={`${label}-${text}`} className="rounded-[1.75rem] border border-primary/15 bg-white p-6 shadow-lg shadow-primary/5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">{label}</span>
                <p className="mt-4 text-lg font-bold leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="confiance" className="bg-secondary/70 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-primary/10">
            <p className="font-script text-4xl text-primary">Pourquoi j’ai créé cette activité</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight">Rendre le numérique plus humain, plus simple et moins intimidant</h2>
            <p className="mt-5 leading-8 text-muted-foreground">Mon rôle n’est pas seulement d’expliquer des boutons ou des applications. Mon rôle est d’aider les personnes à reprendre confiance, à rester connectées à leurs proches et à avancer dans leurs projets.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {values.map(({ icon: Icon, label }) => <div key={label} className="rounded-2xl bg-background p-4 text-center"><Icon className="mx-auto h-6 w-6 text-primary" /><p className="mt-2 text-sm font-bold">{label}</p></div>)}
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-primary/5"><div className="flex gap-4"><MousePointerClick className="h-7 w-7 text-primary" /><div><h3 className="text-xl font-bold">Un cadeau gratuit pour capter des contacts</h3><p className="mt-2 text-muted-foreground">Mettre en avant le guide gratuit contre les arnaques ou les erreurs numériques permet de créer une première relation avant la vente.</p></div></div></div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-primary/5"><div className="flex gap-4"><Star className="h-7 w-7 text-primary" /><div><h3 className="text-xl font-bold">Des témoignages à ajouter dès que possible</h3><p className="mt-2 text-muted-foreground">Les avis, mini-histoires clients et avant/après deviendront les meilleurs arguments commerciaux.</p></div></div></div>
            <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-primary/5"><div className="flex gap-4"><Globe2 className="h-7 w-7 text-primary" /><div><h3 className="text-xl font-bold">Un blog local pour être trouvée sur Google</h3><p className="mt-2 text-muted-foreground">Les articles utiles positionnent le site comme une référence numérique locale à La Rochelle.</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="ressources" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Visibilité Google" title="Des sujets de contenu qui peuvent attirer du trafic utile" text="Ces idées de ressources renforcent l’expertise et peuvent générer des contacts dans la durée." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {blogIdeas.map((idea) => <div key={idea} className="rounded-[1.5rem] border border-primary/15 bg-white p-5 text-sm font-bold shadow-sm">{idea}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-script text-4xl text-primary">Passer à l’action</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">Une question, un blocage ou un projet numérique ?</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Expliquez-moi votre situation. Je vous réponds avec une première orientation claire et bienveillante.</p>
            <div className="mt-8 space-y-4">
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><Mail className="h-5 w-5 text-primary" />{contactEmail}</a>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><MapPin className="h-5 w-5 text-primary" />La Rochelle et alentours, à domicile ou à distance</div>
              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><Clock className="h-5 w-5 text-primary" />Réponse rapide selon vos disponibilités</div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-[#102A4C] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo Virginie Assistance Numérique" className="h-14 w-14 rounded-full bg-white object-contain p-1" />
            <div><p className="font-script text-3xl">Virginie Assistance Numérique</p><p className="text-sm text-white/70">Le numérique en toute sérénité</p></div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70"><a href="/mentions-legales">Mentions légales</a><a href="/conditions-generales-de-vente">CGV</a><a href="#contact">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
