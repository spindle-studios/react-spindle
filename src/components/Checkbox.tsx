import { Icon } from '@components/Icon';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import React from 'react';

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: React.ReactNode;
    labelPosition?: 'left' | 'right';
    containerClassName?: string;
  }
>(({ className, label, labelPosition = 'right', containerClassName, ...props }, ref) => {
  return (
    <div
      className={clsx('flex items-center gap-2', labelPosition === 'left' && 'flex-row-reverse', containerClassName)}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        className={clsx(
          'peer h-5 w-5 shrink-0 rounded-sm border border-input shadow focus-visible:outline-none',
          'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          <Icon name="Check" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <label className="text-sm text-foreground select-none cursor-pointer" htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
});
