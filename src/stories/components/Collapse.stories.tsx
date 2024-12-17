import { Button } from '@components/Button';
import { Collapse } from '@components/Collapse';
import React from 'react';

export const Default = () => {
  return (
    <div className="w-[500px]">
      <Collapse defaultOpen trigger={<Button variant="outline">Toggle</Button>}>
        <p>This is a simple collapsible section with some content.</p>
      </Collapse>
    </div>
  );
};

Default.storyName = 'Collapse';
export default { title: 'Components/Collapse' };
