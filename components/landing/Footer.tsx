import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white/70"
      style={{ background: "hsl(340 15% 20%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/20">
                <Image
                  width={20}
                  height={20}
                  src="/logo.png"
                  alt="Logo Virginie Assistance"
                  className="h-5 w-5 object-contain"
                />
              </div>

              <div>
                <span className="block font-script text-lg leading-tight text-white">
                  Virginie
                </span>
                <span className="text-[10px] font-light uppercase tracking-widest text-white/50">
                  Assistance
                </span>
              </div>
            </div>

            <p className="mb-2 font-script text-base text-primary/70">
              La sérénité numérique et administrative
            </p>

            <p className="mb-4 max-w-xs text-sm font-light leading-relaxed text-white/50">
              J’accompagne seniors, particuliers et professionnels à La Rochelle
              et alentours, avec douceur et patience, à domicile ou à distance.
            </p>

            <p className="mb-4 text-xs font-light text-white/40">
              Micro-entreprise · SIRET : 933 304 800 00024
            </p>

            <a
              href="https://www.instagram.com/virginie_assistance_numerique"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light text-white/50 transition-colors hover:text-white/80"
            >
              <InstagramIcon className="h-4 w-4" />
              @virginie_assistance_numerique
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-medium text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/50">
              <li>
                <Link
                  href="/guide-aidant-numerique"
                  className="transition-colors hover:text-white/80"
                >
                  Guide gratuit aidant numérique
                </Link>
              </li>
              <li>
                <Link
                  href="/particuliers-seniors"
                  className="transition-colors hover:text-white/80"
                >
                  Particuliers & seniors
                </Link>
              </li>
              <li>
                <Link
                  href="/assistance-administrative-la-rochelle"
                  className="transition-colors hover:text-white/80"
                >
                  Assistance administrative
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="transition-colors hover:text-white/80"
                >
                  Ordinateur & emails
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="transition-colors hover:text-white/80"
                >
                  Sécurité & arnaques
                </Link>
              </li>
              <li>
                <Link
                  href="/professionnels"
                  className="transition-colors hover:text-white/80"
                >
                  Professionnels
                </Link>
              </li>
              <li>
                <Link
                  href="/facturation-electronique"
                  className="transition-colors hover:text-white/80"
                >
                  Facturation électronique
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-medium text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/50">
              <li>
                <Link
                  href="/guide-aidant-numerique"
                  className="transition-colors hover:text-white/80"
                >
                  Guide gratuit
                </Link>
              </li>
              <li>
                <Link
                  href="/particuliers-seniors"
                  className="transition-colors hover:text-white/80"
                >
                  Particuliers
                </Link>
              </li>
              <li>
                <Link
                  href="/professionnels"
                  className="transition-colors hover:text-white/80"
                >
                  Professionnels
                </Link>
              </li>
              <li>
                <Link
                  href="/#tarifs"
                  className="transition-colors hover:text-white/80"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/#zone"
                  className="transition-colors hover:text-white/80"
                >
                  Zone d’intervention
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-white/80"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-white/80"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors hover:text-white/80"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="transition-colors hover:text-white/80"
                >
                  Protection des données
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-generales-de-vente"
                  className="transition-colors hover:text-white/80"
                >
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-sm font-medium text-white">
              Contact
            </h4>
            <div className="space-y-4 text-sm font-light text-white/50">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>virginie.assistancenumerique@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  La Rochelle & alentours
                  <br />
                  Rayon de 20 km
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs font-light text-white/40">
          © {currentYear} Virginie Assistance — Tous droits réservés ·{" "}
          <Link
            href="/guide-aidant-numerique"
            className="transition-colors hover:text-white/80"
          >
            Guide gratuit
          </Link>{" "}
          ·{" "}
          <Link
            href="/mentions-legales"
            className="transition-colors hover:text-white/80"
          >
            Mentions légales
          </Link>{" "}
          ·{" "}
          <Link
            href="/conditions-generales-de-vente"
            className="transition-colors hover:text-white/80"
          >
            CGV
          </Link>
        </div>
      </div>
    </footer>
  );
}
