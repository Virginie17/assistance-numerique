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

export default function Home() {
  return <LandingPage />;
}
