import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Palette } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cosmic energy */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-ethereal/80" />
        <div className="absolute inset-0 bg-gradient-energy animate-energy-flow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6 animate-float">
          <Sparkles className="w-16 h-16 mx-auto text-secondary mb-4 animate-cosmic-glow" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent leading-tight">
          Ethereal Expressions
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-light">
          Abstract Artist & Energy Reader
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Where cosmic energies meet visual art. Discover transformative artwork 
          that channels spiritual insights and universal energies into stunning 
          abstract expressions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cosmic" size="lg" className="group">
            <Palette className="w-5 h-5 group-hover:animate-spin transition-transform" />
            Explore Gallery
          </Button>
          <Button variant="ethereal" size="lg" className="group">
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Book a Reading
          </Button>
        </div>
      </div>

      {/* Floating energy orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;