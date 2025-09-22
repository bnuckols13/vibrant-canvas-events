import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Cosmic Canvas Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Sacred Space Studio",
      type: "Workshop",
      description: "Learn to channel cosmic energies into abstract art while receiving personal energy insights.",
      spots: "12 spots available",
      price: "$85"
    },
    {
      id: 2,
      title: "Full Moon Energy Reading Circle",
      date: "March 25, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Online via Zoom",
      type: "Group Reading",
      description: "Monthly group session for collective energy reading and spiritual guidance.",
      spots: "8 spots available",
      price: "$35"
    },
    {
      id: 3,
      title: "Healing Art Exhibition Opening",
      date: "April 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Mystic Gallery Downtown",
      type: "Exhibition",
      description: "Private viewing of new healing art collection with complimentary mini-readings.",
      spots: "Open to all",
      price: "Free"
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
            UPCOMING EVENTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Join us for transformative experiences combining art, energy work, and mindful community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className="group bg-card border-border hover:shadow-ethereal transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`${getEventTypeColor(event.type)} border font-light`}>
                    {event.type}
                  </Badge>
                  <span className="text-lg font-light text-foreground">{event.price}</span>
                </div>
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
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{event.spots}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed font-light">
                  {event.description}
                </p>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 font-light">
            Want to stay updated on future events and workshops?
          </p>
          <Button variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;