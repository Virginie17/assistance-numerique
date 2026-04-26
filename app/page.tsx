import LandingPage from '@/components/LandingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virginie Assistance Numérique - Le numérique en toute sérénité',
  description: 'J\'aide les seniors et les personnes en difficulté avec le numérique dans leurs démarches administratives (CAF, Impôts, Ameli) et leur autonomie digitale. La Rochelle et accompagnement à distance.',
  keywords: ['assistance numérique', 'seniors', 'démarches administratives', 'CAF', 'impôts', 'Ameli', 'La Rochelle', 'autonomie numérique'],
  openGraph: {
    title: 'Virginie Assistance Numérique - Le numérique en toute sérénité',
    description: 'J\'aide les seniors et les personnes en difficulté avec le numérique dans leurs démarches administratives (CAF, Impôts, Ameli) et leur autonomie digitale. La Rochelle et accompagnement à distance.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://virginie-assistance-numerique.fr',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Virginie Assistance Numérique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virginie Assistance Numérique - Le numérique en toute sérénité',
    description: 'J\'aide les seniors et les personnes en difficulté avec le numérique dans leurs démarches administratives (CAF, Impôts, Ameli) et leur autonomie digitale. La Rochelle et accompagnement à distance.',
    images: ['/images/og-image.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ton-domaine.fr/#localbusiness",
  name: "Virginie Assistance Numérique",
  description:
    "Assistance numérique à domicile et à distance à La Rochelle pour seniors et particuliers : smartphone, ordinateur, emails, démarches administratives en ligne et sécurité internet.",
  url: "https://www.ton-domaine.fr",
  email: "virginie.assistancenumerique@gmail.com",
  image: "https://www.ton-domaine.fr/og-image.jpg",
  priceRange: "€€",
  areaServed: [
    "La Rochelle",
    "Lagord",
    "Aytré",
    "Périgny",
    "Nieul-sur-Mer",
    "Puilboreau",
    "Angoulins",
    "Châtelaillon-Plage",
    "L'Houmeau",
    "Dompierre-sur-Mer",
    "Charente-Maritime",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Rochelle",
    addressRegion: "Nouvelle-Aquitaine",
    postalCode: "17000",
    addressCountry: "FR",
  },
  sameAs: ["https://www.instagram.com/virginie.assistancenumerique"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Assistance smartphone et tablette à La Rochelle",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Aide aux démarches administratives en ligne",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Aide ordinateur et emails à domicile",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Sécurité internet et prévention des arnaques",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
