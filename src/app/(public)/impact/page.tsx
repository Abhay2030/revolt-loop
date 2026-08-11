import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { BarChart } from "@/components/ui/bar-chart";
import { LineChart } from "@/components/ui/line-chart";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Droplets, Zap } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environmental Impact",
  description: "Track the real-time environmental impact of the ReVolt Loop platform. See how our e-waste recycling initiatives are reducing CO2 emissions and preventing toxic water.",
  openGraph: {
    title: "Environmental Impact | ReVolt Energy",
    description: "Track the real-time environmental impact of the ReVolt Loop platform. See how our e-waste recycling initiatives are reducing CO2 emissions and preventing toxic water.",
  },
};

const barData = [
  { label: 'Jan', value: 450 },
  { label: 'Feb', value: 520 },
  { label: 'Mar', value: 780 },
  { label: 'Apr', value: 690 },
  { label: 'May', value: 890 },
  { label: 'Jun', value: 1100 },
];

const lineData = [120, 180, 240, 390, 520, 680, 890, 1100, 1450, 1800, 2400];

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-6 py-32 max-w-6xl">
      <div className="mb-16">
        <PageHeader 
          title="Measurable Impact" 
          description="We don't just promise sustainability; we prove it. Every metric below is backed by immutable ledger data from our recycling facilities."
        />
      </div>

      {/* Hero Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <StatCard 
          label="Total E-Waste Diverted" 
          value="18.4 Metric Tons" 
          icon={<Recycle />}
          trend={{ value: 24, label: "vs last quarter" }}
          variant="accent"
        />
        <StatCard 
          label="CO₂ Emissions Avoided" 
          value="85.2 Metric Tons" 
          icon={<Leaf />}
          trend={{ value: 18 }}
        />
        <StatCard 
          label="Toxic Water Prevented" 
          value="450k Liters" 
          icon={<Droplets />}
        />
        <StatCard 
          label="Energy Saved" 
          value="1.2M kWh" 
          icon={<Zap />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <Card className="p-8">
          <h3 className="font-bold text-lg mb-6">Monthly Material Recovery (kg)</h3>
          <BarChart data={barData} height={250} />
        </Card>
        <Card className="p-8">
          <h3 className="font-bold text-lg mb-6">Cumulative Network Growth</h3>
          <p className="text-xs text-muted-foreground mb-4">Total registered devices entering the circular economy.</p>
          <LineChart data={lineData} height={230} showGradient={true} color="var(--info)" />
        </Card>
      </div>

      {/* Material Breakdown */}
      <div className="bg-surface-2 rounded-3xl p-12 border border-border">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-outfit)]">What we've mined from the surface</h2>
          <p className="text-muted-foreground mt-2">Urban mining is significantly more efficient than traditional earth mining.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "Gold (Au)", amount: "420 grams", context: "Saved 210 tons of ore mining" },
            { label: "Copper (Cu)", amount: "8,500 kg", context: "Saved 1,700 tons of earth movement" },
            { label: "Rare Earths", amount: "125 kg", context: "Critical for green energy transition" },
          ].map((mat, i) => (
            <div key={i} className="bg-surface-1 border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-foreground mb-1">{mat.amount}</div>
              <div className="text-sm font-semibold text-accent mb-3">{mat.label}</div>
              <div className="text-xs text-muted-foreground">{mat.context}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
