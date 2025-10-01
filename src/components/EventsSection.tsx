import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Gallery Show",
      date: "February 16, 2025",
      location: "Sergio's Style",
      collaborators: "Hosted by Cullen J Sanchez",
      description: "Six designs in group slide show"
    },
    {
      id: 2,
      title: "LavenderLUX",
      date: "June 21, 2025", 
      location: "Bottlerocket",
      collaborators: "Hosted by Sour Flower",
      description: "Three framed prints in public show"
    },
    {
      id: 3,
      title: "Collection 327",
      date: "October 1-16, 2025",
      location: "KLVN Coffee Lab",
      collaborators: "Hosted by Talia Rose",
      description: "Solo coffee shop installation"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "bg-primary/20 text-primary border-primary/30";
      case "Group Reading": return "bg-accent/20 text-accent border-accent/30";
      case "Exhibition": return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
            EVENTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Archive of exhibitions and collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="group bg-card border-border hover:shadow-ethereal transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-light group-hover:text-accent transition-colors tracking-wide">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm font-light">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{event.collaborators}</span>
                  </div>
                  {event.description && (
                    <p className="text-muted-foreground italic pt-2">
                      {event.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;