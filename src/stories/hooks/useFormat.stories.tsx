import { Badge } from '@components/Badge';
import { Card } from '@components/Card';
import {
  useFormatCurrency,
  useFormatDate,
  useFormatMinutesUntilNextHour,
  useFormatPercent,
  useFormatRelativeTime,
} from '@hooks/useFormat';
import React from 'react';

export const Default = () => {
  const formatCurrency = useFormatCurrency();
  const formatPercent = useFormatPercent();
  const formatDate = useFormatDate();
  const formatRelativeTime = useFormatRelativeTime();
  const minutesUntilNextHour = useFormatMinutesUntilNextHour();

  const now = new Date();
  const pastDate = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago
  const futureDate = new Date(now.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day in future

  return (
    <div className="flex flex-col gap-4 w-[500px]">
      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatCurrency</h2>
        <h3 className="text-sm text-muted-foreground">Formats numbers as currency.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatCurrency(1234.56, { includeSymbol: false })}</Badge>
          <Badge variant="outline">{formatCurrency(1234.56)}</Badge>
          <Badge variant="outline">{formatCurrency(1234.56, { currencyDisplay: 'code' })}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatPercent</h2>
        <h3 className="text-sm text-muted-foreground">Formats a number as a percentage.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatPercent(0.85)}</Badge>
          <Badge variant="outline">{formatPercent(1.25)}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatDate</h2>
        <h3 className="text-sm text-muted-foreground">Formats a date in various styles.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatDate(now)}</Badge>
          <Badge variant="outline">{formatDate(pastDate, { format: 'short' })}</Badge>
          <Badge variant="outline">{formatDate(pastDate, { includeTime: true })}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatRelativeTime</h2>
        <h3 className="text-sm text-muted-foreground">Formats dates into relative time.</h3>
        <div className="flex gap-2">
          <Badge variant="outline">{formatRelativeTime(pastDate)}</Badge>
          <Badge variant="outline">{formatRelativeTime(futureDate)}</Badge>
        </div>
      </Card>

      <Card className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold">useFormatMinutesUntilNextHour</h2>
        <h3 className="text-sm text-muted-foreground">Shows minutes until the next hour.</h3>
        <div>
          <Badge variant="outline">{minutesUntilNextHour} minutes</Badge>
        </div>
      </Card>
    </div>
  );
};

Default.storyName = 'useFormat';
export default { title: 'Hooks/useFormat' };
