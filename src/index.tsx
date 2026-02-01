import './config/global.css';

import React, { ComponentProps, ComponentPropsWithoutRef, PropsWithChildren, ReactNode, RefObject, Suspense, createContext, forwardRef, lazy, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { DayPicker } from 'react-day-picker';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as Recharts from 'recharts';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { useVirtual } from 'react-virtual';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';


type AvatarProps = {
  src?: string | null;
  fallback?: string | ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
} & (
  | (ComponentPropsWithoutRef<'button'> & { onClick: () => void })
  | (ComponentPropsWithoutRef<'div'> & { onClick?: never })
);

export const Avatar = forwardRef<HTMLDivElement | HTMLButtonElement, AvatarProps>(
  ({ src, fallback, size = 'md', className, onClick, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);

    const shouldShowFallback = !src || hasError;

    const content = (
      <>
        {!shouldShowFallback && (
          <img
            src={src}
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
            onError={() => setHasError(true)}
          />
        )}
        {shouldShowFallback && fallback && (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted border border-border">
            {typeof fallback === 'string' ? (
              <span
                className={clsx('font-medium text-foreground', {
                  'text-[8px]': size === 'xs',
                  'text-[10px]': size === 'sm',
                  'text-xs': size === 'md',
                  'text-sm': size === 'lg',
                  'text-base': size === 'xl',
                })}
              >
                {fallback}
              </span>
            ) : (
              fallback
            )}
          </div>
        )}
      </>
    );

    const avatarClasses = clsx(
      'aspect-square rounded-full flex items-center justify-center overflow-hidden flex-shrink-0',
      {
        'h-4 w-4': size === 'xs',
        'h-6 w-6': size === 'sm',
        'h-10 w-10': size === 'md',
        'h-14 w-14': size === 'lg',
        'h-20 w-20': size === 'xl',
      },
      onClick && 'cursor-pointer transition-opacity hover:opacity-80',
      className,
    );

    if (onClick) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          onClick={onClick}
          className={avatarClasses}
          {...(props as ComponentPropsWithoutRef<'button'>)}
        >
          {content}
        </button>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={avatarClasses}
        {...(props as ComponentPropsWithoutRef<'div'>)}
      >
        {content}
      </div>
    );
  },
);


export const Badge = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<'div'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
  }
>(({ variant = 'primary', className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'inline-flex items-center justify-center transition-all shadow text-xs rounded-xl px-2 h-6',
        {
          'bg-primary text-primary-foreground': variant === 'primary',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
          'bg-destructive text-destructive-foreground': variant === 'destructive',
          'border border-border text-foreground': variant === 'outline',
        },
        className,
      )}
      {...props}
    />
  );
});


export const Button = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon';
    size?: 'lg' | 'md' | 'sm' | 'xs';
  }
>(({ variant = 'primary', size = 'md', type = 'button', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      className={clsx(
        'flex items-center justify-center',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        'transition-all active:scale-smaller active:disabled:scale-default',
        {
          'w-full shadow': variant !== 'icon',
        },
        {
          'h-11 px-8 rounded-md': size === 'lg' && variant !== 'icon',
          'h-10 px-4 py-2 rounded-md': size === 'md' && variant !== 'icon',
          'h-9 px-3 text-xs rounded-sm': size === 'sm' && variant !== 'icon',
          'h-7 px-2 text-xs rounded-sm': size === 'xs' && variant !== 'icon',
        },
        {
          'h-10 rounded-md': size === 'lg' && variant === 'icon',
          'h-8 rounded-md': size === 'md' && variant === 'icon',
          'h-6 rounded-sm': size === 'sm' && variant === 'icon',
          'h-4 rounded-sm': size === 'xs' && variant === 'icon',
        },
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-border bg-background hover:bg-accent': variant === 'outline',
          'hover:bg-accent': variant === 'ghost',
          'aspect-square rounded-md bg-transparent hover:bg-accent !p-0': variant === 'icon',
        },
        className,
      )}
      {...props}
    />
  );
});


export const Calendar: React.FC<ComponentProps<typeof DayPicker>> = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={clsx('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'flex items-center space-x-1',
        nav_button: clsx(
          'h-7 w-7 rounded-md transition-colors border border-border flex items-center justify-center opacity-50',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'hover:bg-accent',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: clsx(
          'p-0 text-center relative',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
          '[&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50',
        ),
        day: clsx(
          'h-8 w-8 flex items-center justify-center text-sm rounded-md transition-all disabled:pointer-events-none disabled:opacity-50',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'hover:bg-accent',
        ),
        day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        ...classNames,
      }}
      components={{
        IconLeft: () => <Icon name="ChevronLeft" />,
        IconRight: () => <Icon name="ChevronRight" />,
      }}
      {...props}
    />
  );
};


export const Callout = React.forwardRef<
  HTMLDivElement,
  ComponentProps<'div'> & {
    icon: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
  }
>(({ className, icon, children, variant = 'primary', ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={clsx(
        'flex items-center gap-3 text-sm',
        {
          'bg-primary/10 text-primary': variant === 'primary',
          'bg-secondary/10 text-secondary': variant === 'secondary',
          'bg-destructive/10 text-destructive': variant === 'destructive',
          'border border-border bg-background': variant === 'outline',
          'bg-accent/10': variant === 'ghost',
        },
        className,
      )}
      {...props}
    >
      <div className="flex-shrink-0 px-1">{icon}</div>
      <div className="flex-1">{children}</div>
    </Card>
  );
});


export const Card = React.forwardRef<HTMLDivElement, ComponentProps<'div'>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('border border-border bg-card text-card-foreground rounded-md p-4', className)}
      {...props}
    />
  );
});


