import clsx from 'clsx';
import React, { useState } from 'react';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { Icon } from './Icon';
import { Popover } from './Popover';
import { Tooltip } from './Tooltip';

type DateFormatOptions = {
  locale?: string;
  includeTime?: boolean;
};

const formatDateDisplay = (date: Date | null, options: DateFormatOptions = {}): string => {
  if (!date) return 'Select a date';

  const { locale = 'en-GB', includeTime = false } = options;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  if (includeTime) {
    dateOptions.hour = '2-digit';
    dateOptions.minute = '2-digit';
  }

  return date.toLocaleDateString(locale, dateOptions);
};

const QUICK_TIME_OPTIONS = [9, 12, 15, 18, 21];

export const DatePicker: React.FC<{
  value: Date | null;
  onChange: (value: Date) => void;
  label?: string;
  tooltip?: string;
  placeholder?: string;
  includeTime?: boolean;
  quickTimeOptions?: number[];
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
}> = ({
  value,
  onChange,
  label,
  tooltip,
  placeholder = 'Select a date',
  includeTime = false,
  quickTimeOptions = QUICK_TIME_OPTIONS,
  locale = 'en-GB',
  minDate,
  maxDate,
  disabled = false,
  className,
  containerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'date' | 'time'>('date');

  const handleDateChange = (date: Date) => {
    const newDate = new Date(date);
    if (value) {
      newDate.setHours(value.getHours());
      newDate.setMinutes(value.getMinutes());
    }
    onChange(newDate);

    if (includeTime) {
      setStep('time');
    } else {
      setIsOpen(false);
    }
  };

  const handleTimeChange = (hours: number, minutes: number) => {
    const newDate = value ? new Date(value) : new Date();
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    onChange(newDate);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setStep('date');
    }
  };

  return (
    <Popover
      open={isOpen}
      onOpenChange={handleOpenChange}
      trigger={
        <div className={clsx('flex flex-col items-start', containerClassName)}>
          {label && (
            <div className="flex flex-row gap-1 items-center mb-1">
              <span className="text-sm font-medium text-foreground">{label}</span>
              {tooltip && <Tooltip trigger={<Icon name="Info" size={14} />} content={tooltip} />}
            </div>
          )}
          <Button variant="secondary" disabled={disabled} className={clsx('gap-2', className)} type="button">
            <Icon name="Calendar" size={16} />
            <span className="text-sm">{value ? formatDateDisplay(value, { locale, includeTime }) : placeholder}</span>
          </Button>
        </div>
      }
      content={
        <div className="space-y-3">
          {step === 'date' && (
            <Calendar
              mode="single"
              selected={value || undefined}
              onSelect={(date) => handleDateChange(date ?? new Date())}
              disabled={(date) => {
                if (minDate && date < minDate) return true;
                if (maxDate && date > maxDate) return true;
                return false;
              }}
            />
          )}

          {step === 'time' && includeTime && (
            <div className="flex flex-col space-y-4 p-3">
              <div className="flex flex-col items-center space-y-3">
                <label className="text-sm font-medium text-foreground">Select Time</label>
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col items-center space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      type="button"
                      onClick={() => handleTimeChange(((value?.getHours() || 0) + 1) % 24, value?.getMinutes() || 0)}
                    >
                      <Icon name="ChevronUp" size={16} />
                    </Button>
                    <input
                      type="number"
                      min="0"
                      max="23"
                      value={String(value?.getHours() || 0).padStart(2, '0')}
                      onChange={(e) => {
                        const hours = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
                        handleTimeChange(hours, value?.getMinutes() || 0);
                      }}
                      className={clsx(
                        'w-14 px-2 py-2 text-center text-base border border-border rounded-md bg-background',
                        'focus:outline-none focus:ring-1 focus:ring-ring',
                        '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
                      )}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      type="button"
                      onClick={() =>
                        handleTimeChange(((value?.getHours() || 0) - 1 + 24) % 24, value?.getMinutes() || 0)
                      }
                    >
                      <Icon name="ChevronDown" size={16} />
                    </Button>
                  </div>

                  <span className="text-xl font-medium text-muted-foreground">:</span>

                  <div className="flex flex-col items-center space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      type="button"
                      onClick={() => handleTimeChange(value?.getHours() || 0, ((value?.getMinutes() || 0) + 15) % 60)}
                    >
                      <Icon name="ChevronUp" size={16} />
                    </Button>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      value={String(value?.getMinutes() || 0).padStart(2, '0')}
                      onChange={(e) => {
                        const minutes = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
                        handleTimeChange(value?.getHours() || 0, minutes);
                      }}
                      className={clsx(
                        'w-14 px-2 py-2 text-center text-base border border-border rounded-md bg-background',
                        'focus:outline-none focus:ring-1 focus:ring-ring',
                        '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
                      )}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 w-7 p-0"
                      type="button"
                      onClick={() =>
                        handleTimeChange(value?.getHours() || 0, ((value?.getMinutes() || 0) - 15 + 60) % 60)
                      }
                    >
                      <Icon name="ChevronDown" size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              {quickTimeOptions.length > 0 && (
                <div className="border-t border-border pt-3">
                  <div className="grid grid-cols-5 gap-2">
                    {quickTimeOptions.map((hour) => (
                      <Button
                        key={hour}
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs"
                        type="button"
                        onClick={() => handleTimeChange(hour, 0)}
                      >
                        {hour}:00
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-row justify-between items-center gap-3">
                <Button size="sm" variant="secondary" type="button" onClick={() => setStep('date')} className="w-full">
                  Back
                </Button>
                <Button size="sm" type="button" onClick={() => handleOpenChange(false)} className="w-full">
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};
