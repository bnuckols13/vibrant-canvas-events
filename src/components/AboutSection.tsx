import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      icon: Star,
      title: "ENTRY RANGE OF THE SLIDING SCALE",
      description: "For those with low or no budget for art. Choose prints from the existing collection. This range covers production costs."
    },
    {
      icon: Heart,
      title: "MIDDLE RANGE OF THE SLIDING SCALE",
      description: "For those with some room in their budget for art. Commission a custom design based on your stories and experiences. Together we will tailor the experience to fit your wants and needs. Great option for tattoo design. This range covers productions costs as well as some of my time and efforts."
    },
    {
      icon: Eye,
      title: "HIGH RANGE OF THE SLIDING SCALE",
      description: "For those with plenty of room in their budget for art. This would be a deeper dive into the commission process, a greater time commitment or a larger body of work. Also tailored to fit your wants and needs. This range covers productions costs, my time and efforts, and supports the project at large."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
              ARTIST STATEMENT
            </h2>
            
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed font-light">
              <p>
                When I was 22 I was reminded that I love to draw. For the next few years I filled pages with color, leaving behind no blank spaces. In 2020 my art needed a new way to tell its stories. The process of working with color became overwhelming and I wanted to see what would happen if I leaned into the empty spaces.
              </p>
              <p>
                So I let go of the colors and began drawing eyes, flowers and spirals in black and white. These smooth curvy lines dancing through empty spaces have opened up a world where I can sit with my internal processings and curiosities. A place to play with themes of harmony, balance, expansion, limitation, and acceptance.
              </p>
              <p>
                If you are interested in acquiring some of my art we have a few options. All of the options involve a sliding scale resource exchange. If you have room in your budget for art, fantastic! If you don't that's okay, we can do a trade of a different kind. So long as we reach an agreement, I am open to trades of goods or services in exchange for my art.
              </p>
              <p>
                The two main options are to order from the existing collection or to have a custom design created especially for you. We would find a time to chat about something that is on your mind or heart, maybe a spiritual question you are pondering, or an event in your life you would like to reflect on. After our conversation I take the essence of what you shared with me and use that as the anchor for the art. Whether you go the route of a commissioned piece or prints from the collections there are details that can be tailored to fit your vision and your budget. To get started or ask questions please send a message down below to connect with me.
              </p>
            </div>

          </div>

          {/* Services Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-center mb-8 text-foreground tracking-wide">
              SLIDING SCALE RESOURCE EXCHANGE
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