const express = require( 'express' )
const router = express.Router()
const passport = require( '../config/authenticate' )

router.get( '/', ( req, res, next ) => {
  res.render( 'index', {} )
})

module.exports = router