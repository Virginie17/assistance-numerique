const PORTRAIT_URL =
  "/virginie.webp";

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
              Formée au développement web et passionnée par le numérique, j’ai
              créé Virginie Assistance Numérique pour mettre mes compétences au
              service des particuliers, des seniors et des professionnels de La
              Rochelle et ses alentours.
            </p>

            <p className="mb-8 font-light leading-relaxed text-muted-foreground">
              Je vous aide à résoudre un blocage, prendre en main un outil ou
              structurer un projet numérique, avec des explications concrètes
              et adaptées à votre situation.
            </p>

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
