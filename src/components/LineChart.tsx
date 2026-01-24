import clsx from 'clsx';
import React from 'react';
import * as Recharts from 'recharts';
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

const CustomLineChartTooltip = ({ active, payload, label, data }: any) => {
  if (active && payload && payload.length) {
    let displayLabel = label;
    if (typeof label === 'number' && Array.isArray(data) && data[label] && data[label].name) {
      displayLabel = data[label].name;
    }
    return (
      <div className="bg-card border border-border rounded-md p-2 text-foreground">
        <p className="font-medium">{displayLabel}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

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
        <Recharts.ResponsiveContainer width="100%" height={height}>
          <Recharts.LineChart
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
            {!minimal && showGrid && (
              <Recharts.CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
            )}
            {!minimal && (
              <Recharts.XAxis
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
              <Recharts.YAxis
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
              <Recharts.Tooltip
                content={<CustomLineChartTooltip data={data} />}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
            {!minimal && showLegend && (
              <Recharts.Legend
                wrapperStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
            {lines.map((line) => (
              <Recharts.Line
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
          </Recharts.LineChart>
        </Recharts.ResponsiveContainer>
      </Card>
    );
  },
);
