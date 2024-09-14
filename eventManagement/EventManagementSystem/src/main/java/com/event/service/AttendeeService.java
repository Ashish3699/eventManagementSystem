package com.event.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.entities.Attendee;
import com.event.repos.AttendeeRepository;

@Service
public class AttendeeService {
	@Autowired
    private AttendeeRepository attendeeRepository;

    public List<Attendee> getAttendeesByEvent(Long eventId) {
        return attendeeRepository.findByEventId(eventId);
    }

    public Attendee createAttendee(Attendee attendee) {
        return attendeeRepository.save(attendee);
    }
}
