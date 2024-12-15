import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Button: React.FC<
  (ComponentProps<'button'> & ComponentProps<'a'>) & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon';
    size?: 'lg' | 'md' | 'sm';
    as?: 'button' | 'a';
  }
> = ({ variant = 'primary', size = 'md', type = 'button', as = 'button', className, ...props }) => {
  const Wrapper = as;

  return (
    <Wrapper
      type={type}
      className={clsx(
        'flex items-center justify-center shadow',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        'transition-all active:scale-smaller active:disabled:scale-default',
        {
          'w-full': variant !== 'icon',
        },
        {
          'h-11 px-8 rounded-md': size === 'lg',
          'h-10 px-4 py-2 rounded-md': size === 'md',
          'h-9 px-3 text-xs rounded-sm': size === 'sm',
        },
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-border bg-background hover:bg-accent': variant === 'outline',
          'hover:bg-accent': variant === 'ghost',
          'aspect-square rounded-md bg-background hover:bg-accent !p-0': variant === 'icon',
        },
        className,
      )}
      {...props}
    />
  );
};
