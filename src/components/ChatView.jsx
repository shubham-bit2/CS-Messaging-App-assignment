import React, { useState } from 'react';
import '../App.css'
import '../ChatView.css'
import getCurrentFormattedTime from '../Utils';

const ChatView = ({ userId, timestamp, message}) => {
const messageObj = {
    content: message,
    isAgent: false,
    timestamp: timestamp
}
const [messages, setMessages] = useState([messageObj]);
const [newMessage, setNewMessage] = useState('');

const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMessageObj = {
        content: newMessage,
        isAgent: true, // This indicates that the message is from the agent
        timestamp: getCurrentFormattedTime(),
      };
  
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
  };    

return (  
    <>
<div class="container">
  <h2>User {userId}</h2>
</div>
<div className="chat-interface">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isAgent ? 'agent' : 'customer'}`}
          >
            {message.content}
            <br></br>
            {message.timestamp}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button style={{marginBottom : '400px'}} onClick={handleSendMessage}>Send</button>
      </div>
    </div>
</> 
  );
};

export default ChatView;
