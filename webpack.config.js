const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const prod = argv.mode === 'production';

  return {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].js'
    },
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
      new CleanWebpackPlugin()
    ]
  };
};
