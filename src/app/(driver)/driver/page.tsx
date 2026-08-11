import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { MapPin, Navigation, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function DriverDashboard() {
  const session = await auth();
  
  if (!session || session.user.role !== 'DRIVER') {
    // redirect("/login"); // Commenting out to allow previewing for demo
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20">
      {/* Driver Header */}
      <header className="bg-accent text-accent-foreground p-6 rounded-b-3xl sticky top-0 z-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full hero-grid opacity-20 invert pointer-events-none" />
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-[family-name:var(--font-outfit)] font-semibold tracking-tight">ReVolt Driver</h1>
              <p className="text-sm font-medium opacity-90">Shift Active • {session?.user?.name || "Ravi Kumar"}</p>
            </div>
            <div className="h-10 w-10 bg-background/20 rounded-full flex items-center justify-center border border-background/40 shadow-sm">
              <span className="font-bold text-sm">ON</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center bg-background/20 backdrop-blur-sm p-4 rounded-xl border border-background/10">
            <div>
              <div className="text-sm font-medium opacity-90 mb-0.5">Next Stop in</div>
              <div className="text-2xl font-bold font-[family-name:var(--font-outfit)]">14 mins</div>
            </div>
            <Button variant="secondary" className="rounded-xl px-5 h-10 shadow-sm text-foreground">
              <Navigation className="h-4 w-4 mr-2" /> Navigate
            </Button>
          </div>
        </div>
      </header>

      {/* Today's Jobs */}
      <main className="p-6 space-y-5">
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold tracking-tight">Today's Route</h2>
          <span className="text-sm font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-md">3 / 8 Completed</span>
        </div>

        {/* Active Job */}
        <Card variant="accent" glow className="relative overflow-hidden p-5 shadow-lg border-accent/40">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-info" />
          <div className="absolute top-0 right-0 p-1.5 px-3 bg-accent text-accent-foreground text-xs font-bold rounded-bl-xl shadow-sm">ACTIVE</div>
          
          <div className="pt-2">
            <h3 className="font-semibold text-lg mb-1 font-[family-name:var(--font-outfit)]">Pickup #REV-8492</h3>
            <p className="text-muted-foreground text-sm flex items-start gap-2 mb-4 font-medium">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              123 Tech Park, Sector 4, Mumbai, 400001
            </p>
            
            <div className="bg-background/40 border border-border/50 p-3 rounded-xl mb-5 text-sm font-medium">
              <span className="text-muted-foreground mr-2">Items:</span> 
              <span>1x Laptop, 2x Smartphone, 1x Box of Cables</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">Arrived</Button>
              <Button variant="outline" className="w-full rounded-xl hover:bg-surface-2">Call Customer</Button>
            </div>
          </div>
        </Card>

        {/* Upcoming Job */}
        <Card className="p-5 opacity-70">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-lg font-[family-name:var(--font-outfit)]">Pickup #REV-8504</h3>
            <span className="text-xs font-medium text-muted-foreground bg-surface-2 px-2 py-0.5 rounded-md">11:30 AM</span>
          </div>
          <p className="text-muted-foreground text-sm flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            45 Green Valley, Andheri West, Mumbai
          </p>
        </Card>
        
        {/* Exception Job */}
        <Card variant="destructive" className="p-5">
           <div className="flex items-center gap-2 text-destructive mb-2">
             <AlertTriangle className="h-4 w-4" />
             <span className="text-sm font-bold">Failed Pickup</span>
           </div>
          <h3 className="font-medium text-lg mb-1 line-through opacity-50 font-[family-name:var(--font-outfit)]">Pickup #REV-8450</h3>
          <p className="text-muted-foreground text-sm flex items-start gap-2 font-medium">
            Customer unavailable. Re-routed to HQ.
          </p>
        </Card>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 w-full h-16 bg-surface-1/90 backdrop-blur-xl border-t border-border flex justify-around items-center z-50 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
         <div className="flex flex-col items-center justify-center w-full h-full text-accent font-medium">
           <MapPin className="h-5 w-5 mb-1" />
           <span className="text-[10px] tracking-wide">Route</span>
         </div>
         <div className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-colors">
           <CheckCircle2 className="h-5 w-5 mb-1" />
           <span className="text-[10px] tracking-wide">History</span>
         </div>
      </nav>
    </div>
  );
}
