import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import React from 'react';

export const DropdownMenu = ({
  trigger,
  items,
  className,
  sideOffset = 4,
}: {
  trigger: React.ReactNode;
  items: {
    type?: 'item' | 'separator' | 'label';
    label?: React.ReactNode;
    inset?: boolean;
    sublabel?: string;
    disabled?: boolean;
    icon?: React.ElementType;
    onSelect?: () => void;
  }[];
  className?: string;
  sideOffset?: number;
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="focus-visible:outline-none">{trigger}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={sideOffset}
          className={clsx(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border border-input bg-popover p-1 text-popover-foreground shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            className,
          )}
        >
          {items.map((item, idx) => {
            if (item.type === 'separator') {
              return <DropdownMenuPrimitive.Separator key={idx} className="-mx-1 my-1 h-px bg-muted" />;
            }

            if (item.type === 'label') {
              return (
                <DropdownMenuPrimitive.Label key={idx} className="px-2 py-1.5 text-sm font-medium">
                  {item.label}
                </DropdownMenuPrimitive.Label>
              );
            }

            return (
              <DropdownMenuPrimitive.Item
                key={idx}
                disabled={item.disabled}
                onSelect={item.onSelect}
                className={clsx(
                  'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
                  'focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  item.inset && 'pl-8',
                )}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
                {item.sublabel && <span className="ml-auto text-xs tracking-widest opacity-60">{item.sublabel}</span>}
              </DropdownMenuPrimitive.Item>
            );
          })}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
