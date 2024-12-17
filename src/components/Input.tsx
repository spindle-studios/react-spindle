import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & {
    label?: React.ReactNode;
    containerClassName?: string;
    size?: 'lg' | 'md' | 'sm';
    left?: React.ReactNode;
    right?: React.ReactNode;
  }
>(({ label, containerClassName, className, size = 'md', left, right, type = 'text', ...props }, ref) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <div className="relative flex items-center">
        {left && <div className="absolute left-3">{left}</div>}

        <input
          ref={ref}
          type={type}
          className={clsx(
            'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow',
            'placeholder:text-sm',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
            'disabled:opacity-50',
            'transition-all',
            {
              'h-11 px-8 rounded-md': size === 'lg',
              'h-10 px-4 py-2 rounded-md': size === 'md',
              'h-9 px-3 text-xs rounded-sm': size === 'sm',
            },
            {
              'pl-9': left,
              'pr-9': right,
            },
            {
              'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none':
                type === 'number',
            },
            className,
          )}
          {...props}
        />

        {right && <div className="absolute right-3">{right}</div>}
      </div>
    </div>
  );
});
