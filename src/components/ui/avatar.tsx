import { cn } from '@/lib/utils';

interface AvatarProps {
  name?: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  online?: boolean;
  className?: string;
}

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-lg',
};

export function Avatar({ name, src, size = 'md', online, className }: AvatarProps) {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  return (
    <div className={cn('relative inline-flex', className)}>
      <div
        className={cn(
          'rounded-full flex items-center justify-center font-semibold font-[family-name:var(--font-outfit)]',
          'bg-gradient-to-br from-accent/20 to-accent/5 text-accent-soft border border-accent/20',
          sizes[size]
        )}
      >
        {src ? (
          <img
            src={src}
            alt={name || 'Avatar'}
            className="rounded-full object-cover w-full h-full"
          />
        ) : (
          initials
        )}
      </div>
      {online !== undefined && (
        <span
          className={cn(
            'absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background',
            online ? 'bg-success' : 'bg-muted-foreground'
          )}
          aria-label={online ? 'Online' : 'Offline'}
        />
      )}
    </div>
  );
}
