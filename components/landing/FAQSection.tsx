"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Faut-il être « doué » en informatique pour faire appel à vous ?",
    answer:
      "Surtout pas ! C'est même tout le contraire. J'accompagne des personnes qui n'ont jamais touché un smartphone ou un ordinateur, comme des personnes qui ont juste besoin d'un coup de main ponctuel. Je m'adapte toujours à votre niveau, sans jugement, sans pression.",
  },
  {
    question: "Venez-vous vraiment à domicile ?",
    answer:
      "Oui, tout à fait ! Je me déplace à votre domicile à La Rochelle et dans un rayon de 20 km autour de la ville. Pour les personnes plus éloignées, je propose une assistance à distance par partage d'écran, simple, sécurisée et très efficace.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Je vous propose toujours un devis gratuit et sans engagement. Mes tarifs sont transparents et honnêtes, adaptés à votre situation. N'hésitez pas à me contacter pour qu'on en parle ensemble.",
  },
  {
    question: "Que puis-je vous demander exactement ?",
    answer:
      "Tout ce qui touche au numérique ! Smartphone, tablette, ordinateur, emails, photos, démarches en ligne (impôts, CAF, Ameli, retraite, carte grise…), réseaux sociaux, sécurité… Si vous avez un doute ou une difficulté, je suis là pour vous aider.",
  },
  {
    question: "Comment se passe une session à distance ?",
    answer:
      "Je vous guide par téléphone pour installer un petit logiciel sécurisé. Je vois alors votre écran et je vous montre, ou j'agis en votre présence, tout en vous expliquant. Vous restez maître·sse de votre ordinateur à tout moment.",
  },
  {
    question: "Puis-je vous appeler en urgence ?",
    answer:
      "Je fais de mon mieux pour vous répondre rapidement. Pour les situations bloquantes (virus, arnaque suspecte…), je priorise votre demande. N'hésitez pas à m'écrire un email à virginie.assistancenumerique@gmail.com.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Vous avez des questions ?
          </p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Les réponses à vos{" "}
            <span className="italic text-accent">interrogations</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-border bg-card px-6 transition-all open:border-primary/20 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-serif text-base font-medium text-foreground hover:no-underline">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <p className="pb-5 font-sans text-base font-light leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}