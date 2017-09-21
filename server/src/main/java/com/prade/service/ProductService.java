package com.prade.service;

import java.util.List;

import com.prade.model.Product;

public interface ProductService {
	
	List<Product> getAllProducts();

	Long createProduct(Product product);

	Long updateProduct(Long productId, Product product);

	Product getProduct(Long productId);

	List<Product> searchProducts(String searchTerm);

	List<Product> getProductsByType(String type);

	List<String> getProductTypes();

	List<Product> getProductTypeAndMetal(String type, String metal);

}
