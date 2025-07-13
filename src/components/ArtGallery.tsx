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
      title: "Cosmic Flow",
      description: "Purple and gold energies dancing in eternal harmony",
      image: artwork1,
      energy: "Transformation & Growth"
    },
    {
      id: 2,
      title: "Ethereal Tides",
      description: "Blue cosmic waves carrying messages from beyond",
      image: artwork2,
      energy: "Healing & Peace"
    },
    {
      id: 3,
      title: "Energy Vortex",
      description: "Spiraling energies opening portals to higher consciousness",
      image: artwork3,
      energy: "Awakening & Insight"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Energy Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each piece channels specific energetic frequencies, created through 
            intuitive connection with cosmic forces and spiritual guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-500 hover:shadow-cosmic hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-energy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ethereal" size="sm" className="backdrop-blur-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent font-medium">{artwork.energy}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {artwork.description}
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="energy" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <span className="text-sm text-muted-foreground">Available</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cosmic" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;