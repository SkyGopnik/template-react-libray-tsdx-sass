const alias = require('@rollup/plugin-alias');

const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );

    config.plugins.push({
      plugins: [
        alias({
          entries: [{ find: /@\//, replacement: /src\// }],
        }),
      ],
    });
    //Do not treat absolute paths as external modules
    return {
      ...config,
      external: id => !id.startsWith('@/') && config.external(id),
    };
  },
};