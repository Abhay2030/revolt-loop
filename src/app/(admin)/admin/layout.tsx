import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardShell, type SidebarItem } from "@/components/layout/dashboard-shell";
import { Activity, Users, Truck, Briefcase, FileText, Database, ShieldAlert, Settings } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'SUPER_ADMIN')) {
    redirect("/login");
  }

  const navigation: SidebarItem[] = [
    { label: "Overview", href: "/admin", icon: <Activity className="h-4 w-4" /> },
    { label: "Bookings", href: "/admin/bookings", icon: <FileText className="h-4 w-4" /> },
    { label: "Users", href: "/admin/users", icon: <Users className="h-4 w-4" /> },
    { label: "Drivers", href: "/admin/drivers", icon: <Truck className="h-4 w-4" /> },
    { label: "Partners", href: "/admin/partners", icon: <Briefcase className="h-4 w-4" /> },
    { label: "ESG & Analytics", href: "/admin/esg", icon: <Database className="h-4 w-4" /> },
    { label: "AI Review Queue", href: "/admin/ai", icon: <ShieldAlert className="h-4 w-4" /> },
    { label: "Settings", href: "/admin/settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <DashboardShell
      navigation={navigation}
      user={{
        name: session.user?.name || "Admin",
        email: session.user?.email || "",
        image: session.user?.image || undefined,
        role: session.user?.role || "ADMIN",
      }}
    >
      {children}
    </DashboardShell>
  );
}
