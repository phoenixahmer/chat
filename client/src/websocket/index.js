import { io } from "socket.io-client";

export const client =
  io("http://localhost:8080/", {
    transports: ['websocket', 'polling', 'flashsocket'],
    auth: { token: localStorage.token+1 }
  });
  

console.log(localStorage.token)
export const GroupClient = ""
