package com.prade.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.prade.model.Reminder;
import com.prade.repository.ReminderRepo;

@Component
public class ReminderTrigger {
	
	@Autowired
	ReminderRepo reminderRepo;

    @Scheduled(cron = "0 0 10 ? * *")
    public void trigger() {
    	List<Reminder> reminders = reminderRepo.getRemindersByDueDate(new Date());
    	if(!reminders.isEmpty()) {
    		// Send email
    	}
    }
}
