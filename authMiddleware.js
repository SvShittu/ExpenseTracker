const jwt = require("jsonwebtoken")
const User = require("./models/authModel")

const authenticate = async (request, response, next) => {
  let token
  if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')) {
    try {
      token = request.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      request.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      response.status(401).json({ message: 'Not authorized, token failed' })
    }
  }
  if (!token) {
    response.status(401).json({ message: 'Not authorized, no token' })
  }
};

module.exports = {authenticate}
