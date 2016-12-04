const rp = require('request-promise')

const listGoals = (request, response) => {
  if(!request.user){
    response.status(404).json({})
  } else {
    rp({
      method: 'GET',
      url: `${process.env.GITHUB_URL}/repos/GuildCrafts/web-development-js/issues`,
      headers: {
        'user-agent': 'node.js',
        'authorization': `Token ${request.user.github_access_token}`
      }
    }).then(goals => {
      goals = JSON.parse(goals)
      response.status(200).json(goals)
    })
  }
}

module.exports = {listGoals}
