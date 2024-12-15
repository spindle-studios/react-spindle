import { Calendar } from '@components/Calendar';
import React, { useState } from 'react';

export const Default = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border border-border" />
    </div>
  );
};

Default.storyName = 'Calendar';
export default { title: 'Components/Calendar' };
