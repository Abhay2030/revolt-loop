import { BarChart3, TrendingUp, AlertCircle, PackageCheck, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-outfit font-medium tracking-tight">Platform Overview</h1>
        <p className="text-muted-foreground mt-1">Live operations and system health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Today's Pickups", value: "142", trend: "+12%", icon: PackageCheck, alert: false },
          { label: "Active Drivers", value: "38", trend: "0%", icon: TrendingUp, alert: false },
          { label: "Pending Reviews", value: "24", trend: "+5", icon: AlertCircle, alert: true },
          { label: "New Users", value: "890", trend: "+24%", icon: Users, alert: false },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${stat.alert ? 'bg-destructive/10 border-destructive/20' : 'bg-secondary/10 border-white/5'} flex flex-col`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`text-sm font-medium ${stat.alert ? 'text-destructive' : 'text-muted-foreground'}`}>{stat.label}</div>
              <div className={`p-2 rounded-lg ${stat.alert ? 'bg-destructive/20 text-destructive' : 'bg-white/5 text-muted-foreground'}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="text-3xl font-outfit font-medium mb-1">{stat.value}</div>
            <div className={`text-xs ${stat.alert ? 'text-destructive/80 font-bold' : 'text-accent'}`}>{stat.trend} from yesterday</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-3xl border border-white/5 bg-secondary/10 min-h-[400px]">
            <h2 className="text-xl font-outfit font-medium mb-6">Processing Volume (30 Days)</h2>
            <div className="w-full h-[300px] flex items-center justify-center border border-dashed border-white/10 rounded-xl text-muted-foreground">
              <BarChart3 className="h-8 w-8 mr-2" /> Chart Visualization Placeholder
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 rounded-3xl border border-white/5 bg-secondary/10">
            <h2 className="text-xl font-outfit font-medium mb-6">Operations Alerts</h2>
            <div className="space-y-4">
              {[
                { title: "Driver #D-102 Unreachable", time: "10 mins ago", type: "critical" },
                { title: "AI Confidence Low (Booking #REV-8490)", time: "15 mins ago", type: "warning" },
                { title: "Partner capacity > 90%", time: "1 hour ago", type: "info" },
              ].map((alert, i) => (
                <div key={i} className={`p-4 rounded-xl border ${
                  alert.type === 'critical' ? 'border-destructive/30 bg-destructive/10' :
                  alert.type === 'warning' ? 'border-yellow-500/30 bg-yellow-500/10' :
                  'border-white/10 bg-black/20'
                }`}>
                  <div className="font-medium text-sm mb-1">{alert.title}</div>
                  <div className="text-xs opacity-70">{alert.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
