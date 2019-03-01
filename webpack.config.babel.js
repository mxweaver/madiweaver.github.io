import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const prod = process.env.NODE_ENV === 'production'

export default {
  mode: prod ? 'production' : 'development',
  entry: {
    app: path.join(__dirname, 'app', 'main.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: prod ? '[contenthash].js' : '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Maya Vera',
      template: path.join(__dirname, 'app', 'index.html'),
      filename: prod ? path.join(__dirname, 'index.html') : 'index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
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
        test: /\.s?css$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ["last 2 versions"]
                }
              }],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
}
