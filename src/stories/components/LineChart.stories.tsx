import { LineChart } from '@components/LineChart';
import React from 'react';

const sampleData = [
  { name: 'Jan', sales: 400, profit: 240, revenue: 800 },
  { name: 'Feb', sales: 300, profit: 139, revenue: 600 },
  { name: 'Mar', sales: 200, profit: 980, revenue: 1000 },
  { name: 'Apr', sales: 278, profit: 390, revenue: 900 },
  { name: 'May', sales: 189, profit: 480, revenue: 700 },
  { name: 'Jun', sales: 239, profit: 380, revenue: 850 },
];

export const Default = () => (
  <div className="w-[800px] h-full py-12">
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Chart</h3>
        <LineChart
          data={sampleData}
          lines={[
            { key: 'sales', name: 'Sales', color: 'hsl(var(--primary))' },
            { key: 'profit', name: 'Profit', color: 'hsl(var(--accent))' },
          ]}
          height={400}
          xAxisLabel="Month"
          yAxisLabel="Amount"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Single Line</h3>
        <LineChart
          data={sampleData}
          lines={[{ key: 'revenue', name: 'Revenue', color: 'hsl(var(--primary))' }]}
          height={400}
          xAxisLabel="Month"
          yAxisLabel="Revenue"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">No Grid</h3>
        <LineChart
          data={sampleData}
          lines={[
            { key: 'sales', name: 'Sales', color: 'hsl(var(--primary))' },
            { key: 'profit', name: 'Profit', color: 'hsl(var(--accent))' },
          ]}
          height={400}
          showGrid={false}
          xAxisLabel="Month"
          yAxisLabel="Amount"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">No Legend</h3>
        <LineChart
          data={sampleData}
          lines={[
            { key: 'sales', name: 'Sales', color: 'hsl(var(--primary))' },
            { key: 'profit', name: 'Profit', color: 'hsl(var(--accent))' },
          ]}
          height={400}
          showLegend={false}
          xAxisLabel="Month"
          yAxisLabel="Amount"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Custom Colors</h3>
        <LineChart
          data={sampleData}
          lines={[
            { key: 'sales', name: 'Sales', color: '#FF6B6B', strokeWidth: 3 },
            { key: 'profit', name: 'Profit', color: '#4ECDC4', strokeWidth: 2 },
            { key: 'revenue', name: 'Revenue', color: '#45B7D1', strokeWidth: 2 },
          ]}
          height={400}
          xAxisLabel="Month"
          yAxisLabel="Amount"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Minimal Trend (Single Line)</h3>
        <LineChart
          data={sampleData}
          lines={[{ key: 'sales', name: 'Sales', color: 'hsl(var(--primary))', strokeWidth: 2 }]}
          height={100}
          minimal
          showTooltip
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Minimal Trend (Multiple Lines)</h3>
        <LineChart
          data={sampleData}
          lines={[
            { key: 'sales', name: 'Sales', color: 'hsl(var(--primary))', strokeWidth: 2 },
            { key: 'profit', name: 'Profit', color: 'hsl(var(--accent))', strokeWidth: 2 },
          ]}
          height={100}
          minimal
          showTooltip
        />
      </div>
    </div>
  </div>
);

Default.storyName = 'LineChart';
export default { title: 'Components/LineChart' };
