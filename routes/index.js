const express = require('express')
const router = express.Router()
const {listGoals} = require('./github_methods/github_requests')

router.get('/', (request, response) => response.render('index'))
router.get('/list-goals', listGoals)

module.exports = router
