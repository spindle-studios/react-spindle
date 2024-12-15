import { Badge } from '@components/Badge';
import { Card } from '@components/Card';
import { useEnvironment } from '@hooks/useEnvironment';
import React from 'react';

export const Default = () => {
  const { isDevelopment, isProduction } = useEnvironment();
  return (
    <Card className="w-[400px] flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">useEnvironment</h2>
        <h3 className="text-sm text-muted-foreground">Returns an object with the current environment status.</h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={isDevelopment ? 'primary' : 'outline'}>Development</Badge>
        <Badge variant={isProduction ? 'primary' : 'outline'}>Production</Badge>
      </div>
    </Card>
  );
};

Default.storyName = 'useEnvironment';
export default { title: 'Hooks/useEnvironment' };
