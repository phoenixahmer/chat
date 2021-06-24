const jwt = require("jsonwebtoken")
const secret = require("config").secret

const auth = (req, res, next) => {
  const token = req.header("x-auth")
  if (!token) return res.send("token reqired")

  try {
    jwt.verify(token,
      secret,
      (err, decoded) => {
        if (err) throw err
        req.user = decoded.user
        next()
      })
  } catch (error) {
    res.send(error.message)
  }
}
module.exports = auth


