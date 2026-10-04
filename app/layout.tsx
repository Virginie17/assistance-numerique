import type { Metadata } from "next";
import "./globals.css";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://virginieassistance.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assistance numérique & administrative à La Rochelle | Virginie Assistance",
    template: "%s | Virginie Assistance",
  },
  description:
    "Assistance numérique et administrative à domicile à La Rochelle : courriers, dossiers, classement et suivi pour particuliers, seniors et professionnels : aide smartphone, ordinateur, démarches en ligne, sécurité internet, facturation électronique, création de site web et accompagnement digital des artisans et auto-entrepreneurs.",
  keywords: [
    "assistance numérique La Rochelle",
    "aide informatique senior La Rochelle",
    "aide smartphone senior La Rochelle",
    "démarches administratives en ligne La Rochelle",
    "assistance informatique domicile La Rochelle",
    "aide ordinateur La Rochelle",
    "formation numérique senior La Rochelle",
    "facturation électronique artisan La Rochelle",
    "aide numérique auto-entrepreneur La Rochelle",
    "création site internet artisan La Rochelle",
    "accompagnement digital petite entreprise",
    "assistance numérique professionnel La Rochelle",
  ],
  alternates: { canonical: siteUrl },
  verification: {
    google: "_hYWuwlf_IZDRWwzgrecmb3tWGHJtLEt-j3Gj65IPVQ",
  },
  openGraph: {
    title: "Assistance numérique & administrative à La Rochelle | Virginie Assistance",
    description:
      "Accompagnement humain pour particuliers, seniors, artisans et auto-entrepreneurs : aide numérique, dossiers et démarches administratives, facturation électronique, site web et outils digitaux.",
    url: siteUrl,
    siteName: "Virginie Assistance",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virginie Assistance à La Rochelle",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body><LocalBusinessSchema />{children}</body>
    </html>
  );
}
