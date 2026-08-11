import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Inbox } from 'lucide-react';
import { Button } from './button';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: { label: string; onClick?: () => void; href?: string };
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 px-6 text-center', className)}>
      <div className="h-16 w-16 rounded-2xl bg-surface-2 border border-border flex items-center justify-center mb-6 text-muted-foreground">
        {icon || <Inbox className="h-7 w-7" />}
      </div>
      <h3 className="text-lg font-[family-name:var(--font-outfit)] font-medium tracking-tight mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
      )}
      {action && (
        <Button
          className="rounded-xl"
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}
