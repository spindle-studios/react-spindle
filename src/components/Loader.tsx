import clsx from 'clsx';
import React from 'react';

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
