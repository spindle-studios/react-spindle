import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import * as ToastPrimitives from '@radix-ui/react-toast';
import clsx from 'clsx';
import React from 'react';

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
