import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const submission = {
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string || null,
        price_range: formData.get("priceRange") as string,
        how_found: formData.get("howFound") as string,
        contact_preference: formData.get("contactPreference") as string,
        message: formData.get("message") as string,
      };

      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert(submission);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke(
        "send-contact-notification",
        { body: submission }
      );

      if (emailError) {
        console.error("Email notification failed:", emailError);
        // Continue anyway - the submission is saved
      }

      toast({
        title: "Thanks! I'll be in contact soon 😊",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    name="firstName"
                    required
                    placeholder="Your first name"
                    className="bg-muted border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    name="lastName"
                    required
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
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Phone (Optional)
                </label>
                <Input 
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  What part of the sliding scale are you interested in?
                </label>
                <select name="priceRange" required className="w-full px-3 py-2 rounded-md bg-muted border border-border focus:border-accent focus:outline-none text-foreground">
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
                  name="howFound"
                  required
                  placeholder="Tell me how you discovered my work..."
                  rows={3}
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Contact Preference
                </label>
                <select name="contactPreference" required className="w-full px-3 py-2 rounded-md bg-muted border border-border focus:border-accent focus:outline-none text-foreground">
                  <option>Email</option>
                  <option>Text</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-light text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  name="message"
                  required
                  placeholder="Tell me about what you're seeking..."
                  rows={5}
                  className="bg-muted border-border focus:border-accent"
                />
              </div>

              <Button 
                type="submit"
                variant="outline" 
                size="lg" 
                className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;