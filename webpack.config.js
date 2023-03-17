const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv');

dotenv.config();

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: {
    app: path.join(__dirname, 'app', 'main.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: prod ? '[name].[contenthash].js' : '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    compress: true,
    https: true,
  },
  devtool: prod ? false : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Maya Vera',
      template: path.join(__dirname, 'app', 'index.ejs'),
      filename: prod ? path.join(__dirname, 'index.html') : 'index.html',
      env: process.env,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              sourceMap: !prod,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !prod,
            },
          },
        ],
      },
      {
        test: /\.[jt]sx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};
