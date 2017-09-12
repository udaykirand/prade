package com.prade.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import com.prade.model.QuoteRequest;
import com.prade.model.Result;
import com.prade.service.ContactService;

@RestController
@RequestMapping( value = "/api/contact", produces = MediaType.APPLICATION_JSON_VALUE )
public class ContactController {
	
	@Autowired
	ContactService contactService;
	
	@RequestMapping( method = POST)
	public Result quoteRequest(@RequestBody QuoteRequest quoteRequest) {
		contactService.quoteRequest(quoteRequest);
		return new Result("SUCCESS", null, true);
	}

}
