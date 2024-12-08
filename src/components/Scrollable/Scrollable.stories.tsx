import React from 'react';
import { Card } from '../Card/Card';
import { Scrollable } from './Scrollable';

export const Default = () => {
  const Content = () => (
    <>
      <Card className="min-w-[200px]">Card 1</Card>
      <Card className="min-w-[200px]">Card 2</Card>
      <Card className="min-w-[200px]">Card 3</Card>
      <Card className="min-w-[200px]">Card 4</Card>
      <Card className="min-w-[200px]">Card 5</Card>
      <Card className="min-w-[200px]">Card 6</Card>
      <Card className="min-w-[200px]">Card 7</Card>
      <Card className="min-w-[200px]">Card 8</Card>
    </>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-lg">Vertical</span>
        <Scrollable className="h-[200px] w-[500px]">
          <div className="flex flex-col gap-2">
            <Content />
          </div>
        </Scrollable>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-lg">Horizontal</span>
        <Scrollable variant="horizontal" className="w-[500px]">
          <div className="flex flex-row gap-2">
            <Content />
          </div>
        </Scrollable>
      </div>
    </div>
  );
};

Default.storyName = 'Scrollable';
export default { title: 'Components/Scrollable' };
