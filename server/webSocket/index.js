const PublicChat = require("../model/PublicChat")
const GroupChatList = require("../model/GroupChatList")
const GroupChatMessages = require("../model/GroupChatMessages")
const websocket = require('ws');
const jwt = require("jsonwebtoken")
const secret = require("config").secret

const webSocket = (server) => {

  const wss = new websocket.Server({ server });

  wss.on('connection', (ws, req) => {

    console.log(`WS connected open on ${req.url}`)
    ws.on("close", () => console.log(`WS connected close on ${req.url}`));

    if (req.url === "/chat") {
      ws.on('message', req => {
        req = (JSON.parse(req))
        try {
          jwt.verify(req.token,
            secret,
            async (err, decoded) => {
              if (err) {
                console.log(err.message)
                ws.send(JSON.stringify({ message: "message not sent" }))
              }
              else {
                const from = decoded.user.id
                const message = req.message

                const chat = new PublicChat({ from, message })
                const payload = await chat.save()

                wss.broadcast(JSON.stringify(payload))
              }
            })
        }
        catch (error) { console.log(error.message) }
      });
    }

    if (req.url === "/groupChat") {
      console.log("message from group chat")
      ws.on('message', req => {
        req = (JSON.parse(req))
        try {
          console.log(req)
          jwt.verify(req.token,
            secret,
            async (err, decoded) => {
              if (err) {
                console.log(err.message)
                ws.send(JSON.stringify({ message: "message not sent" }))
              }
              else {
                const { groupId, message } = req
                const from = decoded.user.id
                console.log("groupId ", groupId)
                const groupChatList = await GroupChatList.findById(groupId)
                const all = await GroupChatList.find()
                console.log("all ", all)
                if (!groupChatList) {
                  return {}
                }

                console.log(groupChatList)
                const members = groupChatList.members

                members.map(async members => {
                  if (members.id == from) {
                    const groupChat = new GroupChatMessages({ groupId, from, message })
                    const payload = await groupChat.save()
                  }
                })

              }
            })
          ws.send(req)
        }
        catch (error) { console.log(error.message) }
      })
    }
  });


  wss.broadcast = function broadcast(msg) {
    console.log(msg);
    wss.clients.forEach(function each(client) {
      client.send(msg);
    });
  };

}

module.exports = webSocket