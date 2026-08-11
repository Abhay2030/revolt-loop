'use client';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom';
  className?: string;
}

export function Tooltip({ content, children, position = 'top', className }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-3 py-1.5 text-xs font-medium rounded-lg',
            'bg-foreground text-background shadow-lg',
            'animate-scale-in whitespace-nowrap pointer-events-none',
            position === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
            position === 'bottom' && 'top-full left-1/2 -translate-x-1/2 mt-2'
          )}
        >
          {content}
          <div
            className={cn(
              'absolute left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-foreground',
              position === 'top' && '-bottom-1',
              position === 'bottom' && '-top-1'
            )}
          />
        </div>
      )}
    </div>
  );
}
