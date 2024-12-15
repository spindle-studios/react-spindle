import { Badge } from '@components/Badge';
import React from 'react';

export const Story = () => (
  <div className="flex flex-row gap-2">
    <Badge variant="primary">Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

Story.storyName = 'Badge';
export default { title: 'Components/Badge' };
