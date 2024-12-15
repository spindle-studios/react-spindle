import { Icon } from '@components/Icon';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';
import React from 'react';

export const Select = <T,>({
  label,
  options,
  value,
  onSelect,
  render,
  getOptionKey,
  containerClassName,
  disabled = false,
  placeholder = 'Select an option',
}: {
  label?: string;
  options: T[];
  value: T | null;
  onSelect: (value: T) => void;
  render?: (option: T) => React.ReactNode;
  getOptionKey?: (option: T) => string | number;
  containerClassName?: string;
  disabled?: boolean;
  placeholder?: string;
}) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <SelectPrimitive.Root
        disabled={disabled}
        value={value ? String(getOptionKey?.(value) || value) : ''}
        onValueChange={(v) => {
          const selected = options.find((opt) => (getOptionKey ? String(getOptionKey(opt)) === v : String(opt) === v));
          if (selected) onSelect(selected);
        }}
      >
        <SelectPrimitive.Trigger
          className={clsx(
            'flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm',
            'placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background',
            'disabled:opacity-50',
            'transition-all',
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon>
            <Icon name="ChevronDown" className="opacity-50" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className={clsx(
              'relative z-50 max-h-60 overflow-auto rounded-md border border-border bg-popover text-popover-foreground shadow-md',
              'w-[var(--radix-select-trigger-width)] focus:outline-none mt-1',
            )}
            position="popper"
          >
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => {
                const optionKey = getOptionKey ? getOptionKey(option) : String(option);
                return (
                  <SelectPrimitive.Item
                    key={optionKey}
                    value={String(optionKey)}
                    className={clsx(
                      'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
                      'focus:bg-accent focus:text-accent-foreground',
                    )}
                  >
                    <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center">
                      <Icon name="Check" />
                    </SelectPrimitive.ItemIndicator>
                    <SelectPrimitive.ItemText>{render ? render(option) : String(option)}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                );
              })}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </div>
  );
};
