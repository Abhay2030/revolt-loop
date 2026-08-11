import { Leaf } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
          <div className="h-20 w-20 bg-surface-1 border border-accent/20 rounded-2xl flex items-center justify-center relative shadow-[0_0_40px_rgba(var(--accent-value),0.2)]">
            <Leaf className="h-10 w-10 text-accent animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        
        <h2 className="text-xl font-medium font-[family-name:var(--font-outfit)] mt-6 text-foreground tracking-tight">
          Loading ReVolt...
        </h2>
      </div>
    </div>
  );
}
