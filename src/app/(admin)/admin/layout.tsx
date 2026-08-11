import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Activity, Users, Truck, Briefcase, FileText, Database, ShieldAlert, Settings, Leaf } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN')) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-secondary/10 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/5 bg-accent/5">
          <div className="font-outfit text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Leaf className="h-5 w-5 text-accent" />
            Operations
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <nav className="space-y-1">
            {[
              { name: "Overview", href: "/admin", icon: Activity },
              { name: "Bookings", href: "/admin/bookings", icon: FileText },
              { name: "Users", href: "/admin/users", icon: Users },
              { name: "Drivers", href: "/admin/drivers", icon: Truck },
              { name: "Partners", href: "/admin/partners", icon: Briefcase },
              { name: "ESG & Analytics", href: "/admin/esg", icon: Database },
              { name: "AI Review Queue", href: "/admin/ai", icon: ShieldAlert },
              { name: "Settings", href: "/admin/settings", icon: Settings },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-background/50 backdrop-blur-sm z-10">
          <h2 className="text-lg font-medium font-outfit text-muted-foreground">Command Center</h2>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-muted-foreground">Logged in as </span>
              <span className="font-bold">{session.user.name}</span>
            </div>
            <div className="h-8 px-3 rounded-full bg-accent/20 text-accent flex items-center text-xs font-bold border border-accent/20">
              {session.user.role}
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
