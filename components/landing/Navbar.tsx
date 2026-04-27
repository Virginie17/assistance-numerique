"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Zone", href: "#zone" },
  { label: "Avis", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
];

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

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3 no-underline">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/15">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 21C12 21 3 14 3 8.5C3 5.46 5.46 3 8.5 3C10.24 3 11.79 3.85 12 5C12.21 3.85 13.76 3 15.5 3C18.54 3 21 5.46 21 8.5C21 14 12 21 12 21Z"
            fill="hsl(340 35% 62%)"
            fillOpacity="0.5"
            stroke="hsl(340 35% 55%)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="leading-tight">
        <span
          className={`block font-script text-xl leading-tight ${
            dark ? "text-white" : "text-accent"
          }`}
        >
          Virginie
        </span>
        <span
          className={`-mt-0.5 block font-sans text-[10px] uppercase tracking-widest ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Assistance Numérique
        </span>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-card/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.instagram.com/virginie.assistancenumerique"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram @virginie.assistancenumerique"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-colors hover:bg-primary/15"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-light text-white transition-colors hover:bg-accent"
            >
              Contactez-moi ♡
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="p-2 text-foreground lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="overflow-hidden border-b border-border bg-card lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-light text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 space-y-2 border-t border-border pt-3">
              <a
                href="https://www.instagram.com/virginie.assistancenumerique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-light text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
              >
                <InstagramIcon className="h-4 w-4" />
                @virginie.assistancenumerique
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-light text-white transition-colors hover:bg-accent"
              >
                Contactez-moi ♡
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}