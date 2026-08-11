import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for consumer and enterprise e-waste recycling. Choose the plan that fits your volume with no hidden fees.",
  openGraph: {
    title: "Pricing | ReVolt Energy",
    description: "Transparent pricing for consumer and enterprise e-waste recycling. Choose the plan that fits your volume with no hidden fees.",
  },
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-32 max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <PageHeader 
          title="Simple, Transparent Pricing" 
          description="Choose the plan that fits your volume. No hidden fees. Pay only for compliance and logistics."
          className="items-center text-center [&>div]:text-center"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        {/* Consumer */}
        <Card className="flex flex-col relative">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-2">Consumer</h3>
            <p className="text-sm text-muted-foreground">For individuals clearing out home tech.</p>
          </div>
          <div className="mb-6 pb-6 border-b border-border">
            <span className="text-4xl font-bold">Free</span>
            <div className="text-xs text-muted-foreground mt-2">*May receive payouts for high-value items</div>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: "Free doorstep pickup", inc: true },
              { text: "Standard data wipe", inc: true },
              { text: "Basic recycling certificate", inc: true },
              { text: "Carbon offset tracking", inc: true },
              { text: "Detailed ESG reporting", inc: false },
              { text: "DoD-level data destruction", inc: false },
            ].map((feat, i) => (
              <li key={i} className="flex items-center text-sm">
                {feat.inc ? (
                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-muted-foreground/30 mr-3 shrink-0" />
                )}
                <span className={feat.inc ? "text-foreground" : "text-muted-foreground"}>{feat.text}</span>
              </li>
            ))}
          </ul>
          <Link href="/app/bookings/new">
            <Button className="w-full rounded-xl" variant="outline">Schedule Free Pickup</Button>
          </Link>
        </Card>

        {/* Business */}
        <Card variant="elevated" glow className="flex flex-col relative border-accent/40 shadow-2xl scale-105 z-10 bg-surface-2">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-info" />
          <div className="absolute top-4 right-4"><Badge variant="success">Most Popular</Badge></div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-2">Business</h3>
            <p className="text-sm text-muted-foreground">For startups and SMBs upgrading fleets.</p>
          </div>
          <div className="mb-6 pb-6 border-b border-border">
            <span className="text-4xl font-bold">₹4,999</span><span className="text-muted-foreground">/mo</span>
            <div className="text-xs text-muted-foreground mt-2">Up to 50 assets per month</div>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: "Priority scheduled pickups", inc: true },
              { text: "DoD-level data destruction (NIST)", inc: true },
              { text: "Immutable blockchain certificates", inc: true },
              { text: "Basic ESG compliance reports", inc: true },
              { text: "Dedicated account manager", inc: false },
              { text: "Custom API integrations", inc: false },
            ].map((feat, i) => (
              <li key={i} className="flex items-center text-sm">
                {feat.inc ? (
                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-muted-foreground/30 mr-3 shrink-0" />
                )}
                <span className={feat.inc ? "text-foreground" : "text-muted-foreground"}>{feat.text}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">Start 14-Day Trial</Button>
        </Card>

        {/* Enterprise */}
        <Card className="flex flex-col relative">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-2">Enterprise</h3>
            <p className="text-sm text-muted-foreground">Custom logistics and massive scale.</p>
          </div>
          <div className="mb-6 pb-6 border-b border-border">
            <span className="text-4xl font-bold">Custom</span>
            <div className="text-xs text-muted-foreground mt-2">Volume-based pricing</div>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {[
              { text: "Multi-location bulk pickups", inc: true },
              { text: "On-site physical shredding", inc: true },
              { text: "EPR quota fulfillment", inc: true },
              { text: "Custom ESG reporting dashboard", inc: true },
              { text: "Dedicated account manager", inc: true },
              { text: "Full API & Webhook access", inc: true },
            ].map((feat, i) => (
              <li key={i} className="flex items-center text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent mr-3 shrink-0" />
                <span className="text-foreground">{feat.text}</span>
              </li>
            ))}
          </ul>
          <Link href="/enterprise">
            <Button className="w-full rounded-xl" variant="outline">Contact Sales</Button>
          </Link>
        </Card>
      </div>
      
      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "Do I get paid for my e-waste?", a: "Yes. Our dynamic pricing engine evaluates your devices based on real-time commodity prices and refurbishment value. If the value exceeds the logistics cost, you receive a payout to your wallet." },
            { q: "Is my data safe?", a: "Absolutely. We perform strict, NIST 800-88 compliant data destruction on all storage media. For business and enterprise clients, we issue serialized Certificates of Data Destruction." },
            { q: "What if I have bulky appliances?", a: "Currently, we focus on IT assets, mobiles, and small electronics. For large white goods (fridges, ACs), please contact support for special arrangements." }
          ].map((faq, i) => (
            <Card key={i} className="p-6 bg-surface-1">
              <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
