package com.prade.service.impl;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prade.model.Product;
import com.prade.repository.ProductRepository;
import com.prade.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public Long createProduct(Product product) {
		Product savedProduct = productRepository.save(product);
		return savedProduct.getId();
	}

	@Override
	public Long updateProduct(Long productId, Product newProduct) {
		Product product = productRepository.findOne(productId);
		if(product != null) {
			if(!StringUtils.isEmpty(newProduct.getName()))
				product.setName(newProduct.getName());
			if(!StringUtils.isEmpty(newProduct.getDescription()))
				product.setDescription(newProduct.getDescription());
			if(!StringUtils.isEmpty(newProduct.getType()))
				product.setType(newProduct.getType());
			if(!StringUtils.isEmpty(newProduct.getStatus()))
				product.setStatus(newProduct.getStatus());
			
		}
		product = productRepository.save(product);
		return product.getId();
	}
	
	@Override
	public Product getProduct(Long productId) {
		return productRepository.findOne(productId);
	}

	@Override
	public List<Product> searchProducts(String searchTerm) {
		return productRepository.findByNameContaining(searchTerm);
	}

	@Override
	public List<Product> getProductsByType(String type) {
		List<Product> products = productRepository.findByType(type);
		return products;
	}

	@Override
	public List<String> getProductTypes() {
		return productRepository.findDistinctType();
	}

}
