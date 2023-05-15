package com.example.demo;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.entity.UserRole;
import com.example.demo.service.UserService;

@SpringBootApplication
public class DemoCrudApplication extends SpringBootServletInitializer implements CommandLineRunner {
	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(DemoCrudApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		try {

//			System.out.println("starting code");
//
//			User user = new User();
//
//			user.setFirstname("Priyabrata");
//			user.setLastname("Pattanaik");
//			user.setUsername("angular");
//			user.setPassword(this.bCryptPasswordEncoder.encode("angular"));
//			user.setEmail("abc@gmail.com");
//			user.setProfile("default.png");
//
//			Role role1 = new Role();
//			role1.setRoleId(44L);
//			role1.setRoleName("ADMIN");
//
//			Set<UserRole> userRoleSet = new HashSet<>();
//			UserRole userRole = new UserRole();
//
//			userRole.setRole(role1);
//
//			userRole.setUser(user);
//
//			userRoleSet.add(userRole);
//
//			User user1 = this.userService.createUser(user, userRoleSet);
//			System.out.println(user1.getUsername());

		} catch (Exception e) {
			
			
			
			
			
			
			
//			89oupij-]  op'
			e.printStackTrace();

		}
	}
}
