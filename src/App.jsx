import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';





class App extends Component {
  constructor(props){
super(props)
this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: []
  
};
//this.socket=null;


}

componentDidMount(){
  this.socket = new WebSocket('ws://localhost:3001')
this.socket.onopen = () => {
    // when the socket opens
    console.log("Connected to Server")
}
this.socket.onmessage = function (event) {
  console.log(event.data);
}

}

addMessage = (message) => {

  // THE STATE OF THE OLD MESSAGES AND GETS UPDATED
  const oldMessages = this.state.messages;
  let newMessage = {    
    username: this.state.currentUser.name,
    content: message
  }
  const newMessageList = [...oldMessages,newMessage]
  
 
  this.setState({
   messages:newMessageList
  })
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
