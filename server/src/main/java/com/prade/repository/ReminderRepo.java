package com.prade.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prade.model.Reminder;

public interface ReminderRepo extends JpaRepository<Reminder, Long> {

	List<Reminder> getRemindersByDueDate(Date date);

}
