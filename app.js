
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('Welcome to WebSocket server!');
});

server.listen(8080, function listening() {
  console.log('Server started on port 8080');
});