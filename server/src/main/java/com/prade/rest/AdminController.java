package com.prade.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.prade.Constants;
import com.prade.config.ExcelView;
import com.prade.model.Product;
import com.prade.model.Reminder;
import com.prade.model.Result;
import com.prade.service.ProductService;
import com.prade.service.ReminderService;

@RestController
@RequestMapping(value = "/api/reminder")
public class AdminController {

	@Autowired
	ReminderService reminderService;

	@Autowired
	ProductService productService;

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("hasRole('ADMIN')")
	public Result createReminder(@RequestBody Reminder reminder) {
		return new Result(Constants.SUCCESS, null, reminderService.createReminder(reminder));
	}

	@RequestMapping(value = "/download", method = RequestMethod.GET)
	public ModelAndView exportProducts() {
		List<Product> products = productService.getAllProducts();
		System.out.println("***************"+products.size());
		Map<String, Object> model = new HashMap<>();
		model.put("products", products);
		return new ModelAndView(new ExcelView(), model);
	}
}
