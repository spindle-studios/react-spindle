import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');

  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        onClick={() => {
          setIsOpen(true);
          setSize('sm');
        }}
      >
        Small
      </Button>

      <Button
        onClick={() => {
          setIsOpen(true);
          setSize('md');
        }}
      >
        Medium
      </Button>

      <Button
        onClick={() => {
          setIsOpen(true);
          setSize('lg');
        }}
      >
        Large
      </Button>

      <Modal size={size} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Hello World</h2>
          <p className="text-sm text-muted-foreground">
            Maiores accusantium soluta aperiam recusandae nam. Cupiditate harum quasi qui sapiente error fugit ex id.
          </p>
        </div>
      </Modal>
    </div>
  );
};

Default.storyName = 'Modal';
export default { title: 'Components/Modal' };
