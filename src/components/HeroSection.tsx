import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">        
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground leading-tight tracking-wide">
          COLLECTION 327
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light tracking-[0.1em]">
          by Talia Rose
        </p>
        
        <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          A collection of abstract geometric line drawings
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById('full-collection')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Palette className="w-4 h-4 mr-2" />
            Explore Gallery
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;