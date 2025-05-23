import { useToastContext } from '@providers/Spindle';

export const useToast = () => {
  const { addToast } = useToastContext();

  return (options: {
    variant: 'positive' | 'negative' | 'neutral' | 'action';
    message: string;
    action?: string;
    duration?: number;
    onClick?: () => void;
  }) => {
    addToast(options);
  };
};
