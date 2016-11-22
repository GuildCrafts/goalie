const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

const GITHUB_CLIENT_ID = 'bccb7078d86ffdca72d5'
const GITHUB_CLIENT_SECRET= 'c35ef31927b43b0e34b5e92a5336735b9889d492'

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/oauth_callback"
  },
  (accessToken, refreshToken, profile, done) =>
    process.nextTick(() => done(null, profile))
))

module.exports = { passport }
