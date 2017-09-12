package com.prade.model;

public class QuoteRequest {
	
	private Long productId;
	
	private String productName;
	
	private String toContact;
	
	private String message;

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getToContact() {
		return toContact;
	}

	public void setToContact(String toContact) {
		this.toContact = toContact;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
