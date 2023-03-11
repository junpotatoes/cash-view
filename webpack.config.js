const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { SourceMapDevToolPlugin } = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const prod = argv.mode === 'production';

  return {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js', // contenthash를 추가하여 파일이 변경될 때마다 새로운 해시값을 생성하도록 설정
      chunkFilename: '[name].[contenthash].js' // 추가: 코드 스플리팅을 위한 설정, 같은 방식으로 해시값을 생성
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            output: {
              comments: false,
              ascii_only: true
            }
          },
          extractComments: false
        })
      ]
    },
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
      host: 'localhost',
      port: 3000,
      hot: true,
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, './src/')
      },
      fallback: {
        url: false,
        buffer: false,
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify')
      }
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
      }),
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        filename: '[path][base].gz',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './public/robots.txt'),
            to: path.resolve(__dirname, 'dist')
          }
        ]
      })
    ]
  };
};
