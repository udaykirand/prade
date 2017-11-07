package com.prade.service;

import com.prade.model.EmailMessage;

public interface EmailService {
	
	void sendEmail(EmailMessage emailMessage);

	void sendUserEmail(EmailMessage emailMessage);

}
