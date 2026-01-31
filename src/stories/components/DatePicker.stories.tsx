import { DatePicker } from '@components/DatePicker';
import React, { useState } from 'react';

export const Default = () => {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(new Date());
  const [date3, setDate3] = useState<Date | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">Date only</h3>
        <DatePicker value={date1} onChange={setDate1} label="Event date" tooltip="Select when the event will occur" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">With time picker</h3>
        <DatePicker value={date2} onChange={setDate2} label="Start time" includeTime />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2 text-muted-foreground">With min/max dates</h3>
        <DatePicker
          value={date3}
          onChange={setDate3}
          label="Booking date"
          minDate={new Date()}
          maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
        />
      </div>
    </div>
  );
};

Default.storyName = 'DatePicker';
export default { title: 'Components/DatePicker' };
