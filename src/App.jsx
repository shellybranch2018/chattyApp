import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';





class App extends Component {
constructor(props){
super(props)
this.state = {
  currentUser: {name:"Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [],
  clientCount: 0

};
//this.socket=null;

}
handleClientCount(data) {
  this.setState({
    clientCount: data.count
  })
}

componentDidMount = () => {
 
this.socket = new WebSocket('ws://localhost:3001')
this.socket.onopen = () => {
    // when the socket opens

  
    this.handleClientCount = this.handleClientCount.bind(this)
    //this.socket.onmessage = this.handleMessage
    console.log("Connected to Server")
    
}

this.socket.onmessage = (event) => {
  var passedMessage = JSON.parse(event.data)
  console.log(passedMessage)
  const oldMessages = this.state.messages;
  
  let newMessageList = [];
  
  

  switch(passedMessage.type) {
    case "incomingMessage":
    newMessageList = [...oldMessages,passedMessage]
    this.setState({
      messages:newMessageList
     })
    
    var passedMessage = JSON.parse(event.data)
    
      break;
    case "incomingNotification":
    newMessageList = [...oldMessages,passedMessage]
    this.setState({
      messages:newMessageList
     })
    var passedMessage = JSON.parse(event.data)
      break;
    case "clientCount":
      break;    
default:
      // show an error in the console if the message type is unknown
      throw new Error("Unknown event type " + data.type);
  }
}



}
handleNameChange = (newName) => {

var UserA = this.state.currentUser.name;
var UserB = newName;
var newNotification = {
  type: "postNotification", 
content: UserA + " has changed their name to " + UserB 
}

//console.log(newNotification);
this.socket.send(JSON.stringify(newNotification))
this.setState({
  currentUser:{ name:newName }
})

    // when the socket opens


}

addMessage = (message) => {

  // THE STATE OF THE OLD MESSAGES AND GETS UPDATED
  const oldMessages = this.state.messages;
 
  let newMessage = {
    type:"postMessage",    
    username: this.state.currentUser.name,
    content: message
  }
 
  this.socket.send(JSON.stringify(newMessage))
}
handleMessage = (count) => {
  // does something with the message, parse it, choose correct handler
  let parsedData = JSON.parse(count.data)
  

  let messageType = parsedData.type
  if (messageType === 'clientCount') {

    this.handleClientCount(parsedData.payload)
  }
}


  render() {
    return (
      
      <div>
        <nav className="navbar">
        <p className="onlineUsers">{this.state.clientCount} users online</p>
  <a href="/" className="navbar-brand">Chatty</a>
</nav>
      <MessageList messageList={this.state.messages}/>
    
   <ChatBar add={this.addMessage} newMessage={this.handleKeyPress} nameChange={this.handleNameChange} currentUser={this.state.currentUser}/>
    </div>
    );
  }
}
export default App;
