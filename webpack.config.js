const rootDir = __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConifg = new HtmlWebpackPlugin({
  template: rootDir + '/browser/index.html',
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhiteSpace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
})

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './browser/Render.js'
  ]
  output: {
    path: '/',
    publicPath: 'http://localhost:3000'
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:  /\.js$/, include: `${rootDir}/browser`, loader: 'babel-loader',
      }
    ]
  },
  target: 'web'
}
