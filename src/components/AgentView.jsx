import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'
import ChatView from './ChatView';

const AgentView = ({ userId, message, timestamp }) => {
  const [data, setData] = useState([
    {
      userId: userId,
      message: message,
      timestamp: timestamp,
    }
  ]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [chatSelected, setChatSelected] = useState(false);

  useEffect(() => {
    // Fetch and parse the CSV data
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8080/data.csv'); // Update the path
      const text = await response.text();
      const result = Papa.parse(text, { header: true });
      const parsedData = result.data.map(item => ({
        userId: item.userId,
        message: item.message,
        timestamp: item.timestamp,
      }));
      setData(prevData => [...prevData, ...parsedData]);
    };

    fetchData();
  }, []);

  return (
    <div>
      {!chatSelected &&
      <table style={{ borderSpacing: '20px' }}>
      <thead>
        <tr>
          <th style={{ width: '100px' }}>User ID</th>
          <th style={{ width: '200px' }}>Timestamp</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td style={{ paddingLeft: '20px' }}>{row.userId}</td>
            <td style={{ paddingLeft: '20px' }}>{row.timestamp}</td>
            <td style={{ paddingLeft: '20px' }}>{row.message}</td>
            <td style={{ paddingLeft: '20px' }}>
              <button onClick={()=> {setSelectedRow(row); setChatSelected(true); }}>Chat</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table> }
    {chatSelected && <ChatView userId={selectedRow.userId} timestamp={selectedRow.timestamp} message={selectedRow.message} />}
    </div>
  );
};

export default AgentView;
