package com.event.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {

}
