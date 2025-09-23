// Import cosmic energy layout components
import HeroSection from "@/components/HeroSection";
import ArtGallery from "@/components/ArtGallery";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";

const LayoutSelector = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ArtGallery />
      <AboutSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
};

export default LayoutSelector;