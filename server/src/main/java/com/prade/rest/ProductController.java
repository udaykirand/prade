package com.prade.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prade.Constants;
import com.prade.model.Product;
import com.prade.model.Result;
import com.prade.service.ProductService;

/**
 * Created by udayd
 */

@RestController
@RequestMapping(value = "/api/products", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProductController {

	@Autowired
	ProductService productService;

	@RequestMapping(method = RequestMethod.GET, value = "")
	@PreAuthorize("hasRole('USER')")
	public Result getAllProducts() {
		return new Result(Constants.SUCCESS, null, productService.getAllProducts());
	}

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("hasRole('ADMIN')")
	public Result createProduct(@RequestBody Product product) {
		Long productId = productService.createProduct(product);
		return new Result(Constants.SUCCESS, null, productId);
	}

	@RequestMapping(value = "/{productId}", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@PreAuthorize("hasRole('ADMIN')")
	public Result updateProduct(@PathVariable Long productId, @RequestBody Product product) {
		productService.updateProduct(productId, product);
		return new Result(Constants.SUCCESS, null, productId);
	}
	
	@RequestMapping(value = "/{productId}", method = RequestMethod.GET)
	public Result getProduct(@PathVariable Long productId) {
		return new Result(Constants.SUCCESS, null, productService.getProduct(productId));
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/search")
	public Result getProducts(@RequestParam String searchTerm) {
		System.out.println(searchTerm);
		return new Result(Constants.SUCCESS, null, productService.searchProducts(searchTerm));
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/type")
	public Result getProductsByType(@RequestParam String type) {
		return new Result(Constants.SUCCESS, null, productService.getProductsByType(type));
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/types")
	public Result getProductTypes() {
		return new Result(Constants.SUCCESS, null, productService.getProductTypes());
	}

}
