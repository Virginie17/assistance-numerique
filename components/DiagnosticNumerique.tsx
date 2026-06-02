"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  HeartHandshake,
  Laptop,
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  UserRound,
  UsersRound,
} from "lucide-react";

type ProfileKey = "senior" | "aidant" | "particulier" | "artisan" | "entrepreneur";

type Question = {
  id: string;
  label: string;
  options: {
    label: string;
    score: number;
  }[];
};

type Profile = {
  key: ProfileKey;
  label: string;
  description: string;
  icon: React.ElementType;
  questions: Question[];
};

const profiles: Profile[] = [
  {
    key: "senior",
    label: "Senior",
    description: "Téléphone, ordinateur, démarches, mails et autonomie numérique.",
    icon: UsersRound,
    questions: [
      {
        id: "appareils",
        label: "Êtes-vous à l'aise avec votre téléphone, tablette ou ordinateur ?",
        options: [
          { label: "Oui, plutôt à l'aise", score: 0 },
          { label: "Un peu, mais j'ai souvent besoin d'aide", score: 2 },
          { label: "Non, je me sens vite perdu(e)", score: 4 },
        ],
      },
      {
        id: "demarches",
        label: "Les démarches en ligne vous semblent-elles simples ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Parfois seulement", score: 2 },
          { label: "Non, c'est stressant", score: 4 },
        ],
      },
      {
        id: "motsdepasse",
        label: "Avez-vous souvent des soucis de mots de passe ?",
        options: [
          { label: "Rarement", score: 0 },
          { label: "De temps en temps", score: 2 },
          { label: "Très souvent", score: 4 },
        ],
      },
      {
        id: "proches",
        label: "Aimeriez-vous mieux communiquer avec vos proches grâce au numérique ?",
        options: [
          { label: "Je sais déjà faire", score: 0 },
          { label: "Oui, j'aimerais progresser", score: 2 },
          { label: "Oui, j'ai vraiment besoin d'aide", score: 4 },
        ],
      },
      {
        id: "autonomie",
        label: "Souhaitez-vous gagner en autonomie numérique ?",
        options: [
          { label: "Un peu", score: 1 },
          { label: "Oui, ce serait utile", score: 2 },
          { label: "Oui, c'est prioritaire", score: 4 },
        ],
      },
    ],
  },
  {
    key: "aidant",
    label: "Aidant",
    description: "Soulager votre quotidien et accompagner un proche avec sérénité.",
    icon: HeartHandshake,
    questions: [
      {
        id: "sollicitations",
        label: "Votre proche vous sollicite-t-il souvent pour le numérique ?",
        options: [
          { label: "Rarement", score: 0 },
          { label: "Régulièrement", score: 2 },
          { label: "Très souvent", score: 4 },
        ],
      },
      {
        id: "stress",
        label: "Le numérique crée-t-il du stress dans votre organisation familiale ?",
        options: [
          { label: "Peu", score: 0 },
          { label: "Parfois", score: 2 },
          { label: "Oui, beaucoup", score: 4 },
        ],
      },
      {
        id: "autonomie-proche",
        label: "Votre proche pourrait-il gagner en autonomie avec un accompagnement patient ?",
        options: [
          { label: "Il est déjà autonome", score: 0 },
          { label: "Oui, sur quelques points", score: 2 },
          { label: "Oui, clairement", score: 4 },
        ],
      },
      {
        id: "demarches-aidant",
        label: "Les démarches administratives en ligne sont-elles une charge pour vous ?",
        options: [
          { label: "Non", score: 0 },
          { label: "Un peu", score: 2 },
          { label: "Oui, c'est lourd", score: 4 },
        ],
      },
      {
        id: "souffler",
        label: "Aimeriez-vous déléguer une partie de cet accompagnement ?",
        options: [
          { label: "Pas forcément", score: 0 },
          { label: "Pourquoi pas", score: 2 },
          { label: "Oui, j'en ai besoin", score: 4 },
        ],
      },
    ],
  },
  {
    key: "particulier",
    label: "Particulier",
    description: "Organisation, démarches, mails, fichiers et outils du quotidien.",
    icon: UserRound,
    questions: [
      {
        id: "organisation",
        label: "Votre organisation numérique est-elle claire ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas toujours", score: 2 },
          { label: "Non, tout est mélangé", score: 4 },
        ],
      },
      {
        id: "documents",
        label: "Retrouvez-vous facilement vos documents importants ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Cela dépend", score: 2 },
          { label: "Non, je perds du temps", score: 4 },
        ],
      },
      {
        id: "mail",
        label: "Votre boîte mail est-elle facile à gérer ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Moyennement", score: 2 },
          { label: "Non, c'est trop chargé", score: 4 },
        ],
      },
      {
        id: "securite",
        label: "Vous sentez-vous protégé(e) face aux arnaques en ligne ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas totalement", score: 2 },
          { label: "Non, j'ai peur de me tromper", score: 4 },
        ],
      },
      {
        id: "aide",
        label: "Souhaitez-vous une aide simple et ponctuelle ?",
        options: [
          { label: "Pas pour le moment", score: 0 },
          { label: "Oui, ponctuellement", score: 2 },
          { label: "Oui, rapidement", score: 4 },
        ],
      },
    ],
  },
  {
    key: "artisan",
    label: "Artisan",
    description: "Site web, visibilité Google, demandes de devis et présence locale.",
    icon: Store,
    questions: [
      {
        id: "site",
        label: "Avez-vous un site internet professionnel ?",
        options: [
          { label: "Oui, récent et à jour", score: 0 },
          { label: "Oui, mais il est à améliorer", score: 2 },
          { label: "Non, pas encore", score: 4 },
        ],
      },
      {
        id: "google",
        label: "Votre entreprise est-elle facilement trouvable sur Google ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Je ne sais pas", score: 2 },
          { label: "Non, pas vraiment", score: 4 },
        ],
      },
      {
        id: "devis",
        label: "Recevez-vous des demandes grâce à Internet ?",
        options: [
          { label: "Oui, régulièrement", score: 0 },
          { label: "Quelques-unes", score: 2 },
          { label: "Très peu ou jamais", score: 4 },
        ],
      },
      {
        id: "realisations",
        label: "Vos réalisations sont-elles bien mises en valeur en ligne ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas assez", score: 2 },
          { label: "Non", score: 4 },
        ],
      },
      {
        id: "temps",
        label: "Avez-vous le temps de gérer votre présence numérique ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas toujours", score: 2 },
          { label: "Non, je manque de temps", score: 4 },
        ],
      },
    ],
  },
  {
    key: "entrepreneur",
    label: "Entrepreneur",
    description: "Visibilité, organisation, communication et outils numériques.",
    icon: Laptop,
    questions: [
      {
        id: "presence",
        label: "Votre présence en ligne attire-t-elle suffisamment de clients ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas assez", score: 2 },
          { label: "Non", score: 4 },
        ],
      },
      {
        id: "site-entrepreneur",
        label: "Votre site ou page de présentation donne-t-il confiance ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "À améliorer", score: 2 },
          { label: "Je n'en ai pas", score: 4 },
        ],
      },
      {
        id: "google-entrepreneur",
        label: "Avez-vous une fiche Google Business Profile optimisée ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Je ne sais pas", score: 2 },
          { label: "Non", score: 4 },
        ],
      },
      {
        id: "outils",
        label: "Vos outils numériques vous font-ils gagner du temps ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas toujours", score: 2 },
          { label: "Non, je perds du temps", score: 4 },
        ],
      },
      {
        id: "communication",
        label: "Savez-vous quoi publier pour attirer vos clients ?",
        options: [
          { label: "Oui", score: 0 },
          { label: "Pas toujours", score: 2 },
          { label: "Non, je bloque souvent", score: 4 },
        ],
      },
    ],
  },
];

