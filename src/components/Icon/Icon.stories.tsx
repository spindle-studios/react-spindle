import React from 'react';
import { Icon } from './Icon';

export const Default = () => (
  <div className="flex flex-row gap-4">
    <Icon name="X" />
    <Icon name="Check" />
    <Icon name="ArrowRight" />
  </div>
);

Default.storyName = 'Icon';
export default { title: 'Components/Icon' };
