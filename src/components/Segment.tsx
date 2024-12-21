import * as ToggleGroup from '@radix-ui/react-toggle-group';
import clsx from 'clsx';
import React, { useState } from 'react';

export const Segment: React.FC<{
  options: { label: string; id: string }[];
  className?: string;
  defaultValue?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onValueChange?: (id: string) => void;
}> = ({ options, className, defaultValue, variant = 'primary', size = 'md', onValueChange, children }) => {
  const [selected, setSelected] = useState(defaultValue || options[0]?.id);

  const handleValueChange = (value: string) => {
    if (value === '') return;
    setSelected(value);
    onValueChange?.(value);
  };

  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <ToggleGroup.Root
        type="single"
        value={selected}
        onValueChange={handleValueChange}
        className={clsx(
          'border-border border flex flex-row gap-1 rounded-md',
          size === 'lg' && 'text-lg',
          size === 'md' && 'text-md',
          size === 'sm' && 'text-sm',
        )}
      >
        {options.map((option) => (
          <ToggleGroup.Item
            key={option.id}
            value={option.id}
            tabIndex={1}
            className={clsx(
              'flex-1 text-center px-4 py-2 font-medium cursor-pointer whitespace-nowrap',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              'disabled:pointer-events-none disabled:opacity-50',
              'transition-all duration-200 ease-in-out',
              {
                'h-11 px-8 rounded-md': size === 'lg',
                'h-10 px-4 py-2 rounded-md': size === 'md',
                'h-9 px-3 text-xs rounded-sm': size === 'sm',
              },
              {
                'bg-primary text-primary-foreground hover:bg-primary/80':
                  selected === option.id && variant === 'primary',
                'bg-secondary text-secondary-foreground hover:bg-secondary/80':
                  selected === option.id && variant === 'secondary',
                'border border-border bg-background hover:bg-accent': selected === option.id && variant === 'outline',
                'hover:bg-accent': selected === option.id && variant === 'ghost',
                'hover:text-accent-foreground hover:bg-accent': selected !== option.id,
              },
            )}
          >
            {option.label}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>

      <div className="w-full">
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) && options[index]?.id === selected ? child : null,
        )}
      </div>
    </div>
  );
};
