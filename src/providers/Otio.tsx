import { Toast } from '@components/Toast';
import React, { ComponentProps, createContext, PropsWithChildren, useContext, useState } from 'react';

type ToastOptions = Partial<ComponentProps<typeof Toast>> & {
  id?: string;
};

const ToastContext = createContext<
  { addToast: (toast: ToastOptions) => void; removeToast: (id: string) => void } | undefined
>(undefined);

export const OtioProvider: React.FC<
  PropsWithChildren<{
    options?: {
      toast?: {
        position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        className?: string;
      };
    };
  }>
> = ({ options, children }) => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const addToast = (toast: ToastOptions) => {
    const id = toast.id || Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <>
        {toasts.map((toast) => (
          <Toast
            open
            key={toast.id}
            variant={toast.variant ?? 'neutral'}
            message={toast.message ?? ''}
            action={toast.action}
            duration={toast.duration}
            position={options?.toast?.position}
            className={options?.toast?.className}
            onClick={toast.onClick}
            onOpenChange={() => removeToast(toast.id!)}
          />
        ))}
      </>
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within an OtioProvider');
  }
  return context;
};
