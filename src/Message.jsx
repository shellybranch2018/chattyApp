import React, {Component} from 'react';


class Message extends Component{
    render(){
        return(
<div className="message">
  <strong>{this.props.username}:&nbsp;&nbsp;&nbsp; </strong>{this.props.newmessage}
  </div>
        );
    }
}

export default Message;


