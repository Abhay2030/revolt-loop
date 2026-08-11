'use client';
import { motion } from "framer-motion";
import { ArrowRight, Recycle, ShieldCheck, MapPin, BarChart3, Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation (Placeholder) */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-outfit text-2xl font-bold tracking-tighter text-white">ReVolt<span className="text-accent">.</span></div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/how-it-works" className="hover:text-white transition-colors">How it works</Link>
            <Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link>
            <Link href="/impact" className="hover:text-white transition-colors">Impact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-white transition-colors">Sign In</Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
              Book Pickup
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-white/5 pt-24 pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-outfit font-medium tracking-tighter leading-tight max-w-4xl mx-auto">
                Turn E-Waste Into <span className="text-accent">Impact.</span>
              </h1>
              <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                ReVolt Energy makes responsible electronics recycling simple, traceable, and accessible — from your doorstep to certified recovery.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-14 text-lg">
                  Schedule a Pickup <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/10 hover:bg-white/5">
                  See How It Works
                </Button>
              </div>
            </motion.div>

            {/* Impact Counters */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-sm"
            >
              {[
                { label: "Devices Recovered", value: "24,592", icon: Recycle },
                { label: "E-Waste Diverted (kg)", value: "18,400", icon: Leaf },
                { label: "CO₂e Avoided (kg)", value: "85,200", icon: BarChart3 },
                { label: "Cities Served", value: "12", icon: MapPin },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <stat.icon className="h-6 w-6 text-accent mb-4" />
                  <div className="text-3xl font-outfit font-medium">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-outfit font-medium tracking-tight">The ReVolt Process</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Five steps from your drawer to a new life.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Book", desc: "Schedule a pickup online." },
                { step: "02", title: "We Pick Up", desc: "Secure collection from your door." },
                { step: "03", title: "We Sort", desc: "AI-driven classification." },
                { step: "04", title: "We Recover", desc: "Data wiped & materials recycled." },
                { step: "05", title: "You Get Proof", desc: "Traceable digital certificates." },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-background border border-white/10 flex items-center justify-center text-xl font-outfit font-medium mb-6 z-10 relative">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-32">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium mb-6">
                <ShieldCheck className="mr-2 h-4 w-4 text-accent" />
                Enterprise ITAD
              </div>
              <h2 className="text-4xl font-outfit font-medium tracking-tight mb-6">
                Secure IT Asset Disposition for the Modern Enterprise
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Corporate hardware lifecycles require strict compliance, data security, and ESG reporting. ReVolt Energy handles bulk pickups, guaranteed data destruction, and generates immutable audit trails for your sustainability reports.
              </p>
              <ul className="space-y-4 mb-8">
                {['Secure data destruction & sanitization', 'Bulk logistics & reverse supply chain', 'Custom ESG & environmental impact reports', 'Traceability and digital certificates'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <div className="h-2 w-2 rounded-full bg-accent mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="rounded-full">
                Learn About Enterprise
              </Button>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl border border-white/10 bg-secondary/50 overflow-hidden flex items-center justify-center">
               {/* Placeholder for Enterprise Graphic */}
               <div className="text-muted-foreground/50 font-outfit text-xl">Enterprise Dashboard Visualization</div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-accent text-accent-foreground">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-outfit font-medium tracking-tight mb-6">
              Your old device still has value.
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Give it another life. Join thousands of users making a measurable impact on the circular economy.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg">
              Schedule a Pickup <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ReVolt Energy. Powering a Circular Future.
        </div>
      </footer>
    </div>
  );
}
