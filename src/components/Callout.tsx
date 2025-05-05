import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import { Card } from './Card';

export const Callout = React.forwardRef<HTMLDivElement, ComponentProps<'div'> & { icon: React.ReactNode }>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <Card ref={ref} className={clsx('flex items-center gap-3', className)} {...props}>
        <div className="flex-shrink-0 px-2">{icon}</div>
        <div className="flex-1">{children}</div>
      </Card>
    );
  },
);
