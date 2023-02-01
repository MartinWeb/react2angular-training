const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'img/[name][ext][query]',
        },
      },
      {
        test: /\.scss/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                },
            },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'app/index.html',
        filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].bundle.min.css',
  }),
    new WebpackBar(),
],
  mode:'production'
};

module.exports = config;