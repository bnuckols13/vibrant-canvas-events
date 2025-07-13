import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, Palette, Eye, Heart, Zap, Mail, Phone, MapPin } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const MinimalLayout = () => {
  const navigationItems = [
    "recent work",
    "2023 - 2024", 
    "2021 - 2022",
    "energy readings",
    "about",
    "exhibitions", 
    "events",
    "contact"
  ];

  const currentArtwork = {
    title: "Cosmic Flow",
    medium: "64 x 72 inches, mixed media on canvas",
    year: "2024",
    image: artwork1
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar Navigation */}
      <div className="w-80 bg-background border-r border-border/20 p-8 flex flex-col">
        <div className="mb-12">
          <h1 className="text-2xl font-light tracking-wide text-foreground mb-2">
            ETHEREAL
          </h1>
          <h2 className="text-2xl font-light tracking-wide text-foreground mb-2">
            EXPRESSIONS
          </h2>
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            abstract art & energy readings
          </p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-3">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-light tracking-wide">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="flex gap-4 mb-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">f</span>
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">@</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Artwork Display */}
        <div className="flex-1 flex items-center justify-center p-12">
          <div className="max-w-4xl">
            <img 
              src={currentArtwork.image} 
              alt={currentArtwork.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="w-72 bg-background border-l border-border/20 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-light text-foreground mb-2 tracking-wide">
              {currentArtwork.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
              {currentArtwork.medium}, {currentArtwork.year}
            </p>
            
            <div className="space-y-4 text-sm text-muted-foreground font-light leading-relaxed">
              <p>
                This piece channels transformative energies through flowing purple and gold harmonies, 
                created during deep meditative connection with cosmic forces.
              </p>
              <p>
                Energy signature: Growth, transformation, and spiritual awakening.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
              PREV / NEXT
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide">
              SHOW THUMBNAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalLayout;