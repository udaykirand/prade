package com.prade.service.impl;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.NoSuchProviderException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

import com.prade.model.EmailMessage;
import com.prade.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService {

	@Override
	public void sendEmail(EmailMessage emailMessage) {
		Properties mailServerProperties = System.getProperties();
		mailServerProperties.put("mail.smtp.port", "587");
		mailServerProperties.put("mail.smtp.auth", "true");
		mailServerProperties.put("mail.smtp.starttls.enable", "true");
		mailServerProperties.put("mail.smtp.debug", "true");
		Session getMailSession = Session.getInstance(mailServerProperties, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("", "");
			}
		});
		MimeMessage generateMailMessage = new MimeMessage(getMailSession);
		try {
			generateMailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(emailMessage.getToAddress()));
			generateMailMessage.addRecipient(Message.RecipientType.CC, new InternetAddress(""));
			generateMailMessage.setSubject("Quote Request");
			generateMailMessage.setContent(emailMessage.getBody(), "text/html");
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		Transport transport = null;
		try {
			transport = getMailSession.getTransport("smtp");
		} catch (NoSuchProviderException e) {
			e.printStackTrace();
		}
		try {
			transport.connect("smtp.gmail.com", "", "");
			transport.sendMessage(generateMailMessage, generateMailMessage.getAllRecipients());

			transport.close();
		} catch (MessagingException e) {
			e.printStackTrace();
		}

	}
}
