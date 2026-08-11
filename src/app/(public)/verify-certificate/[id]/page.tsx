import { ShieldCheck, Leaf, Calendar, Building, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifyCertificatePage({ params }: { params: { id: string } }) {
  // In a real implementation, this would fetch from the database using params.id
  // For MVP UI demonstration, we render a verified state.
  const isValid = true;
  
  if (!isValid) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="h-24 w-24 rounded-full bg-destructive/20 text-destructive flex items-center justify-center mb-6">
          <ShieldCheck className="h-12 w-12 opacity-50" />
        </div>
        <h1 className="text-3xl font-outfit font-medium tracking-tight mb-2">Certificate Not Found</h1>
        <p className="text-muted-foreground max-w-md">The certificate you are trying to verify does not exist or has been revoked.</p>
        <Link href="/" className="mt-8">
          <Button variant="outline" className="rounded-full">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent/20 text-accent mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-outfit font-medium tracking-tight">Certificate Verified</h1>
          <p className="text-muted-foreground mt-2">This is an authentic ReVolt Energy recycling certificate.</p>
        </div>

        <div className="border border-white/10 rounded-3xl bg-secondary/10 overflow-hidden backdrop-blur-md relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="p-8 md:p-12 relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="font-outfit text-2xl font-bold tracking-tighter text-white mb-1">
                  ReVolt<span className="text-accent">.</span>
                </div>
                <div className="text-xs text-muted-foreground font-mono">CERTIFICATE OF IMPACT</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Certificate ID</div>
                <div className="font-mono font-medium text-white">{params.id || 'CERT-8492-ABCD'}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2"><Building className="h-4 w-4" /> Issued To</div>
                <div className="font-medium text-lg">TechCorp India Pvt. Ltd.</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2"><Calendar className="h-4 w-4" /> Processing Date</div>
                <div className="font-medium text-lg">Oct 14, 2026</div>
              </div>
            </div>

            <div className="border-t border-b border-white/10 py-8 mb-12">
              <div className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Materials Recovered</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>14x Laptops (Secure Data Wipe Confirmed)</span>
                  <span className="font-medium text-white">28.5 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>32x Smartphones</span>
                  <span className="font-medium text-white">6.2 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Assorted Cables & Chargers</span>
                  <span className="font-medium text-white">12.0 kg</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex items-center gap-6">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Leaf className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <div className="font-medium text-white mb-1 text-lg">Environmental Impact</div>
                <div className="text-sm text-accent">An estimated 145.2 kg of CO₂e emissions avoided and 46.7 kg of e-waste diverted from landfill.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          For any discrepancies, please contact <a href="#" className="text-white hover:underline">compliance@revolt.energy</a>
        </div>
      </div>
    </div>
  );
}
