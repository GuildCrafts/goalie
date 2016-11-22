const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

var GITHUB_CLIENT_ID = "bccb7078d86ffdca72d5"
var GITHUB_CLIENT_SECRET = "c35ef31927b43b0e34b5e92a5336735b9889d492"

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/oauth_callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile)
    })
  }
))

module.exports = { passport }
