import '../src/config/global.css';

import type { Preview } from '@storybook/react';
import React from 'react';
import { OtioProvider } from '../src/providers/Otio';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-screen">
        <OtioProvider options={{ toast: { position: 'bottom-left' } }}>
          <Story />
        </OtioProvider>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
};

export default preview;
