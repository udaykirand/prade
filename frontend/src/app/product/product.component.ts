import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";


import {
  UserService,
  AuthService,
  ProductService,
  ConfigService
} from '../service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'Create Product';
  form: FormGroup;

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false;

  /**
   * Diagnostic message from received
   * form request error
   */
  errorDiagnostic: string;
  productNotFound: string;
  successMessage: string;
  product:any;
  productTypes:any[] = [];
  btnText = 'Create';
  isUpdate = false;
  prodId:any;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private config:ConfigService
  ) {
    this.route.params.subscribe( params => {
      console.log(params);
      if (params['id']) { 
        this.btnText = 'Update';
        this.isUpdate = true;
        this.prodId = params['id'];
        this.loadProduct(params['id'])
      }
    });
    this.loadDropDowns();
  }

  ngOnInit() {
    this.product = {
      metalType:["Silver", "Alloy", "Afghan alloy", "Antique silver"]
    }
    if(!this.userService.currentUser) {
      this.router.navigate(['/login']);
    }
    this.form = this.formBuilder.group({
      productname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      type: [''],
      image: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      size: [''],
      category: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      height: [''],
      weight: [''],
      metalType: [''],
      gem:[''],
      sellingPrice: [''],
      actualPrice: [''],
      soldOut:[''],
      toRestock: [''],
      quantity:['']
    });

  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.submitted = true;
    this.errorDiagnostic = null;
    this.successMessage = null;
    if(this.isUpdate) {
    this.productService.updateProduct(this.prodId, this.form.value)
    .subscribe(data => {
      console.log(data.data);
      this.config.saveData("Product updated successfully");
      this.router.navigate(['/']);
    },
    error => {
      console.log(error.status);
      this.submitted = false;
      if(error.status == 403) {
        this.errorDiagnostic = 'Please login as admin to create product';
      } else {
        this.errorDiagnostic = 'Error occured while creating product. Please try again later.';
      }
    });
    } 
  else {
    this.productService.createProduct(this.form.value)
    .subscribe(data => {
      console.log(data.data);
      this.config.saveData("Product created successfully with id : "+data.data);
      this.router.navigate(['/']);
    },
    error => {
      console.log(error.status);
      this.submitted = false;
      if(error.status == 403) {
        this.errorDiagnostic = 'Please login as admin to update product';
      } else {
        this.errorDiagnostic = 'Error occured while updating product. Please try again later.';
      }
    });
  }
    

  }

  loadProduct(id) {
    this.productService.getProduct(id)
    .subscribe(data => {
      if(data.data != null) {
      console.log(data.data);
      console.log(data.data.id);
      this.product = {
      name: data.data.name,
      description: data.data.description,
      status: data.data.status,
      metalType:data.data.metalType,
      gem: data.data.gem,
      height: data.data.height,
      weight: data.data.weight,
      size: data.data.size,
      quantity: data.data.quantity,
      image: data.data.image,
      category: data.data.category,
      soldOut: data.data.soldOut,
      toRestock: data.data.reStock,
      actualPrice: data.data.actualPrice,
      sellingPrice: data.data.sellingPrice  
    };
      } else {
      this.productNotFound = 'Invalid product id';
      }
    },
    error => {
      console.log(error.status);
      this.submitted = false;
      if(error.status == 403) {
        this.errorDiagnostic = 'Please login as admin to create or update products';
      } else {
        this.errorDiagnostic = 'Error occured while loading product. Please try again later.';
      }
    });
  }
  
  loadDropDowns() {
    this.productService.getProductTypes().subscribe(data => {
    console.log(data.data);
    if(data.data != null) {
     this.product.type = data.data.sort();
     this.product.metalType = ["Silver", "Alloy", "Afghan alloy", "Antique silver"];
    }
 },
error => {
  console.log(error.status);
});  

}

updateProduct() {

}

}
