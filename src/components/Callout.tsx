import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import { Card } from './Card';

export const Callout = React.forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> & {
    icon: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
  }
>(({ className, icon, children, variant = 'primary', ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={clsx(
        'flex items-center gap-3 text-sm',
        {
          'bg-primary/10 text-primary': variant === 'primary',
          'bg-secondary/10 text-secondary': variant === 'secondary',
          'bg-destructive/10 text-destructive': variant === 'destructive',
          'border border-border bg-background': variant === 'outline',
          'bg-accent/10': variant === 'ghost',
        },
        className,
      )}
      {...props}
    >
      <div className="flex-shrink-0 px-1">{icon}</div>
      <div className="flex-1">{children}</div>
    </Card>
  );
});
