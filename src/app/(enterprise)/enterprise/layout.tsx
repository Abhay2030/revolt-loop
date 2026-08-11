import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardShell, type SidebarItem } from "@/components/layout/dashboard-shell";
import { Briefcase, Package, FileCheck, BarChart3, Settings, Users } from "lucide-react";

export default async function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || (session.user.role !== 'ENTERPRISE_ADMIN' && session.user.role !== 'ADMIN')) {
    redirect("/login");
  }

  const navigation: SidebarItem[] = [
    { label: "Dashboard", href: "/enterprise", icon: <BarChart3 className="h-4 w-4" /> },
    { label: "IT Assets", href: "/enterprise/assets", icon: <Briefcase className="h-4 w-4" /> },
    { label: "Bulk Pickups", href: "/enterprise/pickups", icon: <Package className="h-4 w-4" /> },
    { label: "Certificates", href: "/enterprise/certificates", icon: <FileCheck className="h-4 w-4" /> },
    { label: "Team", href: "/enterprise/team", icon: <Users className="h-4 w-4" /> },
    { label: "Settings", href: "/enterprise/settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <DashboardShell
      navigation={navigation}
      user={{
        name: "TechCorp India Pvt. Ltd.",
        email: session.user?.email || "",
        image: session.user?.image || undefined,
        role: "ENTERPRISE",
      }}
    >
      {children}
    </DashboardShell>
  );
}
