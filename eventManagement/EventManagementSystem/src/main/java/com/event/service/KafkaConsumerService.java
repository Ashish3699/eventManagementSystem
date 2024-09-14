package com.event.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "event_notifications", groupId = "event-notifications")
    public void listen(String message) {
        // Handle notification (e.g., send email, show in-app notification)
        System.out.println("Received Notification: " + message);
    }
}

