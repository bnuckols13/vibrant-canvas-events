import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Grid, Camera, Flower, Sparkles } from "lucide-react";

// Import all layout components
import HeroSection from "@/components/HeroSection";
import ArtGallery from "@/components/ArtGallery";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import MinimalLayout from "@/components/MinimalLayout";
import GalleryLayout from "@/components/GalleryLayout";
import PhotographyLayout from "@/components/PhotographyLayout";
import BotanicalLayout from "@/components/BotanicalLayout";

const LayoutSelector = () => {
  const [activeLayout, setActiveLayout] = useState("cosmic");

  const layouts = [
    {
      id: "cosmic",
      name: "Cosmic Energy",
      description: "Mystical design with cosmic gradients and energy animations",
      icon: Sparkles,
      component: (
        <div className="min-h-screen bg-background">
          <HeroSection />
          <ArtGallery />
          <AboutSection />
          <EventsSection />
          <ContactSection />
        </div>
      )
    },
    {
      id: "minimal",
      name: "Minimal Gallery",
      description: "Clean sidebar navigation with focused artwork display",
      icon: Palette,
      component: <MinimalLayout />
    },
    {
      id: "gallery",
      name: "Gallery Grid",
      description: "Professional gallery layout with framed artwork presentation",
      icon: Grid,
      component: <GalleryLayout />
    },
    {
      id: "photography",
      name: "Photography Style",
      description: "Full-screen hero with minimal navigation overlay",
      icon: Camera,
      component: <PhotographyLayout />
    },
    {
      id: "botanical",
      name: "Botanical Prints",
      description: "E-commerce inspired layout with series presentation",
      icon: Flower,
      component: <BotanicalLayout />
    }
  ];

  const currentLayout = layouts.find(layout => layout.id === activeLayout);

  return (
    <div className="min-h-screen">
      {/* Layout Selector Overlay */}
      <div className="fixed top-4 right-4 z-50">
        <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Layout Style</span>
            </div>
            
            <div className="space-y-2 w-64">
              {layouts.map((layout) => (
                <Button
                  key={layout.id}
                  variant={activeLayout === layout.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveLayout(layout.id)}
                  className="w-full justify-start gap-2 h-auto p-3"
                >
                  <layout.icon className="w-4 h-4 shrink-0" />
                  <div className="text-left flex-1">
                    <div className="font-medium text-sm">{layout.name}</div>
                    <div className="text-xs opacity-70">{layout.description}</div>
                  </div>
                  {activeLayout === layout.id && (
                    <Badge variant="secondary" className="text-xs">Active</Badge>
                  )}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Layout */}
      <div className="relative">
        {currentLayout?.component}
      </div>
    </div>
  );
};

export default LayoutSelector;