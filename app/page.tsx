import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TargetChoiceSection from "@/components/landing/TargetChoiceSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProfessionalSection from "@/components/landing/ProfessionalSection";
import AboutSection from "@/components/landing/AboutSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AreaSection from "@/components/landing/AreaSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import PricingSection from "@/components/landing/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TargetChoiceSection />
      <ServicesSection />
      <ProfessionalSection />
      <AboutSection />
      <BenefitsSection />
      <PricingSection />
      <AreaSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
