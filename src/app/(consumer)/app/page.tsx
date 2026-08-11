import { auth } from "@/auth";
import { Package, Award, Recycle, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ConsumerDashboard() {
  const session = await auth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-outfit font-medium tracking-tight">Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}</h1>
        <p className="text-muted-foreground mt-2">Here's your impact overview and recent activity.</p>
      </div>

      {/* Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total E-Waste Diverted", value: "8.4 kg", icon: Package, highlight: false },
          { label: "CO₂e Avoided", value: "32.1 kg", icon: Leaf, highlight: true },
          { label: "Reward Points", value: "1,250", icon: Award, highlight: false },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-3xl border ${stat.highlight ? 'bg-accent/10 border-accent/20 text-accent-foreground' : 'bg-secondary/10 border-white/5'} flex flex-col`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.highlight ? 'bg-accent/20 text-accent' : 'bg-white/5 text-muted-foreground'}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="text-3xl font-outfit font-medium mb-1">{stat.value}</div>
            <div className={`text-sm ${stat.highlight ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-outfit font-medium">Recent Pickups</h2>
            <Link href="/app/bookings" className="text-sm text-accent hover:underline">View all</Link>
          </div>
          
          <div className="space-y-4">
            {/* Mock Pickup Item */}
            <div className="p-6 rounded-2xl border border-white/5 bg-secondary/10 flex items-center justify-between group hover:bg-secondary/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Recycle className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Old Laptops & Cables</div>
                  <div className="text-sm text-muted-foreground">Scheduled for Oct 12, 10:00 AM</div>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Confirmed
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-outfit font-medium">Quick Actions</h2>
          <div className="p-6 rounded-3xl border border-white/5 bg-gradient-to-b from-secondary/20 to-background flex flex-col gap-4">
            <h3 className="font-medium">Got more e-waste?</h3>
            <p className="text-sm text-muted-foreground">Schedule another pickup and earn more reward points while saving the planet.</p>
            <Link href="/app/bookings/new" className="mt-2">
              <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 justify-between">
                Schedule Pickup <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
