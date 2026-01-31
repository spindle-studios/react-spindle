import clsx from 'clsx';
import React from 'react';
import { Tooltip } from './Tooltip';

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
