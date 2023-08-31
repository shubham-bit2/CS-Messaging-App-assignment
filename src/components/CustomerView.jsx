import React, { useState } from 'react';
import getCurrentFormattedTime from '../Utils';
import AgentView from './AgentView';
import '../App.css'

const CustomerView = () => {

  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const [formVisible,setFormVisible] = useState(true);
  const [agentView, setAgentView] = useState(false);
  const timestamp = getCurrentFormattedTime();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormVisible(false);
    setAgentView(true);
  };

  return (
    <>
    <div className='customer-form'>
      {formVisible && (
        <div className='form-group'>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleIdChange}
            style={{ marginBottom: '10px' }} 
          />
        </div>
        <div>
          <label htmlFor="message" >Message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={handleMessageChange}
            style={{ marginBottom: '10px' }} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      )}
      </div>
      {agentView && (
        <AgentView userId={id} message={message} timestamp={timestamp} />
      )}
    </>
  );
  };

export default CustomerView;