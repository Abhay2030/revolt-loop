import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Briefcase, Package, FileCheck, BarChart3, Settings, LogOut, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || (session.user.role !== 'ENTERPRISE_ADMIN' && session.user.role !== 'ADMIN')) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Enterprise Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-secondary/10 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <div className="font-outfit text-xl font-bold tracking-tight text-white flex items-center gap-2">
            ReVolt <span className="text-accent text-sm font-medium px-2 py-0.5 rounded bg-accent/20">ITAD</span>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-6 px-3">
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Organization</div>
            <div className="font-medium text-sm truncate">TechCorp India Pvt. Ltd.</div>
          </div>
          
          <nav className="space-y-1">
            {[
              { name: "Dashboard", href: "/enterprise", icon: BarChart3 },
              { name: "IT Assets", href: "/enterprise/assets", icon: Briefcase },
              { name: "Bulk Pickups", href: "/enterprise/pickups", icon: Package },
              { name: "Certificates", href: "/enterprise/certificates", icon: FileCheck },
              { name: "Team", href: "/enterprise/team", icon: Users },
              { name: "Settings", href: "/enterprise/settings", icon: Settings },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-white hover:bg-white/5">
            <LogOut className="h-4 w-4 mr-3" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm z-10">
          <h2 className="text-lg font-medium font-outfit text-muted-foreground">Enterprise Portal</h2>
          <div className="flex items-center gap-4">
            <Link href="/enterprise/pickups/new">
              <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90" size="sm">
                Request Bulk Pickup
              </Button>
            </Link>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
