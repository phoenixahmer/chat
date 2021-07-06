import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { io } from "socket.io-client";

const socket = io("http://localhost:8080/", {
  transports: ['websocket'],
  auth: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBkOTc2ODk4MGViZDcwMDdjY2NmY2ZlIn0sImlhdCI6MTYyNTU2ODA1OSwiZXhwIjoxNjI1NjU0NDU5fQ.wLmtJo4u_HMlhtUKKmehFqfNyBEjxJwRxWwsSgsfvNc" }
});

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById('root')
);

