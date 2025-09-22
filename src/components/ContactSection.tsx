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
      value: "hello@taliarose.com",
      link: "mailto:hello@taliarose.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "(555) 123-4567",
      link: "tel:+15551234567"
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
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
            CONNECT WITH ME
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Ready to explore your energetic landscape or commission a custom piece? 
            Let's begin this transformative journey together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6 text-foreground tracking-wide">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-muted border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Interest
                  </label>
                  <select className="w-full px-3 py-2 rounded-md bg-muted border border-border focus:border-accent focus:outline-none text-foreground">
                    <option>Energy Reading</option>
                    <option>Custom Artwork</option>
                    <option>Workshop Registration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about what you're seeking..."
                    rows={5}
                    className="bg-muted border-border focus:border-accent"
                  />
                </div>

                <Button variant="outline" size="lg" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6 text-foreground tracking-wide">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-background border-border hover:shadow-ethereal transition-all duration-300"
                  >
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/20">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-light text-foreground">{info.label}</p>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors font-light"
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
              <h4 className="text-xl font-light mb-4 text-foreground tracking-wide">
                Follow the Journey
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="icon"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            <Card className="bg-accent/10 border-accent/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-light mb-3 text-accent tracking-wide">
                  Studio Visits
                </h4>
                <p className="text-muted-foreground font-light leading-relaxed">
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