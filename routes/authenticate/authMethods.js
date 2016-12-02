const authCallback = (request, response) => {
  const { code } = request.query
  const { user } = request
  response.status(200).json(user)
}
const logOutCallback = (request, response) => {
  request.logout()
  response.status(200).json({})
}

module.exports = {authCallback, logOutCallback}
