import { Avatar } from '@components/Avatar';
import { Icon } from '@components/Icon';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-row gap-2 items-center">
      <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" />
      <Avatar size="md" src="https://i.pravatar.cc/150?img=2" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?img=3" />
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=4" />
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Avatar size="sm" fallback="AB" />
      <Avatar size="md" fallback="CD" />
      <Avatar size="lg" fallback="EF" />
      <Avatar size="xl" fallback="GH" />
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Avatar size="sm" fallback={<Icon name="User" size={12} />} />
      <Avatar size="md" fallback={<Icon name="User" size={16} />} />
      <Avatar size="lg" fallback={<Icon name="User" size={20} />} />
      <Avatar size="xl" fallback={<Icon name="User" size={28} />} />
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Avatar size="md" src="https://i.pravatar.cc/150?img=5" onClick={() => alert('Clicked!')} />
      <Avatar size="md" fallback="CL" onClick={() => alert('Clicked!')} />
    </div>
  </div>
);

Default.storyName = 'Avatar';
export default { title: 'Components/Avatar' };
