'use client';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MiniSparkline } from './mini-sparkline';

export interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: { value: number; label?: string };
  sparklineData?: number[];
  variant?: 'default' | 'accent' | 'destructive';
  className?: string;
}

export function StatCard({
  label,
  value,
  icon,
  trend,
  sparklineData,
  variant = 'default',
  className,
}: StatCardProps) {
  const isPositive = trend ? trend.value >= 0 : true;

  const variantStyles = {
    default: 'bg-surface-1 border-border',
    accent: 'bg-accent/5 border-accent/20',
    destructive: 'bg-destructive/10 border-destructive/20',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border p-6 flex flex-col card-glow transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-sm font-medium text-muted-foreground">{label}</div>
        {icon && (
          <div className="p-2 rounded-xl bg-surface-2 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-3xl font-[family-name:var(--font-outfit)] font-semibold tracking-tight">
            {value}
          </div>
          {trend && (
            <div
              className={cn(
                'flex items-center gap-1 mt-1 text-xs font-semibold',
                isPositive ? 'text-success' : 'text-destructive'
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              <span>
                {isPositive ? '+' : ''}
                {trend.value}%
              </span>
              {trend.label && (
                <span className="text-muted-foreground font-normal ml-1">
                  {trend.label}
                </span>
              )}
            </div>
          )}
        </div>

        {sparklineData && sparklineData.length > 0 && (
          <MiniSparkline
            data={sparklineData}
            color={isPositive ? 'var(--success)' : 'var(--destructive)'}
          />
        )}
      </div>
    </div>
  );
}
