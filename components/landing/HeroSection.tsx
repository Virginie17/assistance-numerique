import { Heart, MapPin } from "lucide-react";

const PORTRAIT_URL =
  "/virginie.webp";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pb-16 pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/60" />
      <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      {/* Decorative hearts */}
      <div className="pointer-events-none absolute right-1/3 top-32 select-none text-6xl text-primary/10">
        ♡
      </div>

      <div className="pointer-events-none absolute bottom-40 left-10 select-none text-4xl text-primary/10">
        ♡
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Location badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-light text-accent">
              <MapPin className="h-3.5 w-3.5" />
              La Rochelle & alentours (20 km)
            </div>

            {/* Script text */}
            <p className="mb-2 font-script text-2xl text-primary">
              La sérénité numérique
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight tracking-wide text-foreground sm:text-5xl lg:text-5xl">
              Un accompagnement
              <br />
              <span className="italic text-accent">
                doux et patient
              </span>
              <br />
              pour votre quotidien numérique
            </h1>

            <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
              Seniors, particuliers, personnes en difficulté numérique — je
              viens à votre domicile ou je vous accompagne à distance, à votre
              rythme, sans jargon et sans jugement.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-light text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent"
              >
                <Heart className="mr-2 h-4 w-4" />
                Demander un accompagnement
              </a>

              <a
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-4 text-base font-light text-accent transition-all hover:bg-primary/10"
              >
                Découvrir mes services
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm font-light text-muted-foreground">
              <span>♡ Patience & écoute</span>
              <span>•</span>
              <span>♡ À domicile ou à distance</span>
              <span>•</span>
              <span>♡ Devis gratuit</span>
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl" />

              {/* Portrait */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-primary/10 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <img
                  src={PORTRAIT_URL}
                  alt="Virginie, assistance numérique à La Rochelle"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 left-1/2 w-[280px] -translate-x-1/2 rounded-3xl border border-border bg-white/95 px-6 py-5 text-center shadow-xl backdrop-blur-sm">
                <p className="font-script text-2xl text-primary">
                  Virginie
                </p>

                <p className="mt-1 text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                  Assistance Numérique · La Rochelle
                </p>
              </div>

              {/* Small decorative heart */}
              <div className="absolute -right-2 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-lg text-primary shadow-md">
                ♡
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}