package com.event.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.event.entities.Attendee;
import com.event.service.AttendeeService;

@Controller
@RequestMapping("/api/events/{eventId}/attendees")
public class AttendeeController {
	@Autowired
    private AttendeeService attendeeService;

    @GetMapping
    public List<Attendee> getAttendees(@PathVariable Long eventId) {
        return attendeeService.getAttendeesByEvent(eventId);
    }

    @PostMapping
    public Attendee createAttendee(@PathVariable Long eventId, @RequestBody Attendee attendee) {
        return attendeeService.createAttendee(attendee);
    }
}
