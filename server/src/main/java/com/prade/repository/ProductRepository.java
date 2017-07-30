package com.prade.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.prade.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findByName(String name);

	List<Product> findByType(String type);

	@Query("SELECT DISTINCT p.type FROM Product p")
	List<String> findDistinctType();
}
