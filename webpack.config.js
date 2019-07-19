const webpack = require('webpack');
const postcssImport = require('postcss-import');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// mini-css-extract-pluginを読み込み
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
  entry: {
    main: ['./src/js/main.js', '@babel/polyfill'],
    rule: './src/css/page/rule.css',
  },

  output: {
    path: `${__dirname}/dist/`,
    filename: 'assets/js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: loader => [
                postcssImport({ root: loader.resourcePath }),
                postcssSimpleVars(),
                postcssMixins(),
                postcssPresetEnv(),
                postcssNested(),
                cssnano({
                  minifyFontValues: { removeQuotes: false },
                  discardUnused: { fontFace: false },
                  zindex: false,
                  reduceIdents: false,
                }),
                autoprefixer({
                  overrideBrowserslist: [
                    'ie 11',
                    'last 1 Edge versions',
                    'last 1 Firefox versions',
                    'last 1 Chrome versions',
                    'last 1 Safari versions',
                    'iOS >= 8',
                    'Android >= 4.2',
                    'last 1 ChromeAndroid versions',
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),
  ],
};
