import {Observable} from 'rxjs/Rx';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';

import {
  UserService,
  AuthService,
  ProductService
} from '../service';

@Component({
  selector: 'productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: [ './productdetails.component.scss' ]
})
export class ProductDetailsComponent implements OnInit {

productId: Observable<string>;
  constructor(
    private location: Location,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute
     .queryParams
     .map(params => params['id'] || 'None');
     console.log(this.productId);

     this.productService.searchProduct(this.activatedRoute
     .queryParams
     .map(params => params['id'] || 'None'))
    // show me the animation
    .delay(1000)
    .subscribe(data => {

      console.log(data.data);
    },
    error => {
      console.log(error.status);
    });
  }
}
