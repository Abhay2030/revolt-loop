'use client';
import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium transition-colors duration-200',
              focused ? 'text-accent-soft' : 'text-muted-foreground',
              error && 'text-destructive'
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            type={type}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              'w-full h-12 rounded-xl border bg-surface-1 px-4 text-foreground placeholder:text-muted-foreground/60',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50',
              'hover:border-border/80',
              icon && 'pl-10',
              error && 'border-destructive/50 focus:ring-destructive/40',
              !error && 'border-border',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-destructive font-medium animate-slide-up">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
