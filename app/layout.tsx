import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ton-domaine.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Assistance numérique à La Rochelle | Virginie Assistance Numérique",
    template: "%s | Virginie Assistance Numérique",
  },
  description:
    "Assistance numérique à domicile et à distance à La Rochelle pour seniors et particuliers : smartphone, ordinateur, emails, démarches administratives en ligne, CAF, impôts, Ameli et sécurité internet.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}