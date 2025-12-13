import HeroSection from "@/components/homepage/HeroSection";
import FeaturesShowcase from "@/components/homepage/FeaturesShowcase";
import GeneratorCards from "@/components/homepage/GeneratorCards";
import AboutSection from "@/components/homepage/AboutSection";
import ContactSection from "@/components/homepage/ContactSection";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <FeaturesShowcase />
      <GeneratorCards />
      <AboutSection />
      <ContactSection />
    </div>
  );
}