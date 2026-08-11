import { auth } from "@/auth";
import { Package, Award, Leaf, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function ConsumerDashboard() {
  const session = await auth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-[family-name:var(--font-outfit)] font-semibold tracking-tight">
          Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}
        </h1>
        <p className="text-muted-foreground mt-2">Here's your impact overview and recent activity.</p>
      </div>

      {/* Impact Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Total E-Waste Diverted"
          value="8.4 kg"
          icon={<Package className="h-5 w-5" />}
          trend={{ value: 12, label: "this month" }}
        />
        <StatCard
          label="CO₂e Avoided"
          value="32.1 kg"
          icon={<Leaf className="h-5 w-5" />}
          trend={{ value: 5 }}
          variant="accent"
        />
        <StatCard
          label="Reward Points"
          value="1,250"
          icon={<Award className="h-5 w-5" />}
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Recent Pickups</h2>
            <Link href="/app/bookings" className="text-sm text-accent hover:underline font-medium">View all</Link>
          </div>
          
          <div className="space-y-4">
            {/* Mock Pickup Items */}
            <Card className="flex items-center justify-between p-5 hover:border-accent/40 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-surface-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Package className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <div className="font-medium mb-1">Old Laptops & Cables</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> Scheduled for Oct 12, 10:00 AM
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="info">Confirmed</Badge>
              </div>
            </Card>

            <Card className="flex items-center justify-between p-5 hover:border-accent/40 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-surface-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-medium mb-1">Broken Microwave</div>
                  <div className="text-sm text-muted-foreground">Completed on Sep 28</div>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-1">
                <Badge variant="success">Completed</Badge>
                <span className="text-xs font-medium text-accent">+350 pts</span>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Quick Actions</h2>
          <Card variant="accent" glow className="relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-info" />
            <h3 className="font-semibold text-lg mb-2">Got more e-waste?</h3>
            <p className="text-sm text-muted-foreground mb-6">Schedule another pickup and earn more reward points while saving the planet.</p>
            <Link href="/app/bookings/new" className="block w-full">
              <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 justify-between h-12">
                Schedule Pickup <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
