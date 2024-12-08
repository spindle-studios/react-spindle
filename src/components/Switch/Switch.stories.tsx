import React from 'react';
import { Switch } from './Switch';

export const Default = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Switch label="Dark mode" />
      <Switch disabled label="Dark mode" />
    </div>
  );
};

Default.storyName = 'Switch';
export default { title: 'Components/Switch' };
