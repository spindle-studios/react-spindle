import React, { useState } from 'react';
import { Select } from './Select';

export const Default = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex">
      <div className="w-[500px] flex-col gap-2 flex">
        <Select
          label="Label"
          options={options}
          value={selectedOption}
          onSelect={setSelectedOption}
          placeholder="Select an option"
        />
        <Select options={options} value={selectedOption} onSelect={setSelectedOption} placeholder="Select an option" />
        <Select options={options} value={null} onSelect={() => {}} placeholder="Select an option (disabled)" disabled />
        <Select
          options={options}
          value={selectedOption}
          onSelect={setSelectedOption}
          placeholder="Custom render"
          render={(option) => <span className="text-blue-500">{option}</span>}
        />
      </div>
    </div>
  );
};

Default.storyName = 'Select';
export default { title: 'Components/Select' };
