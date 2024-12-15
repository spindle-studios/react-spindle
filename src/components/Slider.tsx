import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Slider: React.FC<
  ComponentProps<typeof SliderPrimitive.Root> & {
    label?: React.ReactNode;
    containerClassName?: string;
  }
> = ({ label, containerClassName, disabled, className, ...props }) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}

      <SliderPrimitive.Root
        disabled={disabled}
        className={clsx(
          'relative flex w-full touch-none select-none items-center',
          'transition-all active:scale-bigger active:disabled:scale-default',
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className={clsx('absolute h-full bg-primary', { 'bg-muted': disabled })} />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
          className={clsx(
            'block h-4 w-4 rounded-full border border-primary bg-background shadow transition-all',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            { 'pointer-events-none bg-muted-foreground border-muted-foreground': disabled },
          )}
        />
      </SliderPrimitive.Root>
    </div>
  );
};
