import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import EventDetail from './components/EventDetail';
import AttendeeList from './components/AttendeeList';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/eventList" element={<EventList />} />
        <Route path="/" element={<Login />} />
        <Route path="/event/new" element={<EventForm />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/event/:id/attendees" element={<AttendeeList />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
