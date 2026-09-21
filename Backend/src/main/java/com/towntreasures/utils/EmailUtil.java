package com.towntreasures.utils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;


@Component
public class EmailUtil {

  @Autowired
  private JavaMailSender javaMailSender;
  @Value("${spring.mail.username}") 
  private String emailUsername;
  public void sendOtpEmail(String email, String otp) throws MessagingException {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
    mimeMessageHelper.setTo(email);
    mimeMessageHelper.setSubject("Verify OTP");

    String htmlContent = "<html>"
            + "<body>"
            + "<h2>Verify your account</h2>"
            + "<p>Dear User,</p>"
            + "<p>Please use the following OTP to verify your account:</p>"
            + "<p><strong>" + otp + "</strong></p>"
            + "<p>If you did not request this verification, please ignore this email.</p>"
            + "<p>Thank you,</p>"
            + "<p>Team Town Treasures</p>"
            + "</body>"
            + "</html>";

    mimeMessageHelper.setText(htmlContent, true);

    System.out.println("========== MOCK EMAIL OTP ==========");
    System.out.println("To: " + email);
    System.out.println("OTP: " + otp);
    System.out.println("====================================");
    try {
        javaMailSender.send(mimeMessage);
    } catch (Exception e) {
        System.err.println("Failed to send real email (OTP). Check SMTP credentials.");
    }
}




public void sendWelcomeEmail(String email) throws MessagingException {
  MimeMessage mimeMessage = javaMailSender.createMimeMessage();
  MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
  mimeMessageHelper.setTo(email);
  mimeMessageHelper.setFrom(emailUsername);
  mimeMessageHelper.setSubject("Welcome to Town Treasure");
  
  String htmlContent = """
      <html>
      <head>
          
      </head>
      <body>
          <div class="container">
              <div class="content">
                  <p >Dear User,</p>
                  <p >Welcome to Town Treasures!</p>
                  </div>
            
          </div>
      </body>
      </html>
      """;

  mimeMessageHelper.setText(htmlContent, true);

  System.out.println("========== MOCK WELCOME EMAIL ==========");
  System.out.println("To: " + email);
  System.out.println("========================================");
  try {
      javaMailSender.send(mimeMessage);
  } catch (Exception e) {
      System.err.println("Failed to send real email (Welcome). Check SMTP credentials.");
  }
}

public void sendEmail2(String email, String title,  String body,String email1,String phoneNo,String message ) throws MessagingException {
MimeMessage mimeMessage = javaMailSender.createMimeMessage();
MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
mimeMessageHelper.setTo(email);
mimeMessageHelper.setFrom(emailUsername);
mimeMessageHelper.setSubject(title);

String htmlContent = String.format("""
    <html>
    <head>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <p>Dear Admin,</p>
                <p>You have a %s</p>
                <p>From %s</p>
                </br>
                <p>Email: %s</p>
                <p>Phone Number: %s</p>
                <p>Message: %s</p>
            </div>
        </div>
    </body>
    </html>
    """, title, body,email1,phoneNo,message);

mimeMessageHelper.setText(htmlContent, true);

System.out.println("========== MOCK CONTACT US EMAIL ==========");
System.out.println("To: " + email);
System.out.println("Message: " + message);
System.out.println("===========================================");
try {
    javaMailSender.send(mimeMessage);
} catch (Exception e) {
    System.err.println("Failed to send real email (Contact Us). Check SMTP credentials.");
}
}

public void sendEmail3(String email, String title,  String state,String district,String checkin,String checkout ) throws MessagingException {
MimeMessage mimeMessage = javaMailSender.createMimeMessage();
MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
mimeMessageHelper.setTo(email);
mimeMessageHelper.setFrom(emailUsername);
mimeMessageHelper.setSubject(title);

String htmlContent = String.format("""
    <html>
    <head>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <p>Dear Admin,</p>
                <p>You have a %s</p>
                <p>Destination -</p>
                <p>State: %s</p>
                <p>District: %s</p>
                <p>Checkin: %s</p>
                <p>CheckOut: %s</p>
            </div>
        </div>
    </body>
    </html>
    """, title, title,state,district,checkin,checkout);

mimeMessageHelper.setText(htmlContent, true);

System.out.println("========== MOCK BOOKING EMAIL ==========");
System.out.println("To: " + email);
System.out.println("Checkin: " + checkin + ", Checkout: " + checkout);
System.out.println("========================================");
try {
    javaMailSender.send(mimeMessage);
} catch (Exception e) {
    System.err.println("Failed to send real email (Booking). Check SMTP credentials.");
}
}



}

