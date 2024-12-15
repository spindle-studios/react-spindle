import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Modal: React.FC<
  ComponentProps<typeof DialogPrimitive.Content> & {
    isOpen: boolean;
    onClose: () => void;
    size?: 'sm' | 'md' | 'lg';
  }
> = ({ isOpen, onClose, size = 'md', className, children, ...props }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={clsx(
            'fixed inset-0 z-50 bg-black/50',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in data-[state=closed]:fade-out',
          )}
        />

        <DialogPrimitive.Content
          className={clsx(
            'fixed z-50 bg-background p-6 shadow-lg border-border border rounded-lg',
            'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
            'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'w-full h-full sm:h-auto sm:max-w-[90vw] sm:max-h-[90vh]',
            {
              'sm:w-[400px]': size === 'sm',
              'sm:w-[500px]': size === 'md',
              'sm:w-[600px]': size === 'lg',
            },
            className,
          )}
          {...props}
        >
          <Button variant="icon" size="sm" className="absolute top-4 right-4" aria-label="Close" onClick={onClose}>
            <Icon name="X" />
          </Button>

          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
