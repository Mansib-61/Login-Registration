package com.example.login_registration.controller;

import org.springframework.web.bind.annotation.*;

import com.example.login_registration.model.ComplaintRequest;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api")
public class ComplainController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/complain")
    public String submitComplaint(@RequestBody ComplaintRequest complaintRequest) {
        try {
            // Sending email logic
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("ibnulmansib394@gmail.com");
            message.setSubject("New Complaint Submitted");
            message.setText("Complaint: " + complaintRequest.getComplaint() + "\nEmail: " + complaintRequest.getEmail());
            mailSender.send(message);

            return "Complaint submitted successfully!";
        } catch (Exception e) {
            return "Failed to submit complaint.";
        }
    }
}
