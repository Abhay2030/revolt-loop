import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Factory, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "How It Works | ReVolt Energy",
  description: "Learn how the ReVolt Loop process works, from pickup to certified recycling.",
};

const steps = [
  {
    step: "01",
    title: "Schedule a Pickup",
    desc: "Use our platform to book a pickup. Select your device types, quantity, and a convenient time slot. Our dynamic pricing engine gives you an instant estimated value or recycling cost.",
    icon: <ArrowRight className="h-8 w-8 text-accent" />,
    image: "📱",
  },
  {
    step: "02",
    title: "Secure Collection",
    desc: "A verified ReVolt Loop logistics partner arrives at your location. They scan the QR code to initiate the chain of custody, ensuring your devices are tracked securely from the moment they leave your hands.",
    icon: <MapPin className="h-8 w-8 text-info" />,
    image: "🚚",
  },
  {
    step: "03",
    title: "AI-Driven Classification",
    desc: "At our micro-hubs, devices are scanned using machine vision. The AI classifies the e-waste by grade, condition, and material composition, optimizing it for refurbishment or pure material extraction.",
    icon: <Factory className="h-8 w-8 text-warning" />,
    image: "🤖",
  },
  {
    step: "04",
    title: "Data Wiping & Recovery",
    desc: "All devices undergo a strict, DoD-compliant data wiping process. Reusable electronics are refurbished, while end-of-life devices are broken down to recover precious metals, plastics, and glass.",
    icon: <ShieldCheck className="h-8 w-8 text-destructive" />,
    image: "🔒",
  },
  {
    step: "05",
    title: "Blockchain Certification",
    desc: "Once processing is complete, a digital Certificate of Recycling is generated and anchored to a blockchain ledger. This immutable proof guarantees compliance and allows enterprise clients to meet ESG quotas.",
    icon: <CheckCircle2 className="h-8 w-8 text-success" />,
    image: "📜",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-6 py-32 max-w-5xl">
      <div className="mb-16">
        <PageHeader 
          title="How It Works" 
          description="A transparent, five-step process powering the circular economy."
        />
      </div>

      <div className="relative border-l border-border/50 ml-6 md:ml-12 pl-8 md:pl-16 space-y-24">
        {steps.map((item, i) => (
          <div key={i} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] md:-left-[77px] top-4 h-6 w-6 rounded-full bg-surface-1 border-4 border-background flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <Badge className="mb-4 bg-surface-2">Step {item.step}</Badge>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              <Card className="flex items-center justify-center p-12 bg-surface-2/50 border-border group-hover:border-accent/30 transition-colors">
                <div className="text-6xl filter drop-shadow-xl">{item.image}</div>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center bg-accent/5 border border-accent/20 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,102,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]" />
        <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-4 relative z-10">Ready to recycle responsibly?</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto relative z-10">Join thousands of individuals and businesses already using ReVolt Loop.</p>
        <Link href="/app/bookings/new" className="relative z-10">
          <Button size="lg" className="bg-accent text-accent-foreground rounded-xl">
            Book a Pickup Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
