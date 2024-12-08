import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Sheet } from './Sheet';

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} variant="right">
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
