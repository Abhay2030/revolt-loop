import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, Globe } from "lucide-react";

export const metadata = {
  title: "About Us | ReVolt Energy",
  description: "The team and mission behind ReVolt Loop's circular economy platform.",
};

const values = [
  { icon: <Target className="h-6 w-6 text-accent" />, title: "Zero Waste to Landfill", desc: "Our ultimate goal is absolute diversion. We view e-waste not as trash, but as a critical above-ground mine." },
  { icon: <Lightbulb className="h-6 w-6 text-info" />, title: "Radical Transparency", desc: "Through blockchain ledgers and real-time tracking, we eliminate the opacity of traditional recycling." },
  { icon: <Users className="h-6 w-6 text-warning" />, title: "Inclusive Ecosystem", desc: "We empower local informal aggregators by integrating them into our formalized, digital supply chain." },
  { icon: <Globe className="h-6 w-6 text-success" />, title: "Global Standards", desc: "We adhere strictly to R2v3, e-Stewards, and local PCB norms to ensure world-class compliance." },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-32 max-w-5xl">
      <div className="mb-16">
        <PageHeader 
          title="About ReVolt Energy" 
          description="We are engineers, environmentalists, and supply-chain experts on a mission to solve the world's fastest-growing waste stream."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-outfit)] tracking-tight">The E-Waste Crisis is an <span className="gradient-text">Opportunity.</span></h2>
          <p className="text-muted-foreground leading-relaxed">
            In 2023 alone, the world generated 62 million metric tonnes of electronic waste. Less than 22% was formally recycled. The rest was dumped, burned, or lost—taking with it billions of dollars worth of recoverable gold, silver, copper, and critical rare earth elements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            ReVolt Energy was founded to build the infrastructure needed to close this loop. We built ReVolt Loop to digitize the reverse supply chain, making it as easy to responsibly dispose of a device as it was to purchase it in the first place.
          </p>
        </div>
        <div className="h-[400px] rounded-3xl bg-surface-2 border border-border flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
          <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
            <div className="bg-surface-1 rounded-2xl border border-border/50 animate-pulse-glow" />
            <div className="bg-surface-3 rounded-2xl border border-border/50" />
            <div className="bg-surface-3 rounded-2xl border border-border/50" />
            <div className="bg-accent/20 rounded-2xl border border-accent/30" />
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-8 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <Card key={i} className="p-8 hover:border-accent/50 transition-colors group">
              <div className="h-12 w-12 rounded-xl bg-surface-2 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center bg-surface-2 rounded-3xl p-12 border border-border">
        <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-4">Backed by the Best</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          We are proud to be supported by leading climate-tech investors and government sustainability initiatives.
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold">Y Combinator</div>
          <div className="text-xl font-bold">Climate Capital</div>
          <div className="text-xl font-bold">Sequoia Surge</div>
          <div className="text-xl font-bold">Ministry of Environment</div>
        </div>
      </div>
    </div>
  );
}
