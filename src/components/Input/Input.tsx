import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Input = React.forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & {
    label?: React.ReactNode;
    containerClassName?: string;
  }
>(({ label, containerClassName, className, type = 'text', ...props }, ref) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <input
        ref={ref}
        type={type}
        className={clsx(
          'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow',
          'placeholder:text-sm',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          {
            'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none':
              type === 'number',
          },
          className,
        )}
        {...props}
      />
    </div>
  );
});
