const testimonials = [
  {
    name: "Marie-Thérèse D.",
    role: "Retraitée, 73 ans · La Rochelle",
    text:
      "Virginie est venue chez moi et m'a aidée à faire ma déclaration d'impôts en ligne. Elle a été tellement patiente ! Maintenant je me sens plus à l'aise avec mon ordinateur.",
  },
  {
    name: "Robert L.",
    role: "Retraité · Lagord",
    text:
      "Je ne savais pas utiliser mon nouveau smartphone. Virginie m'a tout montré sans se moquer, en recommençant autant de fois que nécessaire. Je recommande vivement.",
  },
  {
    name: "Jacqueline M.",
    role: "Particulière · Aytré",
    text:
      "Elle a sécurisé mon ordinateur et m'a expliqué comment reconnaître les arnaques. Tout s'est passé à distance, très simplement. Une vraie perle de bienveillance.",
  },
  {
    name: "Christine B.",
    role: "Indépendante · Châtelaillon",
    text:
      "J'avais peur du numérique. Grâce à Virginie, je fais mes démarches CAF toute seule maintenant. Son calme et sa douceur m'ont redonné confiance.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 font-script text-2xl text-primary">
            Ils me font confiance
          </p>

          <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Ce que disent{" "}
            <span className="italic text-accent">
              mes clients
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              {/* Decorative quote */}
              <div className="absolute right-6 top-5 font-serif text-3xl text-primary/15">
                "
              </div>

              {/* Rating hearts */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className="text-sm text-primary"
                  >
                    ♡
                  </span>
                ))}
              </div>

              <p className="mb-6 font-light italic leading-relaxed text-foreground">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-serif text-sm font-medium text-foreground">
                  {testimonial.name}
                </p>

                <p className="mt-0.5 text-xs font-light text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}