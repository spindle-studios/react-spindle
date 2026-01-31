import { Statistic } from '@components/Statistic';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Default</h3>
        <div className="grid grid-cols-3 gap-4">
          <Statistic title="Total Users" value="12,345" icon="Users" iconColor="#3B82F6" />
          <Statistic title="Revenue" value="$45,678" icon="DollarSign" iconColor="#10B981" />
          <Statistic title="Orders" value="1,234" icon="ShoppingCart" iconColor="#8B5CF6" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">With trends</h3>
        <div className="grid grid-cols-3 gap-4">
          <Statistic
            title="Active Users"
            value="8,432"
            icon="Activity"
            iconColor="#3B82F6"
            trend={{ value: 12, direction: 'up' }}
          />
          <Statistic
            title="Bounce Rate"
            value="24.5%"
            icon="TrendingDown"
            iconColor="#EF4444"
            trend={{ value: 3, direction: 'down' }}
          />
          <Statistic
            title="Avg. Session"
            value="4m 32s"
            icon="Clock"
            iconColor="#F59E0B"
            trend={{ value: 8, direction: 'up' }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Compact variant</h3>
        <div className="grid grid-cols-4 gap-4">
          <Statistic title="Views" value="2.4K" icon="Eye" iconColor="#6366F1" variant="compact" />
          <Statistic title="Likes" value="892" icon="Heart" iconColor="#EC4899" variant="compact" />
          <Statistic title="Comments" value="156" icon="MessageCircle" iconColor="#14B8A6" variant="compact" />
          <Statistic title="Shares" value="43" icon="Share2" iconColor="#F97316" variant="compact" />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">With description</h3>
        <Statistic
          title="Monthly Revenue"
          value="$128,430"
          icon="CreditCard"
          iconColor="#10B981"
          trend={{ value: 15, direction: 'up' }}
          description="Compared to $111,678 last month"
          className="max-w-xs"
        />
      </div>
    </div>
  );
};

Default.storyName = 'Statistic';
export default { title: 'Components/Statistic' };
