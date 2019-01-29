import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';





class App extends Component {
constructor(props){
super(props)
this.state = {
  type:"postMessage",
  currentUser: {name:"Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
  
};
//this.socket=null;

}

componentDidMount = () => {
  this.socket = new WebSocket('ws://localhost:3001')
this.socket.onopen = () => {
    // when the socket opens
    console.log("Connected to Server")
}
this.socket.onmessage = (event) => {
  var passedMessage = JSON.parse(event.data)  
  
  switch(passedMessage.type) {
    case "incomingMessage":
    const oldMessages = this.state.messages;
  
    const newMessageList = [...oldMessages,passedMessage]
    console.log(newMessageList)
    this.setState({
     messages:newMessageList
    })
      break;
    case "incomingNotification":
      // handle incoming notification
      break;
    default:
      // show an error in the console if the message type is unknown
      throw new Error("Unknown event type " + data.type);
  }
}



}
handleNameChange = (newName) => {
var newUser = this.state.currentUser.name = newName;
this.setState({
  username:newUser
})

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


  render() {
    return (
      
      <div>
        <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>
      <MessageList messageList={this.state.messages}/>
    
   <ChatBar add={this.addMessage} newMessage={this.handleKeyPress} nameChange={this.handleNameChange} currentUser={this.state.currentUser}/>
    </div>
    );
  }
}
export default App;
