import clsx from 'clsx';
import React, { useState } from 'react';
import { Icon } from './Icon';
import { Input } from './Input';

const DEFAULT_COLORS = ['#FFFFFF', '#94A3B8', '#000000', '#3B82F6', '#10B981', '#8B5CF6', '#EF4444', '#14B8A6'];

export const ColorPicker: React.FC<{
  value?: string;
  onChange?: (color: string) => void;
  className?: string;
  predefinedColors?: string[];
  disableDefaultColors?: boolean;
}> = ({ value = '', onChange, className, predefinedColors = DEFAULT_COLORS, disableDefaultColors = false }) => {
  const [localValue, setLocalValue] = useState(value.replace('#', '').toUpperCase());

  const handleValueChange = (newValue: string) => {
    const formattedValue = newValue.toUpperCase().replace(/[^0-9A-F]/g, '');
    setLocalValue(formattedValue);
    if (onChange && /^[0-9A-F]{6}$/.test(formattedValue)) {
      onChange(`#${formattedValue}`);
    }
  };

  return (
    <div className={clsx('flex flex-col gap-3 min-w-0 w-full', className)}>
      {!disableDefaultColors && (
        <div className="grid grid-cols-4 gap-2 w-full min-w-0">
          {predefinedColors.map((color) => (
            <button
              key={color}
              className={clsx(
                'aspect-square w-full min-w-0 rounded-md border border-border bg-background shadow-sm',
                'hover:ring-1 hover:ring-ring hover:ring-offset-1 hover:ring-offset-background',
                'focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background',
                'transition-colors',
                `#${localValue}` === color && 'ring-2 ring-primary ring-offset-2 ring-offset-background',
              )}
              style={{ backgroundColor: color }}
              onClick={() => handleValueChange(color.replace('#', ''))}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      )}

      <Input
        value={localValue}
        onChange={(e) => handleValueChange(e.target.value)}
        placeholder="000000"
        maxLength={6}
        left={<Icon name="Hash" />}
      />
    </div>
  );
};
