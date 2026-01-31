import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { Card } from './Card';
import { Icon } from './Icon';

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
