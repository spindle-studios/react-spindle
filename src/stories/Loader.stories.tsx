import { Card } from '@components/Card';
import { Loader } from '@components/Loader';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col gap-4">
    <div className="flex flex-row gap-2 items-center">
      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="sm" variant="spinner" />
      </Card>

      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="sm" variant="dots" />
      </Card>

      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="sm" variant="ring" />
      </Card>
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="md" variant="spinner" />
      </Card>

      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="md" variant="dots" />
      </Card>

      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="md" variant="ring" />
      </Card>
    </div>

    <div className="flex flex-row gap-2 items-center">
      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="lg" variant="spinner" />
      </Card>

      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="lg" variant="dots" />
      </Card>

      <Card className="w-[100px] aspect-square justify-center items-center flex">
        <Loader size="lg" variant="ring" />
      </Card>
    </div>
  </div>
);

Default.storyName = 'Loader';
export default { title: 'Components/Loader' };
