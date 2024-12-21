import { Segment } from '@components/Segment';
import React from 'react';

export const Default = () => {
  return (
    <Segment
      options={[
        { label: 'Segment One', id: 'one' },
        { label: 'Segment Two', id: 'two' },
      ]}
      defaultValue="one"
      onValueChange={(value) => console.log('Selected:', value)}
    >
      <div>Content for Segment One</div>
      <div>Content for Segment Two</div>
    </Segment>
  );
};

Default.storyName = 'Segment';
export default { title: 'Components/Segment' };
