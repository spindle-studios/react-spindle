import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col items-start gap-2">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>

    <div className="flex flex-row justify-between">
      <Button variant="icon" size="sm">
        <Icon name="Pencil" />
      </Button>

      <Button variant="icon" size="md">
        <Icon name="Pencil" />
      </Button>

      <Button variant="icon" size="lg">
        <Icon name="Pencil" />
      </Button>
    </div>
  </div>
);

Default.storyName = 'Button';
export default { title: 'Components/Button' };
