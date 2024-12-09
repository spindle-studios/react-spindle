import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Popover: React.FC<
  ComponentProps<typeof PopoverPrimitive.Root> & {
    trigger: React.ReactNode;
    content: React.ReactNode;
    variant?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    className?: string;
  }
> = ({ trigger, content, variant = 'bottom', align = 'center', sideOffset = 4, className, ...props }) => {
  return (
    <PopoverPrimitive.Root {...props}>
      <PopoverPrimitive.Trigger className="focus-visible:outline-none">{trigger}</PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side={variant}
          align={align}
          sideOffset={sideOffset}
          className={clsx(
            'z-50 w-72 rounded-md border border-input bg-background p-4 text-foreground shadow-md outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in data-[state=closed]:fade-out',
            'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};
