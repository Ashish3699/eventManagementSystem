import React, { useState } from 'react';
import { createEvent } from '../services/EventService';
import { useNavigate } from 'react-router-dom';
import './EventForm.css'; // Import CSS

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title && description && date) {
      alert("Event Created successfully")
      navigate('/eventList')
    }
    const newEvent = { title, description, date };
    createEvent(newEvent).then(() => navigate('/'));
  };

  return (
    <div className="event-form-container">
        <h1>Create New Event</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event Description"
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type='datetime-local'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-event-link">Create Event</button>
      </form>
    </div>
  );
}

export default EventForm;
