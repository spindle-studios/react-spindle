import React from 'react';
import { Button } from '../Button/Button';
import { Popover } from './Popover';

export const Default = () => {
  const Content = () => {
    return (
      <div>
        Sapiente cumque consectetur dolor quibusdam unde necessitatibus in quis asperiores. Beatae commodi aliquid ullam
        consectetur vel error. Nihil necessitatibus tempore nihil eaque adipisci. Fugiat quae ad quos blanditiis.
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen flex-row gap-2">
      <Popover
        trigger={
          <Button variant="primary" size="md">
            Left
          </Button>
        }
        content={<Content />}
        variant="left"
        align="center"
      />
      <Popover
        trigger={
          <Button variant="primary" size="md">
            Right
          </Button>
        }
        content={<Content />}
        variant="right"
        align="center"
      />
      <Popover
        trigger={
          <Button variant="primary" size="md">
            Top
          </Button>
        }
        content={<Content />}
        variant="top"
        align="center"
      />
      <Popover
        trigger={
          <Button variant="primary" size="md">
            Bottom
          </Button>
        }
        content={<Content />}
        variant="bottom"
        align="center"
      />
    </div>
  );
};

Default.storyName = 'Popover';
export default { title: 'Components/Popover' };
