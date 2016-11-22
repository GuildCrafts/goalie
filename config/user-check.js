module.exports = (req, res, next) => {
  if (req.isAuthenticated()) { return next() }
  res.status(400).json({message: 'You are not logged in!!'})
}
