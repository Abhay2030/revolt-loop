'use client';
import { Factory, PackageCheck, Cpu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";

const pendingInbound = [
  { id: "SHP-0012", origin: "Mumbai Hub", weight: "1,240 kg", eta: "Today, 14:00" },
  { id: "SHP-0013", origin: "Pune Hub", weight: "850 kg", eta: "Tomorrow, 09:00" },
];

const columns = [
  { key: "id", label: "Shipment ID", className: "font-medium text-foreground" },
  { key: "origin", label: "Origin Facility" },
  { key: "weight", label: "Estimated Weight" },
  { key: "eta", label: "ETA" },
  { 
    key: "action", 
    label: "Action",
    render: () => (
      <Button variant="outline" size="sm" className="h-8">Process</Button>
    )
  },
];

export default function PartnerDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Facility Overview" 
        description="Monitor inbound materials, processing status, and compliance reporting."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard 
          label="Inbound Queue" 
          value="2,090 kg" 
          icon={<PackageCheck className="h-5 w-5" />} 
        />
        <StatCard 
          label="Processed (Today)" 
          value="4,500 kg" 
          icon={<Scale className="h-5 w-5" />} 
        />
        <StatCard 
          label="Active Shredders" 
          value="3 / 4" 
          icon={<Cpu className="h-5 w-5" />} 
          variant="accent"
        />
        <StatCard 
          label="Facility Status" 
          value="Optimal" 
          icon={<Factory className="h-5 w-5" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Incoming Shipments</h2>
          <DataTable 
            columns={columns} 
            data={pendingInbound} 
            className="border-none shadow-sm"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Quick Actions</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <Button className="w-full justify-start h-12 rounded-xl bg-surface-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                <PackageCheck className="mr-3 h-5 w-5" /> Receive Shipment
              </Button>
              <Button className="w-full justify-start h-12 rounded-xl bg-surface-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                <Cpu className="mr-3 h-5 w-5" /> Start Shredding Batch
              </Button>
              <Button className="w-full justify-start h-12 rounded-xl bg-surface-2 text-foreground hover:bg-accent hover:text-accent-foreground">
                <Scale className="mr-3 h-5 w-5" /> Log Recovered Materials
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
