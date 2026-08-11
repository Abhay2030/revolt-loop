import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'card' | 'table-row' | 'chart' | 'avatar' | 'default';
}

export function Skeleton({ className, variant = 'default' }: SkeletonProps) {
  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-3/4',
    card: 'h-40 w-full rounded-2xl',
    'table-row': 'h-12 w-full rounded-lg',
    chart: 'h-64 w-full rounded-2xl',
    avatar: 'h-10 w-10 rounded-full',
  };

  return (
    <div
      className={cn(
        'animate-shimmer rounded-lg bg-surface-2',
        variants[variant],
        className
      )}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-border bg-surface-1 p-6 space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-4 w-24" />
        <Skeleton variant="avatar" className="h-8 w-8" />
      </div>
      <Skeleton className="h-8 w-20" />
      <Skeleton variant="text" className="w-32" />
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2">
      <Skeleton variant="table-row" className="bg-surface-2" />
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton key={i} variant="table-row" />
      ))}
    </div>
  );
}
