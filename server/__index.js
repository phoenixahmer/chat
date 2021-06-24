const webSocketsServerPort = 8080
const webSocketServer = require('websocket').server
const http = require('http')

//spinning the http server and ther websocket server
const server = http.createServer()
server.listen(webSocketsServerPort)
console.log(`listening to port ${webSocketsServerPort}`)

const wsServer = new webSocketServer({ httpServer: server })

const clients = {}

// // this code geenreates uinque userid for every user
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return s4() + s4() + '-' + s4()
}

wsServer.on('request', function (request) {
  var userID = getUniqueID()
  console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.')

  // Yor can rewrite this part of the code to accept only the requires from allowed origin
  const connection = request.accept(null, request.origin)
  clients[userID] = connection
  console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))

  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      // console.log('Received Message: ', message.utf8Data)

      // broadcasting message to all connection clients
      for (key in clients) {
        clients[key].sendUTF(message.utf8Data)
        // console.log('sent Message to: ', clients[key])
      }
    }
  })
})