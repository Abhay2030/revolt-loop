import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-6">
      {/* Background patterns */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <div className="relative z-10 max-w-md text-center">
        <div className="h-24 w-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <AlertCircle className="h-12 w-12" />
        </div>
        
        <h1 className="text-8xl font-bold font-[family-name:var(--font-outfit)] tracking-tighter mb-4 text-foreground/80">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto rounded-xl h-12 px-6">
              <Home className="mr-2 h-4 w-4" /> Home Page
            </Button>
          </Link>
          <Link href="/app">
            <Button variant="outline" className="w-full sm:w-auto rounded-xl h-12 px-6">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
