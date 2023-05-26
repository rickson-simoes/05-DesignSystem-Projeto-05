import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx", 
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  docs: {
    autodocs: true
  },
  viteFinal: (config, { configType }) => {
    if(configType == 'PRODUCTION') {
      config.base = '/05-DesignSystem-Projeto-05/'
    }

    return config
  }
};
export default config;
