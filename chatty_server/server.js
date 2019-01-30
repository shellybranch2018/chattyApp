const express = require('express');
const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSocket.Server({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
      
    }
    
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
//var on_connect = 0;
wss.on('connection', (ws,req) => {
  var id = req.headers['sec-websocket-key'];
  console.log('Client connected');
  
  wss.clients.forEach(client => {
    let clientCount = {
      type: 'clientCount',
      payload: {
        count: wss.clients.size
      }
    }

    client.send(JSON.stringify(clientCount))
  })

 
  ws.on('message', function incoming(e) {
    
    
 //captured all notifications in variables and assign if statements separate
 var newNotifcationMessage = JSON.parse(e);

 var newMessage = JSON.parse(e);
 
 if(newNotifcationMessage.type === "postNotification"){
 
 newNotifcationMessage.type = "incomingNotification";
 const sendNotification = JSON.stringify(newNotifcationMessage);
 wss.broadcast(sendNotification);
 }
 if(newMessage.type === "postMessage"){
    
    newMessage.type = "incomingMessage";
    newMessage.id = uuidv1();
    const sendMessage = JSON.stringify(newMessage);

    wss.broadcast(sendMessage);
    
 }
  });
  
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  
  
  ws.on('close', () => console.log('Client disconnected'));
  
  
  
});