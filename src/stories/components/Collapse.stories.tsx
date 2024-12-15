import { Collapse } from '@components/Collapse';
import React from 'react';

export const Default = () => {
  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <Collapse label="Basic Collapse">
        <p>This is a simple collapsible section with some content.</p>
      </Collapse>
    </div>
  );
};

Default.storyName = 'Collapse';
export default { title: 'Components/Collapse' };
