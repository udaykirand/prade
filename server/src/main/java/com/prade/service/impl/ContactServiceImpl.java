package com.prade.service.impl;

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
	public boolean quoteRequest(QuoteRequest quoteRequest) {
		sendEmailToAdmin(quoteRequest);
		contactRepo.save(quoteRequest);
		return false;
	}

	@Override
	public boolean sendEmailToAdmin(QuoteRequest quote) {
		if(quote.getProductId() != null && quote.getContact() != null) {
			String emailBody = "Product Id: "+quote.getProductId()+" Product name: "+quote.getProductName()+" Enquirer: "+quote.getContact();
			if(quote.getMessage() != null) {
				emailBody += " Message: "+quote.getMessage();
			}
			EmailMessage message = new EmailMessage("contact@prade.co.in", emailBody);
			emailService.sendEmail(message);
		}
		return true;
	}

}
