const authCallback = (request, response) =>
  response.status(200).json(request.user)

const logOutCallback = (request, response) => {
  request.logout()
  response.status(200).json({})
}

module.exports = {authCallback, logOutCallback}
