import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const GalleryLayout = () => {
  const artworks = [
    {
      id: 1,
      artist: "Ethereal Expressions",
      title: "Cosmic Flow",
      price: "From $1,200",
      image: artwork1
    },
    {
      id: 2,
      artist: "Ethereal Expressions", 
      title: "Ethereal Tides",
      price: "From $950",
      image: artwork2
    },
    {
      id: 3,
      artist: "Ethereal Expressions",
      title: "Energy Vortex", 
      price: "From $1,100",
      image: artwork3
    },
    {
      id: 4,
      artist: "Ethereal Expressions",
      title: "Celestial Harmony",
      price: "From $850",
      image: artwork1 // Using same image for demo
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Ethereal Expressions is a source of transformative abstract art and spiritual guidance by an artist 
              who bridges the realms of visual creativity and energetic healing.
            </p>
          </div>
        </div>
      </header>

      {/* Featured Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4 tracking-wide">
              NEW COLLECTION
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artworks.map((artwork, index) => (
              <div key={artwork.id} className="group cursor-pointer">
                {/* Frame Effect */}
                <div className="relative">
                  <div className="border-8 border-card bg-card p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-background p-2">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* NEW badge for first item */}
                  {index === 2 && (
                    <div className="absolute -top-2 -right-2 bg-foreground text-background px-3 py-1 text-xs font-medium tracking-wide">
                      NEW
                    </div>
                  )}
                </div>

                {/* Artwork Info */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground font-light mb-1">
                    {artwork.artist}
                  </p>
                  <h3 className="text-base font-light text-foreground mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {artwork.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              className="px-8 py-3 text-foreground border-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-wide font-light"
            >
              View Complete Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Arrow */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default GalleryLayout;