export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: React.ReactNode;
    labelPosition?: 'left' | 'right';
    containerClassName?: string;
  }
>(({ className, label, labelPosition = 'right', containerClassName, ...props }, ref) => {
  return (
    <div
      className={clsx('flex items-center gap-2', labelPosition === 'left' && 'flex-row-reverse', containerClassName)}
    >
      <CheckboxPrimitive.Root
        ref={ref}
        className={clsx(
          'peer h-5 w-5 shrink-0 rounded-sm border border-border shadow focus-visible:outline-none',
          'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          'transition-all active:scale-smaller active:disabled:scale-default',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          <Icon name="Check" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <label className="text-sm text-foreground select-none cursor-pointer" htmlFor={props.id}>
          {label}
        </label>
      )}
    </div>
  );
});


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


export const Divider = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & {
    variant?: 'horizontal' | 'vertical';
  }
>(({ variant = 'horizontal', className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('bg-muted', variant === 'horizontal' ? 'w-full h-px' : 'w-px h-full', className)}
      {...props}
    />
  );
});


export const Dropdown: React.FC<{
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
}> = ({ trigger, items, className, sideOffset = 4 }) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="focus-visible:outline-none">{trigger}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={sideOffset}
          className={clsx(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md',
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


const DEFAULT_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Email: React.FC<{
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onValidate?: (isValid: boolean) => void;
  validate?: (value: string) => boolean;
  placeholder?: string;
  label?: string;
  size?: 'lg' | 'md' | 'sm';
  showIcon?: boolean;
  showValidation?: boolean;
  containerClassName?: string;
  className?: string;
}> = ({
  value,
  onChange,
  onKeyDown,
  onValidate,
  validate,
  placeholder = 'Email',
  label,
  size = 'md',
  showIcon = true,
  showValidation = true,
  containerClassName,
  className,
}) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (validate) {
      return validate(email);
    }
    return DEFAULT_EMAIL_REGEX.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    const emailValid = validateEmail(newValue);
    setIsValid(emailValid);
    onValidate?.(emailValid);
  };

  return (
    <div className={clsx('flex flex-col gap-2', containerClassName)}>
      <Input
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        left={showIcon ? <Icon name="Mail" /> : undefined}
        right={
          showValidation && value ? (
            <Icon
              name={isValid ? 'CheckCircle' : 'Circle'}
              className={isValid ? 'text-primary' : 'text-muted-foreground'}
            />
          ) : undefined
        }
        placeholder={placeholder}
        label={label}
        size={size}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className={clsx(isValid && value ? 'border-primary' : '', className)}
      />
    </div>
  );
};


export const File = React.forwardRef<
  HTMLInputElement,
  {
    label?: React.ReactNode;
    title?: string;
    maxFileSize?: number;
    initialFile?: string;
    containerClassName?: string;
    onFileChange: (files: string[]) => void;
    onError?: (error: string) => void;
  } & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      title,
      maxFileSize = 1024 * 1024 * 2, // 2MB
      initialFile = null,
      containerClassName,
      disabled,
      multiple,
      className,
      onFileChange,
      onError,
      ...props
    },
    ref,
  ) => {
    const [fileSrc, setFileSrc] = useState<string | null>(initialFile);
    const internalRef = useRef<HTMLInputElement>(null);

    const inputRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

    useEffect(() => {
      setFileSrc(initialFile);
    }, [props.value, initialFile]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
        const fileReaders: Promise<string>[] = Array.from(files).map((file) => {
          return new Promise((resolve, reject) => {
            if (file.size > maxFileSize) {
              onError?.(`File must be less than ${maxFileSize / 1024 / 1024}MB`);
              return reject();
            }
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve(reader.result as string);
            };
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
          });
        });

        const base64Files = await Promise.all(fileReaders);
        setFileSrc(base64Files[0] ?? null);
        onFileChange(base64Files);
      }
    };

    return (
      <div className={clsx('flex flex-col gap-1', containerClassName)}>
        {label && <label className="text-sm font-medium text-foreground">{label}</label>}
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          multiple={multiple}
          className="hidden"
          {...props}
        />
        <button
          disabled={disabled}
          type="button"
          className={clsx(
            'flex h-10 w-full items-center justify-start rounded-md border border-border bg-background px-3 py-2 text-sm shadow-sm',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
            'hover:bg-accent hover:text-accent-foreground disabled:opacity-50',
            'transition-all active:scale-smaller active:disabled:scale-default',
            className,
          )}
          onClick={() => inputRef.current?.click()}
        >
          <div className="relative flex h-5 w-5 items-center justify-center mr-2">
            {fileSrc ? (
              multiple ? (
                <Icon name="Images" size={20} className="text-muted-foreground" />
              ) : (
                <img src={fileSrc} alt="Uploaded file preview" className="h-5 w-5 rounded-md object-cover" />
              )
            ) : (
              <Icon name="Upload" size={20} className="text-muted-foreground" />
            )}
          </div>
          {title ? (
            <span className="truncate">{title}</span>
          ) : (
            <span className="truncate">
              {fileSrc ? 'Change' : 'Upload'} {multiple ? 'files' : 'file'}
            </span>
          )}
        </button>
      </div>
    );
  },
);


export const Icon: React.FC<{
  name: string;
  size?: number | string;
  fill?: string;
  className?: string;
}> = ({ name, size = 16, fill = 'transparent', className, ...props }) => {
  const LucideIcon = useMemo(() => {
    // @ts-expect-error - lazy import
    return lazy(async () => {
      const mod = await import('lucide-react');
      if (name in mod) {
        return { default: mod[name as keyof typeof mod] as React.ElementType };
      } else {
        console.warn(`Icon "${name}" does not exist in lucide-react.`);
        return { default: () => <span style={{ color: 'red' }}>Invalid Icon</span> };
      }
    });
  }, [name]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: typeof size === 'number' ? `${size}px` : size,
            height: typeof size === 'number' ? `${size}px` : size,
          }}
        />
      }
    >
      <LucideIcon className={clsx(className)} size={size} fill={fill} {...props} />
    </Suspense>
  );
};


