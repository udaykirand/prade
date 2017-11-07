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
		Session mailSession = prepareProperties();
		MimeMessage mailMessage = new MimeMessage(mailSession);
		try {
			
			mailMessage.setSubject("Quote Request");
			mailMessage.setContent(emailMessage.getBody(), "text/html");
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		Transport transport = null;
		try {
			transport = mailSession.getTransport("smtp");
		} catch (NoSuchProviderException e) {
			e.printStackTrace();
		}
		try {
			transport.connect("smtp.gmail.com", "", "");
			transport.sendMessage(mailMessage, mailMessage.getAllRecipients());

			transport.close();
		} catch (MessagingException e) {
			e.printStackTrace();
		}

	}
	
	@Override
	public void sendUserEmail(EmailMessage emailMessage) {
		Session mailSession = prepareProperties();
		MimeMessage mailMessage = new MimeMessage(mailSession);
		try {
			mailMessage.addRecipient(Message.RecipientType.TO, new InternetAddress(emailMessage.getToAddress()));
			mailMessage.addRecipient(Message.RecipientType.BCC, new InternetAddress(""));
			mailMessage.setSubject("Prade - Your Quote Request");
			mailMessage.setContent(emailMessage.getBody(), "text/html");
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		Transport transport = null;
		try {
			transport = mailSession.getTransport("smtp");
		} catch (NoSuchProviderException e) {
			e.printStackTrace();
		}
		try {
			transport.connect("smtp.gmail.com", "", "");
			transport.sendMessage(mailMessage, mailMessage.getAllRecipients());

			transport.close();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
	
	private Session prepareProperties() {
		Properties mailServerProperties = System.getProperties();
		mailServerProperties.put("mail.smtp.port", "587");
		mailServerProperties.put("mail.smtp.auth", "true");
		mailServerProperties.put("mail.smtp.starttls.enable", "true");
		mailServerProperties.put("mail.smtp.debug", "true");
		Session mailSession = Session.getInstance(mailServerProperties, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("", "");
			}
		});
		return mailSession;
	}
}
