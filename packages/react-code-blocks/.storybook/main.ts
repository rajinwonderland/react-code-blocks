import { dirname, join } from "path";
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),

    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true
      }
    }
  },

  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: [getAbsolutePath("@storybook/addon-actions"), getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-docs"), getAbsolutePath("@storybook/addon-knobs")],

  features: {
    storyStoreV7: false,
  },

  core: {},

  docs: {
    autodocs: true
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
