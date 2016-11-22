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
  entry: './browser/Render.js',
  output: {
    path: `${rootDir}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:  /\.js$/, include: `${rootDir}/browser`, loader: 'babel-loader',
      }
    ]
  },
  plugins: [HtmlWebpackPluginConifg]
}
