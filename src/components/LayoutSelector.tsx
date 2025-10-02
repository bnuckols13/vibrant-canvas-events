// Import cosmic energy layout components
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import FullCollectionSection from "@/components/FullCollectionSection";
import ContactSection from "@/components/ContactSection";

const LayoutSelector = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <FullCollectionSection />
      <ContactSection />
    </div>
  );
};

export default LayoutSelector;