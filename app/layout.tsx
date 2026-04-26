import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Parisienne } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.ton-domaine.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assistance numérique à La Rochelle | Virginie Assistance Numérique",
    template: "%s | Virginie Assistance Numérique",
  },
  description:
    "Assistance numérique à domicile et à distance à La Rochelle : aide smartphone, ordinateur, emails, démarches en ligne, CAF, impôts, Ameli et sécurité internet pour seniors et particuliers.",
  keywords: [
    "assistance numérique La Rochelle",
    "aide informatique senior La Rochelle",
    "aide smartphone senior La Rochelle",
    "démarches administratives en ligne La Rochelle",
    "assistance informatique domicile La Rochelle",
    "aide ordinateur La Rochelle",
    "formation numérique senior La Rochelle",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Assistance numérique à La Rochelle | Virginie",
    description:
      "Accompagnement doux et patient pour seniors et particuliers à La Rochelle : smartphone, ordinateur, démarches en ligne et sécurité internet.",
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${inter.variable} ${parisienne.variable}`}>
        {children}
      </body>
    </html>
  );
}