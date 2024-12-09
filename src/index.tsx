import React, { ComponentProps, ReactNode, Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { DayPicker } from 'react-day-picker';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as ToastPrimitives from '@radix-ui/react-toast';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';


export const Badge: React.FC<
  ComponentProps<'div'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline';
  }
> = ({ variant = 'primary', className, ...props }) => {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center transition-all shadow text-xs rounded-xl px-2 h-6',
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-input text-foreground': variant === 'outline',
        },
        className,
      )}
      {...props}
    />
  );
};


export const Button: React.FC<
  ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'icon';
    size?: 'lg' | 'md' | 'sm';
  }
> = ({ variant = 'primary', size = 'md', type = 'button', className, ...props }) => {
  return (
    <button
      type={type}
      className={clsx(
        'flex items-center justify-center transition-all shadow',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'w-full': variant !== 'icon',
        },
        {
          'h-10 px-8 rounded-md': size === 'lg',
          'h-9 px-4 py-2 rounded-md': size === 'md',
          'h-8 px-3 text-xs rounded-sm': size === 'sm',
        },
        {
          'bg-primary text-primary-foreground hover:bg-primary/80': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'bg-destructive text-destructive-foreground hover:bg-destructive/80': variant === 'destructive',
          'border border-input bg-background hover:bg-accent': variant === 'outline',
          'hover:bg-accent': variant === 'ghost',
          'aspect-square rounded-md bg-background hover:bg-accent !p-0': variant === 'icon',
        },
        className,
      )}
      {...props}
    />
  );
};


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
          'h-7 w-7 rounded-md transition-colors border border-input flex items-center justify-center opacity-50',
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


export const Card: React.FC<ComponentProps<'div'>> = ({ className, ...props }) => {
  return (
    <div className={clsx('border border-input bg-card text-card-foreground rounded-md p-4', className)} {...props} />
  );
};


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
          'peer h-5 w-5 shrink-0 rounded-sm border border-input shadow focus-visible:outline-none',
          'focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
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


export const File = React.forwardRef<
  HTMLInputElement,
  {
    label?: React.ReactNode;
    maxFileSize?: number;
    containerClassName?: string;
    onFileChange: (file: string | null) => void;
    onError?: (error: string) => void;
  } & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      maxFileSize = 1024 * 1024 * 2, // 2MB
      containerClassName,
      className,
      onFileChange,
      onError,
      ...props
    },
    ref,
  ) => {
    const [fileSrc, setFileSrc] = useState<string | null>(null);
    const internalRef = useRef<HTMLInputElement>(null);

    const inputRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef;

    useEffect(() => {
      setFileSrc(null);
    }, [props.value]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > maxFileSize) {
          return onError?.(`File must be less than ${maxFileSize / 1024 / 1024}MB`);
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          setFileSrc(base64String);
          onFileChange(base64String);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className={clsx('flex flex-col gap-1', containerClassName)}>
        {label && <label className="text-sm font-medium text-foreground">{label}</label>}
        <input ref={inputRef} type="file" onChange={handleFileChange} className="hidden" {...props} />
        <button
          type="button"
          className={clsx(
            'flex h-10 w-full items-center justify-start rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
            'hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed',
            className,
          )}
          onClick={() => inputRef.current?.click()}
        >
          <div className="flex h-5 w-5 items-center justify-center mr-2">
            {fileSrc ? (
              <img src={fileSrc} alt="Uploaded file preview" className="h-5 w-5 rounded-md object-cover" />
            ) : (
              <Icon name="Upload" size={20} className="text-muted-foreground" />
            )}
          </div>
          <span className="truncate">{fileSrc ? 'Change File' : 'Upload File'}</span>
        </button>
      </div>
    );
  },
);

File.displayName = 'File';


export const Icon: React.FC<{
  name: string;
  size?: number | string;
  className?: string;
}> = ({ name, size = 16, className, ...props }) => {
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
      <LucideIcon className={clsx(className)} size={size} {...props} />
    </Suspense>
  );
};


