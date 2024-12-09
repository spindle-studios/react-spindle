import { Card } from '@components/Card';
import { Icon } from '@components/Icon';
import React from 'react';

export const Default = () => (
  <div className="flex flex-row gap-4">
    <div className="flex flex-row gap-2 items-center">
      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Icon name="X" size={30} />
      </Card>
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Icon name="Check" size={30} />
      </Card>
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Icon name="ArrowRight" size={30} />
      </Card>
    </div>
  </div>
);

Default.storyName = 'Icon';
export default { title: 'Components/Icon' };
