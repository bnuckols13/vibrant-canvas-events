import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import heroImage from "@/assets/hero-elegant.jpg";

const PhotographyLayout = () => {
  const navigationItems = [
    "FINE ART",
    "ENERGY READINGS", 
    "COMMISSIONS",
    "CONTACT",
    "ABOUT",
    "WORKSHOPS",
    "EXHIBITIONS"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Top Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-light tracking-[0.3em] text-foreground">
              TALIA ROSE
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item, index) => (
              <button 
                key={index}
                className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-foreground lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Hero Image */}
      <div className="relative w-full h-screen overflow-hidden">
        <img 
          src={heroImage}
          alt="Ethereal Abstract Art"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-background/10" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-foreground px-6">
            <p className="text-lg font-light tracking-[0.2em] mb-4 text-muted-foreground">
              presents
            </p>
            <h2 className="text-6xl md:text-8xl font-light tracking-[0.1em] mb-8 leading-tight">
              COLLECTION
              <br />
              <span className="text-5xl md:text-7xl">327</span>
            </h2>
            <p className="text-base font-light tracking-wide max-w-md mx-auto leading-relaxed text-muted-foreground">
              at Ethereal Gallery • October 1-15
            </p>
            <p className="text-base font-light tracking-wide max-w-md mx-auto leading-relaxed text-muted-foreground mt-4">
              Opening Reception<br />
              <span className="italic">Thursday, October 2</span><br />
              5pm - 8pm
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="text-muted-foreground animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-foreground mb-6 tracking-wide">
              ENERGY & EXPRESSION
            </h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Each piece channels specific vibrational frequencies, created through deep meditative connection 
              with universal forces. Beyond visual art, I offer intuitive energy readings that reveal 
              spiritual patterns and guidance for transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-light text-foreground mb-4 tracking-wide">
                ARTISTIC PRACTICE
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                My abstract paintings emerge from deep meditative states, each one a visual translation 
                of cosmic energies and spiritual insights. Working with mixed media, I layer colors 
                and textures that carry healing vibrations.
              </p>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                VIEW PORTFOLIO
              </Button>
            </div>
            
            <div>
              <h4 className="text-xl font-light text-foreground mb-4 tracking-wide">
                ENERGY READINGS
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Through intuitive connection, I help individuals understand their energetic patterns, 
                life purpose, and spiritual blocks. Sessions often include creating custom artwork 
                as part of the healing process.
              </p>
              <Button 
                variant="outline" 
                className="border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                BOOK SESSION
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographyLayout;