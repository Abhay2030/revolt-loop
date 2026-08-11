'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface BarChartData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: BarChartData[];
  height?: number;
  showLabels?: boolean;
  showValues?: boolean;
  className?: string;
}

export function BarChart({
  data,
  height = 200,
  showLabels = true,
  showValues = true,
  className,
}: BarChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <div className="flex items-end gap-2" style={{ height }}>
        {data.map((item, i) => {
          const barHeight = (item.value / maxValue) * 100;
          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
              {showValues && (
                <motion.span
                  className="text-xs font-medium text-muted-foreground mb-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.05 + 0.3 }}
                >
                  {item.value}
                </motion.span>
              )}
              <motion.div
                className="w-full rounded-t-lg min-h-[4px]"
                style={{
                  backgroundColor: item.color || 'var(--accent)',
                }}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${barHeight}%` } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            </div>
          );
        })}
      </div>
      {showLabels && (
        <div className="flex gap-2 mt-2">
          {data.map((item, i) => (
            <div key={i} className="flex-1 text-center">
              <span className="text-[10px] text-muted-foreground truncate block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
