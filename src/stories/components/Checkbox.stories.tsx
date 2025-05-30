import { Checkbox } from '@components/Checkbox';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex flex-col gap-2">
      <Checkbox label="Dark mode" />
      <Checkbox disabled label="Dark mode (disabled)" />
    </div>
  );
};

Default.storyName = 'Checkbox';
export default { title: 'Components/Checkbox' };
