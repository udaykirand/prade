import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
  UserService,
  AuthService,
  ProductService
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
  successMessage: string;
  product:{};
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.product = {
      name: "test",
      type:["Bangle", "Earrings", "FromType"]
    }
    if(!this.userService.currentUser) {
      this.router.navigate(['/login']);
    }
    this.form = this.formBuilder.group({
      productname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      type: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
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

    this.productService.createProduct(this.form.value)
    .subscribe(data => {
      console.log(data.data);
      this.successMessage = 'Product created successfully. Product Id: '+data.data;
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


}
