import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

export const Badge = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
  }
>(({ variant = 'primary', className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center transition-all shadow text-xs rounded-xl px-2 h-6',
        {
          'bg-primary text-primary-foreground': variant === 'primary',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
          'bg-destructive text-destructive-foreground': variant === 'destructive',
          'border border-border text-foreground': variant === 'outline',
        },
        className,
      )}
      {...props}
    />
  );
});
