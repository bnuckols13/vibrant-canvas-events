import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Star,
      title: "Tier 1: Order from Existing Catalog",
      description: "Choose from our curated collection of energy-infused artworks ready for your space"
    },
    {
      icon: Heart,
      title: "Tier 2: Custom Design Session",
      description: "Collaborative design process to create artwork specifically for your needs and space"
    },
    {
      icon: Eye,
      title: "Tier 3: Expanded Custom Design Session",
      description: "Comprehensive design experience with multiple consultations and energy readings"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
              ARTIST STATEMENT
            </h2>
            
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed font-light">
              <p>
                For over a decade, I've been bridging the realms of visual art and spiritual energy work, 
                creating a practice that serves both the soul and the senses.
              </p>
              <p>
                My abstract paintings emerge from deep meditative states and energetic connections 
                with natural forces. Each piece carries specific vibrational frequencies designed 
                to inspire, heal, and transform.
              </p>
              <p>
                Through energy readings, I help individuals understand their spiritual patterns, 
                life purpose, and energetic blocks, often creating custom artwork as part of the healing process.
              </p>
            </div>

          </div>

          {/* Services Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-center mb-8 text-foreground tracking-wide">
              Offerings
            </h3>
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-background border-border hover:shadow-ethereal transition-all duration-300"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-light mb-2 text-foreground tracking-wide">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;