package com.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.entities.Event;
import com.event.repos.EventRepository;

@Service
public class EventService {
	 @Autowired
	    private EventRepository eventRepository;

	    public List<Event> getAllEvents() {
	        return eventRepository.findAll();
	    }

	    public Event getEventById(Long id) {
	        return eventRepository.findById(id).orElseThrow();
	    }

	    public Event createEvent(Event event) {
	        return eventRepository.save(event);
	    }

	    public void deleteEvent(Long id) {
	        eventRepository.deleteById(id);
	    }
}
