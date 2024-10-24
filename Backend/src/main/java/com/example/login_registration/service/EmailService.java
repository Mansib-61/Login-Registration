package com.example.login_registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendComplaintEmail(String name, String email, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("ibnulmansib394@gmail.com");
        mailMessage.setSubject("New Complaint from " + name);
        mailMessage.setText("Complaint Details:\n\nName: " + name + "\nEmail: " + email + "\n\nMessage: " + message);

        mailSender.send(mailMessage);
    }
}