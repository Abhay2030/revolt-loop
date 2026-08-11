'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface DonutSegment {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
  className?: string;
}

export function DonutChart({
  segments,
  size = 180,
  strokeWidth = 24,
  centerLabel,
  centerValue,
  className,
}: DonutChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let cumulativeOffset = 0;

  return (
    <div ref={ref} className={cn('relative inline-flex', className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.06"
          strokeWidth={strokeWidth}
        />

        {/* Segments */}
        {segments.map((segment, i) => {
          const segmentLength = (segment.value / total) * circumference;
          const offset = cumulativeOffset;
          cumulativeOffset += segmentLength;

          return (
            <motion.circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${center} ${center})`}
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={
                isInView
                  ? { strokeDasharray: `${segmentLength} ${circumference - segmentLength}` }
                  : {}
              }
              transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
            />
          );
        })}
      </svg>

      {/* Center text */}
      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {centerValue && (
            <motion.span
              className="text-2xl font-bold font-[family-name:var(--font-outfit)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              {centerValue}
            </motion.span>
          )}
          {centerLabel && (
            <span className="text-xs text-muted-foreground">{centerLabel}</span>
          )}
        </div>
      )}

      {/* Legend */}
      {segments.length > 0 && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          {segments.map((s, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-[10px] text-muted-foreground whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
