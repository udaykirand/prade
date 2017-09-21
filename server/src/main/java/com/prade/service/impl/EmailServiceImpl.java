package com.prade.service.impl;

import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.prade.model.EmailMessage;
import com.prade.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService {
	private static final String SMTP_HOST_NAME = "smtpout.asia.secureserver.net"; //smtp URL
	private static final int SMTP_HOST_PORT = 465; //port number
	private static String SMTP_AUTH_USER = "Username"; //email_id of sender
	private static String SMTP_AUTH_PWD = "Password"; //password of sender email_id

	@Override
	public void sendEmail(EmailMessage emailMessage) {
		

		try {
		    Properties props = new Properties();
		    props.put("mail.transport.protocol", "smtps");
		    props.put("mail.smtps.host", SMTP_HOST_NAME);
		    props.put("mail.smtps.auth", "true");

		    Session mailSession = Session.getDefaultInstance(props);
		    mailSession.setDebug(true);
		    Transport transport = mailSession.getTransport();
		    MimeMessage message = new MimeMessage(mailSession);

		    message.setSubject(emailMessage.getSubject());
		    message.setContent(emailMessage.getBody(), "text/html");
		    Address[] from = InternetAddress.parse("from email address");//Your domain email
		    message.addFrom(from);
		    message.addRecipient(Message.RecipientType.TO, new InternetAddress(emailMessage.getToAddress())); //Send email To (Type email ID that you want to send)

		    transport.connect(SMTP_HOST_NAME, SMTP_HOST_PORT, SMTP_AUTH_USER, SMTP_AUTH_PWD);
		    transport.sendMessage(message, message.getRecipients(Message.RecipientType.TO));
		    transport.close();
		} catch (Exception e) {
		 e.printStackTrace();
		}
	}
}