export const Input = React.forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<'input'>, 'size'> & {
    label?: React.ReactNode;
    containerClassName?: string;
    size?: 'lg' | 'md' | 'sm';
    left?: React.ReactNode;
    right?: React.ReactNode;
  }
>(({ label, containerClassName, className, size = 'md', left, right, type = 'text', ...props }, ref) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}

      <div
        className={clsx(
          'flex items-center w-full rounded-md border border-input bg-background shadow',
          'focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1 focus-within:ring-offset-background',
          {
            'h-11': size === 'lg',
            'h-10': size === 'md',
            'h-9': size === 'sm',
          },
        )}
      >
        {left && <div className="flex items-center pl-3 text-muted-foreground">{left}</div>}

        <input
          ref={ref}
          type={type}
          className={clsx(
            'flex-1 bg-transparent px-3 py-2 text-md sm:text-sm outline-none',
            'placeholder:text-md sm:placeholder:text-sm disabled:opacity-50',
            'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]',
            className,
          )}
          {...props}
        />

        {right && <div className="flex items-center pr-3 text-muted-foreground">{right}</div>}
      </div>
    </div>
  );
});


export interface DataPoint {
  name: string;
  [key: string]: any;
}

export interface LineChartProps {
  data: DataPoint[];
  lines: {
    key: string;
    color?: string;
    strokeWidth?: number;
    name?: string;
  }[];
  height?: number;
  className?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  animationDuration?: number;
  minimal?: boolean;
}

const CustomLineChartTooltip = ({ active, payload, label, data }: any) => {
  if (active && payload && payload.length) {
    let displayLabel = label;
    if (typeof label === 'number' && Array.isArray(data) && data[label] && data[label].name) {
      displayLabel = data[label].name;
    }
    return (
      <div className="bg-card border border-border rounded-md p-2 text-foreground">
        <p className="font-medium">{displayLabel}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      lines,
      height = 400,
      className,
      showGrid = true,
      showLegend = true,
      showTooltip = true,
      xAxisLabel,
      yAxisLabel,
      animationDuration = 500,
      minimal = false,
    },
    ref,
  ) => {
    return (
      <Card ref={ref} className={clsx('p-4', className)}>
        <Recharts.ResponsiveContainer width="100%" height={height}>
          <Recharts.LineChart
            data={data}
            margin={
              minimal
                ? { top: 5, right: 5, left: 5, bottom: 5 }
                : {
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }
            }
          >
            {!minimal && showGrid && (
              <Recharts.CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
            )}
            {!minimal && (
              <Recharts.XAxis
                dataKey="name"
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--foreground))' }}
                label={
                  xAxisLabel
                    ? {
                        value: xAxisLabel,
                        position: 'bottom',
                        fill: 'hsl(var(--foreground))',
                      }
                    : undefined
                }
              />
            )}
            {!minimal && (
              <Recharts.YAxis
                stroke="hsl(var(--foreground))"
                tick={{ fill: 'hsl(var(--foreground))' }}
                label={
                  yAxisLabel
                    ? {
                        value: yAxisLabel,
                        angle: -90,
                        position: 'insideLeft',
                        fill: 'hsl(var(--foreground))',
                      }
                    : undefined
                }
              />
            )}
            {showTooltip && (
              <Recharts.Tooltip
                content={<CustomLineChartTooltip data={data} />}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
            {!minimal && showLegend && (
              <Recharts.Legend
                wrapperStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
            {lines.map((line) => (
              <Recharts.Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                name={line.name || line.key}
                stroke={line.color || 'hsl(var(--primary))'}
                strokeWidth={line.strokeWidth || 2}
                dot={minimal ? false : { fill: 'hsl(var(--card))', stroke: line.color || 'hsl(var(--primary))' }}
                activeDot={minimal ? false : { r: 8, fill: line.color || 'hsl(var(--primary))' }}
                animationDuration={animationDuration}
              />
            ))}
          </Recharts.LineChart>
        </Recharts.ResponsiveContainer>
      </Card>
    );
  },
);


export const Loader: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  className?: string;
}> = ({ size = 'md', variant = 'primary', className }) => {
  return (
    <div className="flex items-center justify-center">
      <Icon
        name="LoaderCircle"
        className={clsx(
          'animate-spin absolute',
          {
            'w-4 h-4': size === 'sm',
            'w-7 h-7': size === 'md',
            'w-9 h-9': size === 'lg',
          },
          {
            'text-primary': variant === 'primary',
            'text-secondary': variant === 'secondary',
          },
          className,
        )}
      />
    </div>
  );
};


export const Modal: React.FC<
  ComponentProps<typeof DialogPrimitive.Content> & {
    isOpen: boolean;
    onClose: () => void;
    size?: 'sm' | 'md' | 'lg';
  }
> = ({ isOpen, onClose, size = 'md', className, children, ...props }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={clsx(
            'fixed inset-0 z-50 bg-black/50',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in data-[state=closed]:fade-out',
          )}
        />

        <DialogPrimitive.Content
          className={clsx(
            'fixed z-50 bg-background p-6',
            'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
            'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'sm:shadow-lg sm:border-border sm:border sm:rounded-lg',
            'w-full h-full sm:h-auto sm:max-w-[90vw] sm:max-h-[90vh]',
            {
              'sm:w-[400px]': size === 'sm',
              'sm:w-[500px]': size === 'md',
              'sm:w-[600px]': size === 'lg',
            },
            className,
          )}
          {...props}
        >
          <Button variant="icon" size="sm" className="absolute top-4 right-4" aria-label="Close" onClick={onClose}>
            <Icon name="X" />
          </Button>

          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};


export const Notification: React.FC<{
  value: number;
  size?: 'sm' | 'md' | 'lg';
  max?: number;
  description?: string;
  showTooltip?: boolean;
  variant?: 'destructive' | 'primary' | 'secondary';
  className?: string;
}> = ({
  value,
  size = 'sm',
  max = 99,
  description = 'unread notification',
  showTooltip = true,
  variant = 'destructive',
  className,
}) => {
  if (!value || value <= 0) return null;

  const displayValue = value > max ? `${max}+` : value.toString();

  const variantStyles = {
    destructive: 'bg-destructive text-destructive-foreground',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
  };

  const sizeStyles = {
    sm: {
      base: 'min-w-[18px] h-[18px] text-[10px]',
      single: 'px-0',
      multi: 'px-1',
    },
    md: {
      base: 'min-w-[22px] h-[22px] text-xs',
      single: 'px-0',
      multi: 'px-1.5',
    },
    lg: {
      base: 'min-w-[26px] h-[26px] text-sm',
      single: 'px-0',
      multi: 'px-2',
    },
  };

  const isSingleDigit = displayValue.length === 1;
  const styles = sizeStyles[size];

  const content = (
    <div
      className={clsx(
        'inline-flex items-center justify-center',
        'rounded-full font-medium shadow-sm',
        'transition-all',
        variantStyles[variant],
        styles.base,
        isSingleDigit ? styles.single : styles.multi,
        className,
      )}
    >
      <span className="leading-none tabular-nums">{displayValue}</span>
    </div>
  );

  if (!showTooltip) {
    return content;
  }

  const tooltipText = `You have ${value} ${description}${value === 1 ? '' : 's'}`;

  return <Tooltip content={tooltipText} trigger={content} />;
};


export type PaginationData = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore?: boolean;
};

