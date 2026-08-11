'use client';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/app");
        router.refresh();
      }
    } catch (err) {
      setError("An error occurred during sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <div className="w-full max-w-md p-8 relative z-10 border border-white/10 rounded-3xl bg-secondary/20 backdrop-blur-xl shadow-2xl">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center justify-center mb-6">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
              <Leaf className="h-6 w-6 text-accent-foreground" />
            </div>
          </Link>
          <h1 className="text-3xl font-outfit font-medium tracking-tight">Sign in to ReVolt</h1>
          <p className="text-muted-foreground mt-2">Enter your details to access your account</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm font-medium text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">Email address</label>
            <input 
              id="email"
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-black/20 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white placeholder:text-muted-foreground"
              placeholder="user@example.com"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium" htmlFor="password">Password</label>
              <Link href="/forgot-password" className="text-xs text-accent hover:underline">Forgot password?</Link>
            </div>
            <input 
              id="password"
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-white/10 bg-black/20 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-white"
              placeholder="••••••••"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 text-base"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account? <Link href="/register" className="text-accent hover:underline font-medium">Create one</Link>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-muted-foreground text-center space-y-2">
          <p>Demo Credentials:</p>
          <div className="flex justify-center gap-4">
            <span className="bg-black/30 px-2 py-1 rounded">user@example.com</span>
            <span className="bg-black/30 px-2 py-1 rounded">admin@revolt.energy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
