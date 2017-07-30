package com.prade.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prade.model.Reminder;
import com.prade.repository.ReminderRepo;
import com.prade.service.ReminderService;

@Service
public class ReminderServiceImpl implements ReminderService {

	@Autowired
	ReminderRepo reminderRepo;
	
	@Override
	public Long createReminder(Reminder reminder) {
		Reminder savedReminder = reminderRepo.save(reminder);
		return savedReminder.getId();
	}
}
