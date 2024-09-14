package com.event.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import com.event.repos.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	
	public boolean existsByUsername(String username) {
		return userRepository.existsByUsername(username);
	}

	
	public void saveUser(User user) {
		userRepository.save(user);
	}
}
