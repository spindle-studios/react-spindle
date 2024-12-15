import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Card = React.forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('border border-border bg-card text-card-foreground rounded-md p-4', className)}
      {...props}
    />
  );
});
