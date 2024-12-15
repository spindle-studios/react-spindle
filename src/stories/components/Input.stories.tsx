import { Input } from '@components/Input';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex">
      <div className="w-[500px] flex-col gap-2 flex">
        <Input label="Label" placeholder="Username" />
        <Input placeholder="Username" />
        <Input disabled placeholder="Username (disabled)" />
      </div>
    </div>
  );
};

Default.storyName = 'Input';
export default { title: 'Components/Input' };
