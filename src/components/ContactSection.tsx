import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Interested in your own piece of collection 327? Send a message to get started.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="bg-background border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-light mb-6 text-foreground tracking-wide">
              CONNECT WITH ME
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
                  Phone (Optional)
                </label>
                <Input 
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  What part of the sliding scale are you interested in?
                </label>
                <select className="w-full px-3 py-2 rounded-md bg-muted border border-border focus:border-accent focus:outline-none text-foreground">
                  <option>Entry Range</option>
                  <option>Middle Range</option>
                  <option>High Range</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  How did you find my work?
                </label>
                <Textarea 
                  placeholder="Tell me how you discovered my work..."
                  rows={3}
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Contact Preference
                </label>
                <select className="w-full px-3 py-2 rounded-md bg-muted border border-border focus:border-accent focus:outline-none text-foreground">
                  <option>Email</option>
                  <option>Text</option>
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
      </div>
    </section>
  );
};

export default ContactSection;