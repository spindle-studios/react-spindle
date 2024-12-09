import { Icon } from '@components/Icon';
import clsx from 'clsx';
import React from 'react';

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
