import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { MapPin, Package, Award, Settings, FileCheck, LogOut, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ConsumerLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-secondary/10 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <div className="font-outfit text-xl font-bold tracking-tight text-white">
            ReVolt<span className="text-accent">.</span>
          </div>
        </div>
        <div className="p-4 flex-1">
          <nav className="space-y-1">
            {[
              { name: "Dashboard", href: "/app", icon: Home },
              { name: "My Pickups", href: "/app/bookings", icon: Package },
              { name: "Rewards", href: "/app/rewards", icon: Award },
              { name: "Certificates", href: "/app/certificates", icon: FileCheck },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground">
            <div className="h-8 w-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-outfit">
              {session.user?.name?.charAt(0) || "U"}
            </div>
            <div className="truncate flex-1">{session.user?.name}</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm z-10">
          <h2 className="text-lg font-medium font-outfit">Dashboard</h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full border-white/10" size="sm">
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </Button>
            <Link href="/app/bookings/new">
              <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90" size="sm">
                Schedule Pickup
              </Button>
            </Link>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
