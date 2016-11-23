const express = require( 'express' )
const router = express.Router()
const { passport } = require( '../config/authenticate' )

router.get( '/login',
  passport.authenticate( 'github', { scope: [ 'user:email' ] })
)

router.get('/oauth_callback',
  passport.authenticate( 'github', { failureRedirect: '/login' }),
  ( req, res ) => {
    const { code } = req.query
    const { user } = req
    console.log('========',user)
    res.status( 200 ).render( 'list', { user })
  }
)

router.get( '/logout', ( req, res ) => {
  req.logout()
  res.status( 200 ).json( {} )
})

module.exports = router
