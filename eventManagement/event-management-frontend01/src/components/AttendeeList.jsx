import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAttendees } from '../services/EventService';

function AttendeeList() {
  const { id } = useParams();
  const [attendees, setAttendees] = useState([
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  useEffect(() => {
    // Simulating fetch of attendees by event ID
    getAttendees(id).then((response) => setAttendees(response.data));
  }, [id]);

  return (
    <div className="attendee-list-container">
      <h1>Attendee List</h1>
      <ul>
        {attendees.map((attendee, index) => (
          <li key={index} className="attendee-item">
            {attendee.name} - {attendee.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendeeList;
