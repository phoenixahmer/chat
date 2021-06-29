const PublicChat = require("../model/PublicChat")
const websocket = require('ws');
const jwt = require("jsonwebtoken")
const secret = require("config").secret


const webSocket = (server, path) => {

  const wss = new websocket.Server({ server, path });

  wss.on('connection', ws => {

    console.log(`WS connected open`)
    ws.on("close", () => console.log("WS connected close"));


    ws.on('message', res => {
      res = (JSON.parse(res))

      try {
        jwt.verify(res.token,
          secret,
          async (err, decoded) => {
            if (err) {
              console.log(err.message)
              ws.send(JSON.stringify({ message: "message not sent" }))
            }
            else {

              const from = decoded.user.id
              const message = res.message

              const chat = new PublicChat({ from, message })
              const payload = await chat.save()

              // ws.send(JSON.stringify(payload))
              wss.broadcast(JSON.stringify(payload))
            }
          })
      }

      catch (error) { console.log(error.message) }

    });
  });


  wss.broadcast = function broadcast(msg) {
    console.log(msg);
    wss.clients.forEach(function each(client) {
      client.send(msg);
    });
  };


}

module.exports = webSocket






