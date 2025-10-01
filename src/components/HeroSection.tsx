import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Palette } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">        
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground leading-tight tracking-wide">
          TALIA ROSE
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light tracking-[0.1em]">
          Abstract Artist & Energy Reader
        </p>
        
        <p className="text-base text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Where nature's energy meets visual expression. Discover transformative artwork 
          that channels spiritual insights and natural energies into elegant 
          abstract compositions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
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