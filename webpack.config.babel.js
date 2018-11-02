import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import path from 'path'
import webpack from 'webpack'

export default {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'app', 'main.js'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Maya Vera',
      template: path.join(__dirname, 'app', 'index.html'),
    }),
    new HtmlWebpackHarddiskPlugin({
      alwaysWriteToDisk: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new webpack.ProvidePlugin({
      THREE: 'three',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          },
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
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCssAssetsPlugin({})
    ],
		splitChunks: {
			chunks: 'all',
		}
  },
}
