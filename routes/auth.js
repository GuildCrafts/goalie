const express = require('express')
const router = express.Router()
const {passport} = require('../config/authenticate')
const {authCallback, logOutCallback} = require('./authenticate/authMethods')

router.get(
  '/login',
  passport.authenticate('github', {scope:['user:email']})
)

router.get(
  '/oauth_callback',
  passport.authenticate('github', {failureRedirect: '/login'}),
  authCallback
)

router.get('/logout', logOutCallback)

module.exports = router
