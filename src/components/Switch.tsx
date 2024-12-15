import * as SwitchPrimitive from '@radix-ui/react-switch';
import clsx from 'clsx';
import React from 'react';

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    label?: React.ReactNode;
    labelPosition?: 'left' | 'right';
    containerClassName?: string;
  }
>(({ className, label, labelPosition = 'right', containerClassName, ...props }, ref) => {
  return (
    <div
      className={clsx('flex items-center gap-2', labelPosition === 'left' && 'flex-row-reverse', containerClassName)}
    >
      <SwitchPrimitive.Root
        ref={ref}
        className={clsx(
          'peer relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm',
          'transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
          'disabled:opacity-50',
          'transition-all active:scale-bigger active:disabled:scale-default',
          className,
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={clsx(
            'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
            'data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
          )}
        />
      </SwitchPrimitive.Root>

      {label && (
        <label className="text-sm text-foreground select-none cursor-pointer" htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
});
