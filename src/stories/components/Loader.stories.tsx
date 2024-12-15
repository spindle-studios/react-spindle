import { Card } from '@components/Card';
import { Loader } from '@components/Loader';
import React from 'react';

export const Default = () => (
  <div className="flex flex-row gap-2 items-center">
    <Card className="w-[100px] aspect-square justify-center items-center flex">
      <Loader size="sm" />
    </Card>

    <Card className="w-[100px] aspect-square justify-center items-center flex">
      <Loader size="md" />
    </Card>

    <Card className="w-[100px] aspect-square justify-center items-center flex">
      <Loader size="lg" variant="secondary" />
    </Card>
  </div>
);

Default.storyName = 'Loader';
export default { title: 'Components/Loader' };
