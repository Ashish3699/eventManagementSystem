package com.event.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.entities.Attendee;

public interface AttendeeRepository extends JpaRepository<Attendee, Long> {
	 List<Attendee> findByEventId(Long eventId);
}
