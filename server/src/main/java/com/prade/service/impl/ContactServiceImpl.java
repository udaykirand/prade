package com.prade.service.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prade.model.EmailMessage;
import com.prade.model.QuoteRequest;
import com.prade.repository.ContactRepository;
import com.prade.service.ContactService;
import com.prade.service.EmailService;

@Service
public class ContactServiceImpl implements ContactService {

	@Autowired
	EmailService emailService;

	@Autowired
	ContactRepository contactRepo;

	@Override
	public boolean quoteRequest(QuoteRequest quoteRequest) throws IOException {
		sendEmails(quoteRequest);
		contactRepo.save(quoteRequest);
		return false;
	}

	@Override
	public boolean sendEmails(QuoteRequest quote) throws IOException {
		if (quote.getProductId() != null && quote.getContact() != null) {
			String contact = quote.getContact();
			String emailBody = "Product Id: " + quote.getProductId() + " Product name: " + quote.getProductName()
					+ " Enquirer: " + contact;
			if (quote.getMessage() != null) {
				emailBody += " Message: " + quote.getMessage();
			}
			EmailMessage message = new EmailMessage("xxxx", emailBody);
			emailService.sendEmail(message);
			if (isValidEmail(contact)) {
				File file = new File(this.getClass().getClassLoader().getResource("getQuoteEmail.txt").getFile());
				String userEmailBody = new String(Files.readAllBytes(Paths.get(file.getPath())));
				userEmailBody = userEmailBody.replaceAll("##productName##", quote.getProductName());
				EmailMessage userEmail = new EmailMessage(contact, userEmailBody);
				emailService.sendUserEmail(userEmail);
			}
		}
		return true;
	}

	private boolean isValidEmail(String contact) {
		return contact.matches("^[0-9a-zA-Z!#$%&;'*+\\-/\\=\\?\\^_`\\.{|}~]{1,64}@[0-9a-zA-Z]{1,255}\\.[a-zA-Z]{1,10}")
				&& contact.length() <= 320;
	}

}
