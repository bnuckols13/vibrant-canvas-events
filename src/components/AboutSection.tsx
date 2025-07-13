import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Eye, Heart, Star } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Eye,
      title: "Energy Readings",
      description: "Intuitive sessions that reveal your energetic patterns and spiritual guidance"
    },
    {
      icon: Heart,
      title: "Healing Art",
      description: "Custom artwork created specifically to channel healing energies for your space"
    },
    {
      icon: Star,
      title: "Cosmic Alignment",
      description: "Sessions combining energy work with personalized artistic expressions"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-ethereal">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-secondary animate-cosmic-glow" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                About the Journey
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                For over a decade, I've been bridging the realms of visual art and spiritual energy work, 
                creating a unique practice that serves both the soul and the senses.
              </p>
              <p>
                My abstract paintings are born from deep meditative states and energetic connections 
                with universal forces. Each piece carries specific vibrational frequencies designed 
                to inspire, heal, and transform.
              </p>
              <p>
                Through energy readings, I help individuals understand their spiritual patterns, 
                life purpose, and energetic blocks, often creating custom artwork as part of the healing process.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="cosmic" size="lg" className="mr-4">
                Learn More
              </Button>
              <Button variant="ethereal" size="lg">
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Offerings & Services
            </h3>
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/30 border-border/30 hover:bg-card/50 transition-all duration-300 hover:shadow-ethereal"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20 border border-accent/30">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-foreground">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground">
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