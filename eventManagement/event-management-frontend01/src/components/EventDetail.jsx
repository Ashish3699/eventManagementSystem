import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from '../services/EventService';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState({
    title: "Sample Event",
    date: "2024-09-14",
    location: "New York",
    time: "10:25 AM"
  });
  const [buttonText, setButtonText] = useState("Notify me")
  const navigate = useNavigate()
  const handleNotify = () => {
    alert("Reminder set successfully, you will be notified 10-min prior of event")
    setButtonText("Notified")
    setTimeout(() => {
      navigate("/eventList")
    }, 1000)
  }

  useEffect(() => {
    getEventById(id).then((response) => setEvent(response.data));
  }, [id]);

  return (
    <div className="event-detail-container">
      <h1>{event.title}</h1>
      <div className="event-form">
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Time: {event.time}</p>
        <button className="create-event-link" onClick={() => handleNotify()}>{ buttonText }</button>
      </div>
    </div>
  );
}

export default EventDetails;
