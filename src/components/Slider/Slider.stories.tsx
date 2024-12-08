import React, { useState } from 'react';
import { Slider } from './Slider';

export const Default = () => {
  const [value, setValue] = useState([50]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="w-[300px] flex flex-col gap-10">
        <Slider label="Label" value={value} onValueChange={setValue} max={100} step={1} />
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
        <Slider disabled value={[25]} />
      </div>
    </div>
  );
};

Default.storyName = 'Slider';
export default { title: 'Components/Slider' };
