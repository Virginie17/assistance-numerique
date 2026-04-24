import type { Metadata } from "next";
import { Poppins, Parisienne } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

export const metadata: Metadata = {
  title: {
    default: "Virginie Assistance Numérique - Le numérique en toute sérénité",
    template: "%s | Virginie Assistance Numérique"
  },
  description: "J'aide les seniors et les personnes en difficulté avec le numérique dans leurs démarches administratives (CAF, Impôts, Ameli) et leur autonomie digitale. La Rochelle et accompagnement à distance.",
  keywords: ['assistance numérique', 'seniors', 'démarches administratives', 'CAF', 'impôts', 'Ameli', 'La Rochelle', 'autonomie numérique', 'aide numérique', 'formation seniors'],
  authors: [{ name: 'Virginie Assistance Numérique' }],
  creator: 'Virginie Assistance Numérique',
  publisher: 'Virginie Assistance Numérique',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://virginie-assistance-numerique.fr'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${parisienne.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Virginie Assistance Numérique",
              "description": "J'aide les seniors et les personnes en difficulté avec le numérique dans leurs démarches administratives et leur autonomie digitale.",
              "url": "https://virginie-assistance-numerique.fr",
              "telephone": "",
              "email": "virginie.assistancenumerique@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "La Rochelle",
                "addressRegion": "Nouvelle-Aquitaine",
                "addressCountry": "FR",
                "postalCode": "17000"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "postalCode": "17000",
                  "addressCountry": "FR",
                  "addressLocality": "La Rochelle"
                },
                "geoRadius": "20000"
              },
              "priceRange": "35€-120€",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services d'assistance numérique",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Séance découverte",
                      "description": "Première séance pour faire connaissance et évaluer vos besoins",
                      "price": "35€"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pack autonomie",
                      "description": "Forfait complet pour votre autonomie numérique",
                      "price": "120€"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://instagram.com/virginie_assistance_numerique"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
