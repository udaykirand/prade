package com.prade.service;

import java.io.IOException;

import org.springframework.stereotype.Service;

import com.prade.model.QuoteRequest;

@Service
public interface ContactService {
	
	boolean quoteRequest(QuoteRequest quoteRequest) throws IOException;
	
	boolean sendEmails(QuoteRequest quote) throws IOException;

}
