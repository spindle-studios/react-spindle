import React, { useState } from 'react';
import { Calendar } from './Calendar';

export const Default = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border border-input" />
    </div>
  );
};

Default.storyName = 'Calendar';
export default { title: 'Components/Calendar' };
