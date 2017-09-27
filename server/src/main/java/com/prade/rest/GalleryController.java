package com.prade.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.prade.Constants;
import com.prade.model.Result;
import com.prade.service.GalleryService;

@RestController
@RequestMapping( value = "/api/images", produces = MediaType.APPLICATION_JSON_VALUE )
public class GalleryController {

	@Autowired
	GalleryService galleryService;
	
	@RequestMapping(method = RequestMethod.GET, value = "")
	public Result getGalleryImages() {
		return new Result(Constants.SUCCESS, null, galleryService.getImages());
	}
}
