import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Zap } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";

const ArtGallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Sweetheart",
      description: "Flowing lines expressing love's eternal dance through geometric harmony",
      image: artwork1,
      energy: "Love & Connection"
    },
    {
      id: 2,
      title: "Sacred Flame",
      description: "Minimalist meditation on inner light and spiritual illumination",
      image: artwork2,
      energy: "Inner Fire & Clarity"
    },
    {
      id: 3,
      title: "Mechanical Poetry",
      description: "Geometric precision meets organic flow in perfect balance",
      image: artwork3,
      energy: "Structure & Flow"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
            COLLECTION 327
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Each piece channels specific natural energies, created through 
            meditative connection with botanical forces and spiritual guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden bg-card border-border/30 hover:shadow-ethereal transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                  <Button variant="outline" size="sm" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-accent font-light tracking-wide">{artwork.energy}</span>
                </div>
                <h3 className="text-xl font-light mb-2 text-foreground tracking-wide">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-light leading-relaxed">
                  {artwork.description}
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                    <Heart className="w-4 h-4 mr-2" />
                    Inquire
                  </Button>
                  <span className="text-sm text-muted-foreground font-light">Available</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;