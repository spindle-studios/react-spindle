import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import * as ToastPrimitives from '@radix-ui/react-toast';
import clsx from 'clsx';
import React from 'react';

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

      <ToastPrimitives.Viewport className="fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:flex-col md:max-w-[420px]" />
    </ToastPrimitives.Provider>
  );
};
