const path = require('path');

module.exports = {
  stories: ['../**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Add everything below here
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build

  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
};