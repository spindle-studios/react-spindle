import clsx from 'clsx';
import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card } from './Card';

export interface DataPoint {
  name: string;
  [key: string]: any;
}

export interface LineChartProps {
  data: DataPoint[];
  lines: {
    key: string;
    color?: string;
    strokeWidth?: number;
    name?: string;
  }[];
  height?: number;
  className?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  animationDuration?: number;
  minimal?: boolean;
}

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      lines,
      height = 400,
      className,
      showGrid = true,
      showLegend = true,
      showTooltip = true,
      xAxisLabel,
      yAxisLabel,
      animationDuration = 500,
      minimal = false,
    },
    ref,
  ) => {
    return (
      <Card ref={ref} className={clsx('p-4', className)}>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart
            data={data}
            margin={
              minimal
                ? { top: 5, right: 5, left: 5, bottom: 5 }
                : {
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }
            }
          >
            {!minimal && showGrid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />}
            {!minimal && (
              <XAxis
                dataKey="name"
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--foreground))' }}
                label={
                  xAxisLabel
                    ? {
                        value: xAxisLabel,
                        position: 'bottom',
                        fill: 'hsl(var(--foreground))',
                      }
                    : undefined
                }
              />
            )}
            {!minimal && (
              <YAxis
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--foreground))' }}
                label={
                  yAxisLabel
                    ? {
                        value: yAxisLabel,
                        angle: -90,
                        position: 'insideLeft',
                        fill: 'hsl(var(--foreground))',
                      }
                    : undefined
                }
              />
            )}
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  color: 'hsl(var(--foreground))',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
            )}
            {!minimal && showLegend && (
              <Legend
                wrapperStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
            {lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                name={line.name || line.key}
                stroke={line.color || 'hsl(var(--primary))'}
                strokeWidth={line.strokeWidth || 2}
                dot={minimal ? false : { fill: 'hsl(var(--card))', stroke: line.color || 'hsl(var(--primary))' }}
                activeDot={minimal ? false : { r: 8, fill: line.color || 'hsl(var(--primary))' }}
                animationDuration={animationDuration}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </Card>
    );
  },
);
