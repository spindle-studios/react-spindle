import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { useToast } from '@hooks/useToast';
import React from 'react';

export const Default = () => {
  const toast = useToast();

  const showPositiveToast = () => {
    toast({
      variant: 'positive',
      message: 'This is a positive toast',
    });
  };

  const showNegativeToast = () => {
    toast({
      variant: 'negative',
      message: 'This is a negative toast',
    });
  };

  const showNeutralToast = () => {
    toast({
      variant: 'neutral',
      message: 'This is a neutral toast',
    });
  };

  const showActionToast = () => {
    toast({
      variant: 'action',
      message: 'This is an action toast',
      action: 'Undo',
      onClick: () => alert('Action clicked!'),
    });
  };

  return (
    <Card className="w-[400px] flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useToast</h2>
        <h3 className="text-sm text-muted-foreground">A hook to trigger toasts with different variants and actions.</h3>
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={showPositiveToast}>
          Positive
        </Button>
        <Button variant="outline" onClick={showNegativeToast}>
          Negative
        </Button>
        <Button variant="outline" onClick={showNeutralToast}>
          Neutral
        </Button>
        <Button variant="outline" onClick={showActionToast}>
          Action
        </Button>
      </div>
    </Card>
  );
};

Default.storyName = 'useToast';
export default { title: 'Hooks/useToast' };
