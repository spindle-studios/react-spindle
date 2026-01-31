import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { Notification } from '@components/Notification';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Basic usage</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm">1 notification:</span>
            <Notification value={1} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">5 notifications:</span>
            <Notification value={5} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">99+ notifications:</span>
            <Notification value={150} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Sizes</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm">Small:</span>
            <Notification value={3} size="sm" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Medium:</span>
            <Notification value={3} size="md" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Large:</span>
            <Notification value={3} size="lg" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Variants</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sm">Destructive:</span>
            <Notification value={5} variant="destructive" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Primary:</span>
            <Notification value={5} variant="primary" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Secondary:</span>
            <Notification value={5} variant="secondary" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">With buttons</h3>
        <div className="flex items-center gap-4">
          <div className="relative inline-flex">
            <Button variant="icon">
              <Icon name="Bell" />
            </Button>
            <div className="absolute -top-1 -right-1">
              <Notification value={3} size="sm" />
            </div>
          </div>

          <div className="relative inline-flex">
            <Button variant="icon">
              <Icon name="Mail" />
            </Button>
            <div className="absolute -top-1 -right-1">
              <Notification value={12} size="sm" description="unread message" />
            </div>
          </div>

          <div className="relative inline-flex">
            <Button variant="icon">
              <Icon name="ShoppingCart" />
            </Button>
            <div className="absolute -top-1 -right-1">
              <Notification value={2} size="sm" variant="primary" description="item in cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Default.storyName = 'Notification';
export default { title: 'Components/Notification' };
