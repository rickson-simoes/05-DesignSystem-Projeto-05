/** @type { import('@storybook/react-webpack5').StorybookConfig } */

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite'
  }
};
export default config;
