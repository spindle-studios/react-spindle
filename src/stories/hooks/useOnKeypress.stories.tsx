import { Badge } from '@components/Badge';
import { Card } from '@components/Card';
import { useOnKeypress } from '@hooks/useOnKeypress';
import React, { useState } from 'react';

export const Default = () => {
  const [keyPressed, setKeyPressed] = useState<'K' | 'ShiftK' | 'CtrlK' | 'MetaK' | 'AltK' | null>(null);

  useOnKeypress({ key: 'KeyK', onPress: () => setKeyPressed('K') });
  useOnKeypress({ key: 'KeyK', useShift: true, onPress: () => setKeyPressed('ShiftK') });
  useOnKeypress({ key: 'KeyK', useCtrl: true, onPress: () => setKeyPressed('CtrlK') });
  useOnKeypress({ key: 'KeyK', useMeta: true, onPress: () => setKeyPressed('MetaK') });
  useOnKeypress({ key: 'KeyK', useAlt: true, onPress: () => setKeyPressed('AltK') });

  return (
    <Card className="w-[400px] flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold">useOnKeypress</h2>
        <h3 className="text-sm text-muted-foreground">
          Detects key presses with optional modifiers (Shift, Ctrl, Meta, Alt) and triggers a handler.
        </h3>
      </div>

      <div className="flex flex-row gap-2">
        <Badge variant={keyPressed === 'K' ? 'primary' : 'outline'}>
          <kbd>K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'ShiftK' ? 'primary' : 'outline'}>
          <kbd>Shift + K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'CtrlK' ? 'primary' : 'outline'}>
          <kbd>Ctrl + K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'MetaK' ? 'primary' : 'outline'}>
          <kbd>Meta + K</kbd>
        </Badge>
        <Badge variant={keyPressed === 'AltK' ? 'primary' : 'outline'}>
          <kbd>Alt + K</kbd>
        </Badge>
      </div>
    </Card>
  );
};

Default.storyName = 'useOnKeyPress';
export default { title: 'Hooks/useOnKeyPress' };
