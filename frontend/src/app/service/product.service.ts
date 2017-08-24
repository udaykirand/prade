import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class ProductService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }


  createProduct(product) {
    const body = `{"name":"${product.productname}","description":"${product.description}","type":"${product.type}","size":"${product.size}","height":"${product.height}","weight":"${product.weight}","metalType":"${product.metalType}","gem":"${product.gem}","sellingPrice":"${product.sellingPrice}","actualPrice":"${product.actualPrice}","quantity":"${product.quantity}","soldOut":"${product.soldOut}","toRestock":"${product.toRestock}","image":"${product.image}"}`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.apiService.post(this.config.product_url, body, headers);
  }

  searchProduct(searchtext) {
    console.log("in searchProduct "+searchtext);
    return this.apiService.get(this.config.search_url, searchtext);
  }

  getProduct(id) {
    return this.apiService.get(this.config.product_url+'/'+id);
  }

  getProductTypes() {
    return this.apiService.get(this.config.product_url+'/types');
  }

  updateProduct(id, product) {
    const body = `{"name":"${product.productname}","description":"${product.description}","type":"${product.type}","size":"${product.size}","height":"${product.height}","weight":"${product.weight}","metalType":"${product.metalType}","gem":"${product.gem}","sellingPrice":"${product.sellingPrice}","actualPrice":"${product.actualPrice}","quantity":"${product.quantity}","soldOut":"${product.soldOut}","toRestock":"${product.toRestock}","image":"${product.image}"}`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.apiService.post(this.config.product_url+'/'+id, body, headers);    
  }

  getAllProducts() {
    return this.apiService.get(this.config.product_url);
  }
}
