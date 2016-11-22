const express = require('express')
const router = express.Router()
const passport = require('../config/authenticate')

router.get('/', (req, res, next) => {
  res.render('index', {})
})

// router.get( '/auth/github', 
//   passport.authenticate( 'github', { scope: [ 'user:email' ] } ),
//   (request, responst) => {
//     res.render('index', {})
//   }
// )
//
// router.get( '/auth/github/callback',
//   passport.authenticat( 'github', { failureRedirect: '/login'} ),
//   ( request, response ) => {
//     response.redirect( '/' )
//   }
// )

module.exports = router
