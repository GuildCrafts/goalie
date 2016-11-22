const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
const GitHubCallback = (accessToken, refreshToken, profile, done) => 
    process.nextTick(() => done( null, profile))

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

passport.use( new GitHubStrategy( {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.APP_URL + "/auth/oauth_callback"
  },
  GitHubCallback
))

module.exports = { passport }
