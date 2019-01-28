import React, {Component} from 'react';



class ChatBar extends Component{
    
    handleNameChange = (event) => {
        const message = event.target.value;

    }
    
    addMessage = (e) => {

    if (e.key === 'Enter') {

    this.props.add(e.target.value);
      
    }
}
    render(){
        return(<div>




<footer className="chatbar">
      <input  className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.currentUser.name} />
      <input  onKeyPress={this.addMessage} name="newMassage" className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>
        </div>);
    }
}

export default ChatBar;