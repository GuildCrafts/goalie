const express = require('express')
const router = express.Router()
const { passport } = require('../config/authenticate')

router.get('/account', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user })
})

router.get('/login', function(req, res){
  res.render('login', { user: req.user })
})

// GET /auth/github
router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }),
  function(req, res){
  })

// GET /auth/github/callback
router.get('/oauth_callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
  })

router.get('/logout', function(req, res){
  req.logout()
  res.redirect('/')
})

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

module.exports = router
