import { ShieldCheck, Server, FileCheck, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnterpriseDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-outfit font-medium tracking-tight">ITAD Overview</h1>
          <p className="text-muted-foreground mt-1">Manage your corporate hardware lifecycle and ESG impact.</p>
        </div>
        <Button variant="outline" className="border-white/10 rounded-xl">
          <Download className="h-4 w-4 mr-2" /> Download ESG Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Assets Processed (YTD)", value: "1,240", icon: Server },
          { label: "Data Destruction Certs", value: "850", icon: ShieldCheck },
          { label: "Active Pickups", value: "2", icon: ArrowRight },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl border bg-secondary/10 border-white/5 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-white/5 text-muted-foreground">
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="text-3xl font-outfit font-medium mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Asset Dispositions */}
        <div className="space-y-6">
          <h2 className="text-xl font-outfit font-medium">Recent Dispositions</h2>
          <div className="border border-white/5 bg-secondary/10 rounded-3xl overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 border-b border-white/5 text-muted-foreground uppercase text-xs font-medium">
                <tr>
                  <th className="px-6 py-4">Batch ID</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Certificate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { id: "BCH-8821", items: "45 Laptops", status: "Certified", cert: "CERT-8821" },
                  { id: "BCH-8822", items: "120 Monitors", status: "Processing", cert: "Pending" },
                  { id: "BCH-8823", items: "12 Servers", status: "In Transit", cert: "-" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{row.id}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.items}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                        row.status === 'Certified' ? 'bg-accent/10 text-accent border border-accent/20' : 
                        row.status === 'Processing' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {row.cert !== '-' && row.cert !== 'Pending' ? (
                        <span className="flex items-center gap-1 text-accent hover:underline cursor-pointer">
                          <FileCheck className="h-3 w-3" /> {row.cert}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">{row.cert}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Upload */}
        <div className="space-y-6">
          <h2 className="text-xl font-outfit font-medium">Bulk Asset Upload</h2>
          <div className="p-8 rounded-3xl border border-dashed border-white/20 bg-secondary/10 flex flex-col items-center justify-center text-center min-h-[300px]">
            <Server className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="font-medium text-lg mb-2">Upload Asset Manifest</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Upload a CSV containing serial numbers, asset tags, and device types to schedule a bulk ITAD pickup.
            </p>
            <Button className="rounded-xl px-8 bg-white text-black hover:bg-white/90">
              Browse Files
            </Button>
            <div className="mt-4 text-xs text-muted-foreground hover:text-white cursor-pointer transition-colors">
              Download CSV Template
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
