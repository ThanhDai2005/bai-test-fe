import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const App = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <TechnologySection />
        <ShowcaseSection />
        <TestimonialsSection />
        <ConsultationSection />
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default App;
