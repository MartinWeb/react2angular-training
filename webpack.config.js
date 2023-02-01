const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const config = {
  entry: './app/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            },
        },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [path.resolve((__dirname, 'node_modules')), path.resolve((__dirname, './app'))],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'ts-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.html$/,
        include: [path.resolve(__dirname, 'app')],
        use: [
            {
                loader: 'html-loader',
                options: {
                    minimize: true,
                },
            },
        ],
    },
    ]
  },
  plugins: [
    // new ESLintPlugin({
    //     files: ['./app/**/*.ts'],
    // }),
    new HtmlWebpackPlugin({
        template: 'app/index.html',
        filename: 'index.html',
    }),
    new WebpackBar(),
],
  mode:'production'
};

module.exports = config;