import { Badge } from '@components/Badge';
import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Loader } from '@components/Loader';
import { useTimeout } from '@hooks/useTimeout';
import React, { useCallback, useState } from 'react';

export const Default = () => {
  const timeout = useTimeout();
  const [status, setStatus] = useState<'idle' | 'waiting' | 'done'>('idle');

  const handleClick = useCallback(async () => {
    if (status === 'done') {
      return setStatus('idle');
    }

    setStatus('waiting');
    await timeout(2000);
    setStatus('done');
  }, [status]);

  return (
    <Card className="w-[400px] flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useTimeout</h2>
        <h3 className="text-sm text-muted-foreground">
          Returns a promise-based timeout that resolves after a specified duration.
        </h3>
      </div>

      <Button onClick={handleClick} disabled={status === 'waiting'} className="self-start" variant="primary">
        {status === 'idle' && 'Start Timeout (2s)'}
        {status === 'waiting' && <Loader size="sm" variant="secondary" />}
        {status === 'done' && 'Reset'}
      </Button>

      <div className="flex flex-row gap-2 items-center">
        <Badge variant={status === 'idle' ? 'primary' : 'outline'}>Idle</Badge>
        <Badge variant={status === 'waiting' ? 'primary' : 'outline'}>Waiting</Badge>
        <Badge variant={status === 'done' ? 'primary' : 'outline'}>Done</Badge>
      </div>
    </Card>
  );
};

Default.storyName = 'useTimeout';
export default { title: 'Hooks/useTimeout' };
