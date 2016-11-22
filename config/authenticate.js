const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

passport.serializeUser( ( user,done ) => {
  done( null, user )
})

passport.deserializeUser( ( obj, done ) => {
  done( null, obj )
})

const githubOptions = {
  clientID: 'f57f6ffc5c985b99c425',
  clientSecret: 'b64f20d41c339767a5e7fda2fe45acb7a41ac318',
  callbackURL: 'http://localhost:5000/auth/github/callback'
}

passport.use( new GitHubStrategy( githubOptions ), 
  ( accessToken, refreshToken, profile, done ) => {
    process.nextTick( () => done( null, profile ) )
  }
)



module.exports = passport