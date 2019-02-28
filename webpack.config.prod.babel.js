import merge from 'webpack-merge'
import config from './webpack.config.base.babel'

export default merge(config, {
  mode: 'production'
})
