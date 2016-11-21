let root = __dirname

let babelConfig = {
  babelrc: true,
  cacheDirectory: root + "/tmp/cache",
  presets:[ 'react' ]
}

module.exports = {
  entry: "entry.js",
  output: {
    path: root + "/public/javascripts",
    pathinfo: true,
    filename: "bundle.js",
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude:/(node_modules)/,
          loader: "babel-loader",
          query: {}
        }
      ]
    }
  }
}