'use client';
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, FileText, Search, ChevronRight } from "lucide-react";

export default function SupportPage() {
  const faqs = [
    "How do I reschedule a pickup?",
    "What types of e-waste do you accept?",
    "How are reward points calculated?",
    "Is my data securely wiped from old devices?",
    "Can I schedule a bulk pickup for my office?"
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <PageHeader 
        title="Help & Support" 
        description="Find answers to common questions or reach out to our team."
      />

      {/* Search Bar */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search for help..." 
          className="w-full h-14 pl-12 pr-4 rounded-2xl border border-border bg-surface-1 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-base"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 flex flex-col items-center text-center hover:border-accent/40 transition-colors cursor-pointer group">
          <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageSquare className="h-6 w-6 text-accent" />
          </div>
          <h3 className="font-semibold mb-2">Live Chat</h3>
          <p className="text-sm text-muted-foreground mb-4">Chat with our support team in real-time. Available 9am-6pm IST.</p>
          <Button variant="outline" className="mt-auto w-full rounded-xl">Start Chat</Button>
        </Card>
        
        <Card className="p-6 flex flex-col items-center text-center hover:border-info/40 transition-colors cursor-pointer group">
          <div className="h-12 w-12 rounded-full bg-info/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Phone className="h-6 w-6 text-info" />
          </div>
          <h3 className="font-semibold mb-2">Call Us</h3>
          <p className="text-sm text-muted-foreground mb-4">Need immediate assistance? Give us a call toll-free.</p>
          <Button variant="outline" className="mt-auto w-full rounded-xl">1800-123-4567</Button>
        </Card>

        <Card className="p-6 flex flex-col items-center text-center hover:border-warning/40 transition-colors cursor-pointer group">
          <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Mail className="h-6 w-6 text-warning" />
          </div>
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-muted-foreground mb-4">Drop us an email and we'll get back to you within 24 hours.</p>
          <Button variant="outline" className="mt-auto w-full rounded-xl">support@revolt.energy</Button>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-6">
        <div className="space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" /> Frequently Asked Questions
          </h2>
          <Card className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-surface-2 transition-colors cursor-pointer group">
                <span className="text-sm font-medium">{faq}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            ))}
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Send a Message</h2>
          <Card className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Issue Type</label>
                <select className="w-full h-10 px-3 rounded-lg border border-border bg-surface-1 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                  <option>Pickup Issue</option>
                  <option>Rewards & Points</option>
                  <option>Account Settings</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 rounded-lg border border-border bg-surface-1 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Please describe your issue in detail..."
                ></textarea>
              </div>
              <Button type="button" className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
