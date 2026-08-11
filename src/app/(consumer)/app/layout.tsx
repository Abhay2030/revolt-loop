import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardShell, type SidebarItem } from "@/components/layout/dashboard-shell";
import { Home, Package, Award, FileCheck } from "lucide-react";

export default async function ConsumerLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/login");

  const navigation: SidebarItem[] = [
    { label: "Dashboard", href: "/app", icon: <Home className="h-4 w-4" /> },
    { label: "My Pickups", href: "/app/bookings", icon: <Package className="h-4 w-4" /> },
    { label: "Rewards", href: "/app/rewards", icon: <Award className="h-4 w-4" /> },
    { label: "Certificates", href: "/app/certificates", icon: <FileCheck className="h-4 w-4" /> },
  ];

  return (
    <DashboardShell
      navigation={navigation}
      user={{
        name: session.user?.name || "User",
        email: session.user?.email || "",
        image: session.user?.image || undefined,
        role: "Consumer",
      }}
    >
      {children}
    </DashboardShell>
  );
}
