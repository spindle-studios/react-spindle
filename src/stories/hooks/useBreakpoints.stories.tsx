import { Badge } from '@components/Badge';
import { Card } from '@components/Card';
import { useBreakpoints } from '@hooks/useBreakpoints';
import React from 'react';

export const Default = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  return (
    <Card className="w-[400px] flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">useBreakpoints</h2>
        <h3 className="text-sm text-muted-foreground">
          Returns the current breakpoint status based on the screen width.
        </h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={isMobile ? 'primary' : 'outline'}>Mobile</Badge>
        <Badge variant={isTablet ? 'primary' : 'outline'}>Tablet</Badge>
        <Badge variant={isDesktop ? 'primary' : 'outline'}>Desktop</Badge>
      </div>
    </Card>
  );
};

Default.storyName = 'useBreakpoints';
export default { title: 'Hooks/useBreakpoints' };
