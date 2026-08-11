'use client';
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Recycle, ShieldCheck, MapPin, BarChart3, Leaf, Play, CheckCircle2, Factory } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DonutChart } from "@/components/ui/donut-chart";
import { Badge } from "@/components/ui/badge";

// Animated Counter Component
function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const totalSteps = 60 * duration; // Assuming 60fps
      const step = end / totalSteps;
      
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={nodeRef}>{count.toLocaleString()}</span>;
}

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 hero-grid opacity-50 z-0" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-float" />
        
        <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Badge variant="success" size="md" className="border-accent/30 bg-accent/10 px-4 py-1.5 text-accent font-medium normal-case tracking-normal">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Now live across 12+ cities in India
            </Badge>
          </motion.div>

          <h1 className="text-display font-[family-name:var(--font-outfit)] font-semibold tracking-tighter leading-[1.1] max-w-5xl mx-auto">
            {["Turn", "E-Waste", "Into"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="inline-block mr-3 md:mr-6"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="gradient-text inline-block"
            >
              Measurable Impact.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Responsible electronics recycling made simple, traceable, and accessible — from your doorstep to certified recovery.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto"
          >
            <Link href="/app/bookings/new" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]">
                Schedule a Pickup <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-xl h-14 px-8 text-base border-border hover:bg-surface-2 transition-all hover:scale-[1.02]">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </Link>
          </motion.div>

          {/* 3D Illustration Mockup via CSS */}
          <motion.div 
            style={{ y: yParallax }}
            className="mt-20 relative w-full max-w-4xl h-[400px] hidden md:flex items-center justify-center perspective-[1000px]"
          >
            <motion.div 
              animate={{ rotateY: [0, 5, 0, -5, 0], rotateX: [10, 15, 10, 5, 10] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-[300px] h-[300px] preserve-3d"
            >
               {/* Abstract geometric representation of devices floating into a recycling hub */}
               <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-transparent rounded-3xl border border-accent/30 backdrop-blur-md transform translate-z-[50px] rotate-y-[-20deg] rotate-x-[20deg] shadow-2xl flex items-center justify-center">
                 <Recycle className="h-32 w-32 text-accent/80" />
               </div>
               <div className="absolute -top-10 -left-20 w-32 h-40 bg-surface-2/80 rounded-xl border border-border backdrop-blur-md transform translate-z-[100px] rotate-y-[-10deg] rotate-x-[10deg] flex flex-col p-4 shadow-xl">
                 <div className="w-full h-20 bg-black/40 rounded-lg mb-2"></div>
                 <div className="w-2/3 h-2 bg-accent/60 rounded-full mb-1"></div>
                 <div className="w-1/2 h-2 bg-muted rounded-full"></div>
               </div>
               <div className="absolute -bottom-10 -right-10 w-48 h-32 bg-surface-2/80 rounded-xl border border-border backdrop-blur-md transform translate-z-[150px] rotate-y-[-30deg] rotate-x-[30deg] flex items-center p-4 shadow-xl">
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">Verified CO2 Offset</div>
                    <div className="text-xl font-bold text-success">+ 42.5 kg</div>
                  </div>
                  <Leaf className="h-8 w-8 text-success/50" />
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 border-y border-border bg-surface-1/50 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Trusted by sustainability leaders</p>
        </div>
        <div className="w-full flex overflow-hidden mask-edges">
          <div className="flex whitespace-nowrap animate-marquee items-center opacity-60">
            {/* Repeat list twice for infinite loop illusion */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-32 px-8 md:px-16 items-center">
                {['TATA Enterprise', 'Infosys', 'Wipro Eco', 'HCL Technologies', 'Tech Mahindra', 'Cognizant ESG'].map((company, j) => (
                  <span key={j} className="text-xl md:text-3xl font-[family-name:var(--font-outfit)] font-bold tracking-tighter text-muted-foreground">
                    {company}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Dashboard Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <Badge variant="neutral" className="bg-surface-2">Real-time Impact</Badge>
              <h2 className="text-h2 font-[family-name:var(--font-outfit)] font-semibold tracking-tight">
                Data-driven <span className="gradient-text">circularity.</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every device recycled through ReVolt Loop contributes to our transparent, blockchain-anchored ledger. Watch the numbers grow as we mine urban waste instead of the earth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-foreground">
                    <AnimatedCounter value={24592} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Devices Recovered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-foreground">
                    <AnimatedCounter value={85200} /> <span className="text-2xl text-muted-foreground">kg</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">CO₂e Avoided</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-foreground">
                    <AnimatedCounter value={18400} /> <span className="text-2xl text-muted-foreground">kg</span>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Landfill Diverted</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-foreground">
                    12+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Cities Served</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {/* Tilted browser mockup */}
              <motion.div 
                initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateY: -5, rotateX: 5, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring" }}
                className="w-full rounded-2xl border border-border bg-surface-1 shadow-2xl p-2 perspective-[1000px]"
              >
                <div className="w-full h-full bg-surface-2 rounded-xl overflow-hidden border border-border/50">
                  <div className="h-10 bg-surface-3 flex items-center px-4 gap-2 border-b border-border/50">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-warning/60" />
                    <div className="h-3 w-3 rounded-full bg-success/60" />
                  </div>
                  <div className="p-8 flex flex-col items-center">
                    <h3 className="text-lg font-medium mb-8 self-start">Material Recovery Distribution</h3>
                    <DonutChart 
                      size={240}
                      strokeWidth={32}
                      centerValue="94.2%"
                      centerLabel="Recovery Rate"
                      segments={[
                        { label: "Plastics", value: 45, color: "var(--accent)" },
                        { label: "Ferrous Metals", value: 30, color: "var(--info)" },
                        { label: "Precious Metals", value: 15, color: "var(--warning)" },
                        { label: "Glass/Other", value: 10, color: "var(--muted-foreground)" },
                      ]}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-surface-1/30 border-y border-border relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-h2 font-[family-name:var(--font-outfit)] font-semibold tracking-tight mb-4">The ReVolt Process</h2>
            <p className="text-lg text-muted-foreground">Five simple steps to give your old electronics a second life and earn rewards in the circular economy.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-border via-accent/30 to-border -z-10" />

            {[
              { step: "01", title: "Book", desc: "Schedule a pickup online via app or web.", icon: <ArrowRight className="h-6 w-6" /> },
              { step: "02", title: "Collect", desc: "Our verified drivers collect from your door.", icon: <MapPin className="h-6 w-6" /> },
              { step: "03", title: "Sort", desc: "AI-driven classification and grading.", icon: <Factory className="h-6 w-6" /> },
              { step: "04", title: "Recover", desc: "Secure data wipe & material extraction.", icon: <ShieldCheck className="h-6 w-6" /> },
              { step: "05", title: "Certify", desc: "Immutable digital proof of recycling.", icon: <CheckCircle2 className="h-6 w-6" /> },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-2xl bg-surface-1 border border-border flex flex-col items-center justify-center mb-6 z-10 relative group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.15)] transition-all duration-300">
                  <div className="text-accent mb-2 transition-transform group-hover:scale-110 duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-muted-foreground absolute top-2 right-2">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-outfit)]">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-info/20 blur-2xl opacity-30 rounded-full" />
            <Card variant="elevated" className="relative z-10 p-8 shadow-2xl border-accent/20">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <div className="p-2 bg-accent/10 rounded-lg"><BarChart3 className="text-accent h-6 w-6" /></div>
                <div>
                  <h3 className="font-semibold text-lg">ESG Compliance Report</h3>
                  <p className="text-xs text-muted-foreground">Generated instantly via ReVolt Ledger</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-3">
                  <span className="text-sm text-muted-foreground">Scope 3 Emissions Offset</span>
                  <span className="font-bold text-success">14,250 kg</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-3">
                  <span className="text-sm text-muted-foreground">Data Destruction Certs</span>
                  <span className="font-bold">850 / 850 Verified</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-surface-3">
                  <span className="text-sm text-muted-foreground">Regulatory Quota Fulfilled</span>
                  <span className="font-bold text-accent">100%</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <Badge variant="neutral" className="bg-surface-2"><ShieldCheck className="w-3 h-3 mr-1" /> Enterprise ITAD</Badge>
            <h2 className="text-h2 font-[family-name:var(--font-outfit)] font-semibold tracking-tight">
              Secure IT Asset Disposition for the Modern Enterprise
            </h2>
            <p className="text-lg text-muted-foreground">
              Corporate hardware lifecycles require strict compliance, data security, and ESG reporting. ReVolt Energy handles bulk pickups, guaranteed data destruction, and generates immutable audit trails.
            </p>
            <ul className="space-y-4 pt-2">
              {[
                'Military-grade data destruction & sanitization', 
                'Bulk logistics & reverse supply chain management', 
                'Custom ESG & environmental impact reports', 
                'Blockchain traceability and digital certificates'
              ].map((item, i) => (
                <li key={i} className="flex items-start text-base font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/enterprise">
                <Button size="lg" variant="outline" className="rounded-xl h-12 px-6 border-border hover:bg-surface-2">
                  Learn About Enterprise Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-32 bg-surface-1/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-h2 font-[family-name:var(--font-outfit)] font-semibold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Recycling should be easy. Choose the plan that fits your volume and compliance needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Consumer Plan */}
            <Card className="flex flex-col relative overflow-hidden group hover:border-border/80">
              <div className="mb-6">
                <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-2">Consumer</h3>
                <p className="text-sm text-muted-foreground h-10">For individuals recycling personal devices.</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {['Free doorstep pickup', 'Standard data wiping', 'Basic recycling certificate', 'Reward points on value'].map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground mr-2 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-xl" variant="outline">Start Free</Button>
            </Card>

            {/* Business Plan */}
            <Card variant="accent" glow className="flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-xl">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-info" />
              <div className="absolute top-4 right-4"><Badge variant="success">Most Popular</Badge></div>
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-2 text-foreground">Business</h3>
                <p className="text-sm text-muted-foreground h-10">For SMBs needing compliant ITAD.</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹4,999</span><span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {['Priority bulk pickups', 'Certified data destruction (DoD)', 'Detailed ESG reporting', 'Dedicated account manager', 'API access for integration'].map((feat, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">Choose Business</Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col relative overflow-hidden group hover:border-border/80">
              <div className="mb-6">
                <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-2">Enterprise</h3>
                <p className="text-sm text-muted-foreground h-10">Custom solutions for massive scale.</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {['Multi-location logistics', 'On-site shredding options', 'EPR Quota fulfillment', 'Blockchain-anchored ledgers', 'Custom SLA & API endpoints'].map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground mr-2 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-xl" variant="outline">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel (Simplified for static view) */}
      <section className="py-24 border-t border-border overflow-hidden">
         <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-h2 font-[family-name:var(--font-outfit)] font-semibold tracking-tight">Don't just take our word for it</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {[
               { q: "ReVolt transformed our IT asset disposition. We now have a clear, auditable trail for every retired server, drastically simplifying our compliance.", n: "Rajesh K.", r: "CIO, Tech Logistics India" },
               { q: "The easiest way to dispose of old hardware. I scheduled a pickup, and the driver arrived exactly on time. Getting the certificate was seamless.", n: "Ananya S.", r: "Consumer" },
               { q: "As an OEM, meeting our EPR targets was a nightmare until we integrated with ReVolt's blockchain ledger. It's completely transparent and automated.", n: "Vikram M.", r: "Sustainability Head, Global Electronics" }
             ].map((t, i) => (
               <Card key={i} className="p-8">
                 <div className="flex text-accent mb-4">
                   {[...Array(5)].map((_, j) => <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                 </div>
                 <p className="text-muted-foreground mb-6 text-sm leading-relaxed">"{t.q}"</p>
                 <div>
                   <div className="font-bold font-[family-name:var(--font-outfit)] text-sm">{t.n}</div>
                   <div className="text-xs text-muted-foreground">{t.r}</div>
                 </div>
               </Card>
             ))}
           </div>
         </div>
      </section>

      {/* Final Newsletter CTA */}
      <section className="py-24 relative overflow-hidden bg-accent text-accent-foreground">
        <div className="absolute inset-0 hero-grid opacity-20 invert" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-outfit)] font-semibold tracking-tight mb-6">
            Join the circular economy.
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 font-medium">
            Join 10,000+ sustainability leaders receiving our monthly insights on e-waste reduction, regulatory changes, and circular supply chains.
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="h-14 px-6 rounded-xl flex-1 focus:outline-none focus:ring-2 focus:ring-background/50 bg-background text-foreground shadow-lg"
            />
            <Button size="lg" variant="secondary" className="h-14 px-8 rounded-xl font-bold shadow-lg">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-xs opacity-70">No spam. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
