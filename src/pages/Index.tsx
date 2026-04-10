import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TrainingSection from "@/components/TrainingSection";
import CtaBanner from "@/components/CtaBanner";
import ProgramsSection from "@/components/ProgramsSection";
import InstructorsSection from "@/components/InstructorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TrainingSection />
    <CtaBanner />
    <ProgramsSection />
    <InstructorsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
