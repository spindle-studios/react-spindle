import { Badge } from '@components/Badge';
import { Card } from '@components/Card';
import { useOnClickout } from '@hooks/useOnClickout';
import React, { useRef, useState } from 'react';

export const Default = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [clickOutside, setClickOutside] = useState(false);

  useOnClickout([ref], () => setClickOutside(true));

  return (
    <Card ref={ref} className="w-[400px] flex flex-col gap-4 p-4 cursor-pointer" onClick={() => setClickOutside(false)}>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useOnClickout</h2>
        <h3 className="text-sm text-muted-foreground">
          Detects clicks outside of the specified elements and triggers a handler.
        </h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={!clickOutside ? 'primary' : 'outline'}>Inside</Badge>
        <Badge variant={clickOutside ? 'primary' : 'outline'}>Outside</Badge>
      </div>
    </Card>
  );
};

Default.storyName = 'useOnClickout';
export default { title: 'Hooks/useOnClickout' };
