package com.prade.handler;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.client.ResponseErrorHandler;

public class ErrorResponseHandler implements ResponseErrorHandler {

	@Override
	public boolean hasError(ClientHttpResponse clienthttpresponse) throws IOException {
		if (clienthttpresponse.getStatusCode() != HttpStatus.OK) {
			if (clienthttpresponse.getStatusCode() == HttpStatus.FORBIDDEN) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void handleError(ClientHttpResponse response) throws IOException {
		System.out.println("handleError");

	}

}

