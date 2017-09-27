package com.prade.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prade.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {

	public List<Image> findAll();

}
