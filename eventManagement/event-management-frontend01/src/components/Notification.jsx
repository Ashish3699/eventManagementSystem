import React, { useState } from 'react';
import { sendNotification } from '../services/EventService';

function Notification() {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSendNotification = () => {
    sendNotification({ recipient, message });
    alert('Simulating notification send...');
    setMessage('');
    setRecipient('');
  };

  return (
    <div className="notification-container">
      <h1>Send Notification</h1>
      <div className="form-group">
        <label>Recipient Email</label>
        <input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient Email"
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Notification Message"
        />
      </div>
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
}

export default Notification;
