const express = require('express')
const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const partials = require('express-partials')

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')
const { passport } = require('./config/authenticate')
const routes = require('./routes')
const auth = require('./routes/auth.js')
const { passport } = require( './config/authenticate' )
const routes = require( './routes' )
const auth = require( './routes/auth.js' )

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(partials())
app.use(favicon(path.join(__dirname, 'client', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
  res.end()
})
app.use(methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

// passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// routes setup
app.use('/', routes)
app.use('/auth', auth)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})


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
