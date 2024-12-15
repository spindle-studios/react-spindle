import { Icon } from '@components/Icon';
import * as Collapsible from '@radix-ui/react-collapsible';
import clsx from 'clsx';
import React, { useState } from 'react';

export const Collapse = ({
  label,
  children,
  containerClassName,
  defaultOpen = false,
}: {
  label: string;
  children: React.ReactNode;
  containerClassName?: string;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger
          className={clsx(
            'flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm',
            'cursor-pointer',
            'focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background',
            'transition-all active:scale-bigger active:disabled:scale-default',
          )}
        >
          <span className="font-medium text-foreground">{label}</span>
          <Icon
            name="ChevronDown"
            className={clsx('transition-transform duration-200', open ? 'rotate-180' : 'rotate-0')}
          />
        </Collapsible.Trigger>

        <Collapsible.Content
          className={clsx(
            'overflow-hidden transition-all duration-200',
            open ? 'animate-in fade-in slide-down' : 'animate-out fade-out slide-up',
          )}
        >
          <div className="p-2 shadow-sm">{children}</div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};
