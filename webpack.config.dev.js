const root = __dirname

const path = require('path')

const babelConfig = {
  babelrc: true,
  cacheDirectory: root + '/tmp/cache',
  presets:[ 'react' ]
}

module.exports = {
  entry: { app: ['./app/entry.js']},
  output: {
    path: path.resolve(root, 'build'),
    pathinfo: true,
    filename: 'bundle.js',
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude:/(node_modules)/,
          loader: 'babel-loader',
          query: {}
        }
      ]
    }
  }
}