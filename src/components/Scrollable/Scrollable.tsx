import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  disableScrollbar?: boolean;
  variant?: 'vertical' | 'horizontal';
};

export const Scrollable: React.FC<ScrollAreaProps> = ({
  className,
  children,
  disableScrollbar = false,
  variant = 'vertical',
  ...props
}) => {
  return (
    <ScrollAreaPrimitive.Root className={clsx('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport
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
};
