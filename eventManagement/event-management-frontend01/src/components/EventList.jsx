import React, { useEffect, useState } from "react";
import { getEvents } from "../services/EventService";
import { Link } from "react-router-dom";
import "./EventList.css"; // Import CSS

function EventList() {
  const [events, setEvents] = useState([
    {
      id: "01",
      title: "Music Event",
    },
    {
      id: "02",
      title: "Dance Event",
    },
    {
      id: "03",
      title: "Python Workshop",
    },
    {
      id: "04",
      title: "React Workshop",
    },
    {
      id: "05",
      title: "Hackathon Event",
    },
    {
      id: "06",
      title: "Bhajan Event",
    },
    {
      id: "07",
      title: "Python Workshop",
    },
    {
      id: "08",
      title: "Nivoda Workshop",
    },
  ]);

  useEffect(() => {
    getEvents().then((response) => setEvents(response.data));
  }, []);

  return (
    <div className="event-list">
      <h1>Event List</h1>
      <Link to="/event/new" className="create-event-link">
        Create New Event
      </Link>
      <ul>
        {events.map((event) => (
          <div className="event-item flexBox">
            <div>
              <li key={event.id} className="flexBox" style={{margin: 0}}>
                <Link to={`/event/${event.id}`}>{event.title}</Link>
              </li>
            </div>
            <div>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
