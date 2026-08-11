'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface LineChartProps {
  data: number[];
  labels?: string[];
  height?: number;
  color?: string;
  showDots?: boolean;
  showGradient?: boolean;
  className?: string;
}

export function LineChart({
  data,
  labels,
  height = 200,
  color = 'var(--accent)',
  showDots = true,
  showGradient = true,
  className,
}: LineChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  if (data.length < 2) return null;

  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal || 1;

  const padding = 24;
  const svgWidth = 400;
  const svgHeight = height;
  const chartWidth = svgWidth - padding * 2;
  const chartHeight = svgHeight - padding * 2;

  const points = data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * chartWidth,
    y: padding + chartHeight - ((val - minVal) / range) * chartHeight,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${svgHeight - padding} L ${points[0].x} ${svgHeight - padding} Z`;

  const gradientId = `line-gradient-${Math.random().toString(36).slice(2)}`;

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full" style={{ height }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
          <line
            key={pct}
            x1={padding}
            y1={padding + chartHeight * pct}
            x2={svgWidth - padding}
            y2={padding + chartHeight * pct}
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}

        {/* Gradient fill */}
        {showGradient && (
          <motion.path
            d={areaPath}
            fill={`url(#${gradientId})`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        )}

        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {/* Dots */}
        {showDots &&
          points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="4"
              fill="var(--background)"
              stroke={color}
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.05 }}
            />
          ))}
      </svg>

      {/* Labels */}
      {labels && labels.length > 0 && (
        <div className="flex justify-between px-6 mt-1">
          {labels.map((label, i) => (
            <span key={i} className="text-[10px] text-muted-foreground">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
