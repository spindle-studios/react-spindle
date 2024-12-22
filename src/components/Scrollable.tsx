import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import React, { ComponentProps, forwardRef } from 'react';

export const Scrollable = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ScrollAreaPrimitive.Root> & {
    disableScrollbar?: boolean;
    variant?: 'vertical' | 'horizontal';
  }
>(({ className, children, disableScrollbar = false, variant = 'vertical', ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.Root className={clsx('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        className={clsx('w-full rounded-[inherit]', {
          'h-full': variant === 'vertical',
          'h-auto whitespace-nowrap': variant === 'horizontal',
        })}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.ScrollAreaScrollbar
        orientation={variant}
        className={clsx('flex touch-none select-none transition-colors border-transparent p-[1px]', {
          'w-2.5 border-l': variant === 'vertical',
          'h-2.5 border-t': variant === 'horizontal',
        })}
      >
        <ScrollAreaPrimitive.ScrollAreaThumb
          className={clsx('relative flex-1 rounded-full bg-border', {
            hidden: disableScrollbar,
          })}
        />
      </ScrollAreaPrimitive.ScrollAreaScrollbar>

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
