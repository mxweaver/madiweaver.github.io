import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
  mode: 'production',
  entry: path.join(__dirname, 'app', 'main.js'),
  devtool: false,
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Maya Vera',
      template: path.join(__dirname, 'app', 'index.html'),
      filename: path.join(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(png|svg)$/,
        use: 'url-loader'
      }
    ]
  }
}
