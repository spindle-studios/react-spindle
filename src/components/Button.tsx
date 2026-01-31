import clsx from 'clsx';
import React, { ComponentProps, forwardRef } from 'react';

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon';
    size?: 'lg' | 'md' | 'sm' | 'xs';
  }
>(({ variant = 'primary', size = 'md', type = 'button', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'flex items-center justify-center',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        'transition-all active:scale-smaller active:disabled:scale-default',
        {
          'w-full shadow': variant !== 'icon',
        },
        {
          'h-11 px-8 rounded-md': size === 'lg' && variant !== 'icon',
          'h-10 px-4 py-2 rounded-md': size === 'md' && variant !== 'icon',
          'h-9 px-3 text-xs rounded-sm': size === 'sm' && variant !== 'icon',
          'h-7 px-2 text-xs rounded-sm': size === 'xs' && variant !== 'icon',
        },
        {
          'h-10 rounded-md': size === 'lg' && variant === 'icon',
          'h-8 rounded-md': size === 'md' && variant === 'icon',
          'h-6 rounded-sm': size === 'sm' && variant === 'icon',
          'h-4 rounded-sm': size === 'xs' && variant === 'icon',
        },
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-border bg-background hover:bg-accent': variant === 'outline',
          'hover:bg-accent': variant === 'ghost',
          'aspect-square rounded-md bg-transparent hover:bg-accent !p-0': variant === 'icon',
        },
        className,
      )}
      {...props}
    />
  );
});
