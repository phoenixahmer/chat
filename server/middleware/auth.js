const jwt = require("jsonwebtoken")
const secret = require("config").secret

const auth = (req, res, next) => {
  const token = req.header("x-auth")
  if (!token) {
    console.log({ message: "token reqired" })
    return res.status(400).json({ message: "token reqired" })
  }

  try {
    jwt.verify(token,
      secret,
      (error, decoded) => {
        if (error) {
          console.log({ message: error.message + ": not authorized" })
          return res.status(400).json({ message: error.message + ": not authorized" })
        }
        req.user = decoded.user
        next()
      })
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
}
module.exports = auth


