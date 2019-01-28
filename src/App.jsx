import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';





class App extends Component {
  constructor(props){
super(props)
this.state = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}

}
addMessage = (message) => {
  console.log(message)
  // THE STATE OF THE TODOLIST GETS UPDATED
  const oldMessages = this.state.messages;
  let newMessage = {    
    username: this.state.currentUser.name,
    content: message
  }
  const newMessageList = [...oldMessages,newMessage]
  
 
  this.setState({
   messages:newMessageList
  })
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
