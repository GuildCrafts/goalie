const express = require('express')
const router = express.Router()
const { passport } = require('../config/authenticate')

router.get('/login',
  passport.authenticate('github', { scope:['user:email'] }),
  (req, res) => {
    const { user } = req
    if (user) {res.redirect('/')}
    res.redirect('/login')
  }
)

router.get('/oauth_callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    const { user } = req
    res.status(200).render('list', { user })
  }
)

router.get('/logout', (req, res) => {
  req.logout()
  res.status(200).redirect('index')
})

module.exports = router
