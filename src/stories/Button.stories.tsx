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
    <Button variant="icon">
      <Icon name="Pencil" />
    </Button>
  </div>
);

Default.storyName = 'Button';
export default { title: 'Components/Button' };