const contactLink =
  "mailto:virginie.assistancenumerique@gmail.com?subject=Diagnostic%20num%C3%A9rique%20gratuit&body=Bonjour%20Virginie,%0A%0AJ'ai%20fait%20le%20diagnostic%20num%C3%A9rique%20sur%20votre%20site%20et%20je%20souhaite%20%C3%AAtre%20recontact%C3%A9(e).%0A%0ANom%20:%0AT%C3%A9l%C3%A9phone%20:%0AProfil%20:%0A%0AMerci.";

export default function DiagnosticNumerique() {
  const [profileKey, setProfileKey] = useState<ProfileKey | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const selectedProfile = profiles.find((profile) => profile.key === profileKey);

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  }, [answers]);

  const maxScore = selectedProfile ? selectedProfile.questions.length * 4 : 20;
  const completion = selectedProfile
    ? Math.round((Object.keys(answers).length / selectedProfile.questions.length) * 100)
    : 0;

  const result = useMemo(() => {
    const ratio = maxScore === 0 ? 0 : totalScore / maxScore;

    if (ratio < 0.34) {
      return {
        label: "Situation plutôt sereine",
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        message:
          "Vous avez déjà de bonnes bases. Quelques ajustements peuvent encore vous faire gagner du temps et de la sérénité.",
      };
    }

    if (ratio < 0.67) {
      return {
        label: "À améliorer",
        color: "text-amber-700",
        bg: "bg-amber-50",
        border: "border-amber-200",
        message:
          "Certains points méritent d'être clarifiés. Un accompagnement ciblé peut vous aider à avancer plus facilement.",
      };
    }

    return {
      label: "Prioritaire",
      color: "text-rose-700",
      bg: "bg-rose-50",
      border: "border-rose-200",
      message:
        "Votre situation numérique vous fait probablement perdre du temps ou crée du stress. Un bilan personnalisé peut vous aider rapidement.",
    };
  }, [maxScore, totalScore]);

  function handleAnswer(questionId: string, score: number) {
    setAnswers((current) => ({ ...current, [questionId]: score }));
  }

  function resetDiagnostic() {
    setProfileKey(null);
    setAnswers({});
    setShowResult(false);
  }

  if (!selectedProfile) {
    return (
      <section className="rounded-[2rem] border border-rose-100 bg-white/80 p-5 shadow-xl shadow-rose-100/60 backdrop-blur md:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-[#c9797f]">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-[#2f2f38] md:text-4xl">
            Quel est votre profil ?
          </h2>
          <p className="mt-3 text-[#6f6268]">
            Choisissez votre situation pour obtenir un diagnostic adapté à vos besoins.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <button
                key={profile.key}
                type="button"
                onClick={() => setProfileKey(profile.key)}
                className="group rounded-3xl border border-rose-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#c9797f] hover:shadow-lg"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e8e9] text-[#c9797f] transition group-hover:bg-[#c9797f] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="block text-lg font-bold text-[#2f2f38]">{profile.label}</span>
                <span className="mt-2 block text-sm leading-relaxed text-[#6f6268]">
                  {profile.description}
                </span>
              </button>
            );
          })}
        </div>
      </section>
    );
  }

  const allAnswered = Object.keys(answers).length === selectedProfile.questions.length;

  return (
    <section className="rounded-[2rem] border border-rose-100 bg-white/85 p-5 text-left shadow-xl shadow-rose-100/60 backdrop-blur md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <button
            type="button"
            onClick={resetDiagnostic}
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#c9797f] hover:text-[#a95e66]"
          >
            <ArrowLeft className="h-4 w-4" />
            Changer de profil
          </button>
          <p className="text-sm uppercase tracking-[0.25em] text-[#c9797f]">Diagnostic gratuit</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#2f2f38] md:text-4xl">
            Profil : {selectedProfile.label}
          </h2>
          <p className="mt-3 max-w-2xl text-[#6f6268]">{selectedProfile.description}</p>
        </div>

        <div className="rounded-2xl bg-[#f8eeee] px-4 py-3 text-center text-sm font-bold text-[#c9797f]">
          {completion}% complété
        </div>
      </div>

      <div className="mt-7 h-3 overflow-hidden rounded-full bg-rose-100">
        <div
          className="h-full rounded-full bg-[#c9797f] transition-all duration-300"
          style={{ width: `${completion}%` }}
        />
      </div>

      {!showResult ? (
        <div className="mt-8 space-y-6">
          {selectedProfile.questions.map((question, index) => (
            <div key={question.id} className="rounded-3xl border border-rose-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9797f]">
                Question {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#2f2f38]">{question.label}</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.score;
                  return (
                    <button
                      key={`${question.id}-${option.label}`}
                      type="button"
                      onClick={() => handleAnswer(question.id, option.score)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                        isSelected
                          ? "border-[#c9797f] bg-[#c9797f] text-white shadow-md"
                          : "border-rose-100 bg-[#fffafa] text-[#4f4449] hover:border-[#c9797f]"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setShowResult(true)}
            className="w-full rounded-full bg-[#c9797f] px-6 py-4 text-lg font-bold text-white shadow-lg shadow-rose-200 transition hover:bg-[#b86970] disabled:cursor-not-allowed disabled:bg-rose-200 disabled:shadow-none"
          >
            Voir mon résultat gratuit
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`rounded-3xl border p-6 ${result.bg} ${result.border}`}>
            <div className="flex items-center gap-3">
              <CheckCircle2 className={`h-8 w-8 ${result.color}`} />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#8a747b]">Votre résultat</p>
                <h3 className={`text-2xl font-bold ${result.color}`}>{result.label}</h3>
              </div>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-[#4f4449]">{result.message}</p>
            <div className="mt-6 rounded-2xl bg-white/75 p-5">
              <p className="font-bold text-[#2f2f38]">Mes recommandations :</p>
              <ul className="mt-3 space-y-2 text-[#5f5358]">
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#c9797f]" />
                  Identifier vos blocages prioritaires.
                </li>
                <li className="flex gap-2">
                  <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-[#c9797f]" />
                  Mettre en place des solutions simples, adaptées à votre rythme.
                </li>
                <li className="flex gap-2">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#c9797f]" />
                  Prévoir un échange gratuit pour définir un plan d'action concret.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl bg-[#2f2f38] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-rose-200">Prochaine étape</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold">Recevoir votre bilan personnalisé</h3>
            <p className="mt-4 text-rose-50/90">
              Je vous propose un premier échange offert pour comprendre votre situation et vous orienter vers les meilleures solutions.
            </p>
            <div className="mt-6 space-y-3 text-sm text-rose-50/90">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-rose-200" />
                La Rochelle & alentours, à domicile ou à distance
              </p>
              <p className="flex items-center gap-2">
                <HeartHandshake className="h-5 w-5 text-rose-200" />
                Accompagnement humain, patient et bienveillant
              </p>
            </div>
            <a
              href={contactLink}
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-center font-bold text-[#c9797f] transition hover:bg-rose-50"
            >
              Être recontacté gratuitement
            </a>
            <button
              type="button"
              onClick={resetDiagnostic}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white/90 transition hover:bg-white/10"
            >
              Refaire le diagnostic
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
