const express = require("express")
const app = express()
const dbConnect = require("./config/db")
const cors = require("cors")
const webSocket = require("./webSocket")

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => { res.send("index.js") })

app.use("/user", require("./routes/user"))
app.use("/chat", require("./routes/chat"))

const server = app.listen(8080, () => { console.log("listning to 8080 port") })

webSocket(server, "/chat")