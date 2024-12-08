import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Badge: React.FC<
  ComponentProps<'div'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
  }
> = ({ variant = 'primary', className, ...props }) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center transition-all shadow text-xs rounded-xl px-2 h-6',
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-input text-foreground': variant === 'outline',
        },
        className,
      )}
      {...props}
    />
  );
};
