import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  ComponentProps<'textarea'> & {
    label?: React.ReactNode;
    containerClassName?: string;
  }
>(({ label, containerClassName, className, ...props }, ref) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <textarea
        ref={ref}
        className={clsx(
          'flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm shadow resize-none h-24',
          'placeholder:text-sm',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:opacity-50',
          'transition-all focus:scale-bigger focus:disabled:scale-default',
          className,
        )}
        {...props}
      />
    </div>
  );
});
