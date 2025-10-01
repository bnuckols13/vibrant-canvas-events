import { Card, CardContent } from "@/components/ui/card";
import collectionKnot from "@/assets/collection-knot.jpg";
import collectionRays from "@/assets/collection-rays.jpg";
import collectionShielded from "@/assets/collection-shielded.jpg";
import collectionWings from "@/assets/collection-wings.jpg";
import collectionShifting from "@/assets/collection-shifting.jpg";
import collectionSpiralEyes from "@/assets/collection-spiraleyes.jpg";

const FullCollectionSection = () => {
  const artworks = [
    {
      id: 1,
      title: "Knot",
      image: collectionKnot,
    },
    {
      id: 2,
      title: "Rays",
      image: collectionRays,
    },
    {
      id: 3,
      title: "Shielded",
      image: collectionShielded,
    },
    {
      id: 4,
      title: "Wings",
      image: collectionWings,
    },
    {
      id: 5,
      title: "Shifting",
      image: collectionShifting,
    },
    {
      id: 6,
      title: "Spiral Eyes",
      image: collectionSpiralEyes,
    }
  ];

  return (
    <section id="full-collection" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
            FULL COLLECTION
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Explore the complete Collection 327
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="group overflow-hidden bg-card border-border/30 hover:shadow-ethereal transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-96 object-contain bg-white"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-light text-center text-foreground tracking-wide">
                  {artwork.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullCollectionSection;
