import { Button } from '@components/Button';
import { Sheet } from '@components/Sheet';
import React, { useState } from 'react';

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState<'right' | 'left' | 'bottom'>('left');

  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        onClick={() => {
          setVariant('left');
          setIsOpen(true);
        }}
      >
        Left
      </Button>

      <Button
        onClick={() => {
          setVariant('right');
          setIsOpen(true);
        }}
      >
        Right
      </Button>

      <Button
        onClick={() => {
          setVariant('bottom');
          setIsOpen(true);
        }}
      >
        Bottom
      </Button>

      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} variant={variant}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Hello World!</h2>
          <p className="text-sm text-muted-foreground">
            Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id.
            Repudiandae porro perferendis nisi voluptatem. Eligendi voluptatibus odio cumque aut ad rerum nam. Inventore
            aliquam iste necessitatibus voluptates fugiat officiis cumque aut perferendis. At natus quia tenetur
            voluptatem magni sit suscipit nesciunt nihil.
          </p>
        </div>
      </Sheet>
    </div>
  );
};

Default.storyName = 'Sheet';
export default { title: 'Components/Sheet' };
