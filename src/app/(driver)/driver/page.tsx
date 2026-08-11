import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { MapPin, Navigation, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DriverDashboard() {
  const session = await auth();
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      {/* Driver Header */}
      <header className="bg-accent text-accent-foreground p-6 rounded-b-3xl sticky top-0 z-10 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-outfit font-medium">ReVolt Driver</h1>
            <p className="text-sm opacity-80">Shift Active • {session?.user?.name}</p>
          </div>
          <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
            <span className="font-bold">ON</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl">
          <div>
            <div className="text-sm opacity-80 mb-1">Next Stop in</div>
            <div className="text-2xl font-bold">14 mins</div>
          </div>
          <Button variant="secondary" size="sm" className="rounded-full">
            <Navigation className="h-4 w-4 mr-2" /> Navigate
          </Button>
        </div>
      </header>

      {/* Today's Jobs */}
      <main className="p-6 space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-xl font-outfit font-medium tracking-tight">Today's Route</h2>
          <span className="text-sm font-medium text-accent">3 / 8 Completed</span>
        </div>

        {/* Active Job */}
        <div className="p-5 rounded-3xl border-2 border-accent bg-accent/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 bg-accent text-accent-foreground text-xs font-bold rounded-bl-xl">ACTIVE</div>
          <h3 className="font-medium text-lg mb-1">Pickup #REV-8492</h3>
          <p className="text-muted-foreground text-sm flex items-start gap-2 mb-4">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            123 Tech Park, Sector 4, Mumbai, 400001
          </p>
          
          <div className="bg-black/20 p-3 rounded-xl mb-4 text-sm">
            <span className="font-medium">Items:</span> 1x Laptop, 2x Smartphone, 1x Box of Cables
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">Arrived</Button>
            <Button variant="outline" className="w-full rounded-xl border-white/10 hover:bg-white/5">Call</Button>
          </div>
        </div>

        {/* Upcoming Job */}
        <div className="p-5 rounded-3xl border border-white/5 bg-secondary/10 opacity-70">
          <h3 className="font-medium text-lg mb-1">Pickup #REV-8504</h3>
          <p className="text-muted-foreground text-sm flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            45 Green Valley, Andheri West, Mumbai
          </p>
        </div>
        
        {/* Exception Job */}
        <div className="p-5 rounded-3xl border border-destructive/20 bg-destructive/5">
           <div className="flex items-center gap-2 text-destructive mb-2">
             <AlertTriangle className="h-4 w-4" />
             <span className="text-sm font-bold">Failed Pickup</span>
           </div>
          <h3 className="font-medium text-lg mb-1 line-through opacity-50">Pickup #REV-8450</h3>
          <p className="text-muted-foreground text-sm flex items-start gap-2">
            Customer unavailable. Re-routed.
          </p>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 w-full h-16 bg-background/90 backdrop-blur-md border-t border-white/5 flex justify-around items-center z-50 pb-safe">
         <div className="flex flex-col items-center text-accent"><MapPin className="h-5 w-5 mb-1" /><span className="text-[10px]">Route</span></div>
         <div className="flex flex-col items-center text-muted-foreground hover:text-white"><CheckCircle2 className="h-5 w-5 mb-1" /><span className="text-[10px]">History</span></div>
      </nav>
    </div>
  );
}
