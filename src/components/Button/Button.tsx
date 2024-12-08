import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Button: React.FC<
  ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon';
    size?: 'lg' | 'md' | 'sm';
  }
> = ({ variant = 'primary', size = 'md', className, ...props }) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center transition-all shadow',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'w-full': variant !== 'icon',
        },
        {
          'h-10 px-8 rounded-md': size === 'lg',
          'h-9 px-4 py-2 rounded-md': size === 'md',
          'h-8 px-3 text-xs rounded-sm': size === 'sm',
        },
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-input bg-background hover:bg-accent': variant === 'outline',
          'hover:bg-accent': variant === 'ghost',
          'aspect-square rounded-md bg-background hover:bg-accent !p-0': variant === 'icon',
        },
        className,
      )}
      {...props}
    />
  );
};
