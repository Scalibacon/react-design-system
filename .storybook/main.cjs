module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  // caso tenha "/" no nome do usuário/repositório
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION'){
      config.base = '/react-design-system/';
    }

    return config;
  }
}