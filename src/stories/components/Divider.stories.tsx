import { Divider } from '@components/Divider';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col gap-10 w-[300px] h-[300px]">
    <Divider />
    <Divider variant="vertical" />
  </div>
);

Default.storyName = 'Divider';
export default { title: 'Components/Divider' };
