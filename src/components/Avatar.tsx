import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, forwardRef, ReactNode, useState } from 'react';

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
