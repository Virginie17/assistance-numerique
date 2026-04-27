const benefits = [
  {
    emoji: "♡",
    title: "Patient·e & bienveillant·e",
    description:
      "Je m'adapte à votre rythme, sans jamais vous presser. Chaque question mérite une réponse claire.",
  },
  {
    emoji: "🏠",
    title: "Je viens chez vous",
    description:
      "Je me déplace à domicile à La Rochelle et dans un rayon de 20 km. Votre confort est ma priorité.",
  },
  {
    emoji: "✦",
    title: "Objectif autonomie",
    description:
      "Je ne fais pas à votre place — je vous montre, pour que vous soyez libre et confiant·e.",
  },
  {
    emoji: "♡",
    title: "Interlocutrice de confiance",
    description:
      "Je suis votre interlocutrice unique — je vous connais, je vous suis et je m'adapte à votre situation.",
  },
  {
    emoji: "💻",
    title: "À distance aussi",
    description:
      "J'interviens par partage d'écran, de façon simple et sécurisée, sans que vous ayez à vous déplacer.",
  },
  {
    emoji: "✦",
    title: "Tarifs accessibles",
    description:
      "Je vous propose un devis gratuit, un tarif clair et honnête, sans surprises. J'adapte mes forfaits à votre budget.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="avantages" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Pourquoi me choisir
          </p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Un accompagnement humain,
            <br />
            <span className="italic text-accent">local et bienveillant</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-lg">
                {benefit.emoji}
              </div>

              <div>
                <h3 className="mb-1 font-serif text-lg font-medium text-foreground">
                  {benefit.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}