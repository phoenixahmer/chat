const jwt = require("jsonwebtoken")
const secret = require("config").secret

const isValidJwt = token => {
  return jwt.verify(
    token,
    secret,
    (error, decoded) => {
      if (error) {
        console.log({ message: error.message + ": socket io token error" })
        return false
      }
      else {
        console.log({ message: "socket io token verified" })
        return true
      }
    }
  )
}

const middleware = (io) =>
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (token && isValidJwt(token)) {
      next();
    }
    else {
      console.log({ message: "socket io not connected" })
      next(new Error("Socket authentication error"));
    }
  });

module.exports = middleware