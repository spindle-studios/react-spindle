import { Button } from '@components/Button';
import { Dropdown } from '@components/Dropdown';
import { Icon } from '@components/Icon';
import React from 'react';

export const Default = () => {
  return (
    <div className="w-[300px] flex flex-col">
      <Dropdown
        trigger={<Button variant="primary">Open</Button>}
        className="w-[300px]"
        items={[
          { type: 'label', label: 'Account options' },
          { type: 'separator' },
          { label: 'Profile', icon: () => <Icon name="Settings" />, onSelect: () => console.log('Profile') },
          { label: 'Settings', icon: () => <Icon name="Check" />, onSelect: () => console.log('Settings') },
          { type: 'separator' },
          { label: 'Delete', icon: () => <Icon name="Trash" />, onSelect: () => console.log('Delete'), disabled: true },
        ]}
      />
    </div>
  );
};

Default.storyName = 'Dropdown';
export default { title: 'Components/Dropdown' };
