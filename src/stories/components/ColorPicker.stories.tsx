import { ColorPicker } from '@components/ColorPicker';
import React from 'react';

export const Default = () => (
  <div className="flex flex-col gap-4">
    <div>
      <h3 className="text-sm font-medium mb-2">Default</h3>
      <ColorPicker value="FF0000" onChange={(color) => window.alert('Selected color: ' + color)} />
    </div>

    <div>
      <h3 className="text-sm font-medium mb-2">Empty value</h3>
      <ColorPicker value="" onChange={(color) => window.alert('Selected color: ' + color)} />
    </div>

    <div>
      <h3 className="text-sm font-medium mb-2">Custom colors</h3>
      <ColorPicker
        value="FF00FF"
        onChange={(color) => window.alert('Selected color: ' + color)}
        predefinedColors={['#FF0000', '#00FF00', '#0000FF']}
      />
    </div>

    <div>
      <h3 className="text-sm font-medium mb-2">Without colors</h3>
      <ColorPicker value="0000FF" onChange={(color) => window.alert('Selected color: ' + color)} disableDefaultColors />
    </div>
  </div>
);

Default.storyName = 'ColorPicker';
export default { title: 'Components/ColorPicker' };
