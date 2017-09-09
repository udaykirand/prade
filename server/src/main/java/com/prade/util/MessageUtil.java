package com.prade.util;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;

public class MessageUtil {

	private static ReloadableResourceBundleMessageSource messageSource;
    
    static {
        messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:messages/messages");
        messageSource.setDefaultEncoding("UTF-8");
        messageSource.setCacheSeconds(3600);
    }

    /**
     * 
     * @param message
     * @param args
     * @return
     */
    public static String getMessage(String message, Object...args){
        return messageSource.getMessage(message, args, LocaleContextHolder.getLocale());
    }
}
