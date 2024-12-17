import clsx from 'clsx';
import React from 'react';

export const Divider = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & {
    variant?: 'horizontal' | 'vertical';
  }
>(({ variant = 'horizontal', className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('bg-muted', variant === 'horizontal' ? 'w-full h-px' : 'w-px h-full', className)}
      {...props}
    />
  );
});
