import React, {Component} from 'react';
import Message from './Message.jsx';




class MessageList extends Component{
    render(){
        return(<div>
<nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>
<main className="messages">
  <Message/>
  <div className="message system">
    Anonymous1 changed their name to nomnom.
  </div>
</main>
        </div>);
    }
}

export default MessageList;