import { PieChart } from '@components/PieChart';
import React from 'react';

const sampleData = [
  { name: 'Product A', value: 400, color: 'hsl(var(--primary))' },
  { name: 'Product B', value: 300, color: 'hsl(var(--accent))' },
  { name: 'Product C', value: 200, color: '#FF6B6B' },
  { name: 'Product D', value: 100, color: '#4ECDC4' },
];

export const Default = () => (
  <div className="w-[800px] h-full py-12">
    <div className="flex flex-col gap-12">
      <div>
        <h3 className="text-sm font-medium mb-4">Default Pie Chart</h3>
        <PieChart data={sampleData} height={400} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Donut Chart</h3>
        <PieChart data={sampleData} height={400} innerRadius={60} outerRadius={80} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">With Padding</h3>
        <PieChart data={sampleData} height={400} paddingAngle={2} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">No Legend</h3>
        <PieChart data={sampleData} height={400} showLegend={false} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Custom Colors</h3>
        <PieChart
          data={[
            { name: 'Product A', value: 400, color: '#FF6B6B' },
            { name: 'Product B', value: 300, color: '#4ECDC4' },
            { name: 'Product C', value: 200, color: '#45B7D1' },
            { name: 'Product D', value: 100, color: '#96CEB4' },
          ]}
          height={400}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Small Size</h3>
        <PieChart data={sampleData} height={200} innerRadius={30} outerRadius={40} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Large Donut</h3>
        <PieChart data={sampleData} height={400} innerRadius={100} outerRadius={140} paddingAngle={3} />
      </div>
    </div>
  </div>
);

Default.storyName = 'PieChart';
export default { title: 'Components/PieChart' };
