import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';

export const Collapse: React.FC<
  ComponentProps<typeof Collapsible.Root> & {
    trigger: React.ReactNode;
    className?: string;
  }
> = ({ trigger, children, className, defaultOpen = false, ...props }) => {
  return (
    <div className={clsx('flex flex-col gap-1')}>
      <Collapsible.Root defaultOpen={defaultOpen} {...props}>
        <Collapsible.Trigger className="w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1">
          {trigger}
        </Collapsible.Trigger>

        <Collapsible.Content
          className={clsx(
            'overflow-hidden transition-all duration-200',
            'animate-in fade-in slide-down',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:slide-up',
            className,
          )}
        >
          <div className="p-2 shadow-sm">{children}</div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};
