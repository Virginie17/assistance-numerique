const PORTRAIT_URL =
  "https://media.base44.com/images/public/69edd9adb35526e88df2b7b9/7ffdf0495_generated_image.png";

const values = [
  { icon: "♡", label: "Patience & écoute" },
  { icon: "✦", label: "Aucun jargon technique" },
  { icon: "♡", label: "Objectif autonomie" },
  { icon: "✦", label: "Proximité & confiance" },
];

export default function AboutSection() {
  return (
    <section id="apropos" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />

              {/* Portrait */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-primary/10 sm:h-72 sm:w-72">
                <img
                  src={PORTRAIT_URL}
                  alt="Virginie, votre assistante numérique à La Rochelle"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Decorative heart */}
              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-xl text-primary shadow-md">
                ♡
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 font-script text-2xl text-primary">
              À propos de moi
            </p>

            <h2 className="mb-5 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Bonjour, je suis{" "}
              <span className="italic text-accent">
                Virginie
              </span>
            </h2>

            <p className="mb-4 font-light leading-relaxed text-muted-foreground">
              Passionnée par le numérique et convaincue qu'il doit être
              accessible à tous, j'accompagne les seniors et les personnes en
              difficulté numérique à La Rochelle et ses alentours.
            </p>

            <p className="mb-8 font-light leading-relaxed text-muted-foreground">
              Mon approche : la{" "}
              <strong className="font-normal text-foreground">
                patience
              </strong>
              , la{" "}
              <strong className="font-normal text-foreground">
                douceur
              </strong>{" "}
              et la{" "}
              <strong className="font-normal text-foreground">
                bienveillance
              </strong>
              . Je prends le temps qu'il faut pour que vous compreniez et que
              vous soyez autonome. Pas de jargon, pas de jugement — juste un
              vrai accompagnement humain.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm"
                >
                  <span className="text-lg text-primary">
                    {value.icon}
                  </span>

                  <span className="text-sm font-light text-foreground">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-light text-white transition-all hover:bg-accent"
            >
              Me contacter ♡
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}