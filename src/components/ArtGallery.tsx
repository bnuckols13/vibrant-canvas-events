import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/collection-wings.jpg";

const scrollToFullCollection = () => {
  const element = document.getElementById('full-collection');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

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
    },
    {
      id: 4,
      title: "Wings",
      description: "Delicate curves radiating outward in harmonious symmetry",
      image: artwork4,
      energy: "Freedom & Expansion"
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

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {artworks.map((artwork) => (
                <CarouselItem key={artwork.id} className="lg:basis-1/3">
                  <Card className="group overflow-hidden bg-card border-border/30 hover:shadow-ethereal transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-80 object-contain bg-white"
                      />
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
            <CarouselPrevious className="h-12 w-12 -left-6" />
            <CarouselNext className="h-12 w-12 -right-6" />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={scrollToFullCollection}
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;