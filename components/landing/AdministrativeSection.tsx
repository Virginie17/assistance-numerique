import Link from "next/link";
export default function AdministrativeSection() {
  return (
    <section id="administratif" className="bg-secondary/50 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-script text-2xl text-primary">
          Vos démarches, plus simplement
        </p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
          Un courrier ? Un dossier ? Une démarche qui bloque ?
        </h2>
        <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
          Je vous aide à comprendre les demandes, réunir les pièces et organiser
          les prochaines étapes. CAF, Ameli, retraite, France Titres, courriers
          et classement : nous avançons ensemble, à votre rythme.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Vous accompagnez un parent ? Nous pouvons organiser une intervention
          avec son accord, en respectant sa confidentialité.
        </p>
        <Link
          href="/assistance-administrative-la-rochelle"
          className="mt-7 inline-flex rounded-full bg-accent px-7 py-4 font-bold text-white hover:bg-foreground"
        >
          Découvrir l’assistance administrative
        </Link>
      </div>
    </section>
  );
}
