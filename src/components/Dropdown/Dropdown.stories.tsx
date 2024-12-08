import { Check, Settings, Trash } from 'lucide-react';
import React from 'react';
import { Button } from '../Button/Button';
import { DropdownMenu } from './Dropdown';

export const Default = () => {
  return (
    <div className="w-[300px] flex flex-col">
      <DropdownMenu
        trigger={<Button variant="primary">Open</Button>}
        className="w-[300px]"
        items={[
          { type: 'label', label: 'Account options' },
          { type: 'separator' },
          { label: 'Profile', icon: Settings, onSelect: () => console.log('Profile') },
          { label: 'Settings', icon: Check, onSelect: () => console.log('Settings') },
          { type: 'separator' },
          { label: 'Delete', icon: Trash, onSelect: () => console.log('Delete'), disabled: true },
        ]}
      />
    </div>
  );
};

Default.storyName = 'Dropdown';
export default { title: 'Components/Dropdown' };
