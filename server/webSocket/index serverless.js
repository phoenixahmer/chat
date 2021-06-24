const ws = require('ws');

const webSocket = (server) => {

  const wss = new ws.Server({ noServer: true });
  wss.on('connection', socket => {
    console.log("WS connected open")
    socket.on("close", () => console.log("WS connected close"));

    socket.on('message', message => {
      console.log(message)
    });
  });

  server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
      wss.emit('connection', socket, request);
    });
  });
}

module.exports = webSocket