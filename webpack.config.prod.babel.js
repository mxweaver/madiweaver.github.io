import path from 'path'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import config from './webpack.config.base.babel'

export default merge(config, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Maya Vera',
      template: path.join(__dirname, 'app', 'index.html'),
      filename: path.join(__dirname, 'index.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
})
