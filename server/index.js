const express = require("express")
const app = express()
const dbConnect = require("./config/db")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => { res.send("index.js") })

app.use("/user", require("./routes/user"))
app.use("/chat", require("./routes/chat"))

const server = app.listen(8080, () => { console.log("listning to 8080 port") })
const socketioServer = require("./webSocket")
socketioServer(server)
















// io.on('connection', socket => {

//   socket.emit('request', console.log('request')); // emit an event to the socket
//   io.emit('broadcast', console.log("connected")); // emit an event to all connected sockets
//   socket.on('reply', (message) => { console.log(message) }); // listen to the event
//   socket.on('disconnect', () => { /* … */ })

// });

// io.on("connection", (socket) => {
//   console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//   console.log(socket.handshake.auth.token)
//   // socket.on("open",()=>{
//   //   console.log("socket opened")
//   // })
// });

// webSocket(server, "/chat")