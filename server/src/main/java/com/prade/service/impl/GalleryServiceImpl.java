package com.prade.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prade.model.Image;
import com.prade.repository.ImageRepository;
import com.prade.service.GalleryService;

@Service
public class GalleryServiceImpl implements GalleryService {

	@Autowired
	ImageRepository imageRepository;
	
	@Override
	public List<Image> getImages() {
		return imageRepository.findAll();
	}

}
