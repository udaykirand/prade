package com.prade.service;

import org.springframework.stereotype.Service;

import com.prade.model.QuoteRequest;

@Service
public interface ContactService {
	
	boolean quoteRequest(QuoteRequest quoteRequest);
	
	boolean sendEmailToAdmin(QuoteRequest quote);

}
