import { useCallback } from 'react';

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
