import * as DialogPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { X } from 'lucide-react';
import React, { ComponentProps } from 'react';
import { Button } from '../Button/Button';

export const Sheet: React.FC<
  ComponentProps<'div'> & {
    isOpen: boolean;
    onClose: () => void;
    variant?: 'top' | 'right' | 'bottom' | 'left';
    className?: string;
  }
> = ({ isOpen, onClose, variant = 'right', className, children, ...props }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={clsx('fixed inset-0 z-50 bg-black/50 transition-opacity animate-fadeIn')} />

        <DialogPrimitive.Content
          className={clsx(
            'fixed z-50 bg-background p-6 shadow-lg transition-all ease-in-out duration-300 border-input',
            {
              'inset-x-0 top-0 border-b animate-in slide-in-from-top': variant === 'top',
              'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l animate-in slide-in-from-right': variant === 'right',
              'inset-x-0 bottom-0 border-t animate-in slide-in-from-bottom': variant === 'bottom',
              'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r animate-in slide-in-from-left': variant === 'left',
            },
            className,
          )}
          {...props}
        >
          <Button variant="icon" size="sm" className="absolute top-4 right-4" onClick={onClose}>
            <X size={14} />
            <span className="sr-only">Close</span>
          </Button>

          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
