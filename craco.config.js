const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const cssRule = webpackConfig.module.rules.find(rule =>
        rule.test && rule.test.toString().includes('.css')
      );
      if (cssRule) {
        cssRule.use = cssRule.use.filter(loader => !loader.loader.includes('postcss-loader'));
      }
      webpackConfig.plugins.push(
        new ESLintPlugin({
          extensions: ['js', 'jsx'],
        })
      );

      return webpackConfig;
    },
  },
};
