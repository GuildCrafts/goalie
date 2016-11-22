const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: path.resolve(__dirname, 'app/entry.js'),
  output: {
    path: path.join(__dirname, 'build/public'),
    pathinfo: true,
    filename: 'bundle.js',
    module: {
      loaders: [
        {
          test: /\.(js|jsx)?$/,
          exclude:/(node_modules)/,
          loader: ['babel'],
          query: {
            presets: ['es2015', 'react'],
          }
        }
      ]
    }
  }
}
