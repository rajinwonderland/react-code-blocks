// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: "@storybook/react-webpack5",
  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-docs", "@storybook/addon-knobs"],
  features: {
    storyStoreV7: false,
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};

export default config;
