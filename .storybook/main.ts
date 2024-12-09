import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { mergeConfig } from 'vite';

export default {
  stories: ['../src/stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [tailwindcss(), autoprefixer()],
        },
      },
    });
  },
};
