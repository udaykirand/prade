package com.prade.config;

import java.util.Locale;

import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;

public class ExcelViewResolver implements ViewResolver {
	@Override
	public View resolveViewName(String s, Locale locale) throws Exception {
		ExcelView view = new ExcelView();
		return view;
	}
}