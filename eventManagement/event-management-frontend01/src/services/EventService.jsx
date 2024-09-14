import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

// Fetch all events
export const getEvents = () => {
  return axios.get(API_URL);
};

// Create a new event
export const createEvent = (event) => {
  return axios.post(API_URL, event);
};

// Get event by ID
export const getEventById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Delete event by ID
export const deleteEvent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Fetch attendees for a specific event
export const getAttendees = (eventId) => {
  return axios.get(`${API_URL}/${eventId}/attendees`);
};

// Send a notification
export const sendNotification = (notificationData) => {
  return axios.post(`${API_URL}/notifications`, notificationData);
};
