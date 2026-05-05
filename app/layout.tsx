import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://virginieassistance.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assistance numérique à La Rochelle | Particuliers, seniors & professionnels",
    template: "%s | Virginie Assistance Numérique",
  },
  description:
    "Assistance numérique à La Rochelle pour particuliers, seniors et professionnels : aide smartphone, ordinateur, démarches en ligne, sécurité internet, facturation électronique, création de site web et accompagnement digital des artisans et auto-entrepreneurs.",
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
  openGraph: {
    title: "Assistance numérique à La Rochelle | Virginie Assistance Numérique",
    description:
      "Accompagnement humain pour particuliers, seniors, artisans et auto-entrepreneurs : aide numérique, démarches en ligne, facturation électronique, site web et outils digitaux.",
    url: siteUrl,
    siteName: "Virginie Assistance Numérique",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Virginie Assistance Numérique à La Rochelle",
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
      <body>{children}</body>
    </html>
  );
}
