import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Eye } from "lucide-react";
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
    <section id="collection" className="py-20 px-6">
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

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <img 
              src={artwork1} 
              alt="Featured Artwork"
              className="w-full h-96 object-cover rounded-lg shadow-ethereal"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {artworks.map((artwork) => (
                <CarouselItem key={artwork.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden bg-card border-border/30 hover:shadow-ethereal transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                        <Button variant="outline" size="sm" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-accent font-light tracking-wide">{artwork.energy}</span>
                      </div>
                      <h3 className="text-lg font-light mb-2 text-foreground tracking-wide">
                        {artwork.title}
                      </h3>
                      <p className="text-muted-foreground mb-3 font-light leading-relaxed text-sm">
                        {artwork.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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