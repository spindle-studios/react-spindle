import '../src/config/global.css';

import type { Preview } from '@storybook/react';
import React from 'react';
import { SpindleProvider } from '../src/providers/Spindle';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-screen">
        <SpindleProvider options={{ toast: { position: 'bottom-left' } }}>
          <Story />
        </SpindleProvider>
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
