package com.towntreasures.services;

import java.time.*;
import java.util.List;
import java.util.*;
import ch.qos.logback.core.util.Duration;
// import com.example.registerapp.util.EmailUtil;
// import com.towntreasures.registerapp.util.OtpUtil;
import com.towntreasures.dto.RegisterDto;
import com.towntreasures.models.ContactModel;

import org.hibernate.type.descriptor.java.LocalDateJavaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.towntreasures.repository.ContactRepository;

import com.towntreasures.models.UserModel;
import com.towntreasures.models.JwtRequest;
import com.towntreasures.models.LoginRequest;
import com.towntreasures.repository.UserRepository;
import com.towntreasures.utils.JwtUtils;
import com.towntreasures.utils.EmailUtil;
import com.towntreasures.utils.OtpUtil;

import jakarta.mail.MessagingException;
import java.time.LocalDate;
import java.util.Optional;
import java.time.LocalDateTime;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private OtpUtil otpUtil;

    @Autowired
    private EmailUtil emailUtil;

    @Autowired
    JwtUtils jwt;

    @Autowired
    ContactRepository contactRepository;

    public boolean authenticate(String token, JwtRequest user) {
        return this.jwt.validateToken(token, user);
    }

    public String createToken(JwtRequest user) {
        return this.jwt.generateToken(user);
    }

    public String login(LoginRequest log) throws Exception {
        try {
            UserModel user = userRepository.findByEmail(log.getEmail());
            if (user == null) {
                throw new Exception("User not found");
            }
            // Check if the provided password matches the stored password
            if (!user.getPassword().equals(log.getPassword())) {
                throw new Exception("Wrong password");
            }
            // If the email and password match, create and return a JWT token
            JwtRequest jwtRequest = new JwtRequest(log.getEmail(), user.getId());
            return createToken(jwtRequest);
        } catch (Exception e) {
            // e.printStackTrace();
            throw new Exception("Login failed: " + e.getMessage());
        }
    }

    // public String signUp(UserModel user) throws Exception {
    // try {
    // if (userRepository.findByEmail(user.getEmail()) != null) {
    // throw new Exception("User Already Exists");
    // }
    // UserModel s = userRepository.save(user);
    // JwtRequest u = new JwtRequest(s.getEmail(), s.getId());
    // return createToken(u);
    // } catch (Exception e) {
    // throw new Exception("Error SigningUp: " + e.getMessage());
    // }
    // }

    public String register(UserModel user) throws Exception {
        UserModel check= userRepository.findByEmail(user.getEmail());
        if(check!=null){
            throw new Exception("User Already Exists");
        }
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(user.getEmail(), otp);
        } catch (MessagingException e) {
            e.printStackTrace();
            throw new RuntimeException("Unable to send otp please try again");
        }
        user.setOtp(otp);
        user.setActive(false);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        return "User registration successful";
    }

    public String verifyAccount(String email, String otp) throws Exception {

        UserModel user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found with this email: " + email);
        }
        try {
            if (user.getOtp().equals(otp) && user.getOtpGeneratedTime().plusMinutes(5).isAfter(LocalDateTime.now())) {
                user.setActive(true);
                UserModel s = userRepository.save(user);
                JwtRequest jwtRequest= new JwtRequest(s.getEmail(), s.getId());
                String JWTTOKEN=jwt.generateToken(jwtRequest);
                return JWTTOKEN;
            }
        } catch (Exception e) {
            throw new Exception("Error SigningUp: " + e.getMessage());
        }
        
        return null;
        // return "Please regenerate otp and try again";
    }

    public String regenerateOtp(String email) {
        UserModel user = userRepository.findByEmail(email);

        if (user == null) {
            throw new RuntimeException("User not found with this email: " + email);
        }
        String otp = otpUtil.generateOtp();
        try {
            emailUtil.sendOtpEmail(email, otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        return "Email sent... please verify account within 1 minute";
    }


    public ContactModel getContact(ContactModel contact) throws Exception {
        try {
            return contactRepository.save(contact);
        } catch (Exception e) {
            throw new Exception("Error saving contact: " + e.getMessage());
        }
    }
}
