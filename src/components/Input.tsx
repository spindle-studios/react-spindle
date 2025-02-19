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

      <div
        className={clsx(
          'flex items-center w-full rounded-md border border-input bg-background shadow',
          'focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1 focus-within:ring-offset-background',
          {
            'h-11': size === 'lg',
            'h-10': size === 'md',
            'h-9': size === 'sm',
          },
        )}
      >
        {left && <div className="flex items-center pl-3 text-muted-foreground">{left}</div>}

        <input
          ref={ref}
          type={type}
          className={clsx(
            'flex-1 bg-transparent px-3 py-2 text-sm outline-none',
            'placeholder:text-sm disabled:opacity-50',
            'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]',
            className,
          )}
          {...props}
        />

        {right && <div className="flex items-center pr-3 text-muted-foreground">{right}</div>}
      </div>
    </div>
  );
});
