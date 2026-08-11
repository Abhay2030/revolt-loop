import { StatCard } from "@/components/ui/stat-card";
import { Card } from "@/components/ui/card";
import { BarChart } from "@/components/ui/bar-chart";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertCircle, PackageCheck, Users } from "lucide-react";

const chartData = [
  { label: 'Mon', value: 145 },
  { label: 'Tue', value: 160 },
  { label: 'Wed', value: 210 },
  { label: 'Thu', value: 180 },
  { label: 'Fri', value: 230 },
  { label: 'Sat', value: 110 },
  { label: 'Sun', value: 85 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-[family-name:var(--font-outfit)] font-semibold tracking-tight">Platform Overview</h1>
        <p className="text-muted-foreground mt-1">Live operations and system health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Today's Pickups" 
          value="142" 
          trend={{ value: 12, label: "vs yesterday" }} 
          icon={<PackageCheck className="h-5 w-5" />} 
          sparklineData={[10, 20, 15, 30, 25, 40, 45]}
        />
        <StatCard 
          label="Active Drivers" 
          value="38" 
          trend={{ value: 0 }} 
          icon={<TrendingUp className="h-5 w-5" />} 
          variant="accent"
        />
        <StatCard 
          label="Pending Reviews" 
          value="24" 
          trend={{ value: -5, label: "from last hour" }} 
          icon={<AlertCircle className="h-5 w-5" />} 
          variant="destructive"
        />
        <StatCard 
          label="New Users" 
          value="890" 
          trend={{ value: 24, label: "this week" }} 
          icon={<Users className="h-5 w-5" />} 
          sparklineData={[100, 150, 130, 200, 220, 280, 310]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="min-h-[400px]">
            <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold mb-6">Processing Volume (This Week)</h2>
            <div className="w-full">
              <BarChart data={chartData} height={280} />
            </div>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold mb-6">Operations Alerts</h2>
            <div className="space-y-4">
              {[
                { title: "Driver #D-102 Unreachable", time: "10 mins ago", type: "error" },
                { title: "AI Confidence Low (Booking #REV-8490)", time: "15 mins ago", type: "warning" },
                { title: "Partner capacity > 90%", time: "1 hour ago", type: "info" },
              ].map((alert, i) => (
                <div key={i} className={`p-4 rounded-xl border ${
                  alert.type === 'error' ? 'border-destructive/30 bg-destructive/10' :
                  alert.type === 'warning' ? 'border-warning/30 bg-warning/10' :
                  'border-info/30 bg-info/10'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="font-medium text-sm mb-1">{alert.title}</div>
                    <Badge variant={alert.type as any} size="sm">{alert.type}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{alert.time}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
