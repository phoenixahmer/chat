const socketio = require('socket.io')
const middleware = require("./midleware")

const socketioServer = (server) => {
  const io = socketio(server)
  middleware(io)

  io.on("connection", (socket) => {
    const token = socket.handshake.auth.token;

    console.log({ token })
    console.log({ message: "socket io connection made" })
  });

}

module.exports = socketioServer