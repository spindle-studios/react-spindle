import { Textarea } from '@components/Textarea';
import React from 'react';

export const Default = () => {
  return (
    <div className="w-[500px] flex-col gap-2 flex">
      <Textarea label="Label" placeholder="Description" />
      <Textarea placeholder="Description" />
      <Textarea disabled placeholder="Description (disabled)" />
    </div>
  );
};

Default.storyName = 'Textarea';
export default { title: 'Components/Textarea' };
