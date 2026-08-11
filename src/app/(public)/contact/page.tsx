import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Support | ReVolt Energy",
  description: "Get in touch with the ReVolt Loop team.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-32 max-w-6xl">
      <div className="mb-16">
        <PageHeader 
          title="Get in Touch" 
          description="Have a question about a pickup, enterprise partnership, or our technology? We're here to help."
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 bg-surface-2">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-muted-foreground text-sm mb-2">Our team usually responds within 24 hours.</p>
                <a href="mailto:support@revolt.energy" className="text-accent hover:underline font-medium">support@revolt.energy</a>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-surface-2">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-info shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm IST.</p>
                <a href="tel:+9118001234567" className="text-foreground hover:text-accent transition-colors font-medium">1800-123-4567</a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-surface-2">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-warning shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Headquarters</h4>
                <p className="text-muted-foreground text-sm">
                  EcoTech Park, Building 4<br />
                  Electronic City, Phase 1<br />
                  Bengaluru, Karnataka 560100
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)]">Send a Message</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <select className="w-full h-12 rounded-xl border border-border bg-surface-1 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 appearance-none">
                  <option>General Inquiry</option>
                  <option>Enterprise ITAD Partnership</option>
                  <option>Pickup Support</option>
                  <option>Press / Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full rounded-xl border border-border bg-surface-1 p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="button" size="lg" className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 h-14">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
