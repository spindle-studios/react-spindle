import { Icon } from '@components/Icon';
import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

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
