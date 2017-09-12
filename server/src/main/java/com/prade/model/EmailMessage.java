package com.prade.model;

public class EmailMessage {
	
	private String toAddress;
	
	private String body;

	public EmailMessage(String toAddress, String emailBody) {
		this.toAddress = toAddress;
		this.body = emailBody;
	}

	public String getToAddress() {
		return toAddress;
	}

	public void setToAddress(String toAddress) {
		this.toAddress = toAddress;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}
}
