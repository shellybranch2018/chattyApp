import React, {Component} from 'react';
import Message from './Message.jsx';



// function getMessages(props){
//     const data = this.props.messageList.map((message) => {
//        console.log(message)
        
//        }); 
       
// }

function generateRandomString() {
    var alphaString = Math.random().toString(32).replace('0.', '');
    
    return alphaString.slice(0,3);
    }


class MessageList extends Component{
    render(){

        return(     
        <div>


<main className="messages">
<div id="message-list">

{  
    this.props.messageList.map((message) => {
   return <Message key={generateRandomString()} username={message.username} newmessage={message.content}/>
   
            
}) }
</div>
 
</main>
        </div>);
    }
}

export default MessageList;