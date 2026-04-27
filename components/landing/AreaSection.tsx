import { MapPin } from "lucide-react";

const AREA_IMAGE =
  "https://media.base44.com/images/public/69edd9adb35526e88df2b7b9/9b0ebde5b_generated_a23774d2.png";

const zones = [
  "La Rochelle centre",
  "Aytré",
  "Lagord",
  "Périgny",
  "Angoulins",
  "Nieul-sur-Mer",
  "L'Houmeau",
  "Dompierre-sur-Mer",
  "Puilboreau",
  "Saint-Rogatien",
  "Châtelaillon-Plage",
  "Esnandes",
];

export default function AreaSection() {
  return (
    <section id="zone" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
            <img
              src={AREA_IMAGE}
              alt="Vue de La Rochelle - zone d'intervention Virginie Assistance Numérique"
              className="aspect-video w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5" />
                <span className="font-serif text-lg font-medium">
                  La Rochelle & agglomération
                </span>
              </div>

              <p className="mt-1 text-sm font-light text-white/80">
                Rayon de 20 km autour de La Rochelle
              </p>
            </div>
          </div>

          <div>
            <p className="mb-2 font-script text-2xl text-primary">
              Où j’interviens
            </p>

            <h2 className="mb-4 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              À La Rochelle et ses{" "}
              <span className="italic text-accent">alentours</span>
            </h2>

            <p className="mb-8 text-lg font-light leading-relaxed text-muted-foreground">
              Je me déplace à domicile dans un rayon de 20 km autour de La
              Rochelle. Pour les communes plus éloignées, je propose une
              assistance à distance efficace et chaleureuse.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {zones.map((zone) => (
                <div
                  key={zone}
                  className="flex items-center gap-2 text-sm font-light"
                >
                  <span className="shrink-0 text-primary">♡</span>
                  <span className="text-foreground">{zone}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/10 p-5">
              <p className="text-sm font-light text-foreground">
                <span className="font-medium text-accent">
                  Vous êtes plus loin ?
                </span>{" "}
                Pas de souci — l’assistance à distance me permet d’intervenir
                partout en France.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}