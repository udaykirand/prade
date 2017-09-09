package com.prade.exception;

import com.prade.util.MessageUtil;

public class PradeException extends RuntimeException {
	
	private static final long serialVersionUID = -3417821814368540684L;
	
	private String message = null;
	
	private Object[] args = null;
	
	public PradeException() {
		super();
	}

	public PradeException(String errorCode, Object... args) {
		super(MessageUtil.getMessage(errorCode, args));
		this.message = MessageUtil.getMessage(errorCode, args);
		this.args = args;
	}

	public PradeException(Throwable cause) {
		super(cause);
	}

	@Override
	public String toString() {
		return message;
	}

	@Override
	public String getMessage() {
		return message;
	}
	
	public void setArgs(Object[] args) {
		this.args = args;
	}
	
	public Object[] getArgs() {
		return this.args;
	}
}
