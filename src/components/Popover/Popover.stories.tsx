import React from 'react';
import { Button } from '../Button/Button';
import { Popover } from './Popover';

export const Default = () => (
  <Popover
    trigger={
      <Button variant="primary" size="md">
        Open
      </Button>
    }
    content={
      <div>
        Sapiente cumque consectetur dolor quibusdam unde necessitatibus in quis asperiores. Beatae commodi aliquid ullam
        consectetur vel error. Nihil necessitatibus tempore nihil eaque adipisci. Fugiat quae ad quos blanditiis.
      </div>
    }
  />
);

Default.storyName = 'Popover';
export default { title: 'Components/Popover' };
