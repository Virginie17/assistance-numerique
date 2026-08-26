import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import GuideAidantSection from "@/components/landing/GuideAidantSection";
import TargetChoiceSection from "@/components/landing/TargetChoiceSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProfessionalSection from "@/components/landing/ProfessionalSection";
import AboutSection from "@/components/landing/AboutSection";
import PricingSection from "@/components/landing/PricingSection";
import AreaSection from "@/components/landing/AreaSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GuideAidantSection />
      <TargetChoiceSection />
      <ServicesSection />
      <ProfessionalSection />
      <AboutSection />
      <PricingSection />
      <AreaSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
