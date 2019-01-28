import React, {Component} from 'react';


class Message extends Component{
    render(){
        return(
<div className="message">
  <strong>{this.props.username}:&nbsp;&nbsp;&nbsp; </strong><span>{this.props.newmessage}</span>
  </div>
        );
    }
}

export default Message;