export const Input = React.forwardRef<
  HTMLInputElement,
  ComponentProps<'input'> & {
    label?: React.ReactNode;
    containerClassName?: string;
  }
>(({ label, containerClassName, className, type = 'text', ...props }, ref) => {
  return (
    <div className={clsx('flex flex-col gap-1', containerClassName)}>
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      <input
        ref={ref}
        type={type}
        className={clsx(
          'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow',
          'placeholder:text-sm',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          {
            'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none':
              type === 'number',
          },
          className,
        )}
        {...props}
      />
    </div>
  );
});


export const Loader: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'ring';
  className?: string;
}> = ({ size = 'md', variant = 'spinner', className }) => {
  return (
    <div role="status" aria-live="polite" className={clsx('inline-flex items-center justify-center', className)}>
      {variant === 'spinner' && (
        <div
          className={clsx(
            'inline-block animate-spin rounded-full border-t-transparent border-solid border-primary border-2 box-content',
            {
              'w-3 h-3': size === 'sm',
              'w-6 h-6': size === 'md',
              'w-8 h-8': size === 'lg',
            },
          )}
        />
      )}

      {variant === 'dots' && (
        <div className="flex space-x-1">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className={clsx(
                'rounded-full bg-primary',
                { 'w-1.5 h-1.5': size === 'sm' },
                { 'w-2.5 h-2.5': size === 'md' },
                { 'w-3.5 h-3.5': size === 'lg' },
                'animate-bounce',
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      )}

      {variant === 'ring' && (
        <div
          className={clsx('relative', {
            'w-3 h-3': size === 'sm',
            'w-6 h-6': size === 'md',
            'w-8 h-8': size === 'lg',
          })}
        >
          <div className="absolute w-full h-full border-2 border-primary rounded-full animate-ping" />
        </div>
      )}
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
            'fixed z-50 bg-background p-6 shadow-lg border-input border rounded-lg',
            'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
            'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
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
            'z-50 w-72 rounded-md border border-input bg-background p-4 text-foreground shadow-md outline-none',
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


type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  disableScrollbar?: boolean;
  variant?: 'vertical' | 'horizontal';
};

export const Scrollable: React.FC<ScrollAreaProps> = ({
  className,
  children,
  disableScrollbar = false,
  variant = 'vertical',
  ...props
}) => {
  return (
    <ScrollAreaPrimitive.Root className={clsx('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport
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
            'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm',
            'placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-1 focus:ring-offset-background',
            'disabled:cursor-not-allowed disabled:opacity-50',
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
              'relative z-50 max-h-60 overflow-auto rounded-md border border-input bg-popover text-popover-foreground shadow-md',
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
    className?: string;
  }
> = ({ isOpen, onClose, variant = 'left', className, children, ...props }) => {
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
            'fixed z-50 bg-background p-6 shadow-lg border-input duration-300',
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
        className={clsx('relative flex w-full touch-none select-none items-center', className)}
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
          'disabled:cursor-not-allowed disabled:opacity-50',
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
          'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow resize-none h-24',
          'placeholder:text-sm',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  );
});


type ToastProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: 'positive' | 'negative' | 'neutral' | 'action';
  message: string;
  action?: string;
  duration?: number;
  onClick?: () => void;
};

export const Toast: React.FC<ToastProps> = ({
  open,
  onOpenChange,
  variant,
  message,
  action,
  duration = 3000,
  onClick,
}) => {
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
          'group pointer-events-auto relative justify-between flex w-full items-center space-x-4 rounded-md border p-4 shadow-lg transition-all bg-background text-foreground border-input',
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

      <ToastPrimitives.Viewport className="fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:flex-col md:max-w-[420px]" />
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
              'z-50 overflow-hidden rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground border border-input',
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
