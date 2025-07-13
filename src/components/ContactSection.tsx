import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@etherealexpressions.com",
      link: "mailto:hello@etherealexpressions.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(555) 123-ENERGY",
      link: "tel:+15551233637"
    },
    {
      icon: MapPin,
      label: "Studio",
      value: "Sacred Space Studio, Mystic Downtown",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "#" },
    { icon: Facebook, label: "Facebook", link: "#" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-ethereal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore your energetic landscape or commission a custom piece? 
            Let's begin this transformative journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="bg-background/50 border-border/50 focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interest
                  </label>
                  <select className="w-full px-3 py-2 rounded-md bg-background/50 border border-border/50 focus:border-accent focus:outline-none text-foreground">
                    <option>Energy Reading</option>
                    <option>Custom Artwork</option>
                    <option>Workshop Registration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about what you're seeking..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-accent"
                  />
                </div>

                <Button variant="cosmic" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card/30 border-border/30 hover:bg-card/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/20 border border-accent/30">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                Follow the Journey
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="ethereal" 
                    size="icon"
                    className="hover:shadow-ethereal"
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>

            <Card className="bg-accent/10 border-accent/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-accent">
                  Studio Visits
                </h4>
                <p className="text-muted-foreground">
                  Private studio visits available by appointment. Experience the energy 
                  of the creative space and view works in person.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;