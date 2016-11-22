const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const router = express.Router()

app.use(router)

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// routes setup

const config = require('./webpack.dev.config')
const compiler = webpack(config)

app.listen(3000, console.log('listening on 3000'))

app.use('/', routes)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
