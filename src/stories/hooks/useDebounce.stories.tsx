import { Badge } from '@components/Badge';
import { Card } from '@components/Card';
import { Input } from '@components/Input';
import { useDebounce } from '@hooks/useDebounce';
import React, { useState } from 'react';

export const Default = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <Card className="w-[400px] flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">useDebounce</h2>
        <h3 className="text-sm text-muted-foreground">Returns a debounced value based on the provided delay.</h3>
      </div>

      <Input
        type="text"
        className="border p-2 rounded-md"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />

      <div className="flex flex-row gap-2">
        <Badge variant="outline">Original: {inputValue || 'Empty'}</Badge>
        <Badge variant="primary">Debounced: {debouncedValue || 'Empty'}</Badge>
      </div>
    </Card>
  );
};

Default.storyName = 'useDebounce';
export default { title: 'Hooks/useDebounce' };
