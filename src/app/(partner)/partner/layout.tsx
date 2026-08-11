import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardShell, type SidebarItem } from "@/components/layout/dashboard-shell";
import { Factory, Cpu, FileCheck, PackageCheck, Settings } from "lucide-react";

export default async function PartnerLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session || (session.user.role !== 'PARTNER' && session.user.role !== 'ADMIN')) {
    redirect("/login");
  }

  const navigation: SidebarItem[] = [
    { label: "Facility Overview", href: "/partner", icon: <Factory className="h-4 w-4" /> },
    { label: "Inbound Shipments", href: "/partner/inbound", icon: <PackageCheck className="h-4 w-4" /> },
    { label: "Processing & Shredding", href: "/partner/shred", icon: <Cpu className="h-4 w-4" /> },
    { label: "Compliance & Certs", href: "/partner/compliance", icon: <FileCheck className="h-4 w-4" /> },
    { label: "Settings", href: "/partner/settings", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <DashboardShell
      navigation={navigation}
      user={{
        name: "EcoRecycle Facility",
        email: session.user?.email || "",
        image: session.user?.image || undefined,
        role: "RECYCLING PARTNER",
      }}
    >
      {children}
    </DashboardShell>
  );
}
