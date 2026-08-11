'use client';
import { ShieldCheck, Server, FileCheck, ArrowRight, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";

const recentDispositions = [
  { id: "BCH-8821", items: "45 Laptops", status: "Certified", cert: "CERT-8821" },
  { id: "BCH-8822", items: "120 Monitors", status: "Processing", cert: "Pending" },
  { id: "BCH-8823", items: "12 Servers", status: "In Transit", cert: "-" },
];

const columns = [
  { key: "id", label: "Batch ID", sortable: true, className: "font-medium" },
  { key: "items", label: "Items", sortable: true },
  { 
    key: "status", 
    label: "Status",
    render: (item: any) => (
      <Badge 
        variant={
          item.status === 'Certified' ? 'success' : 
          item.status === 'Processing' ? 'warning' : 'info'
        }
      >
        {item.status}
      </Badge>
    )
  },
  { 
    key: "cert", 
    label: "Certificate",
    render: (item: any) => (
      item.cert !== '-' && item.cert !== 'Pending' ? (
        <span className="flex items-center gap-1 text-accent hover:underline cursor-pointer font-medium">
          <FileCheck className="h-4 w-4" /> {item.cert}
        </span>
      ) : (
        <span className="text-muted-foreground">{item.cert}</span>
      )
    )
  },
];

export default function EnterpriseDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="ITAD Overview" 
        description="Manage your corporate hardware lifecycle and ESG impact."
        actions={
          <Button variant="outline" className="rounded-xl">
            <Download className="h-4 w-4 mr-2" /> Download ESG Report
          </Button>
        }
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          label="Assets Processed (YTD)" 
          value="1,240" 
          icon={<Server className="h-5 w-5" />} 
          trend={{ value: 15, label: "vs last year" }}
        />
        <StatCard 
          label="Data Destruction Certs" 
          value="850" 
          icon={<ShieldCheck className="h-5 w-5" />} 
          variant="accent"
        />
        <StatCard 
          label="Active Pickups" 
          value="2" 
          icon={<ArrowRight className="h-5 w-5" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Asset Dispositions */}
        <div className="space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Recent Dispositions</h2>
          <DataTable 
            columns={columns} 
            data={recentDispositions} 
            className="border-none shadow-sm"
          />
        </div>

        {/* Quick Upload */}
        <div className="space-y-6">
          <h2 className="text-xl font-[family-name:var(--font-outfit)] font-semibold">Bulk Asset Upload</h2>
          <Card className="flex flex-col items-center justify-center text-center min-h-[300px] border-dashed border-2 hover:border-accent/40 hover:bg-surface-2 transition-colors cursor-pointer group">
            <div className="h-16 w-16 rounded-full bg-surface-2 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Upload className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Upload Asset Manifest</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Upload a CSV containing serial numbers, asset tags, and device types to schedule a bulk ITAD pickup.
            </p>
            <Button className="rounded-xl px-8" variant="secondary">
              Browse Files
            </Button>
            <div className="mt-4 text-xs text-accent hover:underline cursor-pointer transition-colors font-medium">
              Download CSV Template
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