export const Pagination: React.FC<{
  data: PaginationData;
  onChange: (page: number) => void;
  showInfo?: boolean;
  showFirstLast?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
  className?: string;
}> = ({ data, onChange, showInfo = true, showFirstLast = false, size = 'sm', variant = 'default', className }) => {
  const { page, limit, total, totalPages, hasMore } = data;

  const canGoPrevious = page > 1;
  const canGoNext = hasMore !== undefined ? hasMore : page < totalPages;

  const startItem = total > 0 ? (page - 1) * limit + 1 : 0;
  const endItem = Math.min(page * limit, total);

  if (variant === 'minimal') {
    return (
      <div className={clsx('flex items-center gap-2', className)}>
        <Button variant="ghost" size={size} onClick={() => onChange(page - 1)} disabled={!canGoPrevious} type="button">
          <Icon name="ChevronLeft" size={16} />
        </Button>
        <span className="text-sm text-muted-foreground tabular-nums">
          {page} / {totalPages}
        </span>
        <Button variant="ghost" size={size} onClick={() => onChange(page + 1)} disabled={!canGoNext} type="button">
          <Icon name="ChevronRight" size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className={clsx('flex items-center justify-between gap-4', className)}>
      <div className="flex items-center gap-1">
        {showFirstLast && (
          <Button
            variant="outline"
            size={size}
            onClick={() => onChange(1)}
            disabled={!canGoPrevious}
            type="button"
            className="gap-1"
          >
            <Icon name="ChevronsLeft" size={16} />
          </Button>
        )}
        <Button
          variant="outline"
          size={size}
          onClick={() => onChange(page - 1)}
          disabled={!canGoPrevious}
          type="button"
          className="gap-2"
        >
          <Icon name="ArrowLeft" size={16} />
          <span className="hidden sm:inline">Back</span>
        </Button>
      </div>

      {showInfo && (
        <div className="text-sm text-muted-foreground tabular-nums">
          {total > 0 ? (
            <>
              Showing {startItem}-{endItem} of {total}
            </>
          ) : (
            'No results'
          )}
        </div>
      )}

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size={size}
          onClick={() => onChange(page + 1)}
          disabled={!canGoNext}
          type="button"
          className="gap-2"
        >
          <span className="hidden sm:inline">Next</span>
          <Icon name="ArrowRight" size={16} />
        </Button>
        {showFirstLast && (
          <Button
            variant="outline"
            size={size}
            onClick={() => onChange(totalPages)}
            disabled={!canGoNext}
            type="button"
            className="gap-1"
          >
            <Icon name="ChevronsRight" size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};


type PasswordRequirementConfig = {
  minLength?: number;
  maxLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
  requireSpecial?: boolean;
  specialChars?: string;
};

const DEFAULT_REQUIREMENTS: Required<PasswordRequirementConfig> = {
  minLength: 8,
  maxLength: 64,
  requireUppercase: true,
  requireLowercase: true,
  requireNumber: false,
  requireSpecial: true,
  specialChars: '!@#$%^&*(),.?":{}|<>',
};

const PasswordRequirement: React.FC<{ text: string; isValid: boolean }> = ({ text, isValid }) => (
  <div className="flex items-center gap-2">
    <Icon
      name={isValid ? 'CheckCircle' : 'Circle'}
      size={14}
      className={isValid ? 'text-primary' : 'text-muted-foreground'}
    />
    <span className={clsx('text-sm', isValid ? 'text-primary' : 'text-muted-foreground')}>{text}</span>
  </div>
);

export const Password: React.FC<{
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onValidate?: (isValid: boolean) => void;
  requirements?: PasswordRequirementConfig;
  showRequirements?: boolean;
  placeholder?: string;
  label?: string;
  size?: 'lg' | 'md' | 'sm';
  containerClassName?: string;
  className?: string;
}> = ({
  value,
  onChange,
  onKeyDown,
  onValidate,
  requirements: customRequirements,
  showRequirements = true,
  placeholder = 'Password',
  label,
  size = 'md',
  containerClassName,
  className,
}) => {
  const requirements = { ...DEFAULT_REQUIREMENTS, ...customRequirements };
  const [showPassword, setShowPassword] = useState(false);
  const [validation, setValidation] = useState({
    hasLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);

    const specialRegex = new RegExp(`[${requirements.specialChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`);

    const newValidation = {
      hasLength: newValue.length >= requirements.minLength && newValue.length <= requirements.maxLength,
      hasUppercase: !requirements.requireUppercase || /[A-Z]/.test(newValue),
      hasLowercase: !requirements.requireLowercase || /[a-z]/.test(newValue),
      hasNumber: !requirements.requireNumber || /[0-9]/.test(newValue),
      hasSpecial: !requirements.requireSpecial || specialRegex.test(newValue),
    };

    setValidation(newValidation);

    const isValid =
      newValidation.hasLength &&
      newValidation.hasUppercase &&
      newValidation.hasLowercase &&
      newValidation.hasNumber &&
      newValidation.hasSpecial;

    onValidate?.(isValid);
  };

  const isValid =
    validation.hasLength &&
    validation.hasUppercase &&
    validation.hasLowercase &&
    validation.hasNumber &&
    validation.hasSpecial;

  return (
    <div className={clsx('flex flex-col gap-2', containerClassName)}>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        label={label}
        size={size}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className={clsx(isValid && value ? 'border-primary' : '', className)}
        right={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={16} />
          </button>
        }
      />
      {showRequirements && (
        <div className="ml-3 flex flex-col gap-1">
          <PasswordRequirement
            text={`Between ${requirements.minLength} and ${requirements.maxLength} characters`}
            isValid={validation.hasLength}
          />
          {requirements.requireUppercase && (
            <PasswordRequirement text="At least one uppercase letter" isValid={validation.hasUppercase} />
          )}
          {requirements.requireLowercase && (
            <PasswordRequirement text="At least one lowercase letter" isValid={validation.hasLowercase} />
          )}
          {requirements.requireNumber && (
            <PasswordRequirement text="At least one number" isValid={validation.hasNumber} />
          )}
          {requirements.requireSpecial && (
            <PasswordRequirement text="At least one special character" isValid={validation.hasSpecial} />
          )}
        </div>
      )}
    </div>
  );
};


export interface PieChartData {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartProps {
  data: PieChartData[];
  height?: number;
  className?: string;
  showLegend?: boolean;
  showTooltip?: boolean;
  innerRadius?: number;
  outerRadius?: number;
  animationDuration?: number;
  paddingAngle?: number;
}

const CustomPieChartTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-md p-2 text-foreground">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-sm">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data,
      height = 400,
      className,
      showLegend = true,
      showTooltip = true,
      innerRadius = 0,
      outerRadius = '80%',
      animationDuration = 500,
      paddingAngle = 0,
    },
    ref,
  ) => {
    return (
      <Card ref={ref} className={clsx('p-4', className)}>
        <Recharts.ResponsiveContainer width="100%" height={height}>
          <Recharts.PieChart>
            <Recharts.Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={paddingAngle}
              dataKey="value"
              animationDuration={animationDuration}
            >
              {data.map((entry, index) => (
                <Recharts.Cell
                  key={`cell-${index}`}
                  fill={entry.color || `hsl(var(--primary))`}
                  stroke="hsl(var(--card))"
                  strokeWidth={2}
                />
              ))}
            </Recharts.Pie>
            {showTooltip && <Recharts.Tooltip content={<CustomPieChartTooltip />} />}
            {showLegend && (
              <Recharts.Legend
                wrapperStyle={{
                  color: 'hsl(var(--foreground))',
                }}
              />
            )}
          </Recharts.PieChart>
        </Recharts.ResponsiveContainer>
      </Card>
    );
  },
);


export const Popover: React.FC<
  ComponentProps<typeof PopoverPrimitive.Root> & {
    trigger: React.ReactNode;
    content: React.ReactNode;
    variant?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    className?: string;
  }
> = ({ trigger, content, variant = 'bottom', align = 'center', sideOffset = 4, className, ...props }) => {
  return (
    <PopoverPrimitive.Root {...props}>
      <PopoverPrimitive.Trigger className="focus-visible:outline-none">{trigger}</PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side={variant}
          align={align}
          sideOffset={sideOffset}
          className={clsx(
            'z-50 w-72 rounded-md border border-border bg-background p-4 text-foreground shadow-md outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in data-[state=closed]:fade-out',
            'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
        >
          {content}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};


export const Scrollable = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof ScrollAreaPrimitive.Root> & {
    disableScrollbar?: boolean;
    variant?: 'vertical' | 'horizontal';
  }
>(({ className, children, disableScrollbar = false, variant = 'vertical', ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.Root className={clsx('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        ref={ref}
        className={clsx('w-full rounded-[inherit]', {
          'h-full': variant === 'vertical',
          'h-auto whitespace-nowrap': variant === 'horizontal',
        })}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.ScrollAreaScrollbar
        orientation={variant}
        className={clsx('flex touch-none select-none transition-colors border-transparent p-[1px]', {
          'w-2.5 border-l': variant === 'vertical',
          'h-2.5 border-t': variant === 'horizontal',
        })}
      >
        <ScrollAreaPrimitive.ScrollAreaThumb
          className={clsx('relative flex-1 rounded-full bg-border', {
            hidden: disableScrollbar,
          })}
        />
      </ScrollAreaPrimitive.ScrollAreaScrollbar>

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});


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
  clearable = true,
}: {
  label?: string;
  options: T[];
  value: T | null;
  onSelect: (value: T | null) => void;
  render?: (option: T) => React.ReactNode;
  getOptionKey?: (option: T) => string | number;
  containerClassName?: string;
  disabled?: boolean;
  placeholder?: string;
  clearable?: boolean;
}) => {
  const showClearOption = clearable && value !== null && !disabled;

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
        <div className="relative">
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

          <Button
            className={clsx('absolute right-8 top-1/2 -translate-y-1/2', !showClearOption && 'hidden')}
            variant="icon"
            size="sm"
            onClick={() => onSelect(null)}
          >
            <Icon name="X" className="opacity-50" />
          </Button>
        </div>

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


export const Sheet: React.FC<
  ComponentProps<'div'> & {
    isOpen: boolean;
    onClose: () => void;
    variant?: 'right' | 'left' | 'bottom';
    showOverlay?: boolean;
    className?: string;
  }
> = ({ isOpen, onClose, variant = 'right', showOverlay = true, className, children, ...props }) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={clsx(
            showOverlay ? 'bg-black/50' : 'bg-transparent',
            'fixed inset-0 z-50',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in data-[state=closed]:fade-out',
          )}
        />

        <DialogPrimitive.Content
          className={clsx(
            'fixed z-50 bg-background p-6 shadow-lg border-border duration-300',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            {
              'right-0 inset-y-0 w-full h-full sm:max-w-sm border-l data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right':
                variant === 'right',
              'left-0 inset-y-0 w-full h-full sm:max-w-sm border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left':
                variant === 'left',
              'bottom-0 inset-x-0 max-h-[90vh] rounded-t-lg border-t data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom':
                variant === 'bottom',
            },
            className,
          )}
          {...props}
        >
          <Button variant="icon" size="sm" className="absolute top-4 right-4" aria-label="Close" onClick={onClose}>
            <Icon name="X" />
          </Button>

          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};


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
          <SliderPrimitive.Range className={clsx('absolute h-full bg-primary', { '!bg-primary/60': disabled })} />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
          className={clsx(
            'block h-4 w-4 rounded-full border border-primary bg-background shadow transition-all',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            { hidden: disabled },
          )}
        />
      </SliderPrimitive.Root>
    </div>
  );
};


type StatisticVariant = 'default' | 'compact';

export const Statistic: React.FC<{
  title: string;
  value: string | number | ReactNode;
  icon?: string;
  iconColor?: string;
  description?: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  variant?: StatisticVariant;
  className?: string;
}> = ({
  title,
  value,
  icon,
  iconColor = 'hsl(var(--primary))',
  description,
  trend,
  variant = 'default',
  className,
}) => {
  const iconBackgroundColor = iconColor.startsWith('hsl') ? iconColor.replace(')', ' / 0.15)') : `${iconColor}20`;

  return (
    <Card className={clsx('flex flex-col items-start gap-3', className)}>
      <div className={clsx('flex items-center gap-3', variant === 'compact' && 'gap-2')}>
        {icon && (
          <div
            className={clsx(
              'rounded-lg flex items-center justify-center',
              variant === 'default' ? 'w-10 h-10' : 'w-8 h-8',
            )}
            style={{
              backgroundColor: iconBackgroundColor,
              color: iconColor,
            }}
          >
            <Icon name={icon} size={variant === 'default' ? 20 : 16} className="text-current" />
          </div>
        )}
        <div className="flex flex-col">
          <span className={clsx('text-muted-foreground font-medium', variant === 'default' ? 'text-sm' : 'text-xs')}>
            {title}
          </span>
          <div className="flex items-center gap-2">
            <span className={clsx('font-bold text-foreground', variant === 'default' ? 'text-2xl' : 'text-xl')}>
              {value}
            </span>
            {trend && (
              <span
                className={clsx(
                  'flex items-center text-xs font-medium',
                  trend.direction === 'up' ? 'text-green-500' : 'text-red-500',
                )}
              >
                <Icon name={trend.direction === 'up' ? 'TrendingUp' : 'TrendingDown'} size={12} className="mr-0.5" />
                {trend.value}%
              </span>
            )}
          </div>
        </div>
      </div>
      {description && <span className="text-xs text-muted-foreground">{description}</span>}
    </Card>
  );
};


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


export function Table<T>({
  columns,
  data,
  className,
  headerClassName,
  disableScrollbar,
  render,
  onClick,
}: {
  data: T[];
  columns: { header: string; key: keyof T }[];
  className?: string;
  headerClassName?: string;
  disableScrollbar?: boolean;
  render?: (row: T, columnKey: keyof T, rowIndex: number) => React.ReactNode;
  onClick?: (row: T, rowIndex: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLTableCellElement>(null);
  const rowVirtualizer = useVirtual({ parentRef: ref, size: data.length, overscan: 10 });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableRowElement>, rowIndex: number) => {
    const rows = ref.current?.querySelectorAll<HTMLTableRowElement>('tr[tabindex="0"]');
    if (!rows) return;

    const currentRow = e.currentTarget;
    const currentIndex = Array.from(rows).indexOf(currentRow);

    const focusRow = (index: number) => rows[index]?.focus();

    if (e.key === 'Tab') {
      e.preventDefault();
      e.shiftKey
        ? focusRow((currentIndex - 1 + rows.length) % rows.length)
        : focusRow((currentIndex + 1) % rows.length);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusRow((currentIndex + 1) % rows.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusRow((currentIndex - 1 + rows.length) % rows.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      onClick?.(data[rowIndex], rowIndex);
    }
  };

  return (
    <Scrollable ref={ref} className="h-full rounded-t-md" disableScrollbar={disableScrollbar}>
      <table className="w-full text-sm border-collapse table-fixed">
        <thead className={clsx('sticky top-0 bg-background shadow-sm z-10', headerClassName)}>
          <tr className="[&_th]:border-b [&_th]:border-b-muted">
            {columns.map((col) => (
              <th
                ref={headerRef}
                key={String(col.key)}
                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={clsx('relative', className)} style={{ height: `${rowVirtualizer.totalSize}px` }}>
          {rowVirtualizer.virtualItems.map((virtualRow) => {
            const row = data[virtualRow.index];
            return (
              <tr
                key={virtualRow.index}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, virtualRow.index)}
                onClick={() => onClick?.(row, virtualRow.index)}
                className={clsx(
                  'border-b border-b-muted transition-colors absolute left-0 right-0',
                  'hover:bg-muted/50 focus:bg-muted/50 cursor-pointer focus:outline-none',
                )}
                style={{ top: `${virtualRow.start}px`, height: `${virtualRow.size}px` }}
              >
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="p-4 align-middle truncate"
                    style={{ width: headerRef.current?.clientWidth, maxWidth: headerRef.current?.clientWidth }}
                  >
                    {render ? render(row, col.key, virtualRow.index) : String(row[col.key])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Scrollable>
  );
}


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
          'transition-all',
          className,
        )}
        {...props}
      />
    </div>
  );
});


export const Toast: React.FC<{
  open: boolean;
  message: string;
  variant: 'positive' | 'negative' | 'neutral' | 'action';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  action?: string;
  duration?: number;
  className?: string;
  onClick?: () => void;
  onOpenChange?: (open: boolean) => void;
}> = ({ open, message, variant, position = 'bottom-left', action, duration, className, onClick, onOpenChange }) => {
  const getIcon = () => {
    switch (variant) {
      case 'positive':
        return <Icon name="CircleCheck" size={20} className="text-primary/50" />;
      case 'negative':
        return <Icon name="CircleX" size={20} className="text-primary/50" />;
      default:
        return null;
    }
  };

  return (
    <ToastPrimitives.Provider duration={duration}>
      <ToastPrimitives.Root
        open={open}
        onOpenChange={onOpenChange}
        className={clsx(
          'group pointer-events-auto relative justify-between flex w-full items-center space-x-4 rounded-md border p-4 shadow-lg transition-all bg-background text-foreground border-border',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full',
        )}
      >
        <div className="flex flex-row gap-2">
          {getIcon()}
          <div className="flex-1 text-sm">{message}</div>
        </div>

        <div className="flex flex-row gap-1">
          {variant === 'action' && action && onClick && (
            <Button variant="outline" size="sm" onClick={onClick} className="w-fit">
              {action}
            </Button>
          )}

          <ToastPrimitives.Close>
            <Button variant="icon" size="sm">
              <Icon name="X" />
            </Button>
          </ToastPrimitives.Close>
        </div>
      </ToastPrimitives.Root>

      <ToastPrimitives.Viewport
        className={clsx(
          'fixed z-50 flex max-h-screen w-full flex-col-reverse',
          'left-4 right-4 w-[calc(100%-32px)] sm:max-w-[420px]',
          {
            'top-4': position === 'top-left' || position === 'top-right',
            'bottom-4': position === 'bottom-left' || position === 'bottom-right',
          },
          {
            'sm:left-auto sm:right-4': position === 'top-right' || position === 'bottom-right',
            'sm:right-auto sm:left-4': position === 'top-left' || position === 'bottom-left',
          },
          className,
        )}
      />
    </ToastPrimitives.Provider>
  );
};


export const Tooltip: React.FC<{
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delayDuration?: number;
  trigger: ReactNode;
  className?: string;
}> = ({ content, side = 'top', delayDuration = 0, trigger, className }) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="focus-visible:outline-none">{trigger}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={4}
            className={clsx(
              'z-50 overflow-hidden rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground border border-border max-w-60',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
              'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              className,
            )}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};


export const useBreakpoints = ({ mobile = 600, desktop = 1024 } = {}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobile);
      setIsTablet(window.innerWidth >= mobile && window.innerWidth < desktop);
      setIsDesktop(window.innerWidth >= desktop);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobile, desktop]);

  return { isMobile, isTablet, isDesktop };
};


export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}


export const useEnvironment = () => {
  return useMemo(() => {
    const hostname = window?.location.hostname;
    const isDevelopment = hostname === 'localhost';
    const isProduction = !isDevelopment;
    return { isDevelopment, isProduction };
  }, [location.hostname]);
};


export const useFormatCurrency = () => {
  return useCallback((input: number, options?: Intl.NumberFormatOptions & { includeSymbol?: boolean }) => {
    const { includeSymbol = true, ...restOptions } = options || {};
    const defaultOptions: Intl.NumberFormatOptions = includeSymbol
      ? { style: 'currency', currency: 'GBP' }
      : { minimumFractionDigits: 2, maximumFractionDigits: 2 };

    const formatter = new Intl.NumberFormat('en-US', { ...defaultOptions, ...restOptions });
    return formatter.format(input);
  }, []);
};

export const useFormatPercent = () => {
  return useCallback((value: number) => {
    let val = value;
    if (value >= 1) {
      val = value - 1;
    }
    return `${Math.floor(val * 100)}%`;
  }, []);
};

export const useFormatDate = () => {
  return useCallback(
    (
      value: Date | string,
      options?: { format?: 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD' | 'short' | 'long'; includeTime?: boolean },
    ) => {
      const { format = 'DD/MM/YYYY', includeTime = false } = options || {};

      const date = new Date(value);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const time = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      const suffix = includeTime ? ` ${time}` : '';

      switch (format) {
        case 'short':
          return `${date
            .toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })
            .replace(',', '')}${suffix}`;
        case 'long':
          return `${date
            .toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
            .replace(',', '')}${suffix}`;
        case 'MM/DD/YYYY':
          return `${month}/${day}/${year}${suffix}`;
        case 'YYYY/MM/DD':
          return `${year}/${month}/${day}${suffix}`;
        default:
          return `${day}/${month}/${year}${suffix}`;
      }
    },
    [],
  );
};

export const useFormatTime = () => {
  return useCallback(
    (
      value: Date | string,
      options?: {
        format?: 'HH:MM' | 'HH:MM:SS';
      },
    ) => {
      const { format = 'HH:MM' } = options || {};

      const date = new Date(value);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');

      switch (format) {
        case 'HH:MM:SS':
          return `${hours}:${minutes}:${seconds}`;
        default:
          return `${hours}:${minutes}`;
      }
    },
    [],
  );
};

export const useFormatRelativeTime = () => {
  return useCallback((date: Date | string) => {
    const targetDate = new Date(date);
    const current = new Date();
    const difference = targetDate.getTime() - current.getTime();

    const seconds = Math.abs(Math.floor(difference / 1000));
    const minutes = Math.abs(Math.floor(seconds / 60));
    const hours = Math.abs(Math.floor(minutes / 60));
    const days = Math.abs(Math.floor(hours / 24));

    const isFuture = difference > 0;

    if (days > 0) return `${isFuture ? 'in' : ''} ${days} ${days === 1 ? 'day' : 'days'} ${isFuture ? '' : 'ago'}`;
    if (hours > 0) return `${isFuture ? 'in' : ''} ${hours} ${hours === 1 ? 'hour' : 'hours'} ${isFuture ? '' : 'ago'}`;
    if (minutes > 0)
      return `${isFuture ? 'in' : ''} ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ${isFuture ? '' : 'ago'}`;
    return isFuture ? 'Soon' : 'Just now';
  }, []);
};

export const useFormatMinutesUntilNextHour = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const minutesUntilNextHour = 60 - minutes;
  return String(minutesUntilNextHour).padStart(2, '0'); // ensures it's always two digits
};


export const useOnClickout = (ignoredRefs: RefObject<Element>[], handler: Function) => {
  const onMouseDown = useCallback(
    (event: MouseEvent) => {
      const containsIgnored = ignoredRefs.map((ref) => ref.current?.contains(event.target as Element));
      const isIgnored = containsIgnored.some(Boolean);
      if (!isIgnored) {
        handler();
      }
    },
    [ignoredRefs, handler],
  );

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, [onMouseDown]);
};


export const useOnKeypress = ({
  key,
  useShift,
  useCtrl,
  useMeta,
  useAlt,
  shouldSkip,
  onPress,
}: {
  key: string;
  useShift?: boolean;
  useCtrl?: boolean;
  useMeta?: boolean;
  useAlt?: boolean;
  shouldSkip?: boolean;
  onPress: Function;
}) => {
  const handleKeyPress = useCallback(
    async (event: KeyboardEvent) => {
      if (shouldSkip) return;

      const isShiftPressed = useShift === undefined ? true : event.shiftKey === useShift;
      const isCtrlPressed = useCtrl === undefined ? true : event.ctrlKey === useCtrl;
      const isMetaPressed = useMeta === undefined ? true : event.metaKey === useMeta;
      const isAltPressed = useAlt === undefined ? true : event.altKey === useAlt;

      if (
        isShiftPressed &&
        isCtrlPressed &&
        isMetaPressed &&
        isAltPressed &&
        event.code === key &&
        event.shiftKey === !!useShift &&
        event.ctrlKey === !!useCtrl &&
        event.metaKey === !!useMeta &&
        event.altKey === !!useAlt
      ) {
        event.preventDefault();
        onPress();
      }
    },
    [key, useShift, useCtrl, useMeta, useAlt, onPress, shouldSkip],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
};


export const useTimeout = (): ((ms: number) => Promise<void>) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setTimeoutPromise = useCallback((ms: number) => {
    return new Promise<void>((resolve) => {
      timeoutRef.current = setTimeout(() => {
        resolve();
      }, ms);
    });
  }, []);

  return setTimeoutPromise;
};


export const useToast = () => {
  const { addToast } = useToastContext();

  return (options: {
    variant: 'positive' | 'negative' | 'neutral' | 'action';
    message: string;
    action?: string;
    duration?: number;
    onClick?: () => void;
  }) => {
    addToast(options);
  };
};


type ToastOptions = Partial<ComponentProps<typeof Toast>> & {
  id?: string;
};

const ToastContext = createContext<
  { addToast: (toast: ToastOptions) => void; removeToast: (id: string) => void } | undefined
>(undefined);

export const SpindleProvider: React.FC<
  PropsWithChildren<{
    options?: {
      toast?: {
        className?: string;
        defaultDuration?: number;
        position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
      };
    };
  }>
> = ({ options, children }) => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const addToast = (toast: ToastOptions) => {
    const id = toast.id || Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <>
        {toasts.map((toast) => (
          <Toast
            open
            key={toast.id}
            variant={toast.variant ?? 'neutral'}
            message={toast.message ?? ''}
            action={toast.action}
            duration={toast.duration ?? options?.toast?.defaultDuration ?? 5000}
            position={options?.toast?.position}
            className={options?.toast?.className}
            onClick={toast.onClick}
            onOpenChange={() => removeToast(toast.id!)}
          />
        ))}
      </>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a SpindleProvider');
  }
  return context;
};
