'use client';
import { useState, useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bell, LogOut, Settings, Leaf } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Breadcrumbs } from './breadcrumbs';

export interface SidebarItem {
  icon: ReactNode;
  label: string;
  href: string;
}

interface DashboardShellProps {
  children: ReactNode;
  navigation: SidebarItem[];
  user: {
    name: string;
    email: string;
    image?: string;
    role: string;
  };
}

export function DashboardShell({ children, navigation, user }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-surface-1 sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
            <Leaf className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="font-[family-name:var(--font-outfit)] font-bold">ReVolt</span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent" />
          </button>
          <button onClick={() => setSidebarOpen(true)} className="p-1 -mr-1">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Sidebar (Desktop + Mobile Drawer) */}
      <AnimatePresence>
        {(sidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
          <>
            {/* Mobile Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            
            {/* Sidebar Content */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 bg-surface-1 border-r border-border flex flex-col",
                "md:relative md:translate-x-0" // Reset transforms on desktop
              )}
            >
              <div className="p-6 hidden md:flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-accent-foreground" />
                </div>
                <span className="font-[family-name:var(--font-outfit)] text-xl font-bold tracking-tight">ReVolt.</span>
              </div>
              
              <div className="md:hidden flex justify-end p-4 border-b border-border">
                <button onClick={() => setSidebarOpen(false)} className="p-2 bg-surface-2 rounded-lg">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* User Profile Snippet */}
              <div className="px-6 py-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <Avatar name={user.name} src={user.image} size="md" online />
                  <div className="overflow-hidden">
                    <div className="font-semibold text-sm truncate">{user.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">{user.role}</div>
                  </div>
                </div>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/app' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group relative",
                        isActive 
                          ? "bg-accent/10 text-accent font-semibold" 
                          : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                      )}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="sidebar-active"
                          className="absolute left-0 top-2 bottom-2 w-1 bg-accent rounded-r-full" 
                        />
                      )}
                      <div className={cn(
                        "transition-colors",
                        isActive ? "text-accent" : "text-muted-foreground group-hover:text-foreground"
                      )}>
                        {item.icon}
                      </div>
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-border mt-auto space-y-1">
                <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-surface-2 hover:text-foreground transition-all">
                  <Settings className="h-5 w-5" /> Settings
                </Link>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all">
                  <LogOut className="h-5 w-5" /> Sign Out
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen md:h-screen md:overflow-hidden">
        {/* Desktop Header */}
        <header className="hidden md:flex h-16 items-center justify-between px-8 border-b border-border bg-background">
          <Breadcrumbs />
          <div className="flex items-center gap-4">
            <button className="h-10 w-10 rounded-full border border-border bg-surface-1 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-colors relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent animate-pulse" />
            </button>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 pb-24 md:pb-8 bg-background">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
