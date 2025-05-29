import clsx from 'clsx';
import React from 'react';
import { Cell, Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from './Card';

export interface PieChartData {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartProps {
  data: PieChartData[];
  height?: number;
  className?: string;
  showLegend?: boolean;
  showTooltip?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  animationDuration?: number;
  paddingAngle?: number;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-md p-2 text-foreground">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data,
      height = 400,
      className,
      showLegend = true,
      showTooltip = true,
      innerRadius = 0,
      outerRadius = '80%',
      animationDuration = 500,
      paddingAngle = 0,
    },
    ref,
  ) => {
    return (
      <Card ref={ref} className={clsx('p-4', className)}>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={paddingAngle}
              dataKey="value"
              animationDuration={animationDuration}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || `hsl(var(--primary))`}
                  stroke="hsl(var(--card))"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            {showTooltip && <Tooltip content={<CustomTooltip />} />}
            {showLegend && (
              <Legend
                wrapperStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
          </RechartsPieChart>
        </ResponsiveContainer>
      </Card>
    );
  },
);
