import React, {Component} from 'react';


class Message extends Component{
    render(){
        return(
            <div>
<div className="message">
  <strong>{this.props.username}&nbsp;&nbsp;&nbsp; </strong>{this.props.newmessage}
  </div>
  <div className="notification">
  <span className="notification-content" >{this.props.newNotification}</span>
</div>
  </div>
        );
    }
}

export default Message;


