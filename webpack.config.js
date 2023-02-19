const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = (env, argv) => {
  const prod = argv.mode === 'production';

  return {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
      port: 3000,
      hot: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'ts-loader']
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(woff|woff2|ttf|eot|png|jpg|svg|gif)$/i,
          use: ['file-loader']
        },
        {
          test: [/\.js$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
          enforce: 'pre',
          use: ['source-map-loader']
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify:
          process.env.NODE_ENV === 'production'
            ? {
                collapseWhitespace: true,
                removeComments: true
              }
            : false
      }),
      new CleanWebpackPlugin(),
      new SourceMapDevToolPlugin({
        filename: '[file].map'
      })
    ]
  };
};
