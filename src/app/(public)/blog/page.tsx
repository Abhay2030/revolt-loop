import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description: "Insights, guides, and updates on the circular economy, EPR compliance, and sustainable e-waste recycling.",
  openGraph: {
    title: "Blog & Resources | ReVolt Energy",
    description: "Insights, guides, and updates on the circular economy, EPR compliance, and sustainable e-waste recycling.",
  },
};

const posts = [
  {
    title: "Understanding E-Waste Legislation in India (2024 Update)",
    category: "Policy",
    date: "Aug 12, 2026",
    excerpt: "A comprehensive guide to the latest EPR targets and what they mean for OEMs and consumers.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Hidden Value of Urban Mining",
    category: "Sustainability",
    date: "Jul 28, 2026",
    excerpt: "Why extracting gold from old iPhones is 100x more efficient than digging it out of the ground.",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Data Security in IT Asset Disposition (ITAD)",
    category: "Enterprise",
    date: "Jul 15, 2026",
    excerpt: "How ReVolt Loop guarantees NIST 800-88 compliance for retiring corporate fleets.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-32 max-w-6xl">
      <div className="mb-16">
        <PageHeader 
          title="Insights & Resources" 
          description="News, research, and technical guides on building a circular future."
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {posts.map((post, i) => (
          <Card key={i} noPadding className="overflow-hidden group hover:border-accent/40 transition-colors flex flex-col cursor-pointer">
            <div className="h-48 overflow-hidden relative">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="info" className="bg-background/80 backdrop-blur border-border text-foreground">
                  {post.category}
                </Badge>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-xs text-muted-foreground mb-3">{post.date}</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">{post.excerpt}</p>
              <div className="mt-6 flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-10 bg-surface-2">
          <BookOpen className="h-8 w-8 text-info mb-6" />
          <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-3">API Documentation</h3>
          <p className="text-muted-foreground mb-6">Integrate ReVolt Loop's logistics and valuation engine directly into your enterprise ERP or retail POS.</p>
          <Button variant="outline" className="rounded-xl">View Developer Docs</Button>
        </Card>
        
        <Card className="p-10 bg-surface-2">
          <FileText className="h-8 w-8 text-warning mb-6" />
          <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] mb-3">EPR Compliance Guide</h3>
          <p className="text-muted-foreground mb-6">Download our free whitepaper on navigating Extended Producer Responsibility regulations.</p>
          <Button variant="outline" className="rounded-xl">Download PDF</Button>
        </Card>
      </div>
    </div>
  );
}